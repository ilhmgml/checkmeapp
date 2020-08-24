<template>
  <q-page padding>
<div class="flex flex-center">
  <div flat class="my-card text-left" style="max-width: 500px; width:100%">
    <q-toolbar class="bg-white text-positive ">
      <q-toolbar-title class="text-h6">{{ $route.params.doctypeType }}</q-toolbar-title>
    </q-toolbar>
    <q-list
      v-for="(list, key) in doctors"
      :key="key">
      <q-item
        v-if="list.doctype.id==$route.params.doctypeID"
        clickable
        v-ripple
        :to="'/profiledoctor/' + key">
        <q-item-section avatar>
          <q-avatar color="grey" size="60px" text-color="white" alt="image">
            <q-img :src="list.photo"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Dr. {{ list.fname }} {{ list.lname }}</q-item-label>
          <q-item-label caption lines="1">{{ list.doctype.type }}</q-item-label>
          <q-item-label caption lines="2">{{ list.address.add }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
  </div>
  </q-page>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        tab: 'all',
        title: getDocType()
      }
    },
    methods:{
      getDocType(){
        doctors.forEach(doc => {
            console.log('>>>>>>', doc.doctype.id)
            return 'doc.doctype.type'
        });
      }
    },
    computed: {
      ...mapGetters('store', ['doctors'])
    }
  }
</script>
