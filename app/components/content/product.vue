<template>
  <div
    v-if="productData"
    class="rounded(--ui-radius) overflow-hidden bg-white"
  >
    <img
      class="object-cover mb-6"
      :src="productData?.image"
      :alt="productData?.name"
    >
    <p class="font-bold text-lg mb-4">
      {{ productData?.name }}
    </p>
    <p class="">
      Apport calorique
    </p>
    <p class="">
      {{ Intl.NumberFormat('fr-FR', { style: 'unit', unit: 'kilocalorie' }).format(Number(productData?.apport_calorique ?? 0)) }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: string
}>()

const { data: productData } = await useAsyncData(() => queryCollection('products').where('slug', '=', props.product).first())
</script>
