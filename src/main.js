import './assets/main.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'; // vue-i18n import
import App from './App.vue';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'flag-icon-css/css/flag-icons.min.css';


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone,faGithub);

const messages = {
  en: {
    welcome: 'Welcome to my portfolio',
    navHome:'Home',
    navAbout:'About Me',
    about:'This is an about page',


  },
  tr: {
    welcome: 'Portfolyoma hoşgeldiniz',
    navHome:'Anasayfa',
    navAbout:'Hakkımda',
    about:'Burası Hakkımda Sayfası',



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
