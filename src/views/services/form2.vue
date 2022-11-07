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
        absolute
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

 

    <v-sheet>
        
    
      <v-container style="height: 1230px;"></v-container>
      
    </v-sheet>
    
  </v-card>
  <v-card
      id="CardTextForm" 
        >
        <v-form v-model="valid">
    <v-container >
      <v-row md="8">
        <v-col
          md="10"
        >
          <v-card-text id="formtext">
         <v-avatar
          id="avatarform"
          size="81"
        ></v-avatar>
         
      
        <h2 class="h2"  >Mdl Media</h2>
      </v-card-text>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Your Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="phone"
            :counter="11"
            label="phone"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

           <v-col
          md="10"
        >
          <v-text-field
            v-model="first"
            label="Your Order"
            outlined
            height="150"
          ></v-text-field>
        </v-col>
      
          <v-col
            md="4"
            id="ColsButton"
          >
         
        
          <v-btn
            
             color="primary"
            
             id="button"
          >
           subscribe now
          </v-btn>
          </v-col>
        
      </v-row>
  
    </v-container>
    
  </v-form>
  
          </v-card>
          
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
</style>