<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'
import { convertPDF } from '@/assets/composables/convertPDF'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

let docentes = ref([])

let cedula = ref('')

const getDocentes = async () => {
  try {
    const response = await api.get('/docentes')
    docentes.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getUnDocente = async () => {
  if (cedula.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Campo Vacío',
      text: 'Por favor, ingrese una cédula',
    })
  } else {
    try {
      const response = await api.get(`/docentes/${Number(cedula.value)}`)
      docentes.value = response.data.body
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
      convertPDF('DOCENTES', asunto, 'Lista_de_Docentes', docentes.value)
    },
    allowOutsideClick: () => !Swal.isLoading(),
  })
}

const clear = () => {
  cedula.value = ''
  getDocentes()
}

onMounted(() => {
  getToken()
  getDocentes()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Lista de Personal Docente</h1>
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
        <button class="btn btn-primary" @click="getUnDocente">
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
              <h5 class="card-title">Lista de Docentes</h5>
              <table class="table table-bordered" id="tablaDocentes">
                <thead>
                  <tr>
                    <th>C.I</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="docente in docentes" :key="docente.id">
                    <td>{{ docente.cedula }}</td>
                    <td>{{ docente.nombres }}</td>
                    <td>{{ docente.apellidos }}</td>
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
