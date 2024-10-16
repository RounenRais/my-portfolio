
<template>
    <section class="hero">
      <div class="imgPhoto">
        <img class="myPhoto" src="../assets/images.png" alt="">
      </div>
      <h2>{{ $t('hello') }}</h2>
      <p>{{ $t('aboutS') }}</p>
    </section>
  
    <!-- About Section -->
    <section id="about" class="about">
      <h2>{{ $t('aboutMeS') }}</h2>
      <p>{{ $t('aboutMe') }}</p>
    </section>
  
    <!-- Skills Section -->
    <section id="skills" class="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>CSS3 & HTML5</li>
        <!-- Add more skills -->
      </ul>
    </section>
  
    <!-- Projects Section -->
    <section id="projects" class="projects">
      <h2>Projects</h2>
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </section>
  
    <!-- Contact Section -->
    <section id="contact" class="contact">
      <h2>{{ $t('contactMe') }}</h2>
      <p><font-awesome-icon :icon="['fas', 'envelope']" :bounce='mailSt' @mouseover="mailSt=true" @mouseleave="mailSt=false" /> <span  @mouseover="mailSt=true" @mouseleave="mailSt=false">aksu3795@gmail.com</span></p>
      <p> <div class="icon-ct">
        <font-awesome-icon  :icon="['fab', 'github']" :bounce='githubSt' @mouseover="githubSt=true" @mouseleave="githubSt=false" />
        <a class="contentText" @mouseover="githubSt=true" @mouseleave="githubSt=false" href="https://github.com/RounenRais">RounenRais</a>
      </div></p>
      <p>
    <div class="icon-ct">
      <font-awesome-icon :icon="['fas', 'phone']" :bounce='phoneSt'  @mouseover="phoneSt=true" @mouseleave="phoneSt=false"  ></font-awesome-icon>
      <a  @mouseover="phoneSt=true" @mouseleave="phoneSt=false" >0556 667 93 41</a>
    </div>  </p>    
    </section>
  
    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Rais. {{ $t('rights') }} </p>
    </footer>
  </template>
  <script>
import { useI18n } from 'vue-i18n';

  export default{
  data(){
  return{
    githubSt:false,
    phoneSt:false,
    mailSt:false,
    projects: [
        { id: 1, name: 'Okurun Köşesi', description: 'Books and mini games about literature.' },
        { id: 2, name: 'Account Base', description: 'An app to make accounting  work easier ' },
      ],
    
  };},
  };
  </script>
  