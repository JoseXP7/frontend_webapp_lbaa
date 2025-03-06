<script setup>
import { useToken } from '../assets/composables/useToken'
import { onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import SidebarDashboard from '@/components/SidebarDashboard.vue'

const { getToken } = useToken()

useHead({
  title: 'Dashboard',
})

onMounted(() => {
  getToken()
})
</script>

<template>
  <HeaderDashboard />
  <SidebarDashboard />
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Dashboard</h1>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <!-- <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Example Card</h5>
              <p>
                This is an examle page with no contrnt. You can use it as a
                starter for your custom pages.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Example Card</h5>
              <p>
                This is an examle page with no contrnt. You can use it as a
                starter for your custom pages.
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
