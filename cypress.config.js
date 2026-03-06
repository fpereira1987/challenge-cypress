// Importa la función de configuración de Cypress
const { defineConfig } = require("cypress");

// Exporta la configuración principal de Cypress
module.exports = defineConfig({

  // Resolución del viewport usada durante los tests
  viewportWidth: 1280,
  viewportHeight: 800,

  // Tiempo máximo de espera para comandos de Cypress
  defaultCommandTimeout: 8000,

  // Desactiva la grabación de video en las ejecuciones
  video: false,

  // Permite interactuar con elementos dentro de Shadow DOM
  includeShadowDom: true,

  // Configuración de reintentos en caso de fallos
  retries: {
    runMode: 2,   // Reintenta hasta 2 veces en ejecución por CLI
    openMode: 0,  // No reintenta en modo interactivo
  },

  e2e: {

    // URL base utilizada en los tests
    baseUrl: "https://demo4.dexmanager.com",

    // Hook para configurar eventos del lado de Node
    setupNodeEvents(on, config) {
      return config;
    },
  }

});