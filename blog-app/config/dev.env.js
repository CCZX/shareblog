'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://192.168.137.55:8888/"' // 192.168.137.133
  // BASE_API: '"http://localhost:8888/"' 
})
