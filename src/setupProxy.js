const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api', proxy({ target: 'http://localhost:4090' }));
    app.use('/auth', proxy({ target: 'http://localhost:4090' }));
};