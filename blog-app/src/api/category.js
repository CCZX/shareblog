import request from '@/request'

export function getAllCategorys() {
  return request({ // 获取所有分类
    url: '/categorys',
    method: 'get',
  })
}

export function getAllCategorysDetail() {
  return request({ // 获取分类详情
    url: '/categorys/detail',
    method: 'get',
  })
}

export function getCategory(id) {
  return request({ // 
    url: `/categorys/${id}`,
    method: 'get',
  })
}

export function getCategoryDetail(id) {
  return request({
    url: `/categorys/detail/${id}`,
    method: 'get',
  })
}
