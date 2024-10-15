
<template>
    <section class="hero">
      <div class="imgPhoto">
        <img class="myPhoto" src="../assets/images.png" alt="">
      </div>
      <h2>Hello, I'm Yunus Aksu</h2>
      <p>I'm a web developer passionate about learn</p>
    </section>
  
    <!-- About Section -->
    <section id="about" class="about">
      <h2>About Me</h2>
      <p>I am a university student. 
        I am studying computer engineering</p>
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
      <h2>Contact Me</h2>
      <p>Email: [your email]</p>
      <p>Phone: [your phone number]</p>
    </section>
  
    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2024 Rais. All rights reserved.</p>
    </footer>
  </template>
  <script>
  export default{
  data(){
  return{
    githubSt:false,
    phoneSt:false,
    projects: [
        { id: 1, name: 'Okurun Köşesi', description: 'Description of project one.' },
        { id: 2, name: 'Project Two', description: 'Description of project two.' },
      ],
  
  };},
  };
  </script>
  