'use strict'
/* global describe, it */
const assert = require('assert')
const supertest = require('supertest')

describe('Public DefaultController', () => {
  let request, publicUser

  before((done) => {
    request = supertest('http://localhost:3000')
    publicUser = supertest.agent(global.app.spools.express.server)

    done()
  })

  it('should exist', () => {
    assert(global.app.api.controllers['ViewController'])
  })

  it('should get info page', (done) => {
    publicUser
      .get('/api/v1/default/info')
      .expect(200)
      .end((err, res) => {
        assert.ok(res.body.app)
        assert.ok(res.body.node)
        assert.ok(res.body.libs)
        assert.ok(res.body.spools)
        done(err)
      })
  })
})
