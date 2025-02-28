<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import api from '../config/api'
import { useRouter } from 'vue-router'
import { useToken } from '../assets/composables/useToken'
import { useUser } from '../assets/composables/useUser'
import Swal from 'sweetalert2'

const { saveToken } = useToken()
const { saveUser } = useUser()

const router = useRouter()
let username = ref('')
let password = ref('')

const login = async () => {
  try {
    const { data } = await api.post('/auth/login', {
      usuario: username.value,
      password: password.value,
    })
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
      text: 'Ingresando al panel de administración',
      showConfirmButton: false,
      timer: 3500,
    })
    saveToken(data.body.token)
    saveUser(data.body.userId)
    router.push('/dashboard')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: `${error.response.data.body}`,
    })
    // alert(error.response.data.body)
  }
}
</script>

<template>
  <main>
    <div class="container">
      <section
        class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div
              class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center"
            >
              <div
                class="d-flex flex-column justify-content-center align-items-center py-4"
              >
                <RouterLink to="/" class="d-flex align-items-center w-auto">
                  <!-- <span class="d-none d-lg-block">Dashboard</span> -->
                  <img
                    class="img-fluid"
                    src="../assets/images/logo.jpg"
                    alt="Logo Liceo Bolivariano Antonio Alamo"
                    width="60"
                  />
                </RouterLink>
              </div>
              <!-- End Logo -->

              <div class="card mb-3">
                <div class="card-body">
                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">
                      Ingresar al Panel de Administración
                    </h5>
                    <p class="text-center small">
                      Ingresa tu usuario y contraseña
                    </p>
                  </div>

                  <form
                    class="row g-3 needs-validation"
                    @submit.prevent="onSubmit"
                  >
                    <div class="col-12">
                      <label for="yourUsername" class="form-label"
                        >Usuario</label
                      >
                      <div class="input-group has-validation">
                        <input
                          type="text"
                          name="username"
                          class="form-control"
                          id="yourUsername"
                          v-model="username"
                          required
                        />
                        <div class="invalid-feedback">
                          Please enter your username.
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label"
                        >Contraseña</label
                      >
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="yourPassword"
                        v-model="password"
                        required
                      />
                      <div class="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" @click="login">
                        Acceder
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
