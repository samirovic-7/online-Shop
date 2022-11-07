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
          
        ><img  src="../assets/camera-1130731_640.jpg" ></v-avatar>
      
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

 

    <v-sheet

    >
        
      <v-card
      id="CARDFORMS" 
        >
        <v-form v-model="valid">
    <v-container >
      <v-row md="8">
        <v-col
          md="10"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="الأسم"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="phone"
            :counter="11"
            label="رقم التليفون"
            required
          ></v-text-field>
        </v-col>

        <v-col
          md="10"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="ايميل"
            required
          ></v-text-field>
        </v-col>
    
           <v-col
          md="10"
        >
          <v-text-field
            label="المختصر"
          ></v-text-field>
          </v-col>
                <v-col
        md="10"
                  >
          <v-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera"
    label="اضافة صورة"
  ></v-file-input>
            </v-col>
          <v-col
          md="10">
           <v-checkbox
              v-model="ex4"
              label="اوافق"
              color="indigo darken-3"
              value=""
              hide-details
            ></v-checkbox>
          </v-col>
          <v-col
            md="4"
            id="ColsButtons"
          >
              <v-btn id="butt">
            اعادة تعيين
          </v-btn>
        
          <v-btn
            
             color="primary"
            
             id="butt"
          >
            ارسال الطلب
          </v-btn>
          </v-col>
        
      </v-row>
  
    </v-container>
    
  </v-form>
  
          </v-card>
          
      <v-container style="height: 1000px;"></v-container>
      
    </v-sheet>
    
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
      valid: false,
      firstname: '',
      phone: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
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
#one{
background-color:white;
box-shadow: 0px 0px 0px 0px white;
}
.v-toolbar__extension{
  width:100%;
  padding:4%;
}
#Tabs{
    height: 70px; 

}
 
.v-list-item__icon{
position:absolute;
 left: -12px;
}
.v-navigation-drawer__content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    width: 394px;
}
#LogoImg {
    position: absolute;
    top: 1%;
    left: 69%;
    height: 95%;
    width: 28%;
    display: flex;
    justify-content: space-between;
}
 
#Logotext{
    position: absolute;
    top: 47%;
    left: 26%;
    height: 44%;
    width: 42%;
    font-size: 75%;
    margin-top: 0%;

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
#CARDFORMS{
  border-left:2px solid white;
  position:absolute;
  top:20%;
  left:15%;
  padding:5% 2%;
  border-top-left-radius: 70px;
  width:950px;
  box-shadow:-1px 0px 12px 0px #283593;
  overflow-x: hidden;
}
#ColsButtons{
margin:1% auto;
display:flex;
justify-content:space-between;
}
#butt{
padding:8%;
box-shadow:0px 0px 12px 0px #283593;
}
#CHIP{
display:flex;
justify-content:space-around;
width:30%;
margin:1% auto;;
}
@media (max-width:600px){
#CHIP{
display:flex;
justify-content:space-around;
width:70%;
margin:1% auto;
}
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