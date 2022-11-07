<template>
  <v-app>
 <v-card>
      <v-app-bar
       prominent
       absolute
       id="one"
     >

      
         <v-responsive  id="LogoImg">
            <v-avatar
          id="ava"
          size="115"
          
        ><img  src="../../assets/camera-1130731_640.jpg" ></v-avatar>
      
        </v-responsive>
     
 

    </v-app-bar>



 <v-navigation-drawer
        permanent
        expand-on-hover
        fixed
      >
       

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
        <v-tab  to="/">
          <v-list-item link id="Tabs">
            <v-list-item-icon>
              <v-icon  size="32">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>الرئيسية</v-list-item-title>
          </v-list-item>
          </v-tab>
          <v-tab  to="/App_Services">
          <v-list-item link id="Tabs">
            <v-list-item-icon>
              <v-icon  size="32">mdi-storefront</v-icon>
            </v-list-item-icon>
            <v-list-item-title>متجر الخدمات</v-list-item-title>
          </v-list-item>
          </v-tab>
          <v-tab  to="/Our_Services">
          <v-list-item link id="Tabs">
            <v-list-item-icon>
              <v-icon  size="32">mdi-apps</v-icon>
            </v-list-item-icon>
            <v-list-item-title>خدماتنا</v-list-item-title>
          </v-list-item>
          </v-tab>
          <v-tab to="/Hiring">
          <v-list-item link id="Tabs">
            <v-list-item-icon>
              <v-icon  size="32">mdi-briefcase</v-icon>
            </v-list-item-icon>
            <v-list-item-title>التوظيف</v-list-item-title>
          </v-list-item>
          </v-tab>
          <v-tab to="/News">
          <v-list-item link id="Tabs">
            <v-list-item-icon>
              <v-icon  size="32">mdi-electron-framework</v-icon>
            </v-list-item-icon>
            <v-list-item-title>الأخبار </v-list-item-title>
          </v-list-item>
          </v-tab>
           <v-tab  to="/Contact_us">
          <v-list-item link id="Tabs">
            <v-list-item-icon>
              <v-icon  size="32">mdi-card-account-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title>اتصل بنا</v-list-item-title>
          </v-list-item>
         </v-tab>
            
        </v-list>
        
      </v-navigation-drawer>

 
    
  </v-card>
  




  <v-container id="centerpage" fluid>
   <h2 class="HH2  ">باقة ريادي</h2><br>
   <p class="HH3">باقة مبتكرة ذات هدف تسويقي مناسب للأفراد والمنشأت الصغيرة</p>
       <v-card
  
     id="offer"
  >
    <v-card-text>
      <div>العروض المتاحة</div><br>
      <h1 class="text--primary" >
        شهر واحد
      </h1><br>
      <h2 class="text--primary">7000 رسالة موجهة</h2><br>
      <h3 class="text--primary">
        1000,000 ظهور
      </h3>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="indigo lighten-5"
        @click="reveal = true"
      >
        Learn More
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >
        <v-card-text class="pb-0">
          <h1 class="text--primary">
            اشترك
          </h1><br>
          <h2 class="text--primary">ثلاثة شهور </h2><br>
          <h3 class="text--primary">واحصل على</h3><br>
          <h4 class="text--primary">خدمات مجاناً</h4><br>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="indigo darken-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
   <br><br> <br>   <h2 class="HH2  ">4900 ريال / شهر</h2>
  </v-card>
      
          </v-container>
          

  <v-container id="ok">
    <v-row justify="space-around">
      <v-card width="500">
        <v-img
          height="70px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          id="photo"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
  
 

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
 
        </v-img>

        <v-card-text>
          <div class="font-weight-bold ml-3  ">
             الخدمات المجانية
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                  <br><br>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
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
    data: () => ({
       messages: [
        {
          message: `شاهد نت شهر`,
       
          color: 'indigo darken-1',
        },
        {
          message: ' قوقل بزنس',
     
          color: 'indigo darken-1',
        },
        {
          message: 'تحليل البنية التحتيه',
       
          color: 'indigo darken-1',
        },
        {
          message: 'مخطط موقك الإلكتروني',
        
          color: 'indigo darken-1',
        },
        {
          message: 'ربط تحليلات قوقل',
      
          color: 'indigo darken-1',
        },
        {
          message: 'انتاج 3×3 موشن (10) ثواني',
        
          color: 'indigo darken-1',
        },
        {
          message: ' تصميم (6) تصاميم',
          
          color: 'indigo darken-1',
        },
        {
          message: 'تحليلات انستقرام وفيسبوك',
         
          color: 'indigo darken-1',
        },
        
      ],
      reveal: false,
          icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
            links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>


<style>

.v-toolbar__extension{
  width:100%;
  padding:4%;
}
#tabs{
width:60%;
position:absolute;
top:1%;
left:5%;
}

#LogoImage{
position:absolute;
top:-47%;
left:70%;
height:80%;
width:18%;
display:flex;
justify-content:space-between;
}
#LogoText{
position:absolute;
top:10%;
left:2%;
height:76%;
width:65%;
font-size:70%;
margin-top:4%;

}
#LogoText span{
font-size:100%;
}
#avatar{
box-shadow:0px 0px 4px 1px white;
position:relative;
left:71%;
top:15%;
}
#avatarform{
box-shadow:0px 0px 4px 1px black;
position:relative;
left:44%;

margin-bottom: 1%;
}
#CardTextForm{
  border-left:2px solid white;
  position:absolute;
  top:20%;
  left:20%;
  padding:3%;
  border-top-left-radius: 70px;
  width:950px;
  box-shadow:-1px 0px 12px 0px #283593;
  
} 
#ColsButton{
margin:1% auto;
}
#button{
box-shadow:0px 0px 12px 0px #283593;
width:100%;
}
#Chips{
display:flex;
justify-content:space-around;
width:40%;
margin:1% auto;;
}
#Chip{
background:#283593;
box-shadow:0px 0px 2px 2px #3949AB;
color:white;
padding:2%;
cursor:pointer;
}
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
#icons{
color:white;
margin:0% 1%;
}

#centerpage{
position:relative;
top:12%;
padding-top: 4%;
height:900px; 
margin-bottom: 1%; 
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
#offer{
    margin:auto;
     width:420px;
     height:240px;
     background-color:#42A5F5;
     text-align:center;
     box-shadow: 0px 0px 13px 1px ;
     font-family:'Courier New', Courier, monospace
}
.HH2{
  text-align:center;
  font-size:250%;
  color:#1E88E5;
  font-family:'Courier New', Courier, monospace;
}
.HH3{
  text-align:center;
  font-size:200%;
  color:#113b60;
  font-family:'Courier New', Courier, monospace;
}
#ok{
  margin:3% auto;
}
#photo{
  opacity: .5;
}
</style>