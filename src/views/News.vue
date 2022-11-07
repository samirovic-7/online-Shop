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

 
            <v-img id="img"><span id="textImg">الأخبار والمدونة</span></v-img>

    <v-sheet
>
        
      <v-container id="con">
         <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="4">
          <v-card id="cards">
            <v-img
              src="https://picsum.photos/350/165?random"
              id="CardImg"
            ></v-img>
            <v-card-title class="text-h6">
              شركة AB توقع عقد تسويق عقاري مع شركة دار الاركان العقارية
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card id="cards">
            <v-img
              src="https://picsum.photos/350/165?random"
              id="CardImg"
            ></v-img>
            <v-card-title class="text-h6">
شركة AB توقع عقد تسويق عقاري مع شركة عزيزي للاستثمار العقاري            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card id="cards">
            <v-img
              src="https://picsum.photos/350/165?random"
              id="CardImg"
            ></v-img>
            <v-card-title class="text-h6">
             «سابتكو» لمدة ثلاث سنوات عقداً لتقديم الإعلان على الحافلات
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="4">
          <v-card id="cards">
            <v-img
              src="https://picsum.photos/350/165?random"
              id="CardImg"
            ></v-img>
            <v-card-title class="text-h6">
              شركة AB توقع عقد تسويق عقاري مع شركة دار الاركان العقارية
            </v-card-title>
          </v-card>
        </v-col>
        
        <v-col cols="4">
          <v-card id="cards">
            <v-img
              src="https://picsum.photos/350/165?random"
              id="CardImg"
            ></v-img>
            <v-card-title class="text-h6">
              «سابتكو» لمدة ثلاث سنوات عقداً لتقديم الإعلان على الحافلات
            </v-card-title>
          </v-card>
        </v-col>
        
        <v-col cols="4">
          <v-card id="cards">
            <v-img
              src="https://picsum.photos/350/165?random"
              id="CardImg"
            ></v-img>
            <v-card-title id="PIMG"  >
              شركة AB توقع عقد تسويق عقاري مع شركة عزيزي للاستثمار العقاري
            </v-card-title>
          </v-card>
        </v-col>
        
        <v-col cols="4">
          <v-card id="cards">
            <v-img
              src="https://picsum.photos/350/165?random"
              id="CardImg"
            ></v-img>
            <v-card-title class="text-h6">
              كيف تبيع سلعتك بالتسويق المباشر خلال دقائق
            </v-card-title>
          </v-card>
        </v-col>
        
        <v-col cols="4">
          <v-card id="cards">
            <v-img
              src="https://picsum.photos/350/165?random"
              id="CardImg"
            ></v-img>
            <v-card-title class="text-h6">
             ماذا قالو الصحافات عن شركة “الألف والباء” السعودية
            </v-card-title>
          </v-card>
        </v-col>
        
      
        
      </v-row>
    </v-fade-transition>
      </v-container>
      
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
#img{
top:15.4%;
width:100%;
height:220px;
background-image: url("../assets/camera-1130731_640.jpg");
background-position:center;
background-size: cover;
box-shadow:0px 0px 15px 5px;
line-height: 220px;
}
#textImg{
color:#283593;
font-size:600%;
font-family: Awesome;
margin:0% 0% 0% 4%;
}
#con{
display:flex;
justify-content:space-between;
align-content: space-around;
flex-wrap: wrap;
margin:16.5% auto 0%;
}
#cards{
height:275px;
box-shadow:0px 0px 8px 1px #283593; 
}
#CardImg{
height:190px;
filter: brightness(.5);
}
</style>