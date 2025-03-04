<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const isMobileNavActive = ref(false)
const isMobileView = window.innerWidth <= 768 ? true : false

const toggleMobileNav = () => {
  document.body.classList.toggle('mobile-nav-active')
  isMobileNavActive.value = !isMobileNavActive.value
}
</script>

<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div
      class="container-fluid container-xl position-relative d-flex align-items-center"
    >
      <RouterLink to="/" class="logo d-flex align-items-center me-auto">
        <img src="../assets/images/logo.jpg" alt="" />
        <h1 class="sitename">L.B ANTONIO ÁLAMO</h1>
      </RouterLink>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li>
            <RouterLink to="/">Inicio<br /></RouterLink>
          </li>
          <li><RouterLink to="/about">Sobre nosotros</RouterLink></li>
          <li><RouterLink to="/sections">Secciones</RouterLink></li>
          <li><RouterLink to="/contact">Contacto</RouterLink></li>
        </ul>
        <i
          :class="[
            'mobile-nav-toggle',
            'd-xl-none',
            isMobileNavActive ? 'bi-x' : 'bi-list',
          ]"
          @click="toggleMobileNav"
        ></i>
      </nav>

      <RouterLink class="btn-getstarted" to="/login"
        ><i
          :class="['bi', 'bi-person', isMobileView ? 'd-none' : 'd-inline']"
        ></i>
        Dashboard</RouterLink
      >
    </div>
  </header>

  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header> -->
</template>

<style>
@import '../assets/main.css';
</style>
