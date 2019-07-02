import request from '@/request'


export function getArticles(query, page) {
  return request({ // 获取文章
    url: '/articles',
    method: 'get',
    params: {
      pageNumber: page.pageNumber,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.month,
      tagId: query.tagId,
      categoryId: query.categoryId
    }
  })
}

export function getHotArtices() {
  return request({ // 获取热门文章
    url: '/articles/hot',
    method: 'get'
  })
}

export function getNewArtices() {
  return request({ // 获取最新文章
    url: '/articles/new',
    method: 'get'
  })
}

export function viewArticle(id) {
  return request({ // 查看文章详情
    url: `/articles/view/${id}`,
    method: 'get'
  })
}

export function getArticlesByCategory(id) {
  return request({ // 根据分类获取文章
    url: `/articles/category/${id}`,
    method: 'get'
  })
}

export function getArticlesByTag(id) {
  return request({ // 根据标签获取文章
    url: `/articles/tag/${id}`,
    method: 'get'
  })
}


export function publishArticle(article) {
  return request({ // 发表文章
    url: '/articles/publish',
    method: 'post',
    data: article
  })
}

export function listArchives() {
  return request({ // 
    url: '/articles/listArchives',
    method: 'get'
  })
}

export function getArticleById(id) {
  return request({
    url: `/articles/${id}`,
    method: 'get'
  })
}
