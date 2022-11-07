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
 
 
 
    </v-toolbar> 
      
 </div>
</v-container>
<div id="all">  
 <v-toolbar
 class="primary"
        height="8"
     >
     </v-toolbar>
 <v-card id="care">
   
     <div id="left">
         <v-tabs vertical>
      <v-tab to="/product1">
        <v-icon left>
          mdi-account
        </v-icon>
       محتوى والتصميم
      </v-tab>
      <v-tab to="/product2">
        <v-icon left>
          mdi-lock
        </v-icon>
       تسويق يوم واحد
      </v-tab>
      <v-tab to="/product3">
        <v-icon left>
          mdi-access-point
        </v-icon>
       باقات التسويق الشهرية
      </v-tab>
 <v-tab to="/product4">
        <v-icon left>
          mdi-atom
        </v-icon>
        استشارات ودورات
      </v-tab>
      <v-tab to="/product5">
        <v-icon left>
          mdi-anchor
        </v-icon>
        التسويق للغير
      </v-tab>
      <v-tab to="/product6">
        <v-icon left>
          mdi-android
        </v-icon>
        ترويج
      </v-tab> 
       <v-tab to="/product7">
        <v-icon left>
          mdi-airplane
        </v-icon>
        تسويق سناب
      </v-tab> 
       <v-tab to="/product8">
        <v-icon left>
          mdi-alarm-light-outline
        </v-icon>
       تسويق واتس اب وتلجرام 
      </v-tab> 
       <v-tab to="/product9">
        <v-icon left>
          mdi-abacus
        </v-icon>
        التلفزيون
      </v-tab> 
       <v-tab to="/product10">
        <v-icon left>
          mdi-contactless-payment
        </v-icon>
       قلم رصاص
      </v-tab> 
      
       <v-tab to="/product11">
        <v-icon left>
          mdi-guy-fawkes-mask
        </v-icon>
        مواقع ومتاجر الكترونية
        
      </v-tab> 
       <v-tab to="/product12">
        <v-icon left>
          mdi-gog
        </v-icon>
       اعادة تهئية المشاريع
      </v-tab> 
       <v-tab to="/product13">
        <v-icon left>
          mdi-palm-tree
        </v-icon>
        اعلان TikTokAds
      </v-tab> 
    </v-tabs>

   </div>
<div id="right">


</div>
  </v-card>

  </div>
 

    <v-card id="Cardionum">
 
 <col md="3">
    <v-card id="cardinate">
  
  <div id="avat">
      <v-icon size="70">
         mdi-dialpad
        </v-icon>
      </div>
    
      <h3>خدمة العملاء
</h3>
      
        <div id="CardText" >
نرد على استفساراتكم ومتابعه خططكم التسويقية للتنفيذ



        </div>
    
    </v-card>
  
<col md="3">
    <v-card id="cardinate">
  
  <div id="avat">
    <v-icon size="70">
         mdi-message-text
        </v-icon>
    </div>
    
      <h3>تستطيع ان تدير حملتك من اي مكان
</h3>
      
        <div id="CardText" >
       www.abcoms.net

 
        </div>
    
    </v-card>
 <col md="3">
    <v-card id="cardinate">
  
  <div id="avat">
    <v-icon size="70">
         mdi-domain
        </v-icon>
    </div>
    
    
      <h3>الشركة
</h3>
      
        <div id="CardText" >
        الشركة تخدمك عن بعد او بحضورك لاي مدينة فيها افرعنا


        </div>
    
    </v-card>
 
 
  </v-card>



<a href="#">
<v-container> <div id="cenImg"></div> </v-container>
</a>



 
<v-container>

    <v-card id="Cardionum">
        
    <v-row id="RowImg">
    <v-col
      v-for="n in 6"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
       
        </template>
      </v-img>
    </v-col>
  </v-row>
 
  </v-card>
</v-container>
 
 

<v-container>
<div id="cenImg">
</div>
</v-container>

<v-container>

<v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
     v-for="(item,i) in items"
      :key="i"
    >
    
      <v-sheet
        height="100%"
      >
        <img
      :src="item.src"
     >
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</v-container>
 



<a href="#">
<v-container> <div id="cenImg"></div> </v-container>
</a>






<a href="#">
<v-container> <div id="cenImg"></div> </v-container>
</a>






<a href="#">
<v-container> <div id="cenImg"></div> </v-container>
</a>




<a href="#">
<v-container> <div id="cenImg"></div> </v-container>
</a>




<a href="#">
<v-container> <div id="cenImg"></div> </v-container>
</a>




<a href="#">
<v-container> <div id="cenImg"></div> </v-container>
</a>


<v-container id="last">
 <v-row align="center">
    <v-item-group
      v-model="window"
      class="shrink mr-6"
      mandatory
      tag="v-flex"
      vertical
    >
      <v-item
        v-for="n in length"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <div>
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>

    <v-col>
      <v-window
        v-model="window"
        class="elevation-1"
         
      >
      
        <v-window-item
          
           v-for="(item,i) in items"
      :key="i"
        >
          <v-card flat>
            <v-card-text>
              <v-row
                class="mb-4"
                align="center"
              > 
                          <img
                        :src="item.src"  >
            
              </v-row>

              

             
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</v-container>
  
 

  <v-footer 
  

    id="footer"
    padless
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
      items: [
               {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      
       length: 3,
      window: 0,
      dialog: false,
      messages: 0,
      snackbar: false,
      text: `البريد الألكترونى خطأ`,
      }
    },
  }
</script>
<style>
  
#footer{
width:100%;
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
margin-bottom: 1%;
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
justify-content:space-between;
    width: 100%;
    margin: auto;
    padding: 0%;
}
#Cardionum{
display:flex;
flex-wrap: wrap;
box-shadow: none;
margin:1% auto;
 }
#cardinate{
box-shadow:none;
padding:1%;
height: 230px;
box-shadow: 0px 0px .4px 0px ;
font-size:100%;
width:22%;
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

</style>