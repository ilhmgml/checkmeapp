<template>
  <q-page padding>
  <div class="flex flex-center">
    <div flat class="text-left" style="max-width: 300px; width:100%">
    <div class="q-pl-sm q-mt-md">
      <p class="q-ml-sm text-h6 text-blue-grey-9 text-weight-thin">What type of doctor are you looking for?</p>
    </div>
    <q-list>
      <q-item v-for="list in doctype" :key="list.id" class="q-my-sm" clickable v-ripple :to="'/listdoctor/' + list.id + '/' + list.type">
        <q-item-section class="text-center">
          <!-- <q-item-label>{{ contact.specialization }}</q-item-label> -->
              <q-btn align="center" unelevated class=" text-h6"  color="grey-6" :label="list.type" />
          <!-- <q-item-label caption lines="1">{{ contact.email }}</q-item-label> -->
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      doctype: [
        {
          id: "DOCTYPEID1",
          type: 'Radiologist'
        },
        {
          id: "DOCTYPEID2",
          type: 'Internist'
        },
        {
          id: "DOCTYPEID3",
          type: 'Dentist'
        },
        {
          id: "DOCTYPEID4",
          type: 'Pediatrician'
        },
        {
          id: "DOCTYPEID5",
          type: 'Nutritionist'
        },
        {
          id: "DOCTYPEID6",
          type: 'Psychologist'
        }
      ]
    }
  }
}
</script>
