import api from '../../config/api'

export function useUser() {
  const saveUser = async (userId, rol) => {
    const user = await api.get(`/usuarios/${userId}`)

    const dataUser = {
      id: user.data.body[0].id,
      nombre: user.data.body[0].nombre,
      activo: user.data.body[0].activo,
      rol: rol,
    }
    //guarda el usuario en local storage y convertirlo a JSON
    return localStorage.setItem('user', JSON.stringify(dataUser))
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
