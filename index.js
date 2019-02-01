const path = require('path')
const express = require('express');

const app = express();

app.get('/api/mapinfo', (req, res) => {
  const rooms = [{
    id: 'sale',
    detected: 'Beacon 1'
  }, {
    id: 'storage',
    detected: 'Beacon 1'
  }, {
    id: 'meeting1',
    detected: 'Beacon 1'
  }, {
    id: 'kitchen',
    detected: 'Beacon 1'
  }, {
    id: 'toilet',
    detected: 'Beacon 1'
  }, {
    id: 'project',
    detected: 'Beacon 1'
  }, {
    id: 'common',
    detected: 'Beacon 1'
  }, {
    id: 'meeting2',
    detected: 'Beacon 1'
  }, {
    id: 'meeting3',
    detected: 'Beacon 1'
  }];
  const randomIndex = Math.floor((Math.random() * rooms.length) + 1) - 1;
  const data = {
    activeRoom: rooms[randomIndex]
  };
  res.send(data);
});

app.listen(8081, () => console.log('Server listening on port 8081!'));