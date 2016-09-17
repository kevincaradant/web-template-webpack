// require all `project/test/src/components/**/index.js`
const testsContext = require.context('./lib/', true, /.*.spec.js$/);

testsContext.keys().forEach(testsContext);
