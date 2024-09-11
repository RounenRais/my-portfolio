import './assets/main.css';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'; // vue-i18n import
import App from './App.vue';
import router from './router';

const messages = {
  en: {
    welcome: 'Welcome to my portfolio',
    home:'Home',
    about:'About Me'
  },
  tr: {
    welcome: 'Portfolyoma hoşgeldiniz',
    home:'Anasayfa',
    about:'Hakkımda'

  }
};

const userLang = navigator.language || navigator.userLanguage;
const i18n = createI18n({
  locale: userLang.startsWith('tr') ? 'tr' : 'en', 
  messages,
});

const app = createApp(App);

app.use(router);
app.use(i18n); // i18n eklendi

app.mount('#app');
