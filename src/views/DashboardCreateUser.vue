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

let usuarios = ref([])
let uqUser = ref([])
let uqnombre = ref('')
let uqestado = ref('')
let uqusuario = ref('')
let uqpassword = ref('')
let uqrol = ref('')
let nombre = ref('')
let estado = ref(0)
let usuario = ref('')
let password = ref('')
let rol = ref('docente')

const getUsuarios = async () => {
  try {
    const response = await api.get('/usuarios')
    usuarios.value = response.data.body
  } catch (error) {
    console.log(error)
  }
}

const addUser = async () => {
  if (
    nombre.value == '' ||
    usuario.value === '' ||
    password.value == '' ||
    rol.value == '' ||
    estado.value == ''
  ) {
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
        '/usuarios',
        {
          nombre: nombre.value,
          activo: estado.value,
          usuario: usuario.value,
          password: password.value,
          rol: rol.value,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      Swal.fire({
        icon: 'success',
        title: 'Usuario Agregado',
      })
      nombre.value = ''
      estado.value = 0
      usuario.value = ''
      password.value = ''
      rol.value = ''
      getUsuarios()
    } catch (error) {
      console.error(error)
    }
  }
}

const delUsuarios = async (id) => {
  try {
    await api.delete(`/usuarios/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    Swal.fire({
      icon: 'success',
      title: 'Usuario eliminado',
      text: 'El usuario ha sido eliminado correctamente',
    })
    getUsuarios()
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
      delUsuarios(id)
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('El usuario no ha sido eliminado', '', 'info')
    }
  })
}

const getUniqueUserModal = async (id) => {
  try {
    const response = await api.get(`/usuarios/${id}`)
    uqUser.value = response.data.body
    uqnombre.value = response.data.body[0].nombre
    uqestado.value = response.data.body[0].activo
  } catch (error) {
    console.log(error)
  }
}

const updateUser = async (id) => {
  try {
    const response = await api.put(
      `/usuarios`,
      {
        id: id,
        nombre: uqnombre.value,
        activo: uqestado.value,
        usuario: uqusuario.value,
        password: uqpassword.value,
        rol: uqrol.value,
      },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    )
    Swal.fire({
      icon: 'success',
      title: 'Usuario Actualizado',
      text: response.data.body,
    })
    getUsuarios()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al actualizar',
      text: error,
    })
  }
}

const clear = () => {
  uqnombre.value = ''
  uqestado.value = ''
  uqusuario.value = ''
  uqpassword.value = ''
  uqrol.value = ''
  getUsuarios()
}

onMounted(() => {
  getUsuarios()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Crear Usuario</h1>
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
                  <label class="form-label" for="nombre">Nombre</label>
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
                  <label class="form-label" for="estado">Estado</label>
                  <select
                    name="estado"
                    id="estado"
                    class="form-select"
                    v-model="estado"
                  >
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
                  </select>
                </div>
                <div>
                  <label class="form-label" for="usuario">Usuario</label>
                  <input
                    class="form-control"
                    type="text"
                    name="usuario"
                    id="usuario"
                    v-model="usuario"
                    required
                  />
                </div>
                <div>
                  <label class="form-label" for="password">Contraseña</label>
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    id="password"
                    v-model="password"
                    required
                  />
                </div>
                <div>
                  <label class="form-label" for="section">Rol</label>
                  <select
                    name="section"
                    id="section"
                    class="form-select"
                    v-model="rol"
                  >
                    <option value="supersu">Super Usuario</option>
                    <option value="admin">Administrador</option>
                    <option value="docente">Docente</option>
                  </select>
                </div>
                <div class="mt-4 d-grid">
                  <button class="btn btn-primary" @click="addUser">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Lista de Usuarios</h5>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in usuarios" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.nombre }}</td>
                    <td>{{ user.activo == 1 ? 'Activo' : 'Inactivo' }}</td>
                    <td class="d-flex gap-2">
                      <button
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        @click="getUniqueUserModal(user.id)"
                      >
                        <i class="bi bi-pencil"></i>
                      </button>
                      <button
                        class="btn btn-danger"
                        @click="questionDelete(user.id)"
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
              <ul class="list-group" v-for="us in uqUser" :key="us.id">
                <li class="list-group-item">
                  <h4>ID: {{ us.id }}</h4>
                </li>
                <li class="list-group-item">
                  Nombres:
                  <input
                    class="form-control"
                    type="text"
                    v-model="uqnombre"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  Estado:
                  <input
                    class="form-control"
                    type="text"
                    v-model="uqestado"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  Usuario:
                  <input
                    class="form-control"
                    type="text"
                    v-model="uqusuario"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  Contraseña:
                  <input
                    class="form-control"
                    type="password"
                    v-model="uqpassword"
                    autocomplete="off"
                  />
                </li>
                <li class="list-group-item">
                  Rol:
                  <select
                    class="form-select"
                    name="uqrol"
                    id="uqrol"
                    v-model="uqrol"
                  >
                    <option value="supersu">Super Usuario</option>
                    <option value="admin">Administrador</option>
                    <option value="docente">Docente</option>
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
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="updateUser(us.id)"
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
</template>
