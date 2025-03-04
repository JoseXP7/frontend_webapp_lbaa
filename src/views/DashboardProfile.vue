<script setup>
import { useToken } from '../assets/composables/useToken'
import { useUser } from '@/assets/composables/useUser'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'
import Swal from 'sweetalert2'

import api from '../config/api'
const router = useRouter()

const user = ref([])

const userId = ref(0)
const nombre = ref('')
const estado = ref(0)
const usuario = ref('')
const password = ref('')
const rol = ref('')

const { getToken } = useToken()
const { getUser } = useUser()

const userData = getUser()

const getProfile = async (id) => {
  try {
    const response = await api.get(`/usuarios/${id}`)
    user.value = response.data.body
    userId.value = response.data.body[0].id
    nombre.value = response.data.body[0].nombre
    estado.value = response.data.body[0].activo
    rol.value = userData.rol //podria provocar fallas de seguridad usar data de localStorage
  } catch (error) {
    console.log(error)
  }
}

const updateProfile = async (id) => {
  if (nombre.value == '' || usuario.value == '' || password.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Todos los campos son obligatorios',
      showConfirmButton: false,
      timer: 3500,
    })
  } else {
    try {
      const response = await api.put(
        `/usuarios`,
        {
          id: userId.value,
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
        title: 'Éxito',
        text: response.data.body,
        showConfirmButton: false,
        timer: 3500,
      })
      getProfile(id)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.body,
        showConfirmButton: false,
        timer: 3500,
      })
    }
  }
}

onMounted(() => {
  if (!localStorage.getItem('token') || !localStorage.getItem('user')) {
    router.push('/login')
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No tienes permisos para acceder a esta página',
      showConfirmButton: false,
      timer: 3500,
    })
  } else {
    getToken()
    getProfile(userData.id)
  }
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Mi Perfil</h1>
    </div>
    <!-- End Page Title -->

    <section class="section" v-if="rol === 'supersu'">
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Actualizar Perfil</h5>
              <form @submit.prevent="onSubmit" autocomplete="off">
                <div>
                  <label class="form-label" for="nombre">Nombre</label>
                  <input
                    class="form-control"
                    type="text"
                    name="nombre"
                    id="nombre"
                    v-model="nombre"
                  />
                </div>
                <div>
                  <label class="form-label" for="estado">Estado</label>
                  <select
                    class="form-select"
                    name="estado"
                    id="estado"
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
                  />
                </div>

                <div class="mt-4 d-grid">
                  <button
                    class="btn btn-primary"
                    @click="updateProfile(userId)"
                  >
                    Aceptar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section" v-else>
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Información</h5>
              <p>Nombre: {{ nombre }}</p>
              <p>Rol: {{ rol }}</p>
              <p>Estado: {{ estado ? 'Activo' : 'Inactivo' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
