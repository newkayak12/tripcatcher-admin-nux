export default {
  // disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  mode:'universial',
  ssr: true,
  server:{
    port:9091,
    host:'0.0.0.0'
  },
  // global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tripcatcher-admin',
    htmlattrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // global css: https://go.nuxtjs.dev/config-css
  css: [
      '~/assets/css/Main.css',
      '~/assets/css/reset.css'
  ],
  // plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/service.js', ssr:true},
    {src:'~/plugins/plugins.js',  ssr:false}
  ],

  // auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildmodules: [
  ],

  // modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // vueToast
    "vue-toastification/nuxt",
    // fontAwesome
    'nuxt-fontawesome',
  ],


  // axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseurl: '/',
    proxy:true,
    init(axios, ctx){
      axios.defaults.xsrfheadername = 'x-csrf-token'
      axios.defaults.headers = {csrf:'jwt_admin_token'}
    }
  },
  proxy:{
    '/admin/':'http://192.168.0.15:9092',
    '/vendor/':'http://192.168.0.15:9092',
    '/api/':'http://192.168.0.15:9092'
  },

  // build configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor:[
      '~/plugins/plugins.js',
      '~/plugins/service.js'
    ]
  }

}
