<template>
  <q-page padding >
    <div class="flex flex-center">
    <div class=" justify-center text-left" style="max-width: 400px; width:100%">
    <q-toolbar class="bg-white text-black bold">
      <q-toolbar-title class="text-h6">TOP DOCTORS</q-toolbar-title>
    </q-toolbar>
    <q-list
      v-for="(list, key) in doctors"
      :key="key">
      <q-item 
        v-if="list.top"
        clickable
        v-ripple
        class="q-my-sm"
        :to="'/profiledoctor/' + key">
          <q-item-section avatar>
            <q-avatar color="grey" text-color="white">
              <q-img :src="list.photo"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Dr. {{ list.fname }} {{ list.lname }}</q-item-label>
            <q-item-label caption lines="1">{{ list.doctype.type }}</q-item-label>
          </q-item-section>
      </q-item>
    </q-list>
    <div class="row q-gutter-md q-pa-sm">
      <div class="col q-gutter-sm">
        <q-card class="my-card" :class="card.background_color" exact v-for="card in col_one_card" :key="card.label" >
          <router-link :to="card.link_to" tag="q-card">
          <q-card-section class="text-white text-center">
            <q-icon 
            name="person" />
            <div :class="card.font_size" class="text-weight-thin">{{card.label}}</div>
          </q-card-section>
          </router-link>
        </q-card>
      </div>
      <div class="col q-gutter-sm">
        <q-card class="my-card" :class="card.background_color"  exact v-for="card in col_two_card" :key="card.label" >
          <router-link :to="card.link_to" tag="q-card">
          <q-card-section class="text-white text-center">
            <q-icon 
            name="place" />
            <div :class="card.font_size" class="text-weight-thin">{{card.label}}</div>
          </q-card-section>
          </router-link>
        </q-card>
        <q-card @click="onClickNearHospital" class="my-card bg-info" >
          <q-card-section class="text-white text-center">
            <q-icon 
            name="place" />
            <div class="text-weight-thin text-h5">Hospitals Near Me</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

    </div>
  </q-page>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'PageIndex',
    data () {
      return {
        count: 3,
        col_one_card: [
          {
            label: 'Consult Now',
            background_color: 'bg-accent',
            link_to: '/consultdoctor',
            font_size: 'text-h5'
          },
          {
            label: 'Consultation History',
            background_color: 'bg-secondary',
            link_to: '/consulthistory',
            font_size: 'text-h6'
          }
        ],
        col_two_card: [
          {
            label: 'Doctors Near Me',
            background_color: 'bg-yellow-9',
            link_to: '/doctornearme',
            font_size: 'text-h5'
          }
        ]
      }
    },
    computed: {
      ...mapGetters('store', ['doctors'])
    },
    methods: {
      onClickNearHospital () {
        this.$q.dialog({
          title: 'Important Message',
          message: 'This feature is currenly unavailable.'
        }).onOk(() => {
          // console.log('OK')
        }).onCancel(() => {
          // console.log('Cancel')
        }).onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        })
      }
    }
  }
</script>
<style lang="sass" scoped>
.my-card
  height: 110px
  width: 100%
  max-width: 140px

</style>
