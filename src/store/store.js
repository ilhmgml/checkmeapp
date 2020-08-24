import Vue from 'vue'
import { firebaseAuth, firebaseDb } from 'boot/firebase'

const state = {
    userDetails: {},
    doctors: {},
    doctorDetails: {}
}
const mutations = {
	setUserDetails(state, payload) {
		state.userDetails = payload
	},
	addDoctor(state, payload) {
		Vue.set(state.doctors, payload.userId, payload.doctorDetails)
	},
	addCurrentDoctor(state, payload) {
        state.doctorDetails = payload
	}
}
const actions = {
    registerUser({}, payload){
		firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				let userId = firebaseAuth.currentUser.uid
				firebaseDb.ref('users/' + userId).set({
					fname: payload.fname,
                    lname: payload.lname,
					email: payload.email,
					photo: "https://firebasestorage.googleapis.com/v0/b/checkmeappdb.appspot.com/o/avatar.png?alt=media&token=dc8a5dea-14a1-4691-b17f-8737cc5ca616",
					address: {
                        "id": "ADDID1",
                        "add": "Marawi City"
                    },
                    role: {
						"id": "ROLEID2",
                      	"type": "user"
                    }
				})
				alert('You have logged in')
			})
			.catch(error => {
				alert(error.message)
			})
	},
	loginUser({}, payload) {
		firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				console.log('welcome')
				alert('You have logged in')
			})			
			.catch(error => {
				var errorCode = error.code;
				var errorMsg = error.message;
				if (errorCode === 'auth/wrong-password'){
					alert('Wrong password');
				} else {
					alert (errorMsg);
				}
				console.log(errorMsg)
			});	
    },
    handleAuthStateChanged({ commit, dispatch }) {
		firebaseAuth.onAuthStateChanged(user => {
		  if (user) {
		    let userId = firebaseAuth.currentUser.uid
		    firebaseDb.ref('users/' + userId).once('value', snapshot => {
				let userDetails = snapshot.val()
		    	commit('setUserDetails', {
		    		fname: userDetails.fname,
		    		lname: userDetails.lname,
		    		email: userDetails.email,
		    		mobile: userDetails.mobile,
		    		addressid: userDetails.address.id,
					address: userDetails.address.add,
					photo: userDetails.photo,
		    		userId: userId
		    	})
            })
            dispatch('firebaseGetDoctors')
		    this.$router.push('/')
		  }
		  else {
		  	commit('setUserDetails', {})
		  	this.$router.replace('/')
		  }
		})
	},
	logoutUser() {
		firebaseAuth.signOut()
		alert('You have logged out')
	},
	firebaseGetDoctors({ commit }) {
		firebaseDb.ref('doctors').on('child_added', snapshot => {
            let doctorDetails = snapshot.val()
			let userId = snapshot.key
			commit('addDoctor', {
				userId,
                doctorDetails
            })
        })
	},
	firebaseGetDoctor({ commit }, doctorId) {
		firebaseDb.ref('doctors/' + doctorId).once('value', snapshot => {
			let doctorDetails = snapshot.val()
			commit('addCurrentDoctor', {
				doctorId,
				doctorDetails
			})
        })
	}
}
const getters = {
	doctors: state => {
        return state.doctors
	}

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}