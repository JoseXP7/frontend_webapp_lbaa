<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header id="header" class="header d-flex align-items-center sticky-top">
    <div
      class="container-fluid container-xl position-relative d-flex align-items-center"
    >
      <RouterLink to="/" class="logo d-flex align-items-center me-auto">
        <!-- Uncomment the line below if you also wish to use an image logo -->
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
          <li><RouterLink to="/">Contacto</RouterLink></li>
        </ul>
        <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <RouterLink class="btn-getstarted" to="/login"
        ><i class="bi bi-person"></i> Dashboard</RouterLink
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
