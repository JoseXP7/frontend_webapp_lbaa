<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

let vigilantes = ref([])

let cedula = ref('')

const getVigilantes = async () => {
  try {
    const response = await api.get('/vigilantes')
    vigilantes.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getUnVigilante = async () => {
  if (cedula.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Campo Vacío',
      text: 'Por favor, ingrese una cédula',
    })
  } else {
    try {
      const response = await api.get(`/vigilantes/${Number(cedula.value)}`)
      vigilantes.value = response.data.body
    } catch (error) {
      console.log(error)
    }
  }
}

const clear = () => {
  cedula.value = ''
  getVigilantes()
}

onMounted(() => {
  getToken()
  getVigilantes()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Lista de Personal Vigilante</h1>
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
        <button class="btn btn-primary" @click="getUnVigilante">
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
              <h5 class="card-title">Lista de Vigilantes</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>C.I</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="vigilante in vigilantes" :key="vigilante.id">
                    <td>{{ vigilante.cedula }}</td>
                    <td>{{ vigilante.nombres }}</td>
                    <td>{{ vigilante.apellidos }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Example Card</h5>
              <p>
                This is an examle page with no contrnt. You can use it as a
                starter for your custom pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
