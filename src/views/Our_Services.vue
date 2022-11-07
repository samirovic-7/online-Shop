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
        
      <v-container id="con">
<v-card >
    <v-tabs
      v-model="tab"
      background-color="#3949AB"
      centered
      dark
      icons-and-text
      id="wow"
    >

      <v-tab href="#tab-0">
        التسويق الإلكترونى
        <v-icon>mdi-abacus</v-icon>
      </v-tab>

     <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        الإعلانات الخارجية
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        الاستشارات والتطوير
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#tab-3">
        المعارض والمؤتمرات
        <v-icon>mdi-account-box</v-icon>
      </v-tab>

      <v-tab href="#tab-4">
        التصميم والمحتوى
        <v-icon>mdi-laptop</v-icon>
      </v-tab>

      <v-tab href="#tab-5">
        التسويق للغير
        <v-icon>mdi-television-classic</v-icon>
      </v-tab>


    </v-tabs>

    
        <v-card flat id="CONTABS">
        <h2 class="h2">{{ h2 }}</h2>
          <h3>{{ text }}</h3>
        </v-card>
  </v-card>
   <v-timeline
    align-top
    :dense="$vuetify.breakpoint.smAndDown"
  >
  
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title id="heading">
          {{ item.heading }}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p>{{ item.Title }}</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outlined
            v-model="item.Button"
            :to="item.links"
          >
          دخول 

          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
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
        
        tab: null,
        h2:'تعرف على خدماتنا' ,
        text: 'خدمات تسويقية ذكية تنطلق بأعمالك نحو الانتشار والنجاح نساعدك في اختيار الحلول الأمثل وستساعدك على وضع منتجك في المكان والزمان وبالسعر الصحيح سواءً كنت رائد أعمالٍ خبيرٍ أو رجل أعمالٍ حديث العهد. تتضمّن عملية التسويق أربع عناصر رئيسيّة، قد تختلف الاستراتيجات والأساليب المتبعة في كلٍّ منها، إلا أن الأركان الأساسيّة تبقى نفسها وهي: المنتج أوالخدمة ',
    items: [
        {
          color: 'indigo darken-1',
          icon: 'mdi-star',
          heading : 'فرد',
          Title:'الخِدْمَةُ هي في الاقتصاد والتسويق النظير غير المادي للسلعة. وتوفير الخدمة يعرّف كنشاط اقتصادي لا يؤدّي إلى الملكية، وهذا هو ما يميّزها عن توفير السلع المادية. ويعرف بأنّه العملية التي تحقق الارباح إمّا عن طريق إحداث تغيير في المستهلك نفسه، أو تغيير في ممتلكاته المادية، أو تغيير في أصوله غير الملموسة?',
          links:'/ryady1',
        },
        {
          color: 'indigo darken-1',
          icon: 'mdi-book-variant',
          heading : 'كمنشأة صغيرة',
          Title:'الخِدْمَةُ هي في الاقتصاد والتسويق النظير غير المادي للسلعة. وتوفير الخدمة يعرّف كنشاط اقتصادي لا يؤدّي إلى الملكية، وهذا هو ما يميّزها عن توفير السلع المادية. ويعرف بأنّه العملية التي تحقق الارباح إمّا عن طريق إحداث تغيير في المستهلك نفسه، أو تغيير في ممتلكاته المادية، أو تغيير في أصوله غير الملموسة',
          links:'/ryady2',
        },
        {
          color: 'indigo darken-1',
          icon: 'mdi-airballoon',
          heading : 'منشأة كبيرة',
          Title:'الخِدْمَةُ هي في الاقتصاد والتسويق النظير غير المادي للسلعة. وتوفير الخدمة يعرّف كنشاط اقتصادي لا يؤدّي إلى الملكية، وهذا هو ما يميّزها عن توفير السلع المادية. ويعرف بأنّه العملية التي تحقق الارباح إمّا عن طريق إحداث تغيير في المستهلك نفسه، أو تغيير في ممتلكاته المادية، أو تغيير في أصوله غير الملموسة',
          links:'/ryady3',
        },
        {
          color: 'indigo darken-1',
          icon: 'mdi-fleur-de-lis',
          heading : 'قطاع حكومي',
          Title:'الخِدْمَةُ هي في الاقتصاد والتسويق النظير غير المادي للسلعة. وتوفير الخدمة يعرّف كنشاط اقتصادي لا يؤدّي إلى الملكية، وهذا هو ما يميّزها عن توفير السلع المادية. ويعرف بأنّه العملية التي تحقق الارباح إمّا عن طريق إحداث تغيير في المستهلك نفسه، أو تغيير في ممتلكاته المادية، أو تغيير في أصوله غير الملموسة',
          links:'/ryady4',
        },
        {
          color: 'indigo darken-1',
          icon: 'mdi-card-account-phone-outline',
          heading : 'وكالة إعلانية',
          Title:'الخِدْمَةُ هي في الاقتصاد والتسويق النظير غير المادي للسلعة. وتوفير الخدمة يعرّف كنشاط اقتصادي لا يؤدّي إلى الملكية، وهذا هو ما يميّزها عن توفير السلع المادية. ويعرف بأنّه العملية التي تحقق الارباح إمّا عن طريق إحداث تغيير في المستهلك نفسه، أو تغيير في ممتلكاته المادية، أو تغيير في أصوله غير الملموسة',
          links:'/Order_Form1',
        },
        {
          color: 'indigo darken-1',
          icon: 'mdi-phone',
          heading : 'صمم حملة مخصصة ',
          Title:'الخِدْمَةُ هي في الاقتصاد والتسويق النظير غير المادي للسلعة. وتوفير الخدمة يعرّف كنشاط اقتصادي لا يؤدّي إلى الملكية، وهذا هو ما يميّزها عن توفير السلع المادية. ويعرف بأنّه العملية التي تحقق الارباح إمّا عن طريق إحداث تغيير في المستهلك نفسه، أو تغيير في ممتلكاته المادية، أو تغيير في أصوله غير الملموسة',
          links:'/Order_Form2',
        },
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

#con{
display:flex;
justify-content:space-between;
align-content: space-around;
flex-wrap: wrap;
margin:16.5% auto 0%;
}

.h2{
text-align:center;
padding: 1%;
font-size:190%;
}

#wow{
background:#3949AB;
  padding: 6% 0 0% 0;
    height: 30%;
 }
#CONTABS{
padding:1% 
}
#heading{
color:white;
direction: rtl;
}
.v-card__title + .v-card__subtitle, .v-card__title + .v-card__text {
    padding-top: 3%;
}
</style>