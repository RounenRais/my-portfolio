<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header class="app-header">
    <nav>
      <h1>My Portfolio</h1>
      <ul class="navButtons">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          
        <div class="languageButton">
          <label class="switch">
              <input type="checkbox" v-model="isEnglish" @change="toggleLanguage" />
              <span class="slider round"></span>

            </label>
            

            <span class="languageIcon" :class=" isEnglish ? 'flag-icon flag-icon-gb' : 'flag-icon flag-icon-tr' "></span>
</div>
        </li>
      </ul>
      <div>
      </div>
    </nav>
  </header>

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
