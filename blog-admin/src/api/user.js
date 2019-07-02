import request from './index'

export function getAllUsers() {
  return request({
    url: '/users',
    method: 'get',
  })
}
