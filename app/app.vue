<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'fr'
  }
})

const { navbar, footer } = useAppConfig()

definePageMeta({ colorMode: 'light' })

// const title = 'Nuxt Starter Template'
// const description = 'Nuxt UI Pro is a collection of premium Vue components built on top of Nuxt UI to create beautiful & responsive Nuxt applications in minutes.'

// useSeoMeta({
//   title,
//   description,
//   ogTitle: title,
//   ogDescription: description,
//   ogImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3VpLXByby1zdGFydGVyLm51eHQuZGV2IiwiaWF0IjoxNzM5NDYzMzk4fQ.XLzPkSW6nRbPW07QO1RkMwz_RAPA4KfeyrWrK3li9YI.jpg?theme=light',
//   twitterImage: 'https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL3VpLXByby1zdGFydGVyLm51eHQuZGV2IiwiaWF0IjoxNzM5NDYzMzk4fQ.XLzPkSW6nRbPW07QO1RkMwz_RAPA4KfeyrWrK3li9YI.jpg?theme=light',
//   twitterCard: 'summary_large_image'
// })
</script>

<template>
  <UApp>
    <UHeader
      class="bg-primary-500 text-white border-b-0"
      :ui="{
        toggle: 'text-white/80 hover:text-white hover:bg-transparent active:bg-transparent',
        content: 'bg-primary',
        header: 'border-b-0'
      }"
    >
      <template #left>
        <NuxtLink to="/">

          <img
            :src="navbar.logo"
            class="h-12"
          >
        </NuxtLink>
      </template>
      <template #default>
        <UNavigationMenu
          :ui="{
            linkLabel: 'text-white/80 hover:text-white'
          }"
          variant="link"
          :items="navbar.links"
          orientation="horizontal"
        />
      </template>
      <template #body>
        <UNavigationMenu
          :items="navbar.links"
          orientation="vertical"
          :ui="{
            linkLabel: 'text-white/80 hover:text-white group-data-[active]:!text-primary'
          }"
        />
      </template>

      <template #right>
        <UColorModeButton/>
        <UButton
          color="secondary"
          size="lg"
          label="Je commande"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter class="!bg-primary">
      <template #top>
        <UContainer class="dark">
          <UFooterColumns
            :columns="footer.links"
            :ui="{
              linkLabel: 'text-white/80 hover:text-white',
              label: 'text-white text-lg'
            }"
          >
            <template #left>
              <img
                :src="navbar.logo"
                class="h-24"
              >
            </template>
          </UFooterColumns>
        </UContainer>
      </template>
    </UFooter>
  </UApp>
</template>
