<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

let obreros = ref([])
let uqObrero = ref([])

let search = ref('')
let cedula = ref('')
let nombres = ref('')
let apellidos = ref('')

const getObreros = async () => {
  try {
    const response = await api.get('/obreros')
    obreros.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getUnObrero = async () => {
  if (search.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Campo Vacío',
      text: 'Por favor, ingrese una cédula',
    })
  } else {
    try {
      const response = await api.get(`/obreros/${Number(search.value)}`)
      obreros.value = response.data.body
    } catch (error) {
      console.log(error)
    }
  }
}

const getUniqueObrModal = async (ci) => {
  try {
    const response = await api.get(`/obreros/${ci}`)
    uqObrero.value = response.data.body
    cedula.value = response.data.body[0].cedula
    nombres.value = response.data.body[0].nombres
    apellidos.value = response.data.body[0].apellidos
  } catch (error) {
    console.log(error)
  }
}

const updateObrero = async (id) => {
  try {
    const response = await api.put(
      `/obreros`,
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
      title: 'Obrero Actualizado',
      text: response.data.body,
    })
    getObreros()
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
      <h1>Actualizar Obreros</h1>
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
                  <tr v-for="obrero in obreros" :key="obrero.id">
                    <td>{{ obrero.cedula }}</td>
                    <td>{{ obrero.nombres }}</td>
                    <td>{{ obrero.apellidos }}</td>
                    <td>
                      <div
                        class="d-flex align-content-center justify-content-center"
                      >
                        <button
                          class="btn btn-info"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          @click="getUniqueObrModal(obrero.cedula)"
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
                v-for="obrero in uqObrero"
                :key="obrero.id"
              >
                <li class="list-group-item">
                  <h4>ID: {{ obrero.id }}</h4>
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
                    @click="updateObrero(obrero.id)"
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
