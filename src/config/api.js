import axios from 'axios'

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API ||
    'https://api-nodejs-mysql-for-lbaa.onrender.com/api/',
})

//recuerda crear otra instancia para trabajar con los estudiantes, y despues exportarla

export default api
