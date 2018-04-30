import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import dotenv from 'dotenv'

import webpackDevConfig from './config/webpack.config.js'

dotenv.load()

const server = express()
const port = process.env.PORT

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackDevConfig)
  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackDevConfig.output.publicPath,
    })
  )
  server.use(webpackHotMiddleware(compiler))
  server.listen(port, () => console.log(`Server started on port ${port}`))
} else {
  console.error('Something goes wrong!')
}
