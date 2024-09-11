<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<nav class='navBar'>
        <RouterLink to="/">{{ $t('home') }}</RouterLink>
        <RouterLink to="/about">{{ $t('about') }}</RouterLink>
            <div>

    <button class='langButton' @click="changeLanguage('en')">EN</button>
    <button class='langButton' @click="changeLanguage('tr')">TR</button>
  </div>
        </nav>
</template>
<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang; // Change Language
    }
  }
}
</script>
