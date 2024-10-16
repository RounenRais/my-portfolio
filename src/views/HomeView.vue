
<template>

 <div class="about">
  <h1><p>{{ $t('welcome') }}</p></h1>
<div class="myCard">
  <div class="imgPhoto">
  <img class="myPhoto" src="../assets/images.png" alt="">
</div>
<div class="textMe">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br> Blanditiis, assumenda aperiam. Optio nam reprehenderit <br> cupiditate hic iusto fugiat sunt aut.</div>
</div>
<div class="contact">
  <div class="gitHub">
    <font-awesome-icon  :icon="['fab', 'github']" :bounce='githubSt' @mouseover="githubSt=true" @mouseleave="githubSt=false" />
    <a class="contentText" @mouseover="githubSt=true" @mouseleave="githubSt=false" href="https://github.com/RounenRais">RounenRais</a>
  </div>
<div class="phone">
  <font-awesome-icon :icon="['fas', 'phone']" :bounce='phoneSt'  @mouseover="phoneSt=true" @mouseleave="phoneSt=false"  ></font-awesome-icon>
  <a  @mouseover="phoneSt=true" @mouseleave="phoneSt=false" >0556 667 93 41</a>
</div>
  </div>  


</div>
</template>
<script>
export default{
data(){
return{
  githubSt:false,
  phoneSt:false,


};},
};
</script>
