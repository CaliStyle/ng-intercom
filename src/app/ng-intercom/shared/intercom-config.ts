export class IntercomConfig {
  delayLoad = false
  appId?: string
  updateOnRouterChange?: boolean

  constructor()
  constructor(appId: string, updateOnRouterChange?: boolean)
  constructor(...params: any[]) {
    switch (params.length) {
      case 0:
        this.delayLoad = true
        break

      case 1:
        this.appId = params[0]
        break

      case 2:
        this.appId = params[0];
        this.updateOnRouterChange = Boolean(params[1])
        break
    }
  }
}
