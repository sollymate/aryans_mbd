<template>
  <div>
    <AppNavbar />
    <HeroSections />
    <ContentSections />
    <FooterSections />
  </div>
</template>

<script setup>
  import AppNavbar from '~/components/AppNavbar.vue'
  import HeroSections from '~/components/HeroSections.vue'
  import ContentSections from '~/components/ContentSections.vue'
  import FooterSections from '~/components/FooterSections.vue'

  // SEO Configuration with structured data
  useHead({
    title: "Aryans International School - Where Dreams Take Flight",
    meta: [
      {
        name: "description",
        content:
        "Discover Aryans International School, Moradabad's premier CBSE-affiliated educational institution. World-class facilities, expert faculty, and proven academic excellence. Admissions open for 2025-26.",
      },
      {
        name: "keywords",
        content:
        "Aryans International School, CBSE School Moradabad, Best School Moradabad, Quality Education, Academic Excellence, Admissions 2025-26, World Class Facilities",
      },
      {
        property: "og:title",
        content: "Aryans International School - Premier CBSE School in Moradabad",
      },
      {
        property: "og:description",
        content:
        "Premier CBSE-affiliated school with world-class education and modern facilities in Moradabad",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Aryans International School - Where Dreams Take Flight",
      },
      {
        name: "twitter:description",
        content:
        "Premier CBSE-affiliated school offering world-class education in Moradabad",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Aryans International School",
          alternateName: "Aryans School Moradabad",
          description:
          "Premier CBSE-affiliated school offering world-class education and modern facilities in Moradabad",
          url: "https://aryansschool.netlify.app",
          logo: "https://aryansschool.netlify.app/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Budhi Vihar, Khushalpur Road",
            addressLocality: "Moradabad",
            addressRegion: "Uttar Pradesh",
            postalCode: "244001",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-8941001618",
            contactType: "Admissions",
            email: "admin@aryansinternationalschool.com",
          },
          sameAs: [
            "https://facebook.com/aryansschool",
            "https://instagram.com/aryansschool",
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Educational Programs",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Pre-Primary Education",
                  description: "Early childhood education for ages 3-5",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Primary Education",
                  description: "CBSE curriculum for grades 1-5",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Secondary Education",
                  description: "CBSE curriculum for grades 6-12",
                },
              },
            ],
          },
        }),
      },
    ],
  });

  // Enhanced lifecycle for SEO
  onMounted(() => {
    // Add page view tracking
    if (typeof gtag !== "undefined") {
      gtag("config", "GA_MEASUREMENT_ID", {
        page_title: "Aryans International School - Home",
        page_location: window.location.href,
      });
    }

    // Initialize global animations and effects (parallax removed)
    initializeGlobalAnimations();
  });

  // Global animation initialization (parallax effect removed)
  function initializeGlobalAnimations() {
    // Scroll Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // Initial animations for elements in viewport
    setTimeout(() => {
      document.querySelectorAll(".fade-in").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add("visible");
        }
      });
    }, 300);
  }
</script>