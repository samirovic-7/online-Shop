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
       
        <v-list>
          <v-list-item>
            <v-list-item-avatar size="125" id="LOGOIMG">
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
 
        </v-list>

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
        <v-img id="image"></v-img>
        
  <v-card  id="card_about">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          <h2>من نحن</h2>
        </div>
       
تأسست شركة الألف والباء القابضة على يد شابات سعوديات بقيادة الرئيس التنفيذي سامية الفضلي الحائزة على جائزة الإصرار لفئة رائدات الأعمال ، تخصصت الشركة في مجال تقديم الخدمات التسويقية الذكية للمؤسسات وإدارة قنوات الإتصال مع مجتمع الأعمال , وتقدم الشركة مجموعة واسعة من الأعمال النوعية لضمان نجاح أي فعالية أو مشروع لعملائها الكرام في الخليج والشرق الأوسط معاً

        
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="100"
      ><img src="../assets/camera-1130731_640.jpg"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn rounded class="primary">
        تحميل البروفايل
      </v-btn>
    </v-card-actions>
  </v-card>
      
    </v-sheet>


    <v-card id="cardiom">
        <h2 id="h3">خدماتنا</h2>

  <v-hover v-slot="{ hover }">
<v-flex sm10 md3>
    <v-card id="cardinatio" >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="  transition-fast-in-fast-out pt-2 pl-2"
            id="hover"
            style="height: 30%;"
            
          >
          التسويق الهاتفي

          </div>
        </v-expand-transition>
      </v-img>
    
      
      
        <div id="CardText" >
خدمة الكول سنتر من خلال كادر سعودي مميز ولديه خبرة من سنوات طويلة في مجال الترويج للخدمات من خلال الاتصال
        </div>
    
    </v-card>
</v-flex>
    
          </v-hover>

 
  <v-hover v-slot="{ hover }">
  <v-flex sm10 md3>
    <v-card id="cardinatio">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="  transition-fast-in-fast-out    pt-2 pl-2"
            id="hover"
            style="height: 30%;"
            
          >
التصميم بأنواعه
          </div>
        </v-expand-transition>
      </v-img>
    
      
      
        <div id="CardText" >
يعتبر التصميم من أهم مجالات عملنا ، حيث أن لدينا فريق من امهر المصممين في شتى المجالات مثل التصاميم المطبوعة والرقمية
        </div>
    
    </v-card>
</v-flex>
    
          </v-hover>

 
  <v-hover v-slot="{ hover }">
  <v-flex sm10 md3>
    <v-card id="cardinatio">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="  transition-fast-in-fast-out    pt-2 pl-2"
            id="hover"
            style="height: 30%;"
            
          >
التسويق الميداني
          </div>
        </v-expand-transition>
      </v-img>
    
      
      
        <div id="CardText" >
لدينا فريق متخصص في الزيارات الميدانية وتسويق مختلف أنواع المنتجات والخدمات لوصول أكبر وأوسع
        </div>
    
    </v-card>
</v-flex>
    
          </v-hover>

 
  <v-hover v-slot="{ hover }">
  <v-flex sm10 md3>
    <v-card id="cardinatio">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="  transition-fast-in-fast-out    pt-2 pl-2"
            id="hover"
            style="height: 30%;"
            
          >
التسويق الرقمي
          </div>
        </v-expand-transition>
      </v-img>
    
      
      
        <div id="CardText" >
خبراء لسنين طويلة ، في كل ما يتعلق بالتسويق الرقمي والانطلاق بحسابات السوشيال ميديا من الصفر وحتى العالمية
        </div>
    
    </v-card>

    </v-flex>
          </v-hover>

 
  </v-card>



    <v-card id="cardio">
        <h2 id="h3">الملفات التعريفية </h2>
 <v-flex sm10 md3>
     
    <v-card id="cardinatio">
     
     
    
          <v-btn id="butt" color="primary"
    >
      محطاط الوقود
    </v-btn>
      
        <div id="CardText" >
        اذا كنت تريد من رؤية اعلانك يتنقل في كل مكان على الحافلات ، ما عليك سوى ان تثق بنا

        </div>
    
    </v-card>
