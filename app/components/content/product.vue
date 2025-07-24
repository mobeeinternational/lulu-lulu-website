<template>
  <div
    v-if="productData"
    class="rounded-(--ui-radius) overflow-hidden bg-white"
  >
    <img
      class="object-cover"
      :src="productData?.image"
      :alt="productData?.name"
    >
    <div class="p-4">
      <p class="font-bold text-lg mb-4">
        {{ productData?.name }}
      </p>
      <p class="text-sm md:text-base">
        Apport calorique
      </p>
      <p class="text-sm md:text-base">
        {{ (Number(productData?.apport_calorique ?? 0)?.toLocaleString('fr-FR')) }} kcal
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  product: {
    type: String
  }
})

const { data: productData } = await useAsyncData(`product-${props.product}`, () => queryCollection('products').where('stem', '=', 'products/' + props.product).first())
</script>
