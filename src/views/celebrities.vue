<template>
   <v-app>
   <div>
    <v-app-bar
      dense
    >
      <div>  <v-row  >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
       
           <v-btn
            v-bind="attrs"
          v-on="on"
      >
      
        <v-icon  >
          mdi-account
        </v-icon>
      </v-btn>
      </template>
      <v-card>
      <v-card-title>
      
          <span class="text-h4 mx-auto pt-12">تسجيل الدخول  </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            
              
              <v-col cols="12">
                <v-text-field
                  label="البريد *"
                  required
                ></v-text-field>
              </v-col>
                
              
            </v-row>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        <div class="text-center ma-2">
    <v-btn
    class=" indigo darken-4"
    dark
      @click="snackbar = true"
    >
      submit
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row></div>
 

      <v-spacer></v-spacer>

 <div id="Chipsheader">
    <v-chip >
      <v-icon left>
        mdi-phone
      </v-icon>
      01159839072
    </v-chip>
    <v-chip  >
        mtdmedia@gmail.com
      <v-icon right>
    mdi-email
      </v-icon>
    </v-chip>
  </div>
     
    </v-app-bar>
  </div> 
<v-container id="cont" fluid >
 

   <div id="toolbar">
    <v-toolbar>
      <v-text-field
      id="textField"
        append-icon="mdi-microphone"
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      ></v-text-field>
      <v-spacer></v-spacer>
 
 
      <v-badge
        :content="messages"
        :value="messages"
        color="blue"
        overlap
        class="mx-6"
      >
       <v-tab to="/check">
        <v-icon large>
          mdi-cart-variant
        </v-icon>
           
    
      </v-tab>
      </v-badge> 
    </v-toolbar> 
      
 </div>
</v-container>




 <v-card  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>
    <v-window v-model="step" >
      <v-window-item :value="1" >
        <v-card-text>
            <v-card
      id="CardTextForm" 
        >
        <v-form v-model="valid">
    <v-container >
     
        <v-col
          md="10"
          
        >
         
          <v-text-field
            v-model="firstname1"
            :rules="nameRules"
             label="الأسم"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="phone1"
             label="رقم التليفون"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="email1"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
  
 
    <v-col
          md="10"
        >
          <v-text-field
            v-model="Email1"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
   <v-col
          md="10"
        >
          <v-text-field
            v-model="eMAIL1"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
  
  
    </v-container>
    
  </v-form>
  
          </v-card>
        
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-card
      id="CardTextForm" 
        >
        <v-form v-model="valid">
    <v-container >
     
        <v-col
          md="10"
          
        >
         
          <v-text-field
            v-model="firstname2"
            :rules="nameRules"
             label="الأسم"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="phone2"
             label="رقم التليفون"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="email2"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
  
 
    <v-col
          md="10"
        >
          <v-text-field
            v-model="Email2"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
   <v-col
          md="10"
        >
          <v-text-field
            v-model="eMAIL2"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
  
  
    </v-container>
    
  </v-form>
  
          </v-card>
        
      
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
             <v-card
      id="CardTextForm" 
        >
        <v-form v-model="valid">
    <v-container >
     
        <v-col
          md="10"
          
        >
         
          <v-text-field
            v-model="firstname3"
            :rules="nameRules"
             label="الأسم"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="phone3"
             label="رقم التليفون"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="email3"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
  
 
    <v-col
          md="10"
        >
          <v-text-field
            v-model="Email3"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
   <v-col
          md="12"
        >
          <v-text-field
            v-model="eMAIL3"
            :rules="emailRules"
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
  
  
    </v-container>
    
  </v-form>
  
          </v-card>
        
      </v-window-item>
    </v-window>
    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>



 <v-footer
    id="footer"
    padless
    bottom
  >


    <v-card 
      flat
      tile
      id="footerCard"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          id="icons"
          icon
        >
          <v-icon size="29px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text id="cardtext">
