<template>
  <div >
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-html="item.title"></v-list-item-title>
        <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
      </v-list-item-content>
       
    <v-list-item-action v-if="SavedComp" @click="deleteItem(item)">
      <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
      <v-icon> mdi-delete</v-icon>
    </v-list-item-action>

       <v-list-item-action v-else @click="stared(item)">
      <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
      <v-icon v-if="!item.saved " color="grey lighten-1"> mdi-star-outline </v-icon>
      <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
    </v-list-item-action>

    </v-list-item>
   
    <!-- <v-divider v-if="divider" :inset="item.inset"></v-divider> -->
  </div>
</template>
<script>
export default {
     props:{
        SavedComp:Boolean,
        item: Object,
  },
    methods:{
        stared(item){
           this.$store.commit('saveUnsave',item)
        },
        deleteItem(item){
          console.log(item.sno);
        }
    },
  
};
</script>
<style scoped>
</style>