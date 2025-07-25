export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  // Enable SSR for better SEO
  ssr: true,

  // Netlify deployment with SSR support
  nitro: {
    preset: "netlify",
    // Prerender important pages for faster loading
    prerender: {
      routes: ["/"],
    },
  },

  // SEO Configuration
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Aryans International School | Premier CBSE School in Moradabad",
      meta: [
        {
          name: "description",
          content:
            "Aryans International School, Moradabad - Premier CBSE affiliated school offering world-class education, modern facilities, and holistic development. Admissions open for 2025-26.",
        },
        {
          name: "keywords",
          content:
            "Aryans International School, Moradabad, CBSE School, Best School Moradabad, Admissions 2025, Quality Education, Academic Excellence",
        },
        { name: "author", content: "Aryans International School" },
        { name: "robots", content: "index, follow" },

        // Open Graph for social media
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content:
            "Aryans International School | Premier CBSE School in Moradabad",
        },
        {
          property: "og:description",
          content:
            "Premier CBSE affiliated school in Moradabad offering world-class education and modern facilities. Admissions open for 2025-26.",
        },
        { property: "og:url", content: "https://aryansschool.netlify.app" },
        { property: "og:site_name", content: "Aryans International School" },
        { property: "og:locale", content: "en_IN" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "Aryans International School | Premier CBSE School in Moradabad",
        },
        {
          name: "twitter:description",
          content:
            "Premier CBSE affiliated school offering world-class education and modern facilities.",
        },

        // Additional SEO meta tags
        { name: "geo.region", content: "IN-UP" },
        { name: "geo.placename", content: "Moradabad" },
        { name: "geo.position", content: "28.8386;78.7733" },
        { name: "ICBM", content: "28.8386, 78.7733" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://aryansschool.netlify.app" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
    },
  },

  // Experimental features for better SEO
  experimental: {
    payloadExtraction: false,
  },
});

// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   css: ["~/assets/css/main.css"],
// });

// // // https://nuxt.com/docs/api/configuration/nuxt-config
// // export default defineNuxtConfig({
// //   compatibilityDate: '2025-07-15',
// //   devtools: { enabled: true }
// // })
