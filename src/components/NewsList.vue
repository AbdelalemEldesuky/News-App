<template>
            <div>
                <div class="newslist">
                <div class="container">

                <ul class="media-list">
                    <li class="media" v-for="article in articles" :key="article.id">
                    <div class="media-left">
                        <a v-bind:href="article.url" target="_blank">
                        <img class="media-object" v-bind:src="article.urlToImage">
                        </a>
                    </div>
                    <div class="media-body">
                        <h5 class="media-heading "><a class="text-info" v-bind:href="article.url" target="_blank">{{article.title}}</a></h5>
                        <h6><i>by {{article.author}}</i></h6>
                        <p class="">{{article.description}}</p>
                    </div>
                    </li>
                </ul>

                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:'newList',
    data(){
        return{
            articles:[]
        }
    },
    props:['source'],
    methods:{
     updateSource: function(source){
        this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=1cdfa4394561428ba9de150ccd313417')
         .then(response=>{
             this.articles=response.data.articles;
         })
     }
    },
     created:function(){
     this.updateSource(this.source);
    },
    watch:{
        source:function(val){
          this.updateSource(val);
        } 
    }
}
</script>

<style scoped>
 .media-object {
    width: 128px;
    height: 100px;
    padding: 10px;
  }
  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
  }
  h6{
      color: #555
  }
</style>
