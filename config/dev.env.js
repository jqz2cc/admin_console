'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  module:{
    rules:[
      {
        test:/\.less/,
        use:['style-loader','css-loader','less-loader']
      }
    ]
  }
})
