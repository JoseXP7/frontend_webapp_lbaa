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

let proyectos = ref([])
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

const delProyecto = async (id) => {
  try {
    await api.delete(`/proyectos/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    Swal.fire({
      icon: 'success',
      title: 'Proyecto eliminado',
      text: 'El proyecto ha sido eliminado correctamente',
    })
    getProyectos()
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
      delProyecto(id)
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('El proyecto no ha sido eliminado', '', 'info')
    }
  })
}

const addProyecto = async () => {
  if (url.value == '' || nombre.value == '' || categoria.value == '') {
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
        '/proyectos',
        {
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
        title: 'Proyecto Agregado',
      })
      url.value = ''
      nombre.value = ''
      categoria.value = ''
      getProyectos()
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.body,
      })
    }
  }
}

onMounted(() => {
  getProyectos()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Subir Proyecto</h1>
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
                  <label class="form-label" for="url">URL del proyecto</label>
                  <input
                    class="form-control"
                    type="text"
                    name="url"
                    id="url"
                    v-model="url"
                    required
                  />
                </div>
                <div>
                  <label class="form-label" for="nombre"
                    >Nombre del proyecto</label
                  >
                  <input
                    class="form-control"
                    type="text"
                    name="nombre"
                    id="nombre"
                    v-model="nombre"
                    required
                  />
                </div>
                <div>
                  <label class="form-label" for="categoria">Categoria</label>
                  <input
                    class="form-control"
                    type="text"
                    name="categoria"
                    id="categoria"
                    v-model="categoria"
                    required
                  />
                </div>
                <div class="mt-4 d-grid">
                  <button class="btn btn-primary" @click="addProyecto">
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
                directamente al proyecto.
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
                    <th>Categoría</th>
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
                      <button
                        class="btn btn-danger"
                        @click="questionDelete(proyecto.id)"
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
