<template>
  <q-page padding>
    <div class="q-pt-xl justify-around row items-start text-center q-gutter-xl ">
     <q-card class="category shadow-15" style="max-width: 260px; width: 100%">
        <router-link to="/covid19" tag="q-card">
          <q-card-section class="bg-white">
              <div class="text-h7 text-primary">
                <q-icon color="red-6" size="50px" name="coronavirus"/>
                  <br/>
                  Covid-19 Assesstment
              </div>
            </q-card-section>
        </router-link>
      <q-card-actions align="center">
        <q-btn color="cyan-10" size="12px" icon-right="arrow_right" to="/covid19" flat>Check me offline</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="category shadow-15" style="max-width: 260px; width: 100%">
      <router-link to="/freequeries" tag="q-card">
        <q-card-section class="bg-white">
          <div class="text-h7 text-primary">
            <q-icon color="red-6" size="50px" name="local_hospital"/>
              <br/>
              Free Consultation
          </div>
        </q-card-section>
      </router-link>
      <q-card-actions class="bg-white" align="center">
        <q-btn color="cyan-10" size="12px" icon-right="arrow_right" to="/freequeries" flat>Check me offline</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-if="userDetails.userId" class="category shadow-15" style="max-width: 260px; width: 100%">
      <router-link to="/home" tag="q-card">
        <q-card-section class="bg-white">
          <div class="text-h7 text-primary">
            <q-icon color="red-6" size="50px" name="fa fa-user-md"/>
              <br/>
              Talk to a Doctor
          </div>
        </q-card-section>
      </router-link>
      <q-card-actions class="bg-white" align="center">
        <q-btn color="cyan-10" size="12px" icon-right="arrow_right" to="/home" flat>Check me online</q-btn>
      </q-card-actions>
    </q-card>

    <q-card v-else class="category shadow-15" style="max-width: 260px; width: 100%">
      <q-card-section @click="onClickDoctorOnline" class="bg-white">
        <div class="text-h7 text-primary">
          <q-icon color="red-6" size="50px" name="fa fa-user-md"/>
            <br/>
            Talk to a Doctor
        </div>
      </q-card-section>
      <q-card-actions class="bg-white" align="center">
        <q-btn color="cyan-10" size="12px" icon-right="arrow_right" @click="onClickDoctorOnline" flat>Check me online</q-btn>
      </q-card-actions>
    </q-card>
  </div>

  <q-page-sticky position="top-left" :offset="[10, 10]">
    <q-btn fab size="10px" text-color="primary" icon="help" color="white"  @click="card = true" />
  </q-page-sticky>
  <q-page-sticky position="top-left" :offset="[10, 10]">
    <q-fab
      v-model="fab"
      label="Check me app"
      external-label
      class="shadow-5"
      vertical-actions-align="left"
      color="red-6"
      icon="info"
      direction="down">
      <q-fab-action padding="3px" external-label color="orange" @click="card = true" icon="info" label="About App" />
      <q-fab-action padding="3px" external-label color="primary" @click="aboutus = true" icon="share" label="Follow Us"/>
      <q-fab-action padding="3px" external-label color="info" @click="feedback = true" icon="feedback" label="Feedback" />
    </q-fab>
  </q-page-sticky>

    <!-- Dialog for About App -->
    <q-dialog v-model="card">
      <q-card class="my-card1">
        <q-card-section class="row items-center q-pt-sm">
          <q-icon name="info" color="primary" size="30px" left/>
          <div class="text-h6 text-primary">About App</div>
          <q-space />
          <q-btn icon="close" color="primary" flat round dense v-close-popup />
        </q-card-section>
        <div class="q-pa-xs text-center q-gutter-xs">
          <q-img height="150px" width="100px" src="../assets/checkmelogov1.png" />
        </div>
        <q-card-section>
          <div class="row no-wrap text-center items-center">
            <div class="col text-h6 ellipsis">
              Check Me App
            </div>
          </div>
          <div class="text-caption text-center text-primary">
            v0.0.1
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <div class="text-caption text-grey">
            Check Me App is Medical Consultation Mobile Application. It connects a patient to a doctor online. In times physical meetups are discourage initial checkups can be done online. Check Me App is can also be use even without internet connectivity, these offline services are Covid-19 Assessment or second opinion to minor ailments. The app aims to lessen the worries of people of time and travel costs especially for senior citizens and person with disability, ensures social distancing, and assures that one's health is moinitored whether he/she resides in on area having poor internet connectivity.
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
            :key="name.fullname">
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
    <!-- Dialog for Feedback -->

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
                hint="We welcome your ideas, request or comments. Please enter your feedback to us."/>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat icon="send" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'Index',
    data () {
      return {
        banner: true,
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
          { fullname: 'Abdul Rahman H. Magongcar', email: 'aabdulrhmn526@gmail.com' }
        ]
      }
    },
    computed: {
      ...mapState('store', ['userDetails']),
    },
    methods: {
      dissmissBanner () {
        this.banner = false
      },
      onClickDoctorOnline () {
        this.$q.notify({
          color: 'primary',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to login first.',
          position: 'bottom',
          actions: [
            { label: 'OK', color: 'white', handler: () => { /* ... */ } }
          ]
        })
      }
    }

  }
</script>

<style scoped>
.category:hover {
  opacity: 0.7;
}
</style>
