<template>
  <div id="app" class="container">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <embed src="https://media.tenor.com/images/4b8911aa26039deececed3eb51793e3b/tenor.gif?download=true" class= "d-block w-100" style= "height: 500px">
          <div class="carousel-caption d-none d-md-block">
            <router-link to="/home"><h1 class="d-inline p-2 text-dark"> Home </h1></router-link>
            </div>
          </div>
        <div class="carousel-item">
          <img class= "d-block w-100" style= "height: 500px" src="./assets/marvelcomics.jpg" alt="">
          <div class="carousel-caption d-none d-md-block">
            <router-link to="/comics"><h1 class="d-inline p-2 text-white bg-dark"> Comics </h1></router-link>
            </div>
          </div>
        <div class="carousel-item">
          <img class="d-block w-100" style= "height: 500px" src="./assets/themarveluniverse.png" >
          <div class="carousel-caption d-none d-md-block">
            <router-link to="/characters"><h1 class="d-inline p-2 text-white bg-dark"> Characters </h1></router-link>
            </div>
          </div>
        <div class="carousel-item">
          <img class="d-block w-100" style= "height: 500px" src="./assets/stanleemarvel.jpeg" >
          <div class="carousel-caption d-none d-md-block">
            <router-link to="/creators"><h1 class="d-inline p-2 text-white bg-dark"> Creators </h1></router-link>
            </div>
          </div>
        <div class="carousel-item">
          <img class="d-block w-100" style= "height: 500px" src="./assets/series3.jpg">
          <div class="carousel-caption d-none d-md-block">
            <router-link to="/series"><h1 class="d-inline p-2 text-white bg-dark"> Series </h1></router-link>
            </div>
          </div>
        <div class="carousel-item">
          <img class="d-block w-100"  style= "height: 500px" src="./assets/anadmarvel2.jpg">
          <div class="carousel-caption d-none d-md-block">
            <router-link to="/events"><h1 class="d-inline p-2 text-white bg-dark"> Events </h1></router-link>
            </div>
          </div>
      </div>
    </div>
      
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
  <router-view></router-view>
  </div> 
    
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
