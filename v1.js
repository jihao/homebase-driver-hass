const v1 = module.exports = {};
var driver = require('./index')();

v1.command =function(){
  return (req, res) => {
    console.log('COMMAND');
    console.log(JSON.stringify(req.body));
    console.log('------');

    command = 'login';
    return driver.command(command, req.body.userAuth)
  }
}

v1.list = function(){
  return (req, res) => {
    console.log('设备列表');
    console.log(JSON.stringify(req.body));
    console.log('------');
    // const devices = [];
    // // 我们创建 10 个灯泡
    // for(let i = 0; i < 10; i++) {
    //   devices.push({
    //     name: 'YE' + i,
    //     roomName: '客厅',
    //     deviceId: 'abc' + i,
    //     deviceInfo: { foo: 'bar', id: i},
    //     type: 'light',
    //     actions: {
    //       switch: ['on', 'off'],
    //       color: ['num']
    //     },
    //     state: {
    //       swith: 'on',
    //       color: 0xff0000
    //     }
    //   });
    // }

    driver.list(req.body.userAuth).then(function(result){
      console.log(result);
      res.send({
        status: 0,
        // data: devices,
        data: result,
      });
    });
    
    
  }
}

v1.execute = () => {
  return (req, res) => {
    console.log('执行控制');
    console.log(JSON.stringify(req.body));
    console.log('------');

    driver.execute(req.body.device, req.body.action).then(function(result){
      console.log(result);
      res.send({
        status: 0,
        // data: devices,
        data: result,
      });
    });
  }
}