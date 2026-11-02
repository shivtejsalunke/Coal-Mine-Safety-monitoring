module.exports = {
  uiPort: process.env.PORT || 1880,
  mqttReconnectMode: 'reconnect',
  adminAuth: null,
  userDir: __dirname + '/'
};
