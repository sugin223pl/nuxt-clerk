import { defineNuxtPlugin } from '#app'
import { clerkPlugin } from 'vue-clerk/plugin'
import NuxtClerkModule from '#nuxt-clerk'

export default defineNuxtPlugin(async (nuxtApp) => {
  const { public: { publishableKey } } = useRuntimeConfig() as any;

  nuxtApp.vueApp.use(clerkPlugin, {
    publishableKey,
    options: NuxtClerkModule.vueClerkOptions,
  });
});
