export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  auth: {
    redirect: {
      login: "/", // redirect user when not connected
      callback: "/auth/signed-in",
    },
    strategies: {
      auth0: {
        domain: "amdsaad.us.auth0.com",
        clientId: "AxExiXY1zcTbjuF94BNDmXr8nWk4xZMR",
        audience: "https://vercelnuxt-5mc2ygvvp-amdsaad.vercel.app/",
        scope: ["openid", "profile", "email", "offline_access"],
        responseType: "code",
        grantType: "authorization_code",
        codeChallengeMethod: "S256",
      },
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
