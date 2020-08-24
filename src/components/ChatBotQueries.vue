<template>
  <div class="flex flex-center">
    <div flat class="text-left" style="max-width: 400px; width:100%">
      <div class="q-pl-sm q-mt-md">
        <p class="q-ml-sm text-h5 text-blue-grey-9 ">Free Consultation <br><small class="text-overline text-left text-grey q-pl-md ">for your minor illness </small></p>
      </div>
      <div class="q-pa-sm row items-start q-gutter-md">
        <!-- INTRO -->
        <q-card-section v-show="display" class="q-pt-none">
          <div>
            <q-spinner-comment color="amber" size="3em" />
          </div>
          <q-chat-message
            :text="['Tell us your symptoms :)']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="start" color="primary" label="Ok, let's go!"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q1 -->
        <q-card-section v-show="Q1_Display" class="q-pt-none">
          <q-chat-message
            :text="['Do you have fever?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q1isTrue" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="sorry" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q2 -->
        <q-card-section v-show="Q2_Display" class="q-pt-none">
          <q-chat-message
            :text="['Do you experience Sore throat?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q2isTrue" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="Q2isFalse" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q2child -->
        <q-card-section v-show="Q2child_Display" class="q-pt-none">
          <q-chat-message
            :text="['Does your skin itches?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q2result" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="sorry" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q2result -->
        <q-card-section v-show="Q2result_Display" class="q-pt-none">
          <q-chat-message
            :text="['You have Chicken Pox']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
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
            <q-btn outline @click="done" color="primary" label="Okay, thanks!"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q3 -->
        <q-card-section v-show="Q3_Display" class="q-pt-none">
          <q-chat-message
            :text="['Do you experience Pain in the limbs?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q3isTrue" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="Q3isFalse" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q3child -->
        <q-card-section v-show="Q3child_Display" class="q-pt-none">
          <q-chat-message
            :text="['Is your urine darker than usual?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q3result" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="sorry" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q3result -->
        <q-card-section v-show="Q3result_Display" class="q-pt-none">
          <q-chat-message
            :text="['You are dehydrated']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
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
            <q-btn outline @click="done" color="primary" label="Okay, thanks!"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q4 -->
        <q-card-section v-show="Q4_Display" class="q-pt-none">
          <q-chat-message
            :text="['Do you produce sputum?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q4isTrue" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="Q4isFalse" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q4child -->
        <q-card-section v-show="Q4child_Display" class="q-pt-none">
          <q-chat-message
            :text="['Do you experience Burning in the throat?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q4result" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="sorry" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q4result -->
        <q-card-section v-show="Q4result_Display" class="q-pt-none">
          <q-chat-message
            :text="['You have Measles']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
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
            <q-btn outline @click="done" color="primary" label="Okay, thanks!"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q5 -->
        <q-card-section v-show="Q5_Display" class="q-pt-none">
          <q-chat-message
            :text="['Do you experience Shortness of Breath?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q5isTrue" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="Q5isFalse" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q5child -->
        <q-card-section v-show="Q5child_Display" class="q-pt-none">
          <q-chat-message
            :text="['Do you experience Redness of Eye?']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="Q5result" color="primary" label="Yes"></q-btn>
            <q-btn outline @click="sorry" color="primary" label="No"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q5result -->
        <q-card-section v-show="Q5result_Display" class="q-pt-none">
          <q-chat-message
            :text="['You have Colds']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
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
            <q-btn outline @click="done" color="primary" label="Okay, thanks!"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- Q6result -->
        <q-card-section v-show="Q6result_Display" class="q-pt-none">
          <q-chat-message
            :text="['You have a Flu']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
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
            <q-btn outline @click="done" color="primary" label="Okay, thanks!"></q-btn>
          </q-card-actions>
        </q-card-section>

        <!-- Sorry -->
        <q-card-section v-show="Sorry_Display" class="q-pt-none">
          <q-chat-message
            :text="['Sorry we don’t have record of your illness, consult to your doctor to help you treat your health problem']"
            bg-color="primary"
            text-color="white">
            <template v-slot:avatar>
              <img
                class="q-message-avatar q-message-avatar--received"
                src="../assets/Profile/8.jpg" >
            </template>
          </q-chat-message>
          <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
            <q-btn outline @click="done" color="primary" label="Okay, thanks!"></q-btn>
          </q-card-actions>
        </q-card-section>
        <!-- START/END -->
        <q-card-section v-show="start_over" class="q-pt-none">
            <q-chat-message
              :text="['You are welcome! Do you want to start again?']"
              bg-color="primary"
              text-color="white">
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="../assets/Profile/8.jpg">
              </template>
            </q-chat-message>
            <q-card-actions align="left" class="q-pl-xs q-ml-sm q-gutter-sm float-left">
              <q-btn outline @click="startOver" color="primary" label="START AGAIN"></q-btn>
              <q-item clickable v-ripple :to="'/home'" >
                <q-btn outline color="primary" label="END HERE"></q-btn>
              </q-item>
            </q-card-actions>
        </q-card-section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      apiUrl: 'https://checkmyillness.herokuapp.com',
      Q1: false,
      Q2: false,
      Q3: false,
      Q4: false,
      Q5: false,
      Q2childIsTrue: false,
      Q3childIsTrue: false,
      Q4childIsTrue: false,
      Q5childIsTrue: false,
      Q2childIsFalse: false,
      Q3childIsFalse: false,
      Q4childIsFalse: false,
      Q5childIsFalse: false,
      //displays
      display: true,
      Q1_Display: false,
      Q2_Display: false,
      Q3_Display: false,
      Q4_Display: false,
      Q5_Display: false,
      Q2child_Display: false,
      Q3child_Display: false,
      Q4child_Display: false,
      Q5child_Display: false,
      Q2result_Display: false,
      Q3result_Display: false,
      Q4result_Display: false,
      Q5result_Display: false,
      Q6result_Display: false,
      Sorry_Display: false,
      start_over: false,
      lists: [
        {
          title: '',
          content: ''
        }
      ],
    }
  },
  methods: {
    getIllnesses(illness){ 
      this.$axios(`${this.apiUrl}/api/illnesses/${illness}`).then(response => {
      this.lists= [
        {
          title: 'Description',
          content: response.data[0].description
        },
        {
          title: 'Medical Condition',
          content: response.data[0].medicalCondition 
        },
        {
          title: 'Possible Symptoms',
          content: response.data[0].possibleSymptoms
        },
        {
          title: 'Treatment Description',
          content: response.data[0].treatmentCondition
        },
        {
          title: 'Herbal Medicines',
          content: response.data[2][0].name
        },
        {
          title: 'Medical Specialist',
          content: response.data[1][0].type
        }
      ]
      })
    },
    start () {
      this.display = true,
      this.Q1_Display = true
    },
    Q1isTrue(){
      this.Q1 = true,
      this.display = true,
      this.Q1_Display = true,
      this.Q2_Display = true
    },
    Q2isTrue(){
      this.Q2 = true,
      this.no_display(),
      this.Q3_Display = true
    },
    Q2isFalse(){
      this.no_display(),
      this.Q2childIsFalse = true,
      this.Q2child_Display = true
    },
    Q2result(){
      this.Q2childIsTrue = true,
      this.no_display(),
      this.Q2child_Display = true,
      this.Q2result_Display = true,
      //this.getIllnesses(4)
      this.lists= [
        {
          title: 'Description',
          content: 'Chickenpox is an infection by a varicella-zoster virus that commonly affects children and is highly contagious. In fact, the condition is so common in childhood that most of adult persons are immune to it because they have had it before. With some children there are only some spots but with others it can be possible to see their entire body covered with spots. The common areas affected include the legs and arms, especially beneath the arms, the belly and chest, scalp and ears, and the face.'
        },
        {
          title: 'Medical Condition',
          content: 'The highly contagious disease occurs primarily in children and can be seen as a skin rash over the entire body, with small, reddish, and itchy blisters. The risk of infection starts 1 to 2 days in advance to the appearance of blisters until the decrease of crusted wounds (usually 5 to 6 days after the rash has started). After the illness has run its course, the virus continues to reside within the body (inside certain nerve cells) and can become activated again later in life or in individuals with compromised immune systems. This infection is called shingles or herpes zoster and appears as a localized, very painful skin rash. The disease is contagious in people who have not yet had the varicella virus. In older people, pain may continue for several weeks or even months after the rash has disappeared. The disease usually runs its course without complications or consequences. Patients with pre-existing conditions such as neurodermatitis or weak immune systems may have a worse experience. Newborn babies are also greatly at risk of an infection. Chickenpox is considered a moderate disease when it occurs in children, but the affected skin areas can be extremely itchy and the child can have multiple symptoms ranging from fever, to feeling irritable even to feeling miserable' 
        },
        {
          title: 'Possible Symptoms',
          content: 'Crusting,Earache,Fever,Formation of blisters on a skin area,Itching of skin,Pain radiating to the leg,Skin lesion,Skin rash,Scar,Wound'
        },
        {
          title: 'Treatment Description',
          content: 'Chickenpox does not have a particular treatment however medication can improve the symptoms. Mostly what happens is that the affected childrens blisters start to crust up and then fall off by themselves within a timeframe of up to two weeks. A kid who has the disease should be kept away from public places so that the risk is reduced of infecting other persons who may not have had it. It’s also recommended that contact with pregnant women should be avoided, as an infection early on in the pregnancy or towards the birth can put the baby into serious health risks. Normally the treatment for chickenpox consists of medicine which reduces the urge to itch. Salves can also be used to dry out the blisters. With herpes zoster, anti-viral medication can be used to shorten the duration and intensity of the disease. A vaccine exists for children and youth against varicella and there is also a zoster vaccination for seniors over 60.'
        },
        {
          title: 'Herbal Medicines',
          content: 'Not available'
        },
        {
          title: 'Medical Specialist',
          content: 'Physician, Pediatrician'
        }
      ]
    },
    Q3isTrue(){
      this.Q3 = true,
      this.no_display(),
      this.Q3_Display = true
      this.Q4_Display = true
    },
    Q3isFalse(){
      this.Q3childIsFalse = true,
      this.no_display(),
      this.Q3_Display = true,
      this.Q3child_Display = true
    },
    Q3result(){
      this.Q3childIsTrue = true,
      this.no_display(),
      this.Q3_Display = true,
      this.Q3child_Display = true,
      this.Q3result_Display = true,
      //this.getIllnesses(5)
      this.lists= [
        {
          title: 'Description',
          content: 'Dehydration is a state arising from various causes in which there is too little water in the body. Lack of fluids can be so severe that intensive care is required.'
        },
        {
          title: 'Medical Condition',
          content: 'In patients who suffer from dehydration, mucous membranes are dry, folds in the skin remain (by pulling a bit of skin on the back of the hand with two fingers, the skin will flatten only after a period of time), and low blood pressure with accompanying increased heart rate develops. Production of urine may be reduced (very dark, concentrated urine) or completely stop. Besides that, fever, confusion, and drowsiness may occur.' 
        },
        {
          title: 'Possible Symptoms',
          content: 'Fever,Tiredness,Dizziness,Increased thirst,Palpitations,Cramps,Dry skin,Difficult defecation,Headache,Dry mouth,Dark urine,Decreased urine stream,Disorientation regarding time or place,Sore throat,Less than 3 defecations per week'
        },
        {
          title: 'Treatment Description',
          content: 'Depending on the extent of dehydration, various diagnostic measures and therapies are necessary. In the case of mild dehydration, a visit to your doctor and drinking lots of fluids is sufficient. In serious cases, circumstances call for intensive medical observation and treatment via infusion.'
        },
        {
          title: 'Herbal Medicines',
          content: 'Not available'
        },
        {
          title: 'Medical Specialist',
          content: 'Physician, Internist'
        }
      ]
    },
    Q4isTrue(){
      this.Q4 = true,
      this.Q4childIsTrue = true,
      this.no_display(),
      this.Q3_Display = true
      this.Q4_Display = true
      this.Q5_Display = true
    },
    Q4isFalse(){
      this.Q4childIsFalse = true,
      this.no_display(),
      this.Q3_Display = true
      this.Q4_Display = true,
      this.Q4child_Display = true
    },
    Q4result(){
      this.Q4childIsTrue = true,
      this.no_display(),
      this.Q4result_Display = true,
      //this.getIllnesses(3)
      this.lists= [
        {
          title: 'Description',
          content: 'Measles is caused by a virus and is very contagious. Measles can be very unpleasant and can lead sometimes to serious complications. Anyone can get measles if he has not been vaccinated. People who did not have measles before can also get it if they come in contact with an infected person. However, the condition is most common in young children. The infection disappears usually in around 7 to 10 days.'
        },
        {
          title: 'Medical Condition',
          content: 'The infection begins with flu-like symptoms (runny nose, fever, cough) and subsequently develops into a fever and a rash with large spots that spread from the head downward. The lymph nodes are also swollen enough to be felt. Because the measles weakens the immune system, other dangerous secondary infections of the lung or brain can develop. The measles can remain undetected for several years after the initial attack and attack the brain, which can lead to death.' 
        },
        {
          title: 'Possible Symptoms',
          content: 'Burning eyes,Burning in the throat,Cough,Eye redness,Fever,Itching eyes,Pain in the limbs,Runny nose,Skin rash,Sore throat,Swollen glands in the armpit,Swollen glands in the groin,Swollen glands in the neck,Tiredness,Oversensitivity to light,Facial swelling,Flaking skin'
        },
        {
          title: 'Treatment Condition',
          content: 'To prevent measles, an effort to vaccinate the entire population is being undertaken to protect from the consequences of the infection. Two shots are required, the first one at 12 months of age and the second at 15-24 months. The shot is combined with other vaccines for measles, mumps, and rubella (MMR). If an infection with measles occurs, the infected child should not be allowed contact with other children for 5 days after the outbreak of the rash to prevent the infection from spreading. People who have come in contact with the infected child (classmates, for example) and who have not had measles or been vaccinated against them should stay at home for 14 days for the same reason. There is no treatment for measles. The only protection against measles is the vaccination or a previous measles infection.'
        },
        {
          title: 'Herbal Medicines',
          content: 'Badak/Jack fruit, Bayaba/Guava, Durian, Gelay, Gontor/Whitehead Spikesedge, Kamais, Katubuk, Mombas, Pa-Ir, Sabi/Epazote'
        },
        {
          title: 'Medical Specialist',
          content: 'Physician, Pediatrician'
        }
      ]
    },
    Q5isTrue(){
      this.Q5 = true,
      this.no_display(),
      this.Q6result_Display = true
      //this.getIllnesses(1)
      this.lists= [
        {
          title: 'Description',
          content: 'Flu, also known as influenza, is a viral infection of the nose, sinuses, throat, and respiratory tract. It’s seasonal, often occurring in winter, and can spread rapidly, called then flu epidemic.'
        },
        {
          title: 'Medical Condition',
          content: 'When the infection occurs in healthy young people, it is usually not dangerous and lasts around one or two weeks. In some cases a dry cough may develop and last a bit longer. Elderly and those with pre-existing illnesses have a higher risk for complications. For this reason it’s recommended that these groups get vaccinated. Swine and bird flus are caused by slight different influenza viruses, but causing similar symptoms. Flu typically develops rapidly, with fever (sometimes accompanied with chills), muscle pain, headache, a dry and painful cough, sore throat, and exhaustion or fatigue. It’s important to note that the flu is different from the common cold, which is often also caused by a virus, but causes milder symptoms.' 
        },
        {
          title: 'Possible Symptoms',
          content: 'Reduced appetite,Shortness of breath,Eye redness,Sputum,Burning in the throat,Chest pain,Fever,Pain in the limbs,Sore throat,Cough,Headache,Swollen glands in the neck,Swollen glands in the armpit,Tiredness,Runny nose,Sneezing,Chills,Sweating,Stuffy nose,Cough with sputum,Neck stiffness,Muscle weakness,Diarrhea,Night cough,Dizziness,Feeling ill'
        },
        {
          title: 'Treatment Condition',
          content: 'Even today flu can have fatal consequences for those with pre-existing conditions and requires a hospital stay with emergency medical measures. Normally it is self-limited and the body recovers by itself. A doctor may prescribe medication to help shorten the course of the flu if taken early. Bed rest and staying hydrated are usually sufficient. Medications such as Ibuprofen or Aspirin can lower a fever and relieve symptoms, but they will not shorten the course of the illness and should be used in children with caution. Flu vaccine is recommended for the following groups at risk: nursing infants, people over 60, people with compromised immune systems, and pregnant women.'
        },
        {
          title: 'Herbal Medicines',
          content: 'Apel/Star Apple, Kamantis/Tomato, Kapal/Mexican Mint, Kasapi-Sapi/Billygoat Weed, Kopaya/Papaya, Loya, Manganonok, Mango-Aw/Tall Fleabane, Palyas/Willow-Leaved Justicia, Rembayog, Sabi/Epazote, Salimbawangen/Mugwort, Tangila Lopa, Toor, Vicks/Oregano'
        },
        {
          title: 'Medical Specialist',
          content: 'Physician, Internist'
        }
      ]
    },
    Q5isFalse(){
      this.Q5childIsFalse = true,
      this.no_display(),
      this.Q5child_Display = true
    },
    Q5result(){
      this.Q5childIsTrue = true,
      this.no_display(),
      this.Q5child_Display = true,
      this.Q5result_Display = true,
      //this.getIllnesses(2)
      this.lists= [
        {
          title: 'Description',
          content: 'Colds are very common and widespread and most cases are caused by a virus. Treatment with antibiotics is not advisable, as antibiotics are ineffective against viruses. Common cold affects the nose and airways and its symptoms are milder than a flu. Colds are usually harmless even if they might not feel that way.'
        },
        {
          title: 'Medical Condition',
          content: 'A cold virus penetrates the human body through his nose, mouth or eyes. People can catch the disease by sharing objects that have been contaminated by the virus such as toys, telephones, utensils or towels. The virus can also spread by physical touch such as hand-to-hand contact with a contaminated person. The virus may also spread over the air through small drops released when someone who has cold talks, coughs or sneezes.' 
        },
        {
          title: 'Possible Symptoms',
          content: 'Stuffy nose,Burning eyes,Burning in the throat,Cough,Eye redness,Fever,Headache,Itching eyes,Pain in the limbs,Runny nose,Sneezing,Sore throat,Sputum,Swollen glands in the neck,Tiredness,Cough with sputum,Neck stiffness,Night sweats,Hoarseness,Tears,Dizziness,Night cough,Feeling ill'
        },
        {
          title: 'Treatment Condition',
          content: 'A cold usually runs its course without lasting harm and then disappears on its own. Rarely it is the start of a serious infection such as a lung infection. Just as with the flu, bed rest and sufficient hydration are recommended. If necessary, fever reducing medication can be taken. Anti-inflammatory nasal sprays and inhalants can provide additional relief. Although an exception to the rule, a bacterial infection may be present alongside a viral infection, in which case a doctor can prescribe an antibiotic.'
        },
        {
          title: 'Herbal Medicines',
          content: 'Biks/Mexican mint, Gabana, Kaburuburuk/Wild -Sage, Kapal/Mexican Mint, Kasapi-Sapi/Billygoat Weed, Kasp a Nipay, Katangan-Tangan, Kopaya/Papaya, Lagundi, Lemonsito/Calamansi, Luya Tidek, Mangolambo, Mengiyak, Mombas, Namat/Piper Betle, Pega, Salimbawangen/Mugwort, Felon, Talawatawa, Tangila Lopa, Toor'
        },
        {
          title: 'Medical Specialist',
          content: 'Physician'
        }
      ]
    },
    sorry(){
      this.no_display()
      if (this.Q2childIsFalse === true){
        this.Q2child_Display = true,
        this.Sorry_Display = true
      } else if (this.Q3childIsFalse === true){
        this.Q3_Display = true,
        this.Q3child_Display = true,
        this.Sorry_Display = true
      } else if (this.Q4childIsFalse === true){
        this.Sorry_Display = true
      } else if (this.Q5childIsFalse === true){
        this.Q5child_Display = true
        this.Sorry_Display = true
      } else{
        this.display = true,
        this.Q1_Display = true,
        this.Sorry_Display = true
      }
    },
    done () {
      this.no_display()
      if (this.Q2childIsTrue === true){
        this.start_over = true
      } else if (this.Q5 === true){
        this.start_over = true
      } else if (this.Q5childIsTrue === true){
        this.start_over = true
      } else if (this.Q5childIsFalse === true){
        this.Q5child_Display = true
        this.Sorry_Display = true
        this.start_over = true
      } else if (this.Q4childIsTrue === true){
        this.start_over = true
      } else if (this.Q4childIsFalse === true){
        this.Sorry_Display = true,
        this.start_over = true
      } else if (this.Q2childIsFalse === true){
        this.Q2child_Display = true,
        this.Sorry_Display = true,
        this.start_over = true
      } else
        this.start_over = true
    },
    startOver(){
      this.no_display(),
      this.onReset(),
      this.display= true
    },
    no_display(){
      this.display= false,
      this.Q1_Display= false,
      this.Q2_Display= false,
      this.Q3_Display= false,
      this.Q4_Display= false,
      this.Q5_Display= false,
      this.Q2child_Display= false,
      this.Q3child_Display= false,
      this.Q4child_Display= false,
      this.Q5child_Display= false,
      this.Q2result_Display= false,
      this.Q3result_Display= false,
      this.Q4result_Display= false,
      this.Q5result_Display= false,
      this.Q6result_Display= false,
      this.Sorry_Display= false,
      this.start_over= false
    },
    onReset(){
      this.Q1= false,
      this.Q2= false,
      this.Q3= false,
      this.Q4= false,
      this.Q5= false,
      this.Q2childIsTrue= false,
      this.Q3childIsTrue= false,
      this.Q4childIsTrue= false,
      this.Q5childIsTrue= false,
      this.Q2childIsFalse= false,
      this.Q3childIsFalse= false,
      this.Q4childIsFalse= false,
      this.Q5childIsFalse= false
    }
  }
}
</script>
