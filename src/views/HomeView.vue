<script setup>
import { RouterLink } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import Header from '../components/Header.vue'
import Counters from '@/components/Counters.vue'
import Courses from '@/components/Courses.vue'
import Footer from '@/components/Footer.vue'

useSeoMeta({
  title: 'L.B Antonio Álamo',
  description:
    'Somos una institución educativa que ofrece información sobre proyectos escolares, guías y actividades académicas.',
  keywords:
    'L.B Antonio Álamo, proyectos escolares, docentes, actividades académicas, educación, biografía, historia, misión, visión',
})
</script>

<template>
  <Header />
  <main class="main">
    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">
      <img src="../assets/images/front_lbaa.png" alt="" data-aos="fade-in" />

      <div class="container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Liceo Bolivariano<br />Antonio Álamo
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">Excelencia educativa</p>
        <div class="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
          <RouterLink to="/about" class="btn-get-started">Ver más</RouterLink>
        </div>
      </div>
    </section>
    <!-- /Hero Section -->
    <!-- About Section -->
    <section id="about" class="about section">
      <div class="container">
        <div class="row gy-4">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="../assets/images/fachada_antonio_alamo.jpg"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-6 order-2 order-lg-1 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Historia de la Unidad Educativa Nacional Antonio Álamo</h3>
            <p class="fst-italic">
              El 16 de octubre de 1972, nació el Liceo Antonio Álamo, gracias a
              la iniciativa de los pobladores de Río Claro, quienes impulsaron a
              la comunidad estudiantil a solicitar un espacio para la formación
              de bachilleres.
            </p>
            <p class="fst-italic">
              En sus inicios, el liceo contaba con tres cursos: dos primeros
              años y un segundo año del Ciclo Básico Común.
            </p>
            <p class="fst-italic">
              Entre los pioneros de esta institución destacan Yolanda Faraco y
              Arelys Guerrero, quienes se desempeñaron como secretarias durante
              aquellos primeros años, bajo la dirección del profesor Henry
              Pacheco.
            </p>

            <RouterLink to="/about" class="read-more"
              ><span>Leer más</span><i class="bi bi-arrow-right"></i
            ></RouterLink>
          </div>
        </div>
      </div>
    </section>
    <!-- /About Section -->
    <Counters />
    <Courses />
  </main>
  <Footer />
</template>
