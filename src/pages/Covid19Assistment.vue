<template>
  <q-page padding>
    <div class="row no-wrap items-center q-mb-sm q-pa-sm bg-grey-3 rounded-borders">
      <small class="text-overline text-red-5 q-ml-sm">COVID-19 SELF-ASSESSMENT</small>
    </div>
    <div class="flex flex-center">
      <div flat class="text-left" style="max-width: 400px; width:100%">
        <div class="q-pl-sm q-mt-xs">
          <p class="q-ml-sm text-h6 text-weight-thin text-blue">I can help you find out what's going on!</p>
        </div>
        <div class="q-pa-sm row items-start q-gutter-md">
          <q-card bordered class="my-card bg-primary text-white">
            <q-card-section>
              <q-icon name="info" size="30px" color="white"/>
            </q-card-section>
            <q-card-section class="q-pt-none">
              Hi. This is a digital triage in COVID-19 Self-Assessment Risk base on your symptoms and exposure to the virus. <br> This not equivalent to a doctor's consultation but a doctor's confirmation and diagnosis is still needed. This app is made to lessen the increasing number of people going to the hospitals and to avoid wide spread of the virus. <br> This only a guide. If you really need the urgent attention of a doctor, don't hesitate on calling the DOH Telemedicine hotline to refer you to a nearest hospital.
            </q-card-section>
          </q-card>
          <div class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline rounded color="primary" label="Ok, continue.." to="/chatcovid" />
          </div>
        </div>
      </div>
    </div>
    <q-page-sticky position="top-right" :offset="[10, 5]">
        <q-btn fab size="10px" text-color="primary" icon="help" color="white"  @click="card = true" />
    </q-page-sticky>

    <!-- Covid-19 Info -->
     <q-dialog v-model="card">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-white">
          <q-toolbar class="bg-red-6">
            <q-avatar>
              <q-icon color="white" size="40px" name="coronavirus"/>
            </q-avatar>
            <q-toolbar-title class="text-white">Covid-19 Info</q-toolbar-title>
            <q-btn flat v-close-popup round dense color="white" icon="close" />
          </q-toolbar>
            <q-tabs v-model="tab" class="text-primary">
              <q-tab label="About" name="one" />
              <q-tab label="Symptoms" name="two" />
            </q-tabs>
            <q-separator/>
        </q-header>
      <q-page-container >
        <q-page>
      <q-tab-panels v-model="tab" animated >
        <q-tab-panel name="one">
          <p>{{about_paragh_1}}</p>
          <p>{{about_paragh_2}}</p>
          <q-separator />
          <p class="text-grey">HOW IT SPREADS</p>
          <p>{{about_paragh_3}}</p>
          <p>{{about_paragh_4}}</p>
            <a class="text-primary" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"> Learn more on who.int</a>
        </q-tab-panel>
        <q-tab-panel name="two">
          <p>{{symptom_paragh_one}}</p>
          <q-separator/>
          <br><p class="text-grey">{{symptom_paragh_two}}</p>
           • fever
          <br>• dry cough
          <br>• tiredness<br><br>
          <p class="text-grey">{{symptom_paragh_three}}</p>
          • aches and pains
          <br>• sore throat
          <br>• diarrhoea
          <br>• conjunctivities
          <br>• headache
          <br>• loss of taste or smell
          <br>• a rash on skin, or discolouration of fingers or toes
          <br><br>
          <a class="text-primary" href="https://www.who.int/"> Learn more on who.int</a>
        </q-tab-panel>
      </q-tab-panels>
        </q-page>
      </q-page-container>
      </q-layout>
    </q-dialog>
  </q-page>
</template>

<script>
import { QSpinnerFacebook } from 'quasar'
export default {
  name: 'PageIndex',
  data () {
    return {
      card: false,
      tab: 'one',
      about_paragh_1: 'Corona disease (COVID-19) is an infectious diseas cause by a newly discovered coronavirus. ',
      about_paragh_2: 'Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment  ',
      about_paragh_3: 'The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person cough, sneezs, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.',
      about_paragh_4: 'You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.',
      symptom_paragh_one: 'COVID-19 affects different people in different ways. Most infected people will develop mild to mederate illness and recover without hospitalization.',
      symptom_paragh_two: 'Most common symptoms:',
      symptom_paragh_three: 'Less common symptoms:',
      message: 'Hi. This is a digital triage in COVID-19 Self-Assessment Risk base on your symptoms and exposure to the virus. This not equivalent to a doctor consultation but a doct'
    }
  },
  methods: {
    showLoading () {
      this.$q.loading.show({
        spinner: QSpinnerFacebook,
        spinnerColor: 'yellow',
        spinnerSize: 50,
        message: 'Starting covid-19 assessment...',
        messageColor: 'white'
      })

      this.timer = setTimeout(() => {
        this.$q.loading.hide()
        // eslint-disable-next-line no-void
        this.timer = void 0
      }, 2000)
    }
  },

  beforeDestroy () {
    // eslint-disable-next-line no-void
    if (this.timer !== void 0) {
      clearTimeout(this.timer)
      this.$q.loading.hide()
    }
  },
  mounted () {
    this.showLoading()
  }
}
</script>
