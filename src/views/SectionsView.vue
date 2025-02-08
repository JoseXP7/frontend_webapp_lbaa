<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

import api from '../config/api'

let estudSeccion = ref([])
let secciones = ref([])
let guias = ref([])
let seccion = ref('')
let seccionAsignada = ref('')

const getEstudiantesSeccion = async (id) => {
  guias.value = []
  try {
    const response = await api.get(`/cursos/seccion/${id}`)
    estudSeccion.value = response.data.body
    seccionAsignada.value = response.data.body[0].seccion
    getGuias(id)
  } catch (error) {
    console.log(error)
  }
}

const getSecciones = async () => {
  try {
    const response = await api.get('/cursos')
    secciones.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getGuias = async (id) => {
  try {
    const response = await api.get(`/guias/seccion/${id}`)
    guias.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getSecciones()
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
              <h1>Secciones</h1>
              <p class="mb-0">Lista de Secciones del L.B Antonio Álamo</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li class="current">Secciones</li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Page Title -->

    <!-- Starter Section Section -->
    <section id="starter-section" class="starter-section section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Secciones</h2>
        <p>Lista de Secciones<br /></p>
      </div>
      <!-- End Section Title -->

      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-4 d-flex align-items-center gap-2 mb-3">
            <!-- Select con la lista de secciones con el boton para buscar-->
            <select
              name="section"
              id="section"
              class="form-select"
              v-model="seccion"
            >
              <option
                v-for="seccion in secciones"
                :key="seccion.id"
                :value="seccion.id_curso"
              >
                {{ seccion.nombre }}
              </option>
            </select>
            <button
              class="btn btn-primary"
              @click="getEstudiantesSeccion(seccion)"
            >
              Buscar
            </button>
          </div>
          <div class="col-lg-4">
            <div class="section-title m-0 p-0">
              <p>Sección: {{ seccionAsignada }}</p>
            </div>
            <div class="card">
              <div class="card-body">
                <ul>
                  <li
                    v-for="estud in estudSeccion"
                    :key="estud.id"
                    v-if="estudSeccion.length > 0"
                  >
                    <p>{{ estud.nombres }} {{ estud.apellidos }}</p>
                  </li>
                  <li v-else>
                    <p>Usa el buscador para mostrar una sección</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="section-title m-0 p-0">
              <p>Guías</p>
            </div>
            <div class="card">
              <div class="card-body">
                <ul>
                  <li
                    v-for="guia in guias"
                    :key="guia.id"
                    v-if="guias.length > 0"
                  >
                    <a :href="guia.url" target="_blank">{{ guia.nombre }}</a>
                  </li>
                  <li v-else>
                    <p>No hay guías para esta sección</p>
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
