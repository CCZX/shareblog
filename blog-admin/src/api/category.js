import request from './index'

export function getAllCategorys() {
  return request({ // 获取所有分类
    url: '/categorys',
    method: 'get',
  })
}