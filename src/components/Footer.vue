<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer id="footer" class="footer position-relative light-background ms-0">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-4 col-md-6 footer-about">
          <RouterLink to="/" class="logo d-flex align-items-center">
            <img src="../assets/images/logo.jpg" alt="" />
            <span class="sitename">L.B Antonio Álamo</span>
          </RouterLink>
          <div class="footer-contact pt-3">
            <p>Av. Libertador, Frente a la Plaza las Américas</p>
            <p>Lara, Barquisimeto, Rio Claro 3001</p>
            <p class="mt-3">
              <strong>Teléfono:</strong> <span>0251-9998088</span>
            </p>
            <p>
              <strong>Correo:</strong> <span>lbantonioalamo@gmail.com</span>
            </p>
          </div>
          <div class="social-links d-flex mt-4">
            <a href=""><i class="bi bi-twitter-x"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 footer-links">
          <h4>Links de utilidad</h4>
          <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/about">Sobre nosotros</RouterLink></li>
            <li><RouterLink to="/sections">Secciones</RouterLink></li>
            <li><RouterLink to="/">Contacto</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>
        © <span>Copyright</span>
        <strong class="px-1 sitename">L.B Antonio Alamo</strong>
        <span>Todos los derechos reservados</span>
      </p>
      <div class="credits">
        Diseñado por <a href="https://bootstrapmade.com/">Promo XX</a>
      </div>
    </div>
  </footer>
</template>
