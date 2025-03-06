<script setup>
import { RouterLink } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

useSeoMeta({
  title: 'Sobre nosotros',
  description:
    'Conoce la historia, misión y visión del Liceo Bolivariano Antonio Álamo. Descubre nuestro compromiso con la educación.',
  keywords: 'L.B. Antonio Álamo, historia , misión, visión, educación',
})
</script>

<template>
  <Header />
  <main class="main">
    <!-- Page Title -->
    <div class="page-title" data-aos="fade">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1>Sobre nosotros<br /></h1>
              <p class="mb-0">
                Historia de la Unidad Educativa Nacional Antonio Álamo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav class="breadcrumbs">
        <div class="container">
          <ol>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li class="current">Sobre nosotros<br /></li>
          </ol>
        </div>
      </nav>
    </div>
    <!-- End Page Title -->
    <!-- About Us Section -->
    <section id="about-us" class="section about-us">
      <div class="container">
        <div class="row gy-4">
          <div
            class="col-lg-6 order-1 order-lg-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="../assets/images/fachada_antonio_alamo2.jpg"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="col-lg-6 order-2 order-lg-1 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p>
              El 16 de octubre de 1972, nació el Liceo Antonio Álamo, gracias a
              la iniciativa de los pobladores de Río Claro, quienes impulsaron a
              la comunidad estudiantil a solicitar un espacio para la formación
              de bachilleres. En sus inicios, el liceo contaba con tres cursos:
              dos primeros años y un segundo año del Ciclo Básico Común. Entre
              los pioneros de esta institución destacan Yolanda Faraco y Arelys
              Guerrero, quienes se desempeñaron como secretarias durante
              aquellos primeros años, bajo la dirección del profesor Henry
              Pacheco. Junto a ellos, seis obreros educacionales contribuyeron
              al proyecto: Ángel Albahaca (conocido como "Chiche Albahaca"),
              quien impartía clases de agricultura, castellano y educación
              física; Eglee de Albahaca, su esposa, quien enseñaba formación
              social, moral y cívica, educación artística, historia y geografía;
              Heriberto Mujica, el "teacher Mujica"; Miguel López, apodado "el
              Galileo", encargado de las matemáticas; Martín Noguera, quien
              enseñaba dibujo técnico; y la profesora Luisa Escalona, dedicada a
              las clases de hogar. Unidos por la necesidad de trabajar y de
              educar, hicieron realidad el Ciclo Básico Común "Antonio Álamo",
              tras una historia de luchas y esfuerzos.
            </p>
            <p>
              Con el tiempo, se incorporaron al equipo Aída y Elena de Escalona,
              así como José Celestino ("Don Cele"), trasladado desde la escuela
              Boyuare, quien dedicó más de cuarenta años al sector educativo. En
              1974, llegó Ramón Figueroa ("Monche"), y con la inauguración de la
              nueva sede en 1976, se sumaron Francisca Perpetua Mendoza de
              Castro, María Virginia Loyo de García y Ramona Escalona.
            </p>
            <p>
              Los obstáculos iniciales incluyeron la elaboración de matrículas y
              la realización de un censo que reveló que solo había quince
              alumnos propios de Río Claro, por lo que se necesitaba reclutar al
              menos quince más. En esa época, las restricciones para admitir a
              mayores de edad y la falta de transporte hacia Barquisimeto
              dificultaban el acceso a la educación. Muchos jóvenes, al terminar
              la escuela primaria, no tenían opciones para continuar sus
              estudios, lo que llevó a algunos a formar parejas a temprana edad.
            </p>
            <p>
              La lucha por obtener un terreno para el liceo contó con el apoyo
              de jóvenes dirigentes del Movimiento de Izquierda Revolucionario
              (MIR), quienes ocuparon un terreno propiedad de Macario Cuicas,
              donde hoy se encuentra la institución. Entre los participantes
              destacaron Macario González, Hernán Pérez, Dauvis Durán, Marcos
              Torres, José Luis Romero ("Pipita"), Norys Arrieche, Nelson
              Blanco, Mario Rivero Rojas, Edgar Pérez, Juan Alexis Rivero Rojas
              y otros. Finalmente, el gobierno adquirió el terreno por un costo
              aproximado de dos millones cuatrocientos mil bolívares.
            </p>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-lg-10">
            <p>
              En 1975, el gobernador del estado Lara, el ingeniero Hernán
              Rodríguez Araujo, aprobó la construcción de varios liceos, entre
              ellos el Ciclo Básico Antonio Álamo, inicialmente llamado Ciclo
              Básico Río Claro, diseñado para albergar a seiscientos alumnos. En
              1976, el liceo inició actividades en su nueva sede, aunque
              enfrentó grandes dificultades. La gobernación asignó un transporte
              para los estudiantes de Buena Vista, pero las largas jornadas
              llevaron a implementar la "Operación Amigo", donde familias como
              las de Benito Giménez, Bartolo Mendoza, Ana Yépez, Juan Rivero,
              José Pastor Moreno y Carlota de Torres ofrecieron alojamiento a
              los jóvenes, permitiéndoles continuar sus estudios. Hoy, muchos de
              esos estudiantes son profesionales destacados.
            </p>
            <p>
              Entre los actores clave de la comunidad escolar se encuentran el
              profesor Nelson Martínez (QEPD), Luisa Brito de Escalona, Henry
              Pacheco, Freddy Manzanarez, Emiro Salazar, Josefina de Maduro,
              Nerio Viscaya, Omar Maduro, la Dra. Nelly Rojas (juez), Héctor
              Carvajal, Marina de Maduro, Gregoria Mosquera, María de Lucena,
              Ana María (apellido desconocido), Ernesto Montemurre, Henry
              Aguilar, Graciela Parra, Cira Pérez y José Oviedo. Posteriormente,
              se incorporaron profesores como Margot Valera, Rosalba Márquez,
              Hilda Cruz, Holanda Díaz, Aurora Nieto, José Mora, Carlos Sánchez,
              Gladys de Sánchez, Camila Díaz, Alinda Álvarez, Carolina Soto,
              Rafael Barrios, Ana Belky Mora, Narciso García, las hermanas
              Gallardo (Vilmary y Jenny), Emma Piñero, Zonia González, Labynia
              Corsini, María Eva Pérez, Marili Peraza, Rosilda Castillo, Maira
              Rivero, Iralis Torres, Yosmari Goyo de Crespo, Lisbeth Torrealba,
              Saulo Torrealba, Indira Abarca (secretaria), Margelys Mendoza,
              Nayleth Pérez, Yuleyma Rodríguez, Dulce Giménez, Marina Pargas,
              Josefina Peña Porteles y Víctor Sequera.
            </p>
            <p>
              Entre 2000 y 2005, ingresaron profesores más jóvenes, como
              Rosalina López, José Aguilar, Luis Oviedo, Douglas Álvarez,
              Milkreys Mendoza, Magdiel Mendoza, Job Noguera y José Ignacio
              Montero. También destacan Gregorio Rodríguez, Crispet Ojeda, Pedro
              Vargas, Mary Jiménez, Jaime Merlo, Lidubig Lugo, Aide Hernández,
              Juan Manuel García, Carmen Campos y Alba Fernández (secretaria).
              Además, no se puede olvidar a Miguel Montes de Oca, Jhony Flores,
              Newman Osorio, Jesús Molina, Marily Rodríguez, María Linares, Flor
              Teresa Pérez, Yelitza Arrieche, Alberto Urquiola y otros.
            </p>
            <p>
              El departamento de evaluación contó con la invaluable labor de
              Olga Figueroa y Omaira Saavedra. El profesor Rafael José Barrios
              recuerda con cariño aquellos inicios en una vieja casa al final de
              la Avenida Las Américas, donde el 5 de octubre de 1972 se fundó lo
              que hoy es el Liceo Bolivariano Antonio Álamo. Surgió por la
              necesidad de los jóvenes y adultos de Río Claro, quienes, al
              terminar el sexto grado, no tenían opciones educativas locales y
              debían trasladarse a Barquisimeto. El liceo fue inicialmente
              nombrado Ciclo Básico Común "Río Claro", aunque se había propuesto
              el nombre "Juvencio Moreno", en honor a un joven del pueblo que
              murió luchando contra la injusticia en las montañas de Portuguesa.
            </p>
            <p>
              El primer director fue el profesor Henry Pacheco, acompañado por
              Omar Maduro, Eglee de Albahaca, Martín Noguera, Chiche Albahaca y
              Ricardo Kent, quienes dedicaron su esfuerzo a consolidar el
              plantel. La antigua sede, que albergó el telégrafo y luego la
              CANTV, fue abandonada y hoy funciona como un supermercado chino.
              Allí también estuvo el Hotel Río, con su famoso salón "Río
              Cristal", escenario de las mejores fiestas de la época.
            </p>
            <p>
              La primera promoción de tercer año contó con quince alumnos, la
              mayoría de los cuales continuó sus estudios en Barquisimeto. A
              pesar de las dificultades, como la falta de transporte, la
              comunidad nunca abandonó su pueblo, llevándolo siempre en el alma.
              Con el tiempo, la matrícula creció hasta alcanzar los novecientos
              veinte alumnos, superando la capacidad inicial de la
              infraestructura, diseñada para trescientos. La primera promoción
              de bachilleres se graduó en 1982.
            </p>
            <p>
              El Liceo Antonio Álamo ha sido y seguirá siendo el alma máter de
              Río Claro, centro de atención y radiación de actividades
              culturales, deportivas, sociales y científicas. En 2004, se
              iniciaron talleres para adaptarse a la nueva modalidad educativa,
              y a partir del 16 de septiembre de 2006, el liceo se convirtió en
              un Liceo Bolivariano.
            </p>
            <p>
              Esta historia continuará escribiéndose con el esfuerzo de todos.
              Dejemos registro de lo que hacemos para que las futuras
              generaciones conozcan nuestro legado y sigan el camino de la
              superación, guiados por los valores bolivarianos y la fe en
              nuestra patrona, la Virgen del Pilar.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- /About Us Section -->
    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Sobre nosotros</h2>
        <p>Misión</p>
      </div>
      <!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <p>
              Brindar a los estudiantes una educación integral y ejemplar,
              fundamentada en valores sociales, culturales y deportivos, que les
              permita desarrollar aptitudes y actitudes positivas para asumir
              responsabilidades académicas y personales. Como institución
              educativa, planificamos acciones que fomenten principios y
              valores, promoviendo el desarrollo intelectual y personal de
              nuestros alumnos, para que sean capaces de resolver problemas
              cualitativos y cuantitativos dentro del contexto escolar y
              socio-comunitario.
            </p>
            <p>
              Nos comprometemos a ofrecer una educación reflexiva, constructiva
              e innovadora, en interacción constante con la comunidad,
              fomentando habilidades y destrezas que preparen a los estudiantes
              para desempeñarse en diversos oficios, en el marco de la educación
              bolivariana.
            </p>
            <p>
              Abrimos espacios para el saber, el convivir y el trabajo, a través
              de áreas pedagógicas, técnicas y productivas, proyectando valores
              como la disciplina, el respeto y la integridad, pilares
              fundamentales de nuestra identidad educativa.
            </p>
          </div>
        </div>
      </div>

      <!-- Section Title -->
      <div class="container section-title mt-5" data-aos="fade-up">
        <h2>Sobre nosotros</h2>
        <p>Visión</p>
      </div>
      <!-- End Section Title -->
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <p>
              Convertir nuestra institución en una casa de estudios de
              excelencia, dotada con todos los recursos necesarios para
              garantizar la estabilidad y formación integral de nuestros
              estudiantes. Buscamos ofrecer una educación participativa,
              protagónica e inclusiva, libre de cualquier tipo de
              discriminación, que responda a las necesidades y sugerencias de la
              comunidad.
            </p>
            <p>
              Nuestro objetivo es formar estudiantes críticos, reflexivos y
              capaces de interpretar, analizar y aplicar estrategias para
              resolver conflictos de toda índole. Promovemos vivencias y
              convivencias basadas en la ética, la humildad, el sentido de
              pertenencia, el amor, el cariño y el respeto hacia todos.
            </p>
            <p>
              Además, contribuimos de manera progresiva y organizada a la
              creación de un ambiente de tranquilidad y armonía, tanto en el
              ámbito familiar como en la sociedad en general, formando
              ciudadanos comprometidos con el bienestar colectivo.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- /Testimonials Section -->
  </main>
  <Footer />
</template>

<style></style>
