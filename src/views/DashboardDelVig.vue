<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

const vigilantes = ref([])
const cedula = ref('')

const searchStudent = async () => {
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
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.body,
      })
    }
  }
}

const deleteStudent = async (id) => {
  try {
    await api.delete(`/vigilantes/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    Swal.fire({
      icon: 'success',
      title: 'Vigilante eliminado',
      text: 'El vigilante ha sido eliminado correctamente',
    })
    vigilantes.value = []
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response.data.body,
    })
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
      <h1>Eliminar Vigilantes</h1>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-4">
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
                <div class="mt-4 d-grid">
                  <button class="btn btn-primary" @click="searchStudent">
                    <i class="bi bi-search"></i> Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lista de Vigilantes</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cedula</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="vig in vigilantes"
                    :key="vig.id"
                    v-if="vigilantes.length > 0"
                  >
                    <td>{{ vig.id }}</td>
                    <td>{{ vig.cedula }}</td>
                    <td>{{ vig.nombres }}</td>
                    <td>{{ vig.apellidos }}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="deleteStudent(vig.id)"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr v-else>
                    <td colspan="5" class="text-center">
                      No existen registros
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
