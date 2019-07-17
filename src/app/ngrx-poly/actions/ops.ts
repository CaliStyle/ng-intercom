export enum Op {
  FIND_ALL = 'find-all',
  FIND_ALL_SUCCESS = 'find-all-success',
  FIND_ALL_FAILURE = 'find-all-failure',

  SEARCH = 'search',
  SEARCH_SUCCESS = 'search-success',
  SEARCH_FAILURE = 'search-failure',

  FIND_ONE = 'find-one',
  FIND_ONE_SUCCESS = 'find-one-success',
  FIND_ONE_FAILURE = 'find-one-failure',

  UPDATE = 'update',
  UPDATE_SUCCESS = 'update-success',
  UPDATE_FAILURE = 'update-failure',

  CREATE = 'create',
  CREATE_SUCCESS = 'create-success',
  CREATE_FAILURE = 'create-failure',

  DELETE = 'delete',
  DELETE_SUCCESS = 'delete-success',
  DELETE_FAILURE = 'delete-failure',

  SELECT = 'select',
  DESELECT = 'deselect',
}
