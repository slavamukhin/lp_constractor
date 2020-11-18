// @ts-ignore
const express = require('express')
const next = require('next')
const bodyParser = require("body-parser");

// @ts-ignore
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
import { main } from './server/nodemailer'
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.prepare().then(() => {
  const server = express()

  // @ts-ignore
  server.post('/', urlencodedParser, (req, res) => {
    console.log('body: ', req.body)
    const { name, phone } = req.body
    main(name, phone).catch(console.error)
    return handle(req, res)
  })

  // @ts-ignore
  server.all('*', (req, res) => {
    console.log('All!!!')
    return handle(req, res)
  })

  // @ts-ignore
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})