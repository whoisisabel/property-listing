import { defineStore } from "pinia";
import { ref } from "vue";
import { fetchData } from "../utils/api";

export const usePropertyStore = defineStore("propertyStore", () => {
  const properties = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const isFetched = ref(false);

  const fetchProperties = async () => {
    if (isFetched.value) return;
    try {
      properties.value = await fetchData();
      isFetched.value = true;
    } catch (error) {
      error.value = "Oops! Failed to load properties. Please try again later.";
    } finally {
      loading.value = false;
    }
  };

  return { properties, loading, error, fetchProperties };
});
