import request from './index'

export function getAllTags() {
  return request({
    url: '/tags',
    method: 'get',
  })
}