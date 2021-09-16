<template >
 
  <v-card max-width="450" class="mx-auto">
       <v-subheader
            v-text="'Today'"
        ></v-subheader>
    <v-list three-line>
        <div v-for="(item, index) in items" :key="index">
      <Appointment :item="item" :SavedComp="false"/>
        </div>
      <!-- <template>
        <v-list-item >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
   ,         saved:true
          </v-list-item-content>
        </v-list-item>

      </template> -->
        
    </v-list>
   
  </v-card>
</template>

<script>
import Appointment from "./Appointment.vue";
// import  patient  from "../../services/patientDetails";
export default {
     components: {
    Appointment,
  },
   data() {
    return {
      items: this.items = this.$store.state.items
    }
   },
 created(){
    this.$store.dispatch('getAllPatients')
    console.log(this.$store.state.items)
    // patient.getAllDetails()
    // .then( data =>{this.items=data.data , console.log(data)})
    // .catch(err => console.log(err))
  }

  // data: () => ({
  //   items: [
  //   //   { header: "Today" },
  //     {
  //       avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  //       title: 'Brunch this weekend <span class="grey--text text--lighten-1">4</span>',
  //       subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  //       saved:true
        
  //     },
  //     {
  //       avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  //       title: 'Summer BBQ <span class="grey--text text--lighten-1">4:10 PM</span>',
  //       subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  //       saved:false
  //     },
     
  //     {
  //       avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  //       title: 'Oui oui <span class="grey--text text--lighten-1">4</span>',
  //       subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  //       saved:true
  //     },
     
  //     {
  //       avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  //       title: "Birthday gift",
  //       subtitle:'<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',        
  //       saved:false
  //     },
      
  //     {
  //       avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
  //       title: "Recipe to try",
  //       subtitle:'<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',        
  //       saved:false
  //     },
  //   ],
  // }),
};
</script>

<style scoped>
</style>