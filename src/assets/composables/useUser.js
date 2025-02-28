import api from '../../config/api'
import Swal from 'sweetalert2'

export function useUser() {
  const saveUser = async (userId) => {
    const user = await api.get(`/usuarios/${userId}`)
    //guarda el usuario en local storage y convertirlo a JSON
    return localStorage.setItem('user', JSON.stringify(user.data.body))
  }

  const getUser = () => {
    return JSON.parse(localStorage.getItem('user'))
  }

  const deleteUser = () => {
    //elimina el usuario de local storage
    return localStorage.removeItem('user')
  }

  return {
    saveUser,
    getUser,
    deleteUser,
  }
}
