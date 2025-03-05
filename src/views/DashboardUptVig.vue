<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

let vigilantes = ref([])
let uqVigilante = ref([])

let search = ref('')
let cedula = ref('')
let nombres = ref('')
let apellidos = ref('')

const getVigilantes = async () => {
  try {
    const response = await api.get('/vigilantes')
    vigilantes.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getUnVigilante = async () => {
  if (search.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Campo Vacío',
      text: 'Por favor, ingrese una cédula',
    })
  } else {
    try {
      const response = await api.get(`/vigilantes/${Number(search.value)}`)
      vigilantes.value = response.data.body
    } catch (error) {
      console.log(error)
    }
  }
}

const getUniqueVigModal = async (ci) => {
  try {
    const response = await api.get(`/vigilantes/${ci}`)
    uqVigilante.value = response.data.body
    cedula.value = response.data.body[0].cedula
    nombres.value = response.data.body[0].nombres
    apellidos.value = response.data.body[0].apellidos
  } catch (error) {
    console.log(error)
  }
}

const updateVigilante = async (id) => {
  try {
    const response = await api.put(
      `/vigilantes`,
      {
        id: id,
        cedula: cedula.value,
        nombres: nombres.value,
        apellidos: apellidos.value,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    Swal.fire({
      icon: 'success',
      title: 'Vigilante Actualizado',
      text: response.data.body,
    })
    getVigilantes()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al actualizar',
      text: error,
    })
  }
}

const clear = () => {
  search.value = ''
  cedula.value = ''
  nombres.value = ''
  apellidos.value = ''
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
      <h1>Actualizar Vigilantes</h1>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="d-flex align-items-center gap-2 mb-3">
        <input
          class="form-control w-25"
          type="text"
          v-model="search"
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
              <h5 class="card-title">Actualizar datos</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>C.I</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="vigilante in vigilantes" :key="vigilante.id">
                    <td>{{ vigilante.cedula }}</td>
                    <td>{{ vigilante.nombres }}</td>
                    <td>{{ vigilante.apellidos }}</td>
                    <td>
                      <div
                        class="d-flex align-content-center justify-content-center"
                      >
                        <button
                          class="btn btn-info"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          @click="getUniqueVigModal(vigilante.cedula)"
                        >
                          <i class="bi bi-pencil"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Actualizar Datos
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="clear"
            ></button>
          </div>
          <div class="modal-body">
            <div col-4>
              <ul
                class="list-group"
                v-for="vigilante in uqVigilante"
                :key="vigilante.id"
              >
                <li class="list-group-item">
                  <h4>ID: {{ vigilante.id }}</h4>
                </li>
                <li class="list-group-item">
                  Cedula:
                  <input
                    class="form-control"
                    type="text"
                    v-model="cedula"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  Nombres:
                  <input
                    class="form-control"
                    type="text"
                    v-model="nombres"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  Apellidos:
                  <input
                    class="form-control"
                    type="text"
                    v-model="apellidos"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  <button
                    type="button"
                    class="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                    @click="clear"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="updateVigilante(vigilante.id)"
                    data-bs-dismiss="modal"
                  >
                    Actualizar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- End #main -->
</template>
