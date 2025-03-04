<script setup>
import { useToken } from '../assets/composables/useToken'
import { useUser } from '../assets/composables/useUser'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'
import Swal from 'sweetalert2'
import { convertListSecPDF } from '@/assets/composables/convertPDF'

import api from '../config/api'

const { getToken } = useToken()
const { getUser } = useUser()

const userData = getUser()

let cursos = ref([])
let estudSeccion = ref([])
let grado = ref('')
let seccion = ref('')

const getSecciones = async () => {
  try {
    const response = await api.get('/cursos')
    cursos.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const delSeccion = async (id) => {
  try {
    await api.delete(`/cursos/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    Swal.fire({
      icon: 'success',
      title: 'Sección eliminada',
      text: 'La sección ha sido eliminada correctamente',
    })
    getSecciones()
    estudSeccion.value = []
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
      delSeccion(id)
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('La sección no ha sido eliminada', '', 'info')
    }
  })
}

const getEstudiantesSeccion = async (id) => {
  try {
    const response = await api.get(`/cursos/seccion/${id}`)
    estudSeccion.value = response.data.body
    grado.value = response.data.body[0].grado
    seccion.value = response.data.body[0].seccion
  } catch (error) {
    console.log(error)
  }
}

const convertirPDF = () => {
  if (estudSeccion.value.length === 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No hay estudiantes en esta sección',
    })
    return
  }
  //dividir el valor de seccion en 2 ya que viene sin espacios ejemplo: 1B, la idea es separar para setear el valor a grado
  grado.value = seccion.value.substring(0, 1)
  seccion.value = seccion.value.substring(1, 2)
  convertListSecPDF(
    'Lista_de_Estudiantes',
    estudSeccion.value,
    grado.value,
    seccion.value
  )
}

onMounted(() => {
  getToken()
  getSecciones()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Lista de Secciones</h1>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <!-- <div class="d-flex align-items-center gap-3 mb-3">
        <input class="form-control w-25" type="text" placeholder="Buscar" />
        <button class="btn btn-primary"><i class="bi bi-search"></i></button>
      </div> -->
      <div class="row">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Secciones</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="curso in cursos" :key="cursos.id_curso">
                    <td>{{ curso.id_curso }}</td>
                    <td>{{ curso.nombre }}</td>
                    <td class="d-flex gap-2">
                      <button
                        class="btn btn-primary"
                        @click="getEstudiantesSeccion(curso.id_curso)"
                      >
                        <i class="bi bi-eye"></i>
                      </button>
                      <button
                        class="btn btn-danger"
                        @click="questionDelete(curso.id_curso)"
                        v-if="
                          userData.rol === 'supersu' || userData.rol === 'admin'
                        "
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

        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                Lista de Estudiantes
                <button class="btn btn-primary" @click="convertirPDF">
                  <i class="bi bi-filetype-pdf"></i> Descargar PDF
                </button>
              </h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Cedula</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Sección</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="estud in estudSeccion"
                    :key="estud.id"
                    v-if="estudSeccion.length > 0"
                  >
                    <td>{{ estud.cedula }}</td>
                    <td>{{ estud.nombres }}</td>
                    <td>{{ estud.apellidos }}</td>
                    <td>{{ estud.seccion }}</td>
                  </tr>
                  <tr v-else>
                    <td colspan="4" class="text-center">
                      No hay estudiantes en esta sección
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
