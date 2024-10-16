import './assets/main.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'; // vue-i18n import
import App from './App.vue';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'flag-icon-css/css/flag-icons.min.css';


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone,faGithub,faEnvelope);

const messages = {
  en: {
    hello: "Hello, I'm Yunus Aksu",
    navSkills:'Skills',
    navAbout:'About Me',
    navContact:'Contact',
    navProjects:'Projects',
    aboutS:"I'm a web developer passionate about learn.",
    aboutMe:"I am a university student. I am studying computer engineering",
    aboutMeS:"About Me",
    skillsS:"Skills",
    projectsS:"Projects",
    contactMe:"Contact Me",
    rights:"All rights reserved.",
   
  },
  tr: {
    hello: "Selam, Ben Yunus Aksu",
    navHome:'Anasayfa',
    navAbout:'Hakkımda',
    navSkills:'Yetenekler',
    navProjects:'Projeler',
    navContact:'İletişim',
    portfolio:"",
    aboutS:"Öğrenmeye meraklı bir web geliştiricisiyim.",
    aboutMeS:"Hakkımda",
    aboutMe:"Üniversite öğrencisiyim. Bilgisayar mühendisliği okuyorum",
     skillsS:"Yetenekelr",
     projectsS:"Projeler",
      contactMe:"Bana Ulaş",
      rights:"Tüm hakları saklıdır.",
   





  }
};

const userLang = navigator.language || navigator.userLanguage;
const i18n = createI18n({
  locale: userLang.startsWith('tr') ? 'tr' : 'en', 
  messages,
});

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router);
app.use(i18n); // i18n eklendi
app.mount('#app');
