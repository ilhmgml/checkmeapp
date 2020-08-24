<template>
  <q-page padding>
    <div class="row no-wrap items-center q-mb-sm q-pa-sm bg-grey-3 rounded-borders">
      <small class="text-overline text-red-5 q-ml-sm">COVID-19 SELF-ASSESSMENT</small>
    </div>
    <div class="flex flex-center">
      <div flat class="text-left" style="max-width: 400px; width:100%">
        <div class="q-pa-sm row items-start q-gutter-md">
          <!-- QuestionA -->
          <q-card-section v-show="A_Display" class="q-pt-none">
            <div>
              <q-spinner-comment color="amber" size="3em" />
            </div>
            <q-chat-message
              :text="['Are you 60 years old or older?']"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="AisTrue" color="primary" label="Yes"></q-btn>
              <q-btn outline @click="AisFalse" color="primary" label="No"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionB -->
          <q-card-section v-show="B_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'Did you have any of the following in the past 14 days with or without fever?',
                '• Cought or Colds <br> • Sore throat <br> • Body malaise (weakness)<br> • Fatigue '
                ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="BisTrue" color="primary" label="Yes"></q-btn>
              <q-btn outline @click="BisFalse" color="primary" label="No"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionC -->
          <q-card-section v-show="C_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'Do you belong to any one of the following groups:'
                ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-list>
              <q-expansion-item exact v-for="list in lists" :key="list" popup default-closed :label="list.title">
                <q-separator />
                <q-card>
                  <q-card-section>
                  {{ list.content }}<br>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="CisTrue" color="primary" label="Yes"></q-btn>
              <q-btn outline @click="CisFalse" color="primary" label="No"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionD -->
          <q-card-section v-show="D_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'Do you have any of one of the following severe symptoms: ',
                '• Difficulty breathing (severe)  <br> •	Respiratory rate > 30 breaths/min  <br> •	Altered mental state <br> •	Systolic blood pressure < 90 mmHg  <br> • •	Other signs of shock or complications '
                ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="DisTrue" color="primary" label="Yes"></q-btn>
              <q-btn outline @click="DisFalse" color="primary" label="No"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionE -->
          <q-card-section v-show="E_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'In the past 14 days, did you:',
                'I. Visit in an area with sustained local transmission <br> II. Travel from a country with COVID-19 before travel ban <br> III. Reside in a city/municipality with sustained local transmission <br> IV. Contact with probable or confirmed COVID-19 case by: <br> •	Providing direct care with no personal protective equipment (PPE) <br> •	Face-to-face contact within 1 meter, for more than 15 mins <br> •	Direct physical contact <br> •	Other situations as indicated by local risk assessments'
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="EisTrue" color="primary" label="Yes"></q-btn>
              <q-btn outline @click="EisFalse" color="primary" label="No"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionF -->
          <q-card-section v-show="F_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'Were you previously assessed by a health professional as a suspect case and advised for testing?',
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="FisTrue" color="primary" label="Yes"></q-btn>
              <q-btn outline @click="FisFalse" color="primary" label="No"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionG -->
          <q-card-section v-show="G_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'Have you been swabbed through the nose or throat for specimen collection?',
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="GisTrue" color="primary" label="Yes"></q-btn>
              <q-btn outline @click="GisFalse" color="primary" label="No"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionH -->
          <q-card-section v-show="H_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'Was the test done in a DOH-certified laboratory?',
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="HisTrue" color="primary" label="Yes"></q-btn>
              <q-btn outline @click="HisFalse" color="primary" label="No"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionI -->
          <q-card-section v-show="I_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'What are your results?',
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="IisTrue" color="primary" label="Positive"></q-btn>
              <q-btn outline @click="IisTrue" color="primary" label="Inconclusive"></q-btn>
              <q-btn outline @click="IisTrue" color="primary" label="Negative"></q-btn>
              <q-btn outline @click="IisTrue" color="primary" label="Still awaiting results"></q-btn>
            </q-card-actions>
          </q-card-section>

          <!-- ResultJ -->
          <q-card-section v-show="J_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'THERE IS A HIGH PROBABILITY THAT YOU ARE A CONFIRMED CASE. THE DOH WILL TAKE CARE OF YOU.',
                'No need to go to the hospital right away. Please wear a mask. <br> ',
                'Call the DOH 24/7 Telemedicine Hotline <br> NCR: 02 84241724 o 02 77988000 <br> Non-NCR: 1555 o 02 89426843',
                'or your Barangay Health Emergency Response Team (BHERT) to inform them of your possible CONFIRMED CASE status for confirmation with a medical professiona=l. After the consultation, you will be given advice to manage your current symptoms and for daily monitoring  • While waiting for your schedule/referral for testing, self-isolate at home for strict HOME QUARANTINE or in your community isolation/quarantine facility for 14 days'
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="JisTrue" color="primary" label="Check Advice"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- ResultK -->
          <q-card-section v-show="K_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'While waiting for your referral, please wear a mask.',
                '• Minimize interaction with the elderly (aged 60 years and above) and those with existing illnesses <br> • Wash your hands regularly with soap and water and practice physical distancing (at least 1 meter or 3 feet away from other people). <br> • Separate personally-used items at home like dishes, utensils, towels, and linen. <br> • Regularly disinfect frequently-handled articles/surfaces like light switches, doorknobs, flush knobs, faucets, and cabinet pulls. <br> • Eat healthy and nutritious meals to strengthen your immune system. <br> • Help us take care of you by providing the Barangay Health Emergency Response Team (BHERT) all pertinent information for contact tracing and health monitoring of your possible contacts.'
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="done" color="primary" label="Okay, Thanks!"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- ResultL -->
          <q-card-section v-show="L_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'YOU HAVE LOW RISK FOR COVID-19. THE DOH WILL TAKE CARE OF YOU ',
                'No need to go to the hospital or for testing to avoid unnecessary exposure to bacteria/viruses'
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-list>
              <q-expansion-item exact v-for="list in lists" :key="list.list" popup default-closed :label="list.title">
                <q-separator />
                <q-card>
                  <q-card-section>
                  {{list.content}}<br>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="LisTrue" color="primary" label="Check Advice"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- ResultM -->
          <q-card-section v-show="M_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'Wash your hands regularly with soap and water.<br> •	Practice physical distancing (at least 1 meter or 3 feet away from other people). <br> •	Regularly disinfect frequently-handled articles/surfaces like light switches, doorknobs, flush knobs, faucets, and cabinet pulls. <br> • Eat healthy and nutritious meals to strengthen your immune system'
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="done" color="primary" label="Okay, Thanks!"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- ResultN -->
          <q-card-section v-show="N_Display" class="q-pt-none">
            <q-chat-message
              :text="[
                'Your Barangay Health Emergency Response Team (BHERT) will monitor your condition daily. Help us take care of you by reporting all pertinent information on your symptoms, whether it is improving or not. <br> •	Watch out for and report if your symptoms get worse or if you have difficulty breathing to provide you with the appropriate medical attention. <br> •	Please wear a mask. <br> •	Minimize interaction with the elderly and those with existing illnesses. <br> •	Wash your hands regularly with soap and water and practice physical distancing (at least 1 meter or 3 feet away from other people). <br> •	Separate personally-used items at home like dishes, utensils, towels, and linen. <br> •	Regularly disinfect frequently-handled articles/surfaces like light switches, doorknobs, flush knobs, faucets, and cabinet pulls. <br> •	Eat healthy and nutritious meals to strengthen your immune system. <br> •	Help us take care of you by providing the BHERT all pertinent information for contact tracing and health monitoring of your possible contacts.'
              ]"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="done" color="primary" label="Okay, Thanks!"></q-btn>
            </q-card-actions>
          </q-card-section>
          <!-- QuestionFinal -->
          <q-card-section v-show="final_Display" class="q-pt-none">
            <q-chat-message
              :text="['Do you want to be checked again?']"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/9.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-item clickable v-ripple :to="'/covid19'" >
                <q-btn outline @click="onReset" color="primary" label="Yes"></q-btn>
              </q-item>
              <q-item clickable v-ripple :to="'/'" >
                <q-btn outline color="primary" label="No"></q-btn>
              </q-item>
            </q-card-actions>
          </q-card-section>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      A_Display: true,
      B_Display: false,
      C_Display: false,
      D_Display: false,
      E_Display: false,
      F_Display: false,
      G_Display: false,
      H_Display: false,
      I_Display: false,
      J_Display: false,
      K_Display: false,
      L_Display: false,
      M_Display: false,
      N_Display: false,
      final_Display: false,
      old: false,
      young: false,
      B: false,
      C: false,
      D: false,
      E: false,
      F: false,
      G: false,
      H: false,
      I: false,
      J: false,
      K: false,
      L: false,
      M: false,
      N: false,
      lists: [
        {
          title: '',
          content: ''
        }
      ],
      final_lists: [
        {
          title: '',
          content: ''
        }
      ]
    }
  },
  methods: {
    AisTrue () {
      this.old = true,
      this.B_Display = true
    },
    AisFalse () {
      this.young = true,
      this.B_Display = true
    },
    BisTrue () {
      this.B = true,
      this.no_Display()
      if (this.old === true){
        this.J_Display = true
      }
      else if (this.young === true){
        this.C_Display = true,
        this.lists= [
          {
            title: 'With other co-morbid disease',
            content: '• Chronic lung diseases • Chronic obstructive pulmonary disease or COPD • Bronchiectasis • Chronic heart disease • Hypertension • Coronary artery disease • Chronic kidney disease• Chronic liver disease • Chronic nerological conditions • Diabetes • Problem with the speen • HIV or AIDS • Taking medicines such steroid tablets • Undergoing chemotherapy • Morbid obesity (BMI>40 kg/m2)    '
          },
          {
            title: 'With high-risk pregnancy',
            content: '• Age 17 years or younger • Age 35 years or older • With other existing medical condition'
          },
          {
            title: 'Youre a healthcare worker'
          }
        ]
      }
    },
    BisFalse () {
      this.no_Display()
      if(this.young){
        this.BisTrue(),
        this.B = false
      }else
        this.D_Display = true
    },
    CisTrue () {
      this.C = true,
      this.no_Display(),
      this.D_Display = true
    },
    CisFalse () {
      this.no_Display(),
      this.D_Display = true
    },
    DisTrue () {
      this.D = true,
      this.no_Display(),
      this.J_Display = true
    },
    DisFalse () {
      this.no_Display()
      if (this.young && this.B === false && this.C === false){
        this.E_Display = true
      }
      else if (this.young && this.B === false){
        this.L_Display = true,
        this.lists= [
        {
          title: 'What you shoud do',
          content: '•	Stay at home and avoid unnecessary trips outside • Minimize interaction with the elderly and those with existing illnesses. • If you develop symptoms, call the DOH Telemedicine hotline: • NCR: 02 84241724 o 02 77988000  • Non-NCR: 1555 o 02 89426843 • You may also contact your Barangay Health Emergency Response Team (BHERT) so you can be referred to a medical professional.'       }
        ]
      }
      else if (this.old === true){
        this.L_Display = true,
        this.lists= [
        {
          title: 'What you shoud do',
          content: '•	Stay at home and avoid unnecessary trips outside • Minimize interaction with the elderly and those with existing illnesses. • If you develop symptoms, call the DOH Telemedicine hotline: • NCR: 02 84241724 o 02 77988000  • Non-NCR: 1555 o 02 89426843 • You may also contact your Barangay Health Emergency Response Team (BHERT) so you can be referred to a medical professional.'       }
        ]
      } else if ( this.C === true && this.B === true ) {
        this.DisTrue()
      } else {
        //this.D_Display = true,
        this.E_Display = true
      }
    },
    EisTrue () {
      this.E = true,
      this.no_Display()
      if (this.B === false)
        this.L_Display = true,
        this.lists= [
        {
          title: 'What you shoud do',
          content: '•	Stay at home and avoid unnecessary trips outside • Minimize interaction with the elderly and those with existing illnesses. • If you develop symptoms, call the DOH Telemedicine hotline: • NCR: 02 84241724 o 02 77988000  • Non-NCR: 1555 o 02 89426843 • You may also contact your Barangay Health Emergency Response Team (BHERT) so you can be referred to a medical professional.'       }
        ]
      else
        this.F_Display = true
    },
    EisFalse () {
      this.no_Display(),
      this.L_Display = true,
      this.lists= [
      {
        title: 'What you shoud do',
        content: '•	Stay at home and avoid unnecessary trips outside • Minimize interaction with the elderly and those with existing illnesses. • If you develop symptoms, call the DOH Telemedicine hotline: • NCR: 02 84241724 o 02 77988000  • Non-NCR: 1555 o 02 89426843 • You may also contact your Barangay Health Emergency Response Team (BHERT) so you can be referred to a medical professional.'       }
      ]
    },
    FisTrue () {
      this.F = true,
      this.no_Display()
      this.F_Display = true,
      this.G_Display = true
    },
    FisFalse () {
      this.no_Display()
      this.F_Display = true,
      this.J_Display = true
    },
    GisTrue () {
      this.G = true,
      this.no_Display(),
      this.F_Display = true,
      this.G_Display = true,
      this.H_Display = true
    },
    GisFalse () {
      this.no_Display()
      this.J_Display = true
    },
    HisTrue () {
      this.H = true,
      this.no_Display(),
      this.I_Display = true
    },
    HisFalse () {
      this.no_Display(),
      this.J_Display = true
    },
    IisTrue () {
      this.I = true,
      this.no_Display(),
      this.J_Display = true
    },
    JisTrue () {
      this.no_Display()
      if(this.E === true){
        this.N_Display = true
      } else {
        this.K_Display = true
      }
    },
    LisTrue () {
      this.no_Display(),
      this.L_Display = true,
      this.M_Display = true
    },
    no_Display () {
      this.A_Display= false,
      this.B_Display= false,
      this.C_Display= false,
      this.D_Display= false,
      this.E_Display= false,
      this.F_Display= false,
      this.G_Display= false,
      this.H_Display= false,
      this.I_Display= false,
      this.J_Display= false,
      this.K_Display= false,
      this.L_Display= false,
      this.M_Display= false,
      this.N_Display= false,
      this.final_Display= false
    },
    done(){
      this.no_Display(),
      this.final_Display = true
    },
    onReset () {
      this.no_Display(),
      this.A_Display= true,
      this.old= false,
      this.young= false,
      this.B= false,
      this.C= false,
      this.D= false,
      this.E= false,
      this.F= false,
      this.G= false,
      this.H= false,
      this.I= false,
      this.J= false,
      this.K= false,
      this.L= false,
      this.M= false,
      this.N= false,
      this.lists= [
        {
          title: '',
          content: ''
        }
      ],
      this.final_lists [
        {
          title: '',
          content: ''
        }
      ]
    }
  }
}
</script>
