<template>
  <q-layout view="lHh Lpr lFf">
    <q-header  class="bg-white">
      <q-toolbar class="shadow-1 text-primary">
        <q-avatar>
          <q-avatar square color="primary" text-color="white">C</q-avatar>
        </q-avatar>
        <q-toolbar-title class="text-primary">Check Me App</q-toolbar-title>
          <q-btn-dropdown v-if="userDetails.userId" flat color="primary" :src="userDetails.photo">
            <div class="row no-wrap q-pa-md q-mx-sm">
              <div class="column items-center">
                <q-avatar size="72px">
                  <img :src="userDetails.photo"/>
                </q-avatar>
                  <div class="text-weight-bold q-mt-md q-mb-xs">{{userDetails.fname}}</div>
                  <div class="q-mb-sm">{{userDetails.email}}</div>
                <q-btn @click="logoutUser"
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                  to="/"
                />
              </div>
            </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('store', ['userDetails']),
    },
    methods: {
      ...mapActions('store', ['logoutUser'])
    }
  }
</script>
