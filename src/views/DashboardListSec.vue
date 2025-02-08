<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

import api from '../config/api'

const { getToken } = useToken()

let cursos = ref([])
let estudSeccion = ref([])

const getSecciones = async () => {
  try {
    const response = await api.get('/cursos')
    cursos.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getEstudiantesSeccion = async (id) => {
  try {
    const response = await api.get(`/cursos/seccion/${id}`)
    estudSeccion.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getToken()
  getSecciones()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Lista de Secciones</h1>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <!-- <div class="d-flex align-items-center gap-3 mb-3">
        <input class="form-control w-25" type="text" placeholder="Buscar" />
        <button class="btn btn-primary"><i class="bi bi-search"></i></button>
      </div> -->
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Secciones</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="curso in cursos" :key="cursos.id_curso">
                    <td>{{ curso.id_curso }}</td>
                    <td>{{ curso.nombre }}</td>
                    <td>
                      <button
                        class="btn btn-primary"
                        @click="getEstudiantesSeccion(curso.id_curso)"
                      >
                        <i class="bi bi-eye"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lista de Estudiantes</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Cedula</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Sección</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="estud in estudSeccion"
                    :key="estud.id"
                    v-if="estudSeccion.length > 0"
                  >
                    <td>{{ estud.cedula }}</td>
                    <td>{{ estud.nombres }}</td>
                    <td>{{ estud.apellidos }}</td>
                    <td>{{ estud.seccion }}</td>
                  </tr>
                  <tr v-else>
                    <td colspan="4" class="text-center">
                      No hay estudiantes en esta sección
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
