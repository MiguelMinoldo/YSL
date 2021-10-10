require('win-ca');

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'YSL',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300italic,400italic,600italic,700italic,300,600,700,800' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
  ],

  // Apollo config
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: 'https://refapp-basesolution.cm/api/content?sc_apikey={3D139ECF-2AB4-4A5B-848F-35DF50BBF143}',
      },
      layoutService: {
        httpEndpoint: 'https://refapp-basesolution.cm/sitecore/api/graph/edge/ui?sc_apikey={3D139ECF-2AB4-4A5B-848F-35DF50BBF143}',
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
