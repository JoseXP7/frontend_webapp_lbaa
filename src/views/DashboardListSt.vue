<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted, ref } from 'vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

import api from '../config/api'

import Swal from 'sweetalert2'

const { getToken } = useToken()

let estudiantes = ref([])
let secciones = ref([])

let cedula = ref('')
let seccion = ref('')
let seccionAsignada = ref('')

const getEstudiantes = async () => {
  try {
    const response = await api.get('/estudiantes')
    estudiantes.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getSecciones = async () => {
  try {
    const response = await api.get('/cursos')
    secciones.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const getUnaSeccion = async (id_curso) => {
  if (!id_curso) {
    return
  } else {
    try {
      const response = await api.get(`/cursos/${id_curso}`)
      seccionAsignada.value = response.data.body.nombre
    } catch (error) {
      console.log(error)
    }
  }
}

const getSeccionAsignada = async (id_estudiante) => {
  try {
    const response = await api.get(`/cursos_estudiantes/${id_estudiante}`)
    let array = response.data.body
    let id
    array.forEach((e) => {
      id = e.id_curso
    })
    getUnaSeccion(id)
  } catch (error) {
    console.error(error)
  }
}

const getUnEstudiante = async () => {
  if (cedula.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Campo Vacío',
      text: 'Por favor, ingrese una cédula',
    })
  } else {
    try {
      const response = await api.get(`/estudiantes/${Number(cedula.value)}`)
      estudiantes.value = response.data.body
    } catch (error) {
      console.log(error)
    }
  }
}

const getUniqueStModal = async (ci) => {
  try {
    const response = await api.get(`/estudiantes/${ci}`)
    estudiantes.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const addSectionSt = async (id) => {
  try {
    await api.post(
      '/cursos_estudiantes',
      {
        id_estudiante: id,
        id_curso: seccion.value,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    Swal.fire({
      icon: 'success',
      title: 'Estudiante Asignado',
      showConfirmButton: false,
      timer: 1500,
    })
    clear()
    seccion.value = ''
  } catch (error) {
    console.error(error)
  }
}

const updateSectionSt = async (id) => {
  try {
    await api.put(
      '/cursos_estudiantes',
      {
        id_estudiante: id,
        id_curso: seccion.value,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    Swal.fire({
      icon: 'success',
      title: 'Asignación Actualizada',
      showConfirmButton: false,
      timer: 1500,
    })
    clear()
    seccion.value = ''
  } catch (error) {
    console.error(error)
  }
}

const clear = () => {
  cedula.value = ''
  seccionAsignada.value = undefined
  getEstudiantes()
}

onMounted(() => {
  getToken()
  getEstudiantes()
  getSecciones()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Lista de Estudiantes</h1>
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
        <button class="btn btn-primary" @click="getUnEstudiante">
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
              <h5 class="card-title">Asignar una sección</h5>
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
                  <tr v-for="estudiante in estudiantes" :key="estudiante.id">
                    <td>{{ estudiante.cedula }}</td>
                    <td>{{ estudiante.nombres }}</td>
                    <td>{{ estudiante.apellidos }}</td>
                    <td>
                      <div
                        class="d-flex align-content-center justify-content-center"
                      >
                        <button
                          class="btn btn-info"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          @click="
                            getUniqueStModal(estudiante.cedula),
                              getSeccionAsignada(estudiante.id)
                          "
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
              Asignar Sección
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
                v-for="estudiante in estudiantes"
                :key="estudiante.id"
              >
                <li class="list-group-item">
                  <h4>ID: {{ estudiante.id }}</h4>
                </li>
                <li class="list-group-item">Cedula: {{ estudiante.cedula }}</li>
                <li class="list-group-item">
                  Nombres: {{ estudiante.nombres }}
                </li>
                <li class="list-group-item">
                  Apellidos: {{ estudiante.apellidos }}
                </li>
                <li class="list-group-item">
                  Sección: {{ seccionAsignada || 'Sin Asignar' }}
                </li>
                <li class="list-group-item">
                  Asignar Sección:
                  <select
                    class="form-select w-25"
                    v-model="seccion"
                    name="section"
                    id="section"
                  >
                    <option
                      v-for="seccion in secciones"
                      :key="seccion.id_curso"
                      :value="seccion.id_curso"
                    >
                      {{ seccion.nombre }}
                    </option>
                  </select>
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
                  <!-- Utilizar aqui v-if para mostrar si no hay una seccionAsignada para asignarla, si no, v-else para actualizar en caso de que si exista -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="addSectionSt(estudiante.id)"
                    data-bs-dismiss="modal"
                    v-if="seccionAsignada == undefined || seccionAsignada == ''"
                  >
                    Guardar Cambios
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="updateSectionSt(estudiante.id)"
                    data-bs-dismiss="modal"
                    v-else
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
