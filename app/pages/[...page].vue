<template>
  <div>
    <ContentRenderer :value="data" />
  </div>
</template>

<script setup lang="ts">
import { ContentRenderer } from '#components'

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
