const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://agenda-contatos-react.vercel.app/',
    specPattern: 'cypress/integration/**/*.spec.js',
    supportFile: false, 

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/relatorios',
      overwrite: true,
      html: true,
      json: false
    },
  },
});
