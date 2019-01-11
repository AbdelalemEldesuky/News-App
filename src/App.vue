<template>
  <div id="app" class="container">
      <SourceSelection v-on:sourceChange='sourceChange'></SourceSelection>
      <NewsList v-bind:source='source'></NewsList>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */ 
import SourceSelection from './components/SourceSelection'
import NewsList from './components/NewsList'


export default {
  components:{
  SourceSelection,
  NewsList
  },
  data(){
    return{
      source:''
    }
  },
  methods:{
    sourceChange:function(source){
      this.source=source;
    }
  }
 
}
</script>
<style>

</style>
