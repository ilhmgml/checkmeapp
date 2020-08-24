<template>
  <q-page padding>
<div class="flex flex-center">
  <div flat class="my-card text-left" style="max-width: 500px; width:100%">
    <q-toolbar class="bg-white text-dark">
      <q-toolbar-title class="text-h5">Consultation History</q-toolbar-title>
    </q-toolbar>
    <q-list v-if="doctors">
      <q-item >
           <q-item-section header>DOCTOR</q-item-section>
          <q-item-section  side>
          SCHEDULE
        </q-item-section>
      </q-item>
      <q-item v-for="list in doctors" :key="list.letter" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="grey" text-color="white">
            <q-img :src="list.image"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ list.doctor_name }}</q-item-label>
          <q-item-label caption lines="1">{{ list.specialization }}</q-item-label>
          <q-item-label caption lines="2">{{ list.place}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption lines="1">AUG 5 7:00</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="text-center text-h6">
      <br><br>
      You have not scheduled an appointment yet.
    </div>
  </div>
  </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      tab: 'all',
      text: '',
      doctors: null
      //[
        // {
        //   image: require('../assets/Profile/13.jpg'),
        //   doctor_name: 'Dr. Romualdo Cacas',
        //   specialization: 'Cardiologist',
        //   schedule: 'AUG 8 7:00'
        // },
        // {
        //   image: require('../assets/Profile/10.jpg'),
        //   doctor_name: 'Dr. Genaro Asis',
        //   specialization: 'Orthopedic Surgery',
        //   schedule: 'AUG 5 14:00'
        // },
        // {
        //   image: require('../assets/Profile/11.jpg'),
        //   doctor_name: 'Dr. Leslie Ann Tiangson',
        //   specialization: 'Pediatrician',
        //   schedule: 'MAR 1 8:00'
        // }
      //]
    }
  }
}
</script>