</v-flex>

      <v-flex sm10 md3>
    <v-card id="cardinatio">
     
     
    
          <v-btn id="butt" color="primary"
    >
      المولات
    </v-btn>
      
        <div id="CardText" >
        المعارض من اهم وسائل الترويج لمشروعك ، نحن بإمكاننا عمل كل شيء لأجلك

        </div>
    
    </v-card>
</v-flex>
      <v-flex sm10 md3>
    <v-card id="cardinatio">
     
     
    
          <v-btn id="butt" color="primary"
    >
     المعارض
    </v-btn>
      
        <div id="CardText" >
        اعلانك في عدد كبير من من المتاجر الكبيرة والمولات لوصول أكبر للجمهور

        </div>
    
    </v-card>
</v-flex>
 <v-flex sm10 md3>
     
    <v-card id="cardinatio">
     
     
    
          <v-btn id="butt" color="primary"
    >
      الحفلات
    </v-btn>
      
        <div id="CardText" >
لوحات اعلانية رقمية وثابتة في مخلتلف محطات الوقود المنتشرة في المملكة        </div>
    
    </v-card>
</v-flex>
  </v-card>



    <v-card id="cardio">
        <h2 id="h3">كيف تعمل</h2>

  <v-hover v-slot="{ hover }">
   <v-flex sm10 md3>
    <v-card id="cardinatio">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="  transition-fast-in-fast-out    pt-2 pl-2"
            id="hover"
            style="height: 30%;"
            
          >
          نحلل

          </div>
        </v-expand-transition>
      </v-img>
    
      
      
        <div id="CardText" >
نقوم بالعمل على تنفيذ كل نقاط الخطه التي تم اعتمادها وذلك من خلال النشر والترويج والتصميم و
        </div>
    
    </v-card>
</v-flex>
          </v-hover>

 
  <v-hover v-slot="{ hover }">
   <v-flex sm10 md3>
    <v-card id="cardinatio">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="  transition-fast-in-fast-out    pt-2 pl-2"
            id="hover"
            style="height: 30%;"
            
          >
         نخطط

          </div>
        </v-expand-transition>
      </v-img>
    
      
      
        <div id="CardText" >
يعتبر التخطيط أهم خطوات النجاح حيث نقوم بعمل خطة متكاملة لما سيتم تنفيذه ونشاركها ونناقشها مع عملائنا
        </div>
    
    </v-card>
</v-flex>
    
          </v-hover>

 
  <v-hover v-slot="{ hover }">
   <v-flex sm10 md3>
    <v-card id="cardinatio">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="  transition-fast-in-fast-out    pt-2 pl-2"
            id="hover"
            style="height: 30%;"
            
          >
          ننفذ

          </div>
        </v-expand-transition>
      </v-img>
    
      
      
        <div id="CardText" >
نحلل المعلومات من خلال فريقنا ونحدد نقاط الضعف والقوة التي يمكن العمل عليها للوصول لانتشار أكبر
        </div>
    
    </v-card>

    </v-flex>
          </v-hover>

 
  <v-hover v-slot="{ hover }">
   <v-flex sm10 md3>
    <v-card id="cardinatio">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="  transition-fast-in-fast-out    pt-2 pl-2"
            id="hover"
            style="height: 30%;"
            
          >
        نبحث

          </div>
        </v-expand-transition>
      </v-img>
    
      
      
        <div id="CardText" >
يبدأ عملنا بعملية البحث المعمق عن كل ما يتعلق بمشروعك ،وجمع المعلومات اللازمة عن المنافسين والسوق
        </div>
    
    </v-card>

    </v-flex>
          </v-hover>

 
  </v-card>

<v-container>

    <v-card id="cardio">
        <h2 id="h3">عملائنا

 </h2>
 
    <p id="p">عملاء نفتخر في خدمتهم في كافة المجالات  
الإعلان ,, التسويق,,تنظيم المعارض والمؤتمرات,,الاعلانات الخارجية 


