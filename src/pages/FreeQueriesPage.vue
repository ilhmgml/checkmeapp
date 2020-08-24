<template>
  <q-page padding>
    <q-page-sticky position="top-right" :offset="[10, 10]">
        <q-btn fab size="10px" text-color="primary" icon="help" color="white"  @click="about_dialog = true" />
    </q-page-sticky>
      <q-dialog v-model="about_dialog">
        <q-card class="my-card">
          <q-card-section class="row items-center q-pt-sm">
            <q-icon name="help" color="primary" size="30px" left/>
            <div class="text-h6 text-primary">Free Queries</div>
            <q-space />
            <q-btn icon="close" color="primary" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-caption text-grey">
            Free Medical Queries will to help figure out the possible minor illness by providing your symptoms,
            it will suggest the herbal medicine you can use as home treatment for your minor illness and refer,
            you to physician appropriate to your health problem.
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    <ChabotQueries/>
  </q-page>
</template>
<script>
import ChabotQueries from '../components/ChatBotQueries.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ChabotQueries
  },
  data () {
    return {
      about_dialog: false
    }
  }
}
</script>
