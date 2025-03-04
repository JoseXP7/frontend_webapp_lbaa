<script setup>
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'
import { ref, onMounted } from 'vue'
import api from '../config/api'
import { useToken } from '../assets/composables/useToken'
import { useUser } from '../assets/composables/useUser'
import Swal from 'sweetalert2'

const { getToken } = useToken()
const { getUser } = useUser()
const userData = getUser()

let secciones = ref([])
let guias = ref([])
let guia = ref('')
let nombre = ref('')
let seccion = ref('')

const getSecciones = async () => {
  try {
    const response = await api.get('/cursos')
    secciones.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getGuias = async () => {
  try {
    const response = await api.get('/guias')
    guias.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const delGuias = async (id) => {
  try {
    await api.delete(`/guias/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    Swal.fire({
      icon: 'success',
      title: 'Guía eliminada',
      text: 'La guía ha sido eliminada correctamente',
    })
    getGuias()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.response.data.body,
    })
  }
}

const questionDelete = (id) => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'No podrás revertir esta acción!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      delGuias(id)
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('La guia no ha sido eliminada', '', 'info')
    }
  })
}

const addGuia = async () => {
  if (guia.value == '' || seccion.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Todos los campos son obligatorios',
      showConfirmButton: false,
      timer: 3500,
    })
  } else {
    try {
      await api.post(
        '/guias',
        {
          url: guia.value,
          nombre: nombre.value,
          id_seccion: seccion.value,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      Swal.fire({
        icon: 'success',
        title: 'Guia Agregada',
      })
      guia.value = ''
      seccion.value = ''
      getGuias()
    } catch (error) {
      console.error(error)
    }
  }
}

onMounted(() => {
  getSecciones()
  getGuias()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Subir guía</h1>
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
                  <label class="form-label" for="guia">URL de la guía</label>
                  <input
                    class="form-control"
                    type="text"
                    name="guia"
                    id="guia"
                    v-model="guia"
                    required
                  />
                </div>
                <div>
                  <label class="form-label" for="nombre"
                    >Nombre de la guía</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    name="nombre"
                    id="cedula"
                    v-model="nombre"
                    required
                  />
                </div>
                <div>
                  <label class="form-label" for="section"
                    >Sección a asignar</label
                  >
                  <select
                    name="section"
                    id="section"
                    class="form-select"
                    v-model="seccion"
                  >
                    <option
                      v-for="seccion in secciones"
                      :key="seccion.id"
                      :value="seccion.id_curso"
                    >
                      {{ seccion.nombre }}
                    </option>
                  </select>
                </div>
                <div class="mt-4 d-grid">
                  <button class="btn btn-primary" @click="addGuia">
                    Subir
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Información</h5>
              <p>
                Recomendamos ingresar enláces de Google Drive que lleven
                directamente a la guía.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card title"></h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>URL</th>
                    <th>Nombres</th>
                    <th
                      v-if="
                        userData.rol === 'supersu' || userData.rol === 'admin'
                      "
                    >
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="guia in guias" :key="guia.id">
                    <td>{{ guia.id }}</td>
                    <td>
                      <a :href="guia.url">{{ guia.url }}</a>
                    </td>
                    <td>{{ guia.nombre }}</td>
                    <td
                      v-if="
                        userData.rol === 'supersu' || userData.rol === 'admin'
                      "
                    >
                      <button
                        class="btn btn-danger"
                        @click="questionDelete(guia.id)"
                      >
                        <i class="bi bi-trash"></i>
                      </button>
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
</template>
