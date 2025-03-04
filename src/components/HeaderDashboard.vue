<script setup>
import { useRouter, RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useToken } from '@/assets/composables/useToken'
import { useUser } from '@/assets/composables/useUser'
import Swal from 'sweetalert2'

const router = useRouter()

const { getUser } = useUser()
let user = ref([])
const nombre = ref('')
const activo = ref(0)
const rol = ref('')

const { signOut } = useToken()
function collapse() {
  const navMobile = document.querySelector('body')
  navMobile.classList.toggle('toggle-sidebar')
}

async function infoUser() {
  //usa la funcion getUser del composable useUser para obtener la informacion del usuario de un JSON parseado
  user.value = await getUser()
  nombre.value = user.value.nombre
  activo.value = user.value.activo
  rol.value = user.value.rol
}

const logout = () => {
  signOut()
}

onMounted(() => {
  //primero verificar si existe en localstorage el token
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
    infoUser()
  }
})
</script>

<template>
  <header
    id="header"
    class="header fixed-top d-flex align-items-center justify-content-between pe-5"
  >
    <div class="d-flex align-items-center justify-content-between">
      <RouterLink to="/dashboard" class="logo d-flex align-items-center">
        <span class="d-none d-lg-block">Dashboard</span>
      </RouterLink>
      <i class="bi bi-list toggle-sidebar-btn" @click="collapse"></i>
    </div>
    <!-- End Logo -->

    <nav class="header-nav">
      <ul class="d-flex align-items-center">
        <li class="nav-item dropdown pe-3">
          <a
            class="nav-link nav-profile d-flex align-items-center pe-0"
            href="#"
            data-bs-toggle="dropdown"
          >
            <img
              src="../assets/images/logo.jpg"
              alt="Profile"
              class="rounded-circle"
            />
            <span class="d-none d-md-block dropdown-toggle ps-2">{{
              nombre
            }}</span> </a
          ><!-- End Profile Iamge Icon -->

          <ul
            class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
          >
            <li class="dropdown-header">
              <h6>{{ nombre }}</h6>
              <span
                >Estado: {{ activo ? 'Activo' : 'Inactivo' }} | Rol:
                {{ rol }}</span
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <RouterLink
                class="dropdown-item d-flex align-items-center"
                to="/myprofile"
              >
                <i class="bi bi-person"></i>
                <span>Mi perfil</span>
              </RouterLink>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>

            <li>
              <RouterLink
                class="dropdown-item d-flex align-items-center"
                @click="logout"
                to="/login"
              >
                <i class="bi bi-box-arrow-right"></i>
                <span>Cerrar Sesión</span>
              </RouterLink>
            </li>
          </ul>
          <!-- End Profile Dropdown Items -->
        </li>
        <!-- End Profile Nav -->
      </ul>
    </nav>
    <!-- End Icons Navigation -->
  </header>
</template>
