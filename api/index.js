// export default import('../dist/app-ssr/server/server.mjs').then(module => module.app());
const server = require('../dist/app-ssr/server/main');

module.exports = server.app();