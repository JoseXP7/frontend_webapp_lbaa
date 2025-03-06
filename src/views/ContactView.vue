<script setup>
import { RouterLink } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

useSeoMeta({
  title: 'Contacto',
  description:
    '¿Tienes preguntas? Contáctanos. Encuentra aquí nuestros datos de contacto para comunicarte con el Liceo Bolivariano Antonio Álamo.',
  keywords: 'L.B Antonio Álamo, contacto, teléfono, dirección, correo',
})
</script>

<template>
  <Header />
  <main class="main">
    <!-- Page Title -->
    <div class="page-title" data-aos="fade">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1>Contacto<br /></h1>
              <p class="mb-0">Ubícanos en el mapa.</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li class="current">Contacto<br /></li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Page Title -->
    <!-- Contact Section -->
    <section id="contact" class="contact section">
      <div class="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style="border: 0; width: 100%; height: 300px"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1720309780026!2d-69.36292562496999!3d9.919626490181692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7d8a37ee72fb35%3A0x58f278cad21d375e!2sLiceo%20Dr.%20Antonio%20Alamo!5e0!3m2!1ses-419!2sve!4v1741100492599!5m2!1ses-419!2sve"
          frameborder="0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <!-- End Google Maps -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-4">
            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Dirección</h3>
                <p>
                  Av. Libertador, Frente a la Plaza las Américas Lara,
                  Barquisimeto, Rio Claro 3001
                </p>
              </div>
            </div>
            <!-- End Info Item -->

            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i class="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Llamanos</h3>
                <p>0251-9998088</p>
              </div>
            </div>
            <!-- End Info Item -->

            <div
              class="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i class="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Envia un correo</h3>
                <p>lbantonioalamo@gmail.com</p>
              </div>
            </div>
            <!-- End Info Item -->
          </div>

          <div class="col-lg-8"></div>
          <!-- End Contact Form -->
        </div>
      </div>
    </section>
    <!-- /Contact Section -->
  </main>
  <Footer />
</template>

<style></style>
