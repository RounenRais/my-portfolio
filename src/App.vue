<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/navbar.vue'
</script>

<template >

    <div class="wrapper">
    <NavBar></NavBar>  
    

      <RouterView />
    </div>
  

</template>

