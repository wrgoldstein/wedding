const httpProxy = require('http-proxy');
const proxy = httpProxy.createServer({ target: 'http://localhost:3000' });


/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  routes: [
    // These redirects to the home page allow for permalinks
    {
      src: '/info',
      dest: '/'
    },
    {
      src: '/photos',
      dest: '/'
    },
    {
      src: '/registry',
      dest: '/'
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
