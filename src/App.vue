<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-black text-white p-5">
      <div class="container mx-auto flex items-center">
        <img :src="logoImage" alt="Property Finder Logo" class="h-10 m-2" />
        <h1 class="text-3xl">
          <router-link to="/" class="text-white">Property Finder</router-link>
        </h1>
      </div>
    </nav>
    <main class="container mx-auto p-4 flex-grow">
      <router-view />
    </main>
    <footer class="flex flex-row bg-black text-white justify-center p-4 mt-8">
      <div>
        <p>&copy; Copyright</p>
      </div>
      <div class="ml-2">
        <a href="https://isabelmgendi.netlify.app/" target="_blank">Lebasi</a>
      </div>
    </footer>
  </div>
</template>

<script>
import logoImage from "@/assets/logo.png";

export default {
  name: "App",
  data() {
    return {
      logoImage,
    };
  },
};
</script>
