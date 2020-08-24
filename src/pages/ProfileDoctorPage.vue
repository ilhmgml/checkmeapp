<template>
  <q-page padding>
    <div class="flex flex-center  ">
  <div flat class="my-card text-left" style="max-width: 400px; width:100%">
    <q-card class="my-card">
      <q-img :src="doctorDetails.doctorDetails.photo" />
      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />
        <div class="row no-wrap items-center">
          <div class="col text-h6 ">
            Dr. {{ doctorDetails.doctorDetails.fname }} {{ doctorDetails.doctorDetails.lname }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon 
            name="place" />
            {{ doctorDetails.doctorDetails.address.add }}
          </div>
        </div>
        <q-btn flat round color="red" size="25px" icon="chat_bubble" />
        <q-btn flat round color="teal" size="25px" icon="call" />
        <q-btn flat round color="primary" size="25px" icon="video_call" />
        <!-- <q-rating v-model="stars" :max="5" size="32px" /> -->
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1 text-primary bold">
            {{ doctorDetails.doctorDetails.doctype.type }}
        </div>
        <q-separator/>
        <div class=" text-h6 bold">
          About
        </div>
        <div class="text-caption text-grey">
          Dr. {{ doctorDetails.doctorDetails.fname }} {{ doctorDetails.doctorDetails.lname }} is a {{ doctorDetails.doctorDetails.doctype.type }} in {{ doctorDetails.doctorDetails.address.add }}, General Hospital and is affiliated with multiple hospitals in the area. <br>
          <a style="text-decoration:none; color:#3694FE" href="tel:doctorDetails.doctorDetails.mobile"><b>Contact: {{doctorDetails.doctorDetails.mobile}}</b></a>
        </div>
      </q-card-section>
      <q-separator />
        <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Office Hours" name="one" />
        <q-tab label="Online Consultation" name="two" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <small>Monday | Wednesday | Thursday</small>
          <p>08:00am - 4:00pm</p>
        </q-tab-panel>

        <q-tab-panel name="two">
          <small>Tuesday | Friday | Saturday</small>
          <p>10:00am - 1:00pm</p>
        </q-tab-panel>
      </q-tab-panels>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary" @click="medium = true" >
          Make Appointment
        </q-btn>
      </q-card-actions>
    </q-card>
    <q-dialog
      v-model="medium"
    >
    <q-card flat style="width: 700px; max-width: 80vw;">
      <div class="q-pa-md">

        <q-stepper
          flat
          v-model="step"
          header-nav
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Choose Schedule"
            icon="settings"
            :done="step > 1"
            :header-nav="step > 1"
          >
            <q-list>
          <!--
              List of schedule time of doctor
          -->

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-checkbox v-model="schedule" val="tuesday1" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Tuesday 10:00am-11:00pm</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-checkbox v-model="schedule" val="tuesday2" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Tuesday 11:00am-12:00pm</q-item-label>
              <q-item-label caption>Note: You can move monday if you want</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar top>
              <q-checkbox v-model="schedule" val="tuesday3" color="cyan" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Tuedaya 12:00pm-1:00pm</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
            <q-input
            filled
            v-model="phone"
            label="Contact Number"
            mask="(####) ### - ####"
          />

            <q-stepper-navigation>
              <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
            </q-stepper-navigation>
          </q-step>

          <q-step
            :name="2"
            title="Payment Method"
            icon="payment"
            :done="step > 2"
            :header-nav="step > 2"
          >
                <q-list bordered separator>
                      <!-- List of schedule Payment method-->
                <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="primary" name="payment" />
                    </q-item-section>
                    <q-item-section>Credit / Debit Card</q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="orange" name="money" />
                    </q-item-section>
                    <q-item-section>
                    <q-item-label>Online Payment</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="green" name="payment" />
                    </q-item-section>
                    <q-item-section>
                    <q-item-label>Bank Transfer</q-item-label>
                    </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                    <q-item-section avatar>
                      <q-icon color="yellow" name="shop" />
                    </q-item-section>
                    <q-item-section>
                    <q-item-label>Payment Center / e-Wallet</q-item-label>
                    </q-item-section>
                </q-item>
                </q-list>

            <q-stepper-navigation>
              <q-btn color="primary" label="Finish" v-close-popup @click="alert = true" />
              <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </q-step>

        </q-stepper>
      </div>
          </q-card>
        </q-dialog>

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6">Confirmation</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="q-pa-xs  text-center q-gutter-xs">
                  <q-avatar size="100px" font-size="52px" color="yellow" text-color="white" icon="done_all" />
                <p class="q-mt-md text-center text-h6 text-weight-thin text-blue" icon>Congratulation!</p>
                <p class=" text-center text-h7 text-weight-thin text-red-6" >Thank you for using Checkme Anywhere!</p>
                Doc will call the number you provided on scheduled.
            </div>
            </q-card-section>

            <q-card-actions align="center">
              <q-btn label="Done" color="primary" v-close-popup/>
            </q-card-actions>
          </q-card>
        </q-dialog>
    </div>
    </div>
  </q-page>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        tab: 'one',
        medium: false,
        step: 1,
        schedule: [''],
        alert: false,
        phone: null,
        key: 'hey',
        done1: false
      }
    },
	  computed: {
	  	...mapState('store', ['doctorDetails'])
	  },
    methods: {
      ...mapActions('store', ['firebaseGetDoctor'])
    },
    mounted() {
      this.firebaseGetDoctor(this.$route.params.doctorId)
    }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 600px
</style>
