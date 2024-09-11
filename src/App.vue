<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from '../src/components/navbar.vue'
</script>
<template >
  <NavBar/>

    <div class="wrapper">
      <RouterView />

    </div>
  

</template>


