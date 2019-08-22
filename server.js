/**
 * homebase http remote driver (v1) for local running purpose
 * 
 * https://developer.rokid.com/docs/rokid-homebase-docs/connect/http-remote-driver.html
 * 
 */
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const ip = require('ip');

const v1 = require('./v1');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/v1/list', v1.list());

app.post('/v1/execute', v1.execute());

app.post('/v1/command', v1.command());


app.listen(3000, () => {
  console.log('Homebase Skill started.')
  console.log('Endpoint: http://' + ip.address() + ':3000')
  console.log('or use: http://localhost:3000')
  console.log('v1:')
  console.log('  Endpoint: http://localhost:3000/v1')
  console.log('  List: http://localhost:3000/v1/list/')
  console.log('  Execute: http://localhost:3000/v1/execute/')
  console.log('自定义接入配置:')
  console.log(`  远程驱动地址: http://${ip.address()}:3000/v1`)
  console.log('  userAuth.userId    填写 hass url')
  console.log('  userAuth.userToken 填写 legacy api password 或 long live token')
})
