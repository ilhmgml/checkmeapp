<template>
  <q-page >
  <div class="flex flex-center q-pa-xl q-pb-md  q-mb-md ">
    <q-card flat class="my-card text-center" style="max-width: 400px; width:100%">
      <div class="q-pa-xs  text-center q-gutter-xs">
        <p class="q-mt-md text-center text-h6 bold text-blue">SIGN IN</p>
      </div>
      <q-form @submit="submitForm">
        <q-card-section class="bg-white text-center text-white">
          <q-input  rounded standout bottom-slots v-model="formData.email" label="Email" type="email">
              <template v-slot:prepend>
              <q-icon color="primary" name="person" />
              </template>
              <template v-slot:append>
              <q-icon name="close" @click="text = ''"  class="cursor-pointer" />
              </template>
          </q-input>
          <br>
          <q-input rounded standout bottom-slots v-model="formData.password" type="password" label="Password">
              <template v-slot:prepend>
              <q-icon color="primary" name="visibility_off" />
              </template>
              <template v-slot:append>
              <q-icon name="close"  class="cursor-pointer" />
              </template>
          </q-input>
        </q-card-section>
        <q-card-actions class="bg-white text-white" align="center">
          <q-btn outline rounded clickable size="15px" type="submit" color="primary"  >SIGN IN</q-btn>
          <q-item clickable v-ripple :to="'/'" >
            <q-btn outline rounded color="primary" label="cancel"></q-btn>
          </q-item>
        </q-card-actions>
	    </q-form>
      <small class="text-h7 text-grey">Don't have an account? </small>
        <q-btn flat="" size="9px" class="text-overline text-primary q-ml-sm" label="Sign Up" @click="medium = true" to=""></q-btn>
    </q-card>

  </div>
  <!-- Dialog for Sign UP -->
    <q-dialog
      v-model="medium"
    >
      <q-card style="width: 700px; max-width: 80vw;">

        <q-separator/>
        <q-card-section>
          <div class=" text-h6 bold text-blue text-center">SIGN UP</div>
        </q-card-section>

      <q-card-section class="q-pt-none">
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="formData.fname"
        label="First Name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        v-model="formData.lname"
        label="Last Name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input v-model="formData.email" filled type="email" label="Email"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      >
        <template v-slot:prepend>
          <q-icon name="mail" />
        </template>
        </q-input>
        <q-input v-model="formData.password" filled :type="isPwd ? 'password' : 'text'" label="Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </q-card-section>
                <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat size="10px" label="Cancel" text-color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginPage',
  data () {
    return {
      formData: {
        fname: null,
        lname: null,
        email: null,
        password: '',
			  mobile: '',
			  role: {
				"ROLEID2": "user"
			  }
      },
      text: '',
      medium: false,
      accept: false,
      isPwd: true
    }
  },
  methods: {
    ...mapActions('store', ['registerUser','loginUser']),
    submitForm() {
      this.loginUser(this.formData)
      //console.log('hey i should be second')
    },
    onSubmit () {
      if (this.accept == false) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.registerUser(this.formData)
      }
    },
    onReset () {
      this.formData.fname = null
      this.formData.lname = null
      this.formData.email = null
      this.formData.password = null
      this.accept = false
    }
  }
}
</script>
