<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

let proyectos = ref([])
let uqProyecto = ref([])
let url = ref('')
let nombre = ref('')
let categoria = ref('')

const getProyectos = async () => {
  try {
    const response = await api.get('/proyectos')
    proyectos.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getUniqueProModal = async (id) => {
  try {
    const response = await api.get(`/proyectos/${id}`)
    uqProyecto.value = response.data.body
    url.value = response.data.body[0].url
    nombre.value = response.data.body[0].nombre
    categoria.value = response.data.body[0].categoria
  } catch (error) {
    console.log(error)
  }
}

const updateProyecto = async (id) => {
  try {
    const response = await api.put(
      `/proyectos`,
      {
        id: id,
        url: url.value,
        nombre: nombre.value,
        categoria: categoria.value,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    Swal.fire({
      icon: 'success',
      title: 'Proyecto Actualizado',
      text: response.data.body,
    })
    getProyectos()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al actualizar',
      text: error,
    })
  }
}

const clear = () => {
  url.value = ''
  nombre.value = ''
  categoria.value = ''
  getProyectos()
}

onMounted(() => {
  getToken()
  getProyectos()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Actualizar Proyectos</h1>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Actualizar datos</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>URL</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="proyecto in proyectos" :key="proyecto.id">
                    <td>{{ proyecto.id }}</td>
                    <td>
                      <a :href="proyecto.url">{{ proyecto.url }}</a>
                    </td>
                    <td>{{ proyecto.nombre }}</td>
                    <td>{{ proyecto.categoria }}</td>
                    <td>
                      <div
                        class="d-flex align-content-center justify-content-center"
                      >
                        <button
                          class="btn btn-info"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          @click="getUniqueProModal(proyecto.id)"
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
              <ul class="list-group" v-for="pro in uqProyecto" :key="pro.id">
                <li class="list-group-item">
                  <h4>ID: {{ pro.id }}</h4>
                </li>
                <li class="list-group-item">
                  URL:
                  <input
                    class="form-control"
                    type="text"
                    v-model="url"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  Nombre:
                  <input
                    class="form-control"
                    type="text"
                    v-model="nombre"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  Categoria:
                  <input
                    class="form-control"
                    type="text"
                    v-model="categoria"
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
                    @click="updateProyecto(pro.id)"
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
