<template>
  <div>
    <UPageHero v-bind="data?.hero" />
    <UPageSection
      v-for="section in data?.sections"
      :key="section.title"
      v-bind="section"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(() => queryCollection('pages').path(route.path).first())

if (!data?.value) {
  throw createError({
    statusCode: 404,
    message: 'Page inexistante'
  })
}

useSeoMeta({
  title: data?.value?.seo?.title,
  description: data?.value?.seo?.description,
  ogTitle: data?.value?.seo?.title,
  ogDescription: data?.value?.seo?.description,
  twitterTitle: data?.value?.seo?.title,
  twitterDescription: data?.value?.seo?.description
})
</script>
