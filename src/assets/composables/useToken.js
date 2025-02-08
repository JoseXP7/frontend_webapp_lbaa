// import { ref } from "vue"

// const token = ref("")
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export function useToken() {
  const router = useRouter()
  const saveToken = (token) => {
    //guarda el token en local storage para mantener la sesion
    return localStorage.setItem('token', token)
  }

  const getToken = () => {
    //primero verifica si existe token, si no existe lo manda al login, en caso contrario, retorna el token
    if (!localStorage.getItem('token')) {
      router.push('/login')
    } else {
      return localStorage.getItem('token')
    }
  }

  const signOut = () => {
    //elimina el token de local storage y manda al login
    localStorage.removeItem('token')
    Swal.fire({
      title: 'Sesión finalizada',
      icon: 'info',
      showConfirmButton: false,
      timer: 2000,
    })
  }

  return {
    saveToken,
    getToken,
    signOut,
  }
}
