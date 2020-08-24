<template>
  <q-layout view="lHh Lpr lFf">
    <q-header  class="bg-white">
      <q-toolbar class="shadow-1 text-primary">
        <q-avatar>
          <q-avatar square color="primary" text-color="white">C</q-avatar>
        </q-avatar>
        <q-toolbar-title class="text-primary text-h5"><small>Check Me App</small></q-toolbar-title>
        <q-fab
        flat
        v-model="fab"
        label="ABOUT"
        vertical-actions-align="left"
        color="primary  "
        padding="none xl"
        icon="keyboard_arrow_down"
        direction="down"
        :hide-label="hideLabels"
        >
        <q-fab-action padding="3px" :hide-label="hideLabels" color="orange" @click="card = true" icon="info" label="About App" />
        <q-fab-action padding="3px" :hide-label="hideLabels" color="primary" @click="aboutus = true" icon="share" label="Follow Us"/>
        <q-fab-action padding="3px" :hide-label="hideLabels" color="info" @click="feedback = true" icon="feedback" label="Feedback" />
      </q-fab>
      </q-toolbar>
    </q-header>
    <!-- Dialog for About App -->
    <q-dialog v-model="card">
      <q-card class="my-card1">
        <q-card-section class="row items-center q-pt-sm">
          <q-icon name="feedback" color="primary" size="30px" left/>
          <div class="text-h6 text-primary">About App</div>
          <q-space />
          <q-btn icon="close" color="primary" flat round dense v-close-popup />
        </q-card-section>
        <div class="q-pa-xs text-center q-gutter-xs">
          <q-avatar size="60px" font-size="30px" color="primary" text-color="white">CM </q-avatar>
        </div>
        <q-card-section>
          <div class="row no-wrap text-center items-center">
            <div class="col text-h6 ellipsis">
              Check Me
            </div>
          </div>
          <div class="text-caption text-center text-primary">
            v0.0.1
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            It is MEDICAL CONSULTATION APP that has a knowledge-based expert system that connects a patient to a doctor online.
            This app will provide medical consultation without the physical presence of a doctor and can be done online.
            It will also provide offline services such as Covid-19 Assessment or second opinion to minor ailments.
            With this app it can lessen the worries of people of time and travel costs, ensures social distancing, and assures
            that one's health is moinitored whether he/she resides in on area having poor internet connectivity.
          </div>
        </q-card-section>
        <q-separator />
        <q-card-actions align="center"  class="q-gutter-lg">
          <a exact v-for="list in site" :key="list.ref" :href="list.ref"  v-close-popup flat color="primary">
            <q-avatar  color="primary" size="20px">
                <img :src="list.img"/>
            </q-avatar>
          </a>
          <div class="text-caption text-center text-primary">
            Powered by TSquad
          </div>
        </q-card-actions>
      </q-card>
    </q-dialog>
     <!-- Dialog for About Us -->
    <q-dialog v-model="aboutus">
      <q-card class="my-card2">
        <q-img height="230px" width="330px" src="../assets/tsquad.jpeg" />
        <q-card-section>
          <div class="col text-h7 text-center ellipsis">
            Team
          </div>
          <div class="row no-wrap items-center"
            exact
            v-for="name in names"
            :key="name.fullname"
          >
          <div class="col text-center ellipsis">
            <p class="text-h7 text-weight text-primary">{{name.fullname}}</p>
            <p class="text-h7 text-weight-thin text-black"><small>{{name.email}}</small></p>
          </div>
          </div>
          <div class="col text-right ellipsis">
            <q-btn flat label="OK" color="primary" v-close-popup />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="feedback" persistent>
      <q-card style="min-width: 350px">
        <q-card-section class="row items-center q-pt-sm">
          <q-icon name="feedback" color="primary" size="30px" left/>
          <div class="text-h6 text-primary">Feedback</div>
          <q-space />
          <q-btn icon="close" color="primary" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-input standout  label="Title" outlined >
          </q-input>
        </q-card-section>
        <q-card-section class="q-pt-none">
              <q-input
                outlined
                type="textarea"
                label="message"
                hint="We welcome your ideas, request or comments. Please enter your feedback to us."
              />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat icon="send" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      email: '',
      message: '',
      fab: false,
      card: false,
      aboutus: false,
      hideLabels: false,
      feedback: false,
      site: [
        {
          ref: 'https://www.facebook.com',
          img: require('../assets/social_media/facebook.png')
        },
        {
          ref: 'https://www.instagram.com',
          img: require('../assets/social_media/instagram.png')
        },
        {
          ref: 'https://www.twitter.com"',
          img: require('../assets/social_media/twitter.png')
        }
      ],
      names: [
        { fullname: 'Ilham O. Gamal', email: 'ilhmgml@gmail.com'},
        { fullname: 'Janarie P. Jamel', email: 'jjanarie01@gmail.com' },
        { fullname: 'Omair A. Mangondaya', email: 'omairmangondaya@gmail.com' },
        { fullname: 'Abdul Rahman H. Magongcar', email: 'abdulrhmn526@gmail.com' }
      ]
    }
  },

  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    }
  }

}
</script>
