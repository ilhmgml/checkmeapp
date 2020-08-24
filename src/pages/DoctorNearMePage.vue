<template>
  <q-page padding>
<div class="flex flex-center  ">
  <div flat class="my-card text-left" style="max-width: 500px; width:100%">
    <div class="q-mt-md">
      <p class="q-ml-sm text-h6 text-positive"> FIND DOCTORS NEAR ME
        <small class="text-black"> <br> Doctors near in your area : {{ userDetails.address }}</small>
      </p>
    </div>
    <q-list v-for="(list, key) in doctors" :key="key">
      <q-item v-if="list.address.id==userDetails.addressid" :to="'/profiledoctor/' + key" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar color="grey" size="60px" text-color="white">
            <q-img :src="list.photo"/>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Dr. {{ list.fname }} {{ list.lname }}</q-item-label>
          <q-item-label caption lines="1">{{ list.doctype.type }}</q-item-label>
          <q-item-label caption lines="2">{{ list.address.add}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
   </div>
  </q-page>
</template>

<script>
  import { mapGetters,mapState } from 'vuex'
  export default {
    data () {
      return {
        text: ''
      }
    },
    computed: {
      ...mapState('store', ['userDetails']),
      ...mapGetters('store', ['doctors'])
    }
  }
</script>
