export default {
    ssr: false,
    env: {
      BASE_URL: process.env.BASE_URL,
  },
    // Global page headers: https://go.nuxtjs.dev/config-head




    head: {
        title: 'Qr-Code',
        htmlAttrs: {
            lang: 'en'
        },
        script: [{
           src: 'https://static.line-scdn.net/liff/edge/versions/2.7.0/sdk.js'
        }],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ["~/plugins/vee-validate",
        '~plugins/vue-clickaway.js',
        '~plugins/vue-slide-up-down.js',
        '~plugins/axios.js',
        '~plugins/vue-select.js',
        '~plugins/vue-vuesax.js'
    ],


    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/moment',
    ],
    moment: {
        timezone: true,
        defaultTimezone: 'Asia/Bangkok',
        defaultLocale: 'th',
        locales: ['th'],
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    router: {
        base: '/qr/'
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      baseUrl: process.env.BASE_URL
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ['vee-validate'],
    }
}
