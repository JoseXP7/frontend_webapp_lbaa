<script setup>
import PureCounter from '@srexi/purecounterjs'
import { onMounted, ref } from 'vue'
import api from '../config/api'

let students = ref(0)
let sections = ref(0)
let staff = ref(0)

const getStudents = async () => {
  try {
    const response = await api.get('/estudiantes')
    students.value = response.data.body.length
  } catch (error) {
    console.log(error)
  }
}

const getSections = async () => {
  try {
    const response = await api.get('/cursos')
    sections.value = response.data.body.length
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getStudents()
  getSections()
  new PureCounter({
    selector: '.purecounter',
  })
})
</script>

<template>
  <!-- Counts Section -->
  <section id="counts" class="section counts light-background">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4">
        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start="0"
              :data-purecounter-end="students"
              data-purecounter-duration="1"
              class="purecounter"
            ></span>
            <p>Estudiantes</p>
          </div>
        </div>
        <!-- End Stats Item -->

        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start="0"
              :data-purecounter-end="sections"
              data-purecounter-duration="1"
              class="purecounter"
            ></span>
            <p>Secciones</p>
          </div>
        </div>
        <!-- End Stats Item -->

        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <span
              data-purecounter-start="0"
              data-purecounter-end="42"
              data-purecounter-duration="1"
              class="purecounter"
            ></span>
            <p>Personal</p>
          </div>
        </div>
        <!-- End Stats Item -->

        <div class="col-lg-3 col-md-6">
          <div class="stats-item text-center w-100 h-100">
            <div class="d-flex justify-content-center align-items-center">
              <span>+</span>
              <span
                data-purecounter-start="0"
                data-purecounter-end="50"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
            </div>

            <p>Años educando</p>
          </div>
        </div>
        <!-- End Stats Item -->
      </div>
    </div>
  </section>
  <!-- /Counts Section -->
</template>
