<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside id="sidebar" class="sidebar">
    <ul class="sidebar-nav" id="sidebar-nav">
      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/dashboard">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </RouterLink>
      </li>
      <!-- End Dashboard Nav -->

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#charts-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-list-stars"></i><span>Secciones</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="charts-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <RouterLink to="/sectionsList">
              <i class="bi bi-circle"></i><span>Listar</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/addSection">
              <i class="bi bi-circle"></i><span>Crear Sección</span>
            </RouterLink>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i class="bi bi-circle"></i><span>Eliminar Sección</span>
            </a>
          </li>
        </ul>
      </li>
      <!-- End Sections Nav -->

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#students-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-file-earmark-person"></i><span>Estudiantes</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="students-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <RouterLink to="/studentsList">
              <i class="bi bi-circle"></i><span>Listar</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/addStudent">
              <i class="bi bi-circle"></i><span>Ingresar Estudiantes</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/uptStudent">
              <i class="bi bi-circle"></i><span>Actualizar Estudiantes</span>
            </RouterLink>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i class="bi bi-circle"></i><span>Eliminar Estudiantes</span>
            </a>
          </li>
        </ul>
      </li>
      <!-- End Sections Nav -->

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#docentes-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-file-earmark-person"></i><span>Docentes</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="docentes-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <RouterLink to="/docentesList">
              <i class="bi bi-circle"></i><span>Listar</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/addDocente">
              <i class="bi bi-circle"></i><span>Agregar Docente</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/uptDocente">
              <i class="bi bi-circle"></i><span>Actualizar Docente</span>
            </RouterLink>
          </li>
        </ul>
      </li>
      <!-- End Sections Nav -->

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#admin-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-file-earmark-person"></i><span>Administrativos</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="admin-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <RouterLink to="/adminList">
              <i class="bi bi-circle"></i><span>Listar</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/addAdministrativo">
              <i class="bi bi-circle"></i><span>Agregar Administrativo</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/uptAdministrativo">
              <i class="bi bi-circle"></i><span>Actualizar Administrativo</span>
            </RouterLink>
          </li>
        </ul>
      </li>
      <!-- End Sections Nav -->

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#obreros-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-file-earmark-person"></i><span>Obreros</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="obreros-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <RouterLink to="/obrerosList">
              <i class="bi bi-circle"></i><span>Listar</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/addObrero">
              <i class="bi bi-circle"></i><span>Agregar Obrero</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/uptObrero">
              <i class="bi bi-circle"></i><span>Actualizar Obrero</span>
            </RouterLink>
          </li>
        </ul>
      </li>
      <!-- End Sections Nav -->

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#vigilantes-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-shield"></i><span>Vigilantes</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="vigilantes-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <RouterLink to="/vigilantesList">
              <i class="bi bi-circle"></i><span>Listar</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/addVigilante">
              <i class="bi bi-circle"></i><span>Agregar Vigilante</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/uptVigilante">
              <i class="bi bi-circle"></i><span>Actualizar Vigilante</span>
            </RouterLink>
          </li>
        </ul>
      </li>
      <!-- End Sections Nav -->

      <li class="nav-item">
        <a
          class="nav-link collapsed"
          data-bs-target="#cocineros-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i class="bi bi-egg-fried"></i><span>Cocineros</span
          ><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul
          id="cocineros-nav"
          class="nav-content collapse"
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <RouterLink to="/cocinerosList">
              <i class="bi bi-circle"></i><span>Listar</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/addCocinero">
              <i class="bi bi-circle"></i><span>Agregar Cocinero</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/uptCocinero">
              <i class="bi bi-circle"></i><span>Actualizar Cocinero</span>
            </RouterLink>
          </li>
        </ul>
      </li>
      <!-- End Sections Nav -->

      <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <RouterLink class="nav-link collapsed" to="/uploadTask">
          <i class="bi bi-file-earmark-arrow-up"></i>
          <span>Subir Guía</span>
        </RouterLink>
      </li>
      <!-- End Profile Page Nav -->
    </ul>
  </aside>
  <!-- End Sidebar-->
</template>
