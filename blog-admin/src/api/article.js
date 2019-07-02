import request from './index'

export function getArticles() {
  return request({ // 获取文章
    url: '/articles',
    method: 'get',
    params: {
      pageNumber: 1,
      pageSize: 10,
      name: 'a.createDate',
      sort: 'desc',
    }
  })
}
