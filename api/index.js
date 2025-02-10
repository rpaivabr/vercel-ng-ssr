// export default import('../dist/app-ssr/server/server.mjs').then(module => module.app());
const server = import('../dist/app-ssr/server/server.mjs');

module.exports = server.app();