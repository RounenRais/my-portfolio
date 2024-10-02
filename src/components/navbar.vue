<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<nav :class=themeRenk.navbar class="navBar">
        <RouterLink :class="themeRenk.navbarYazi" class="navLink " to="/">{{ $t('navHome') }}</RouterLink>
        <RouterLink :class="themeRenk.navbarYazi" class="navLink" to="/about">{{ $t('navAbout') }}</RouterLink>
            <div>
              
              <div class="languageButton">
                <label class="switch">
                    <input type="checkbox" v-model="isEnglish" @change="toggleLanguage" />
                    <span class="slider round"></span>
                  </label>
                  

                  <span class="languageText">{{ isEnglish ? 'English' : 'Türkçe' }}</span>
  </div></div>
  <div class="theme">  <button @click="changeTheme" class="switchTheme">{{themeText}}</button></div>

        </nav>
</template>
<script>
export default {
  data() {
    return {
      isEnglish: this.$i18n.locale === 'en' ,
      sayac:0,
      themeText:'Dark Theme',
      themeRenk:{
        navbar:'navBarRenk1',
        navbarYazi:'navYazi1'
      }// Mevcut dilin İngilizce olup olmadığını kontrol et
    };
  },
  methods: {
    toggleLanguage() {
      // Dili değiştir
      this.$i18n.locale = this.isEnglish ? 'en' : 'tr';
    },
    changeTheme(){
     

          if(this.sayac==0){
            this.themeRenk.navbar='navBarRenk2'
            this.themeRenk.navbarYazi='navYazi2'
            this.themeText='White Theme'
            this.sayac=1
          }
          else if(this.sayac==1){
            this.themeRenk.navbar='navBarRenk1'
            this.themeRenk.navbarYazi='navYazi1'
            this.themeText='Dark Theme'
            this.sayac=0

          }

    }
  }
};
</script>
