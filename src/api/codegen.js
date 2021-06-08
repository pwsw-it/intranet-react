const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'operationId',
  source: require('./swagger.json'),
  outputDir: './src/api',
// useStaticMethod: true,
})
