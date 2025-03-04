<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'
import { convertPDF } from '@/assets/composables/convertPDF'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

let cocineros = ref([])

let cedula = ref('')

const getCocineros = async () => {
  try {
    const response = await api.get('/cocineros')
    cocineros.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getUnCocinero = async () => {
  if (cedula.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Campo Vacío',
      text: 'Por favor, ingrese una cédula',
    })
  } else {
    try {
      const response = await api.get(`/cocineros/${Number(cedula.value)}`)
      cocineros.value = response.data.body
    } catch (error) {
      console.log(error)
    }
  }
}

const convertirPDF = () => {
  let asunto
  Swal.fire({
    title: 'Asunto del PDF',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    confirmButtonText: 'Descargar',
    showLoaderOnConfirm: true,
    preConfirm: (asunto) => {
      convertPDF(
        'COCINEROS',
        asunto,
        'Lista_de_MADRES_Y_PADRES_ELABORADORES_DE_ALIMENTOS',
        cocineros.value
      )
    },
    allowOutsideClick: () => !Swal.isLoading(),
  })
}

const clear = () => {
  cedula.value = ''
  getCocineros()
}

onMounted(() => {
  getToken()
  getCocineros()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Lista de Personal Cocinero</h1>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="d-flex align-items-center gap-2 mb-3">
        <input
          class="form-control w-25"
          type="text"
          v-model="cedula"
          placeholder="Buscar por cedula"
        />
        <button class="btn btn-primary" @click="getUnCocinero">
          <i class="bi bi-search"></i>
        </button>
        <button class="btn btn-secondary" @click="clear">
          <i class="bi bi-x"></i>
        </button>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lista de Cocineros</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>C.I</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cocinero in cocineros" :key="cocinero.id">
                    <td>{{ cocinero.cedula }}</td>
                    <td>{{ cocinero.nombres }}</td>
                    <td>{{ cocinero.apellidos }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Descargar</h5>
              <p>
                <button class="btn btn-primary" @click="convertirPDF">
                  <i class="bi bi-filetype-pdf"></i> Descargar PDF
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
