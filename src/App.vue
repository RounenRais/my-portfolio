<script setup>
import { RouterLink, RouterView } from 'vue-router'

import NavBar from '../src/components/navbar.vue'
</script>
<template>
  <div class="app">
    <!-- Header -->
    <header class="app-header">
      <nav>
        <h1>My Portfolio</h1>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <h2>Hello, I'm [Your Name]</h2>
      <p>I'm a [Your Profession] passionate about [Your Passion]</p>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
      <h2>About Me</h2>
      <p>Short introduction about yourself.</p>
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
      <p>&copy; 2024 [Your Name]. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, name: 'Project One', description: 'Description of project one.' },
        { id: 2, name: 'Project Two', description: 'Description of project two.' },
      ],
    };
  },
};
</script>

<style scoped>
/* Genel stil */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-header {
  background-color: #4C5533; /* Haki tonunda */
  color: white;
  padding: 1rem;
  text-align: center;
}

nav ul {
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  padding: 0;
}

nav a {
  color: white;
  text-decoration: none;
}

.hero {
  text-align: center;
  padding: 3rem;
  background-color: #e0e4cc;
}

.about, .skills, .projects, .contact {
  padding: 2rem;
  background-color: #fefefe;
}

.skills ul {
  display: flex;
  justify-content: space-around;
}

.project-card {
  border: 1px solid #4C5533;
  padding: 1rem;
  margin: 1rem 0;
}

.footer {
  text-align: center;
  padding: 1rem;
  background-color: #4C5533;
  color: white;
}

/* Responsiveness */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }

  .skills ul {
    flex-direction: column;
  }
}
</style>