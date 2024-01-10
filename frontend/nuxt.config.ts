// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head:{
      link:[
        {rel:"stylesheet", type:"text/css",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800"},
      ],
      script: [
        { tagPosition: 'bodyClose', src: '/assets/sitejs/main.js' },
        { tagPosition: 'bodyClose', src: '/assets/aos/aos.js' },
        { tagPosition: 'bodyClose', src: '/assets/bootstrap/js/bootstrap.bundle.min.js' },
        { tagPosition: 'bodyClose', src: '/assets/glightbox/js/glightbox.min.js' },
        { tagPosition: 'bodyClose', src: '/swiper/swiper-bundle.min.js' },
        { tagPosition: 'bodyClose', src: '/assets/php-email-form/validate.js' },
        { tagPosition: 'bodyClose', src: '/assets/sitejs/sortable.js' },
      ]
    }
  },
  css: [
    '~/assets/sitecss/style.css',
    '~/assets/aos/aos.css',
    '~/assets/bootstrap/css/bootstrap.min.css',
    '~/assets/bootstrap-icons/bootstrap-icons.css',
    '~/assets/glightbox/css/glightbox.min.css',
    '~/assets/swiper/swiper-bundle.min.css',
  ]
})
