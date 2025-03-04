// import { ref } from "vue"
import { useUser } from '@/assets/composables/useUser'
const { deleteUser } = useUser()

import Swal from 'sweetalert2'

export function useToken() {
  const saveToken = (token) => {
    //guarda el token en local storage para mantener la sesion
    return localStorage.setItem('token', token)
  }

  const getToken = () => {
    return localStorage.getItem('token')
  }

  const signOut = () => {
    //elimina el token de local storage y manda al login
    localStorage.removeItem('token')
    deleteUser()
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