</p>

    <v-row id="RowImg">
    <v-col
      v-for="n in 8"
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

    <v-card id="cardinio">
        
 
   

       
    <v-card id="cardinatiom">
     
     
      <p id="pi">اتصل بنا</p>
          <v-btn id="butt" color="primary" to="/contact_us">
     اتصل بنا
       </v-btn>
      
    
    </v-card> 
 
  </v-card>
  
 <v-row  id="cardinios">
   
    <v-col
      cols="6"
      sm="2"
     
    >
     <a href="#">
     <v-img  src="..\assets\camera-1130731_640.jpg"  id="ColImg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
      </a>
    </v-col>
 
    <v-col
      cols="6"
      sm="2"
    >
      <a href="#">
     <v-img  src="..\assets\camera-1130731_640.jpg" id="ColImg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
      </a>
    </v-col>

    <v-col
      cols="6"
      sm="2"
    >
    <a href="#">
     <v-img src="..\assets\camera-1130731_640.jpg"  id="ColImg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
      </a>

    </v-col>
    
    <v-col
      cols="6"
      sm="2"
    >
     <a href="#">
     <v-img  src="..\assets\camera-1130731_640.jpg"  id="ColImg">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
      </a>
    </v-col>
  </v-row>
</v-container>
 
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
#LOGOIMG{
margin-left:11%;
}
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
#ava{
box-shadow:0px 0px 4px 1px white;
position:relative;
left: 70%;
top:3%;
}
@media (max-width:600px){
#ava{
box-shadow:0px 0px 4px 1px white;
position:relative;
left: 10%;
top:3%;
}
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
font-size:100%;
width:80%;
margin:auto;
}
#icons{
color:white;
margin:0% 1%;
}
#image{
width:100%;
height:500px;
margin:15% 0 2% 0;
background-image:url("../assets/camera-1130731_640.jpg");
background-position:bottom;
background-size: cover;
background-position: center;
box-shadow:0px 0px 15px 5px;
filter:brightness(.5);
}
#img{
top:12.4%;
width:100%;
height:220px;
background-image: url("https://picsum.photos/200/300?grayscale");
background-position:bottom;
background-size: cover;
opacity:.5;
box-shadow:0px 0px 15px 5px;

}
#textImg{
color:#283593;
font-size:530%;
font-family: Awesome;
margin:0% 0% 0% 7%;
}

#contan{
display:flex;
justify-content:space-between;
align-content: space-around;
flex-wrap: wrap;
width:100%;
background-color:gray;
margin-bottom: 1%;
}
#con{
display:flex;
justify-content:space-between;
align-content: space-around;
flex-wrap: wrap;
margin:16.5% auto 0%;
}
#cards{
height:250px;
box-shadow:0px 0px 8px 1px #283593; 
}
#CardImg{
height:190px;
filter: brightness(.5);

}
#card_about{
margin:4% auto;
border-radius:10px;
width:50%;
  }
#cardiom{
display:flex;
flex-wrap: wrap;
justify-content:space-between;
 margin: 0% 0% 0% 4%;
  width: 90%;
padding:2%;
 box-shadow: none;
  }
#h3{
width: 90%;
position: relative;
left:40%;
font-size:260%;
padding:0% 0% 3% 0%; 
text-decoration: underline;
color:#283593;
}
#cardinate{
padding: 2%;
border-radius:15%;
text-align:center;
box-shadow: 0px 0px 12px 1px #646ca4;
margin: 1% 0% 1% 10%;
}
#cardinatio{
padding: 2%;
border-radius:15%;
text-align:center;
box-shadow: 0px 0px 12px 1px #646ca4;
 margin: 1% 0% 1% 10%;

}

#hover{
background-color:#283593;
font-size:130%;
text-align:center;
color:#fff;
font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#butt{
width:70%;
height:30%;
border-radius:20px;
margin: 3%;
} 
#p{
width:80%;
text-align:center;
margin:0% auto 1%;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#RowImg{
display:flex;
flex-wrap: wrap;
justify-content:space-around;
}
#cardinio{
display:flex;
flex-wrap: wrap;
justify-content:center;
padding:2%;
box-shadow: none;
}
#cardinios{
display:flex;
flex-wrap: wrap;
justify-content:center;
padding:2%;
box-shadow: none;
margin-left:10%;
}
#cardinatiom{
padding: 2%;
border-radius:15%;
text-align:center;
box-shadow: 0px 0px 12px 1px #646ca4;
    width: 45%;

 }
#pi{
width:90%;
text-align:center;
margin:0% auto 1%;
font-size:210%;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#ColImg{
border-radius: 60%;
width:95%;
height:150px;
border: 1px solid #283593;
}

</style>