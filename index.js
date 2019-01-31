const path = require('path')
const express = require('express');

const app = express();

app.get('/api/mapinfo', (req, res) => {
  const positions = [{
    lat: 63.43331840936477,
    lng: 10.403631541901916
  }, {
    lat: 63.433311485041855,
    lng: 10.403254642923883
  }, {
    lat: 63.43328724990229,
    lng: 10.403397371035766
  }, {
    lat: 63.43334805409731,
    lng: 10.403675569887668
  }];
  const positionIndex = Math.floor((Math.random() * positions.length) + 1) - 1;
  const data = [{
    deviceId: '1',
    position: positions[positionIndex],
    alarmTriggered: positionIndex % 2 === 0 ? true : false,
    timestamp: Date.now(),
    accuracy: 0
  }];
  res.send(data);
});

app.listen(8081, () => console.log('Server listening on port 8081!'));