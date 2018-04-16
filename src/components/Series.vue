<template>
  <div class="row">
    <div class="col-md-12">
      <h1 align="center">Public Series</h1>
    </div>
    <div class="col-md-3" v-for="serie in series" :key="serie.id" style="margin-bottom: 10px;">
      <div class="card">
        <img class="card-img-top img-responsive" :src="serie.thumbnail.path + '.' + serie.thumbnail.extension" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ serie.title }}</h5>
          <p class="card-text" v-if="serie.description != null">
            {{ serie.description.substr(0, 250) + '...' }}
          </p>
          <a href="#" class="btn btn-primary">Keep reading</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import md5 from "js-md5";
import axios from "axios";
export default {
  name: 'series',
  mounted(){
    //this.getHash()
    this.getSeries ()
  },
  data (){
    return {
      url: 'http://gateway.marvel.com/v1/public/series',
      apiKey: '6ae7692e70fc37ba6f27e623f145c0a3',
      privateKey:'',
      ts: 1,
      hash: 'f7df4aedea0471536e36705ffd99ee9b',
      series: []

    };
  },
  methods: {
    getHash(){
      this.hash = md5(this.ts+this.privateKey+this.apiKey)
      console.log (this.hash)
    },
    getSeries(){
      axios.get(this.url + "?ts=" + this.ts + "&apikey=" + this.apiKey + "&hash=" + this.hash)
      .then(response => {
        this.series = response.data.data.results;
      })
      .catch(error => {
        console.log (error);
      });
    }
  }
};
</script>