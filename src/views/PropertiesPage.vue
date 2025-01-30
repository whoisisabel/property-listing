<template>
  <div>
    <header
      v-if="!propertyStore.loading && !propertyStore.error"
      class="text-black p-6 text-center"
    >
      <h1 class="text-2xl font-bold">Properties for Sale</h1>
      <p class="mt-2 text-l">Find the best properties for your investment.</p>
    </header>
    <main class="p-6">
      <div v-if="propertyStore.loading" class="flex justify-center items-center h-96">
        <span class="loader"></span>
      </div>
      <div v-if="propertyStore.error" class="text-red-500 bg-red-100 p-3 rounded-md">
        {{ propertyStore.error }}
      </div>
      <div v-if="!propertyStore.loading && !propertyStore.error">
        <div class="mb-6">
          <div class="flex items-end justify-end gap-4">
            <div class="flex items-center gap-2">
              <span class="text-gray-700">Sort by:</span>
              <select v-model="sortKey" @change="sortProperties" class="border p-2 pr-4 rounded-md">
                <option value="" disabled>Select sorting option</option>
                <option value="default">Default</option>
                <option value="price">Price</option>
                <option value="location">Location</option>
              </select>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          <router-link
            v-for="property in sortedProperties"
            :key="property.id"
            :to="'/property/' + property.id"
            class="bg-white shadow-lg block hover:bg-gray-100 transition overflow-hidden zoom"
          >
            <img
              :src="property.coverPhoto?.url || placeholderImage"
              alt="Property Image"
              class="w-full h-56 object-cover"
            />

            <div class="p-4">
              <h2 class="text-xl font-semibold">{{ property.title }}</h2>
              <div class="flex flex-row justify-between">
                <p><i class="fas fa-dollar-sign mr-2"></i> {{ formatPrice(property.price) }}</p>
                <p>
                  <i class="fas fa-map-marker-alt mr-2"></i> {{ property.location[3].name }},
                  {{ property.location[0].name }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
import { computed, ref, onMounted } from "vue";
import { usePropertyStore } from "../stores/usePropertyStore";

const propertyStore = usePropertyStore();
const sortKey = ref("");
const placeholderImage = "https://via.placeholder.com/300";

onMounted(async () => {
  await propertyStore.fetchProperties();
});

const sortedProperties = computed(() => {
  let properties = [...propertyStore.properties];

  if (sortKey.value === "price") {
    return properties.sort((a, b) => a.price - b.price);
  } else if (sortKey.value === "location") {
    return properties.sort((a, b) => a.location[3].name.localeCompare(b.location[3].name));
  }

  return properties;
});

const formatPrice = (price) => {
  return `${price.toLocaleString()}`;
};
</script>
