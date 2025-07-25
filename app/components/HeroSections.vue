<template>
  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">IGNITING MINDS, INSPIRING FUTURES</h1>
        <p class="hero-subtitle">
          The Premier Destination for World-Class Education in Moradabad
        </p>
        <p class="hero-tagline">
          Empowering tomorrow's global citizens through academic excellence,
          innovation, and timeless values
        </p>
        <a href="#contact" class="hero-cta"> ADMISSIONS OPEN 2025-26 ✨ </a>
      </div>
      <div class="hero-quote">
        "Education is the most powerful weapon which you can use to change the
        world." - <strong>Nelson Mandela</strong>
      </div>
    </div>
  </section>

  <!-- Vision & Mission -->
  <section class="section about-section" id="about">
    <div class="container">
      <h2 class="section-title fade-in">BUILDING TOMORROW'S CHANGEMAKERS</h2>
      <p class="section-subtitle fade-in">
        Shaping Leaders Through Excellence and Values
      </p>

      <div class="vision-mission fade-in">
        <div class="vision-card">
          <h3 class="card-title">OUR VISION</h3>
          <p class="card-content">
            Creating world citizens who are dynamic, caring, and equipped to
            meet global challenges while preserving traditional values that
            define true character.
          </p>
        </div>
        <div class="mission-card">
          <h3 class="card-title">OUR MISSION</h3>
          <p class="card-content">
            To nurture intellectual curiosity, personal accountability, and an
            unwavering love for learning through our comprehensive educational
            approach and world-class facilities.
          </p>
        </div>
      </div>

      <div class="quote fade-in">
        "The function of education is to teach one to think intensively and to
        think critically. Intelligence plus character - that is the goal of
        true education."
        <div class="quote-author">- Martin Luther King Jr.</div>
      </div>
    </div>
  </section>
</template>

<script setup>
  onMounted(() => {
    initializeParallaxEffects()
    initializeHeroAnimations()
  })

  // Parallax effects for hero section
  function initializeParallaxEffects() {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".hero");
      if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    });
  }

  // Hero section specific animations
  function initializeHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 500);
    }
  }
</script>