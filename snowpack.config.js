const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://localhost:3000' });


/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  routes: [
    {
      src: '/api/.*',
      dest: (req, res) => proxy.web(req, res),
    },
  ],
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    /* ... */
    '@snowpack/plugin-svelte',
  ]
};
