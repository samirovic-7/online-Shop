<template>
  <v-app>
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

 <v-card>
    <!-- <v-app-bar
      absolute
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>


      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title id="tabs">
  <v-tab  to="/Contact_us">اتصل بنا</v-tab>
      <v-tab to="/News">الأخبار </v-tab>
      <v-tab to="/Hiring">التوظيف</v-tab>
      <v-tab  to="/Our_Services">خدماتنا</v-tab>
      <v-tab  to="/App_Services">متجر الخدمات</v-tab>
      <v-tab  to="/">الرئيسية</v-tab>
        </v-tabs>
         <v-responsive  id="LogoImage">
            <v-avatar
          id="avatar"
          size="71"
        ><img  src="../assets/camera-1130731_640.jpg" ></v-avatar>
          <div
            id="LogoText"
            dense
            flat
            hide-details
            rounded
            solo-inverted
          >AB HOLDING CO.LTD<br><span>الألف والباب القابضة</span></div>
        </v-responsive>
      </template>
    </v-app-bar> -->


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





 



    <v-sheet>
        
    
      <v-container style="height: 1300px;"></v-container>
      
    </v-sheet>
    
  </v-card>
  <v-card
      id="CardTextForms" 
        >
        <v-form v-model="valid">
    <v-container >
     
        <v-col
          md="10"
          
        >
          <v-card-text id="formtext">
عزيزي المتقدم على وظيفة يوجد حاليا وظائف عدد (150) وظيفة على مستوى المملكة التسويق بالنسبة عن بعد وهي عباره عن تدريب لمدة 3 اشهر يحصل فيها الموظف على نسبة من ارباح المشاريع المنفذه للتقديم نرجوا ايضاح الاسم والخبرة وغيرها من متطلبات التوظيف
      </v-card-text>
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
            label="الايميل"
            required
          ></v-text-field>
        </v-col>
      
        <v-col
           md="10"
        >
        
          <v-file-input
        show-size
        counter
        multiple
        label="السيرة الذاتية"
  ></v-file-input>
        
        </v-col>

   <v-col
           md="10"
        >


         <v-combobox
      v-model="model"
      :filter="filter"
      :hide-no-data="!search"
      :items="items"
      :search-input.sync="search"
      hide-selected
      label="Search for an option"
      multiple
      small-chips
      solo
    >
      <template v-slot:no-data>
        <v-list-item>
          <span class="subheading">Create</span>
          <v-chip
            :color="`${colors[nonce - 1]} lighten-3`"
            label
            small
          >
            {{ search }}
          </v-chip>
        </v-list-item>
      </template>
      <template v-slot:selection="{ attrs, item, parent, selected }">
        <v-chip
          v-if="item === Object(item)"
          v-bind="attrs"
          :color="`${item.color} lighten-3`"
          :input-value="selected"
          label
          small
        >
          <span class="pr-2">
            {{ item.text }}
          </span>
          <v-icon
            small
            @click="parent.selectItem(item)"
          >
            $delete
          </v-icon>
        </v-chip>
      </template>
      <template v-slot:item="{ index, item }">
        <v-text-field
          v-if="editing === item"
          v-model="editing.text"
          autofocus
          flat
          background-color="transparent"
          hide-details
          solo
          @keyup.enter="edit(index, item)"
        ></v-text-field>
        <v-chip
          v-else
          :color="`${item.color} lighten-3`"
          dark
          label
          small
        >
          {{ item.text }}
        </v-chip>
        <v-spacer></v-spacer>
        <v-list-item-action @click.stop>
          <v-btn
            icon
            @click.stop.prevent="edit(index, item)"
          >
            <v-icon>{{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-combobox>
   </v-col>


      <v-col
          md="10"
        >
   <v-radio-group
      v-model="radios"
      mandatory
    >
      <v-radio
        label="ذكر"
        value="ذكر"
      ></v-radio>
      <v-radio
        label="أنثى"
        value="أنثى"
      ></v-radio>
    </v-radio-group>
          </v-col>
        <v-col
          md="10"
        >
            <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="الطلب"
      value="اكتب طلب التوظيف الخاص بك"
      md="10"
    ></v-textarea>
          </v-col>

          <v-col
            md="4"
            id="ColsButton"
          >
         
        
          <v-btn
            
             color="primary"
            
             id="button"
          >
            ارسال 
          </v-btn>
          </v-col>
   
  
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
       radios: null,
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
      activator: null,
      attach: null,
      colors: ['blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1','blue lighten-1',],
      editing: null,
      editingIndex: -1,
      items: [
        { header: 'أختر مجال تخصصك' },
        {
          text: 'التصميم',
          color: 'blue lighten-1',
        },
        {
          text: 'برمجة المواقع',
          color: 'blue lighten-1',
        },
      ],
      nonce: 1,
      menu: false,
      model: [
        {
          text: 'برمجة البرامج',
          color: 'blue lighten-1',
        },
      ],
      x: 0,
      search: null,
      y: 0,
    }),
    watch: {
      model (val, prev) {
        if (val.length === prev.length) return

        this.model = val.map(v => {
          if (typeof v === 'string') {
            v = {
              text: v,
              color: this.colors[this.nonce - 1],
            }

            this.items.push(v)

            this.nonce++
          }

          return v
        })
      },
    },

    methods: {
      edit (index, item) {
        if (!this.editing) {
          this.editing = item
          this.editingIndex = index
        } else {
          this.editing = null
          this.editingIndex = -1
        }
      },
      filter (item, queryText, itemText) {
        if (item.header) return false

        const hasValue = val => val != null ? val : ''

        const text = hasValue(itemText)
        const query = hasValue(queryText)

        return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
      },
    },
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
#CardTextForms{
    border-left: 2px solid white;
    position: absolute;
    top: 18%;
    left: 20%;
    padding: 0% 4%;
    border-top-left-radius: 70px;
    width: 910px;
    box-shadow: -1px 0px 12px 0px #283593;
    height: 990px;
    margin-bottom:2%;
}
#ColsButton{
margin:1% auto;
}
#button{
box-shadow:0px 0px 12px 0px #283593;
width:100%;
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