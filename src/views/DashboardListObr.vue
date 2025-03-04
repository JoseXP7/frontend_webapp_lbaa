<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'
import { convertPDF } from '@/assets/composables/convertPDF'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

let obreros = ref([])

let cedula = ref('')

const getObreros = async () => {
  try {
    const response = await api.get('/obreros')
    obreros.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getUnObrero = async () => {
  if (cedula.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Campo Vacío',
      text: 'Por favor, ingrese una cédula',
    })
  } else {
    try {
      const response = await api.get(`/obreros/${Number(cedula.value)}`)
      obreros.value = response.data.body
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
      convertPDF('OBREROS', asunto, 'Lista_de_Obreros', obreros.value)
    },
    allowOutsideClick: () => !Swal.isLoading(),
  })
}

const clear = () => {
  cedula.value = ''
  getObreros()
}

onMounted(() => {
  getToken()
  getObreros()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Lista de Personal Obrero</h1>
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
        <button class="btn btn-primary" @click="getUnObrero">
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
              <h5 class="card-title">Lista de Obreros</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>C.I</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="obrero in obreros" :key="obrero.id">
                    <td>{{ obrero.cedula }}</td>
                    <td>{{ obrero.nombres }}</td>
                    <td>{{ obrero.apellidos }}</td>
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
