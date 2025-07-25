<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-content">
        <div class="logo">ARYANS</div>
        <ul class="nav-links" :class="{ 'nav-open': isMenuOpen }">
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#about" @click="closeMenu">About</a></li>
          <li><a href="#academics" @click="closeMenu">Academics</a></li>
          <li><a href="#infrastructure" @click="closeMenu">Infrastructure</a></li>
          <li><a href="#events" @click="closeMenu">Events</a></li>
        </ul>
        <a href="#contact" class="cta-nav">Admissions Open</a>
        <button class="mobile-menu-toggle" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'

  const isMenuOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  onMounted(() => {
    initializeNavbarEffects()
    initializeSmoothScrolling()
  })

  // Navbar scroll effects
  function initializeNavbarEffects() {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 5px 30px rgba(0,0,0,0.1)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "none";
      }
    });
  }

  // Smooth scrolling for navigation links
  function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }
</script>