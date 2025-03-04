<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

//Formuario
let cedula = ref('')
let nombres = ref('')
let apellidos = ref('')
let isLoading = ref(false)

const addVigilante = async () => {
  if (cedula.value == '' || nombres.value == '' || apellidos.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Todos los campos son obligatorios',
    })
  } else {
    isLoading.value = true
    try {
      await api.post(
        '/vigilantes',
        {
          cedula: Number(cedula.value),
          nombres: nombres.value.toUpperCase(),
          apellidos: apellidos.value.toUpperCase(),
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      Swal.fire({
        icon: 'success',
        title: 'Vigilante Agregado',
        text: `${cedula.value}, ${nombres.value} ${apellidos.value}`,
      })
      cedula.value = ''
      nombres.value = ''
      apellidos.value = ''
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${error.response.data.body}`,
      })
    } finally {
      isLoading.value = false
    }
  }
}

onMounted(() => {
  getToken()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Agregar Personal Vigilante</h1>
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
                  <label class="form-label" for="cedula">Cedula</label>
                  <input
                    class="form-control"
                    type="number"
                    name="cedula"
                    id="cedula"
                    v-model="cedula"
                    required
                  />
                </div>
                <div>
                  <label class="form-label" for="nombres">Nombres</label>
                  <input
                    class="form-control"
                    type="text"
                    name="nombres"
                    id="nombres"
                    v-model="nombres"
                    required
                  />
                </div>
                <div>
                  <label class="form-label" for="apellidos">Apellidos</label>
                  <input
                    class="form-control"
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    v-model="apellidos"
                    required
                  />
                </div>
                <div class="mt-4 d-grid">
                  <button
                    class="btn btn-primary"
                    @click="addVigilante"
                    :disabled="isLoading"
                  >
                    Agregar
                  </button>
                </div>
              </form>
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
