<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useSeoMeta } from '@unhead/vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import api from '../config/api'

useSeoMeta({
  title: 'Proyectos',
  description:
    'Descubre los proyectos innovadores del Liceo Bolivariano Antonio Álamo. Impulsando el desarrollo y aprendizaje a través de iniciativas creativas.',
  keywords:
    'L.B Antonio Álamo, innovación educativa, desarrollo estudiantil, iniciativas, aprendizaje creativo',
})

let proyectos = ref([])
let search = ref('')
let filteredProyectos = ref([])

const getProyectos = async () => {
  try {
    const response = await api.get('/proyectos')
    proyectos.value = response.data.body
    filteredProyectos.value = proyectos.value
  } catch (error) {
    console.log(error)
  }
}

const searchProject = () => {
  if (search.value.trim() === '') {
    filteredProyectos.value = proyectos.value
  } else {
    filteredProyectos.value = proyectos.value.filter((proyecto) =>
      proyecto.categoria.toLowerCase().includes(search.value.toLowerCase())
    )
  }
}

onMounted(() => {
  getProyectos()
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
              <h1>Proyectos</h1>
              <p class="mb-0">Lista de Proyectos del L.B Antonio Álamo</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li class="current">Proyectos</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Page Title -->

    <!-- Starter Section Section -->
    <section id="starter-section" class="starter-section section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Proyectos</h2>
        <p>Lista de Proyectos<br /></p>
      </div>
      <!-- End Section Title -->

      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-4 d-flex align-items-center gap-2 mb-3">
            <!-- Select con la lista de secciones con el boton para buscar-->
            <input
              type="text"
              class="form-control"
              v-model="search"
              placeholder="Buscar por categoría"
            />
            <button class="btn btn-primary" @click="searchProject(search)">
              Buscar
            </button>
          </div>
          <div class="col-lg-8">
            <div class="section-title m-0 p-0">
              <p>Lista:</p>
            </div>
            <div class="card">
              <div class="card-body">
                <ul>
                  <li v-for="pro in filteredProyectos" :key="pro.id">
                    <a :href="pro.url">{{ pro.nombre }}</a>
                  </li>
                  <li v-if="filteredProyectos.length === 0">
                    <p>No se encontraron proyectos para la categoría buscada</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Starter Section Section -->
  </main>
  <Footer />
</template>

<style scoped></style>
