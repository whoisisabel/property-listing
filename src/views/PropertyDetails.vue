<template>
  <div>
    <div v-if="propertyStore.loading" class="flex flex-col justify-center items-center h-96">
      <div class="loader"></div>
      <p class="mt-4">Fetching property details . . .</p>
    </div>

    <div v-if="error" class="text-red-500 bg-red-100 p-3 rounded-md">{{ error }}</div>
    <div v-if="property">
      <router-link to="/" class="text-black mb-4 block">← Back to Listings</router-link>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 fade-in">
        <div>
          <img
            :src="property.coverPhoto?.url || placeholderImage"
            alt="Property Image"
            class="w-full object-cover shadow-lg"
          />
        </div>
        <div class="p-4">
          <h1 class="text-2xl font-semibold mb-2">{{ property.title }}</h1>
          <p class="text-xl font-bold text-black mb-4">${{ property.price }}</p>
          <div class="grid grid-cols-2 gap-4 text-black">
            <p class="flex items-center">
              <i class="fas fa-map-marker-alt mr-2"></i>
              {{ property.location[3].name }}, {{ property.location[0].name }}
            </p>
            <p class="flex items-center">
              <i class="fas fa-home mr-2"></i>
              {{ property.category[1].name }}
            </p>
            <p class="flex items-center">
              <i class="fas fa-bed mr-2"></i>
              {{ property.rooms }} Bedrooms
            </p>
            <p class="flex items-center">
              <i class="fas fa-bath mr-2"></i>
              {{ property.baths }} Bathrooms
            </p>
            <p class="flex items-center">
              <i class="fas fa-building mr-2"></i>
              {{ property.agency.name }}
            </p>
            <p class="flex items-center">
              <i class="fas fa-phone mr-2"></i>
              {{ property.phoneNumber.mobile }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import { usePropertyStore } from "../stores/usePropertyStore";
import { useRoute } from "vue-router";

const propertyStore = usePropertyStore();
const route = useRoute();
const placeholderImage = "https://via.placeholder.com/300";

onMounted(async () => {
  await propertyStore.fetchProperties();
});

const error = computed(() => propertyStore.error);

const property = computed(() => {
  let loadedProperties = propertyStore.properties || [];
  return loadedProperties.find((p) => p.id == route.params.id);
});
</script>
