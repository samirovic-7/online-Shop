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
 
    <v-card>
    <v-toolbar
      
     
      
    >
       

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab
            v-for="n in 5"
            :key="n"
          >
            المنتجات
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs" >
     
      <v-tab-item>
        <v-card   id="ALLCARD">
    
        
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
      
        </v-card>


      </v-tab-item>


      <v-tab-item>

             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>

      </v-tab-item>
      
      <v-tab-item>
       
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
       
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>

      </v-tab-item>
      
      <v-tab-item>

             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
    
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
   
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
      
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
      
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
     
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      
      </v-tab-item>
      
      <v-tab-item>
       
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
      
      <v-tab-item>
       
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
      <v-tab-item>
        
             <v-card   id="ALLCARD">
   
           <v-card-title class="text-h5">
           <v-hover
          v-slot="{ hover }"
        open-delay="200"
      >
            <v-card
            :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
    :loading="loading"
    class="mx-auto my-12"
     id="CARDS"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>باقة التسويق العقاري</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        مطعم ايطالى
      </div>

        </v-card-text>

    <v-divider class="mx-4"></v-divider>

 
    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>  33.50 ج </v-chip>

      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="indigo darken-2 lighten-2"
        text
        @click="reserve"
      >
       اطلب
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-hover>
          </v-card-title>
        
        
        </v-card>
      </v-tab-item>
    </v-tabs-items>
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
    data () {
      return {
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
</style>