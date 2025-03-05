<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'
import Swal from 'sweetalert2'

import api from '../config/api'

const { getToken } = useToken()

//Formuario
let grado = ref('')
let seccion = ref('')
let isLoading = ref(false)

const addSection = async () => {
  let name = grado.value + seccion.value
  if (grado.value == '' || seccion.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Campos Vacios',
    })
  } else {
    isLoading.value = true
    try {
      await api.post(
        '/cursos',
        {
          nombre: name,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      Swal.fire({
        icon: 'success',
        title: 'Curso Agregado',
        text: `${name}`,
      })
      grado.value = ''
      seccion.value = ''
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.body,
      })
    } finally {
      isLoading.value = false
    }
  }
}

//recuerda hacer algo en el backend para seleccionar varios estudiantes y cargarlos a todos en una sección para la tabla
//curso_estudiante

onMounted(() => {
  getToken()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Crear sección</h1>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-5">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Rellene los campos:</h5>
              <form @submit.prevent="onSubmit" autocomplete="off">
                <div>
                  <label class="form-label" for="grado">Año:</label>
                  <select
                    class="form-select"
                    name="grado"
                    id="grado"
                    v-model="grado"
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div>
                  <label class="form-label" for="seccion">Sección</label>
                  <select
                    class="form-select"
                    name="seccion"
                    id="seccion"
                    v-model="seccion"
                    required
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                  </select>
                </div>
                <div>Vista Previa: {{ grado }}{{ seccion }}</div>
                <div class="mt-4 d-grid">
                  <button
                    class="btn btn-primary"
                    @click="addSection"
                    :disabled="isLoading"
                  >
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