تأسست شركة الألف والباء القابضة على يد شابات سعوديات بقيادة الرئيس التنفيذي سامية الفضلي الحائزة على جائزة الإصرار لفئة رائدات الأعمال ، تخصصت الشركة في مجال تقديم الخدمات التسويقية الذكية للمؤسسات وإدارة قنوات الإتصال مع مجتمع الأعمال , وتقدم الشركة مجموعة واسعة من الأعمال النوعية لضمان نجاح أي فعالية أو مشروع لعملائها الكرام في الخليج والشرق الأوسط معاً

      </v-card-text>
 <div id="CHIP">
    <v-chip id="Chip">
      <v-icon left>
        mdi-phone
      </v-icon>
      01159839072
    </v-chip>
    <v-chip id="Chip">
        mtdmedia@gmail.com
      <v-icon right>
    mdi-email
      </v-icon>
    </v-chip>
  </div>
      <v-divider></v-divider>

      <v-card-text id="cardtext">
        {{ new Date().getFullYear() }} — <strong>mtdmedia</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  





 
  </v-app>
</template>
<script>
   
   export default {
    data () {
      return {
            step: 1,
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
       loading: false,
      selection: 1,
       length: 3,
      window: 0,
      dialog: false,
      messages: 0,
      snackbar: false,
      text: `البريد الألكترونى خطأ`,
      }
    },

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Social Media Accounts'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
       methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
<style>
  
#footer{
width:100%;
margin-top:4%;
}
#footerCard{
color:white;
background:#283593;
text-align:center;
width:100%;
position:relative;
bottom:0%;
}
#cardtext{
color:white;
}
#cont{
padding:0;
margin-bottom: 3%;
}
#all{
margin-bottom: 8%;
height: 700px;
 }
#toolbar{
width:100%;
margin:.1% auto;
display: flex;
justify-content:space-between;
box-shadow: 10px 1px 22px 1px;
} 
.v-input{
width:70%;
 }
#left{
width:20%;
box-shadow: 0px 0px 3px 0px ;
}

#right{
width:79.5%;
box-shadow: 0px 0px 3px 0px ;
height: 700px;
background-image:url("../assets/camera-1130731_640.jpg");
background-size:cover;
background-position:center;
}
#care{
display:flex;
justify-content:space-between
}
#cardio{
display:flex;
flex-wrap: wrap;
justify-content:space-between;
padding:3%;
margin-top:-10px;
box-shadow: none;
margin:0%  ;
 }
#cardinate{
box-shadow:none;
padding:1%;
height: 230px;
box-shadow: 0px 0px .4px 0px ;
 font-size:100%
}
#avat{
width:50%;
height:45%;
box-shadow: 0px 0px 6px 0px;
border-radius:50%;
margin:auto;
padding:3%;
}
#cenImg{
widows: 100%;
height:190px;
margin:auto;
background-image:url("../assets/pepsi.png");
background-size:cover;
background-position:center;
}
#last .row {
margin:0 0 10% 0;
height:480px;
position: relative;
top:-20%;
}
#last .shrink { 
height:130px;
position: relative;
top:70%;
left:5%;
padding:1%;
}
#last .v-window{
width:80%;
position: relative;
left:9%;
 }
 .v-slide-group__wrapper{
    position: relative;
   top:-90%;
 }
 
#left .v-slide-group__wrapper{
    position: relative;
   top:0;
 }
 #ALLCARD{ 
   display: flex;
   flex-wrap: wrap;
   justify-content:space-around;
   align-content: space-around;
 }
 #CARDS{ 
    max-width: 320px;
 }
 .v-application .mx-6 {
    margin-right: 24px !important;
}
.v-badge {
    display: inline-block;
    line-height: 1;
    position: relative;
    left: -35px;
}
.v-badge__wrapper {
    flex: 0 1;
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 75%;
}
.v-item-group {
    flex: 0 1 auto;
    position: relative;
    max-width: 100%;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    height: 663px;
}
#CardTextForm {
    border-left: 2px solid white;
    position: absolute;
    margin:auto;
    padding: 4%;
    border-top-left-radius: 70px;
    width: 1000px;
    box-shadow: -1px 0px 12px 0px #283593;
}
.v-window__container {
    display: flex;
    flex-direction: column;
    height: 15%;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.v-sheet.v-card:not(.v-sheet--outlined) {
    width: 90%;
    margin:  auto;
    padding:1%;
}
.v-sheet.v-card {
    border-radius: 30px;
}
.col-md-10 {
    flex: 0 0 83.3333333333%;
    max-width: 100.333333%;
}


</style>