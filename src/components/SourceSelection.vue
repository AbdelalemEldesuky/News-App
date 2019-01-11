<template>
    <div class="jumbotron bg-dark">
      <h2><i class="fas fa-list-ul text-primary"></i> <span class="head"> List News</span></h2>
        <h4>Slect News Sources</h4>
        <select class="form-control" v-on:change='sourceChange'>
          <option v-bind:value="source.id" v-for="source in sources" :key="source.id">{{source.name}}</option>
        </select>
        <div>
          <h6>{{sources.description}}</h6>
          <a :href="source.url" class="btn btn-primary" target="_blank" >Go To {{source.name}} Website</a>
        </div>
    </div>
</template>

<script>
export default {
  name:'SourceChange',
   data(){
     return{
       sources:[],
       source:''
     }
   },
   methods:{
     sourceChange:function(e){
             localStorage.e=this.e;
      for(var i=0 ; i<this.sources.length;i++){
        if(this.sources[i].id==e.target.value){
          this.source=this.sources[i]
        }
      }
        this.$emit('sourceChange', e.target.value)
     }
   },
   created:function(){
     this.$http.get('https://newsapi.org/v1/sources?language=en')
     .then(responese=>{
       this.sources=responese.data.sources;

       
     })
   }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron{
    margin-top: 30px;
  }
  .head{
    color: aliceblue
  }
</style>
