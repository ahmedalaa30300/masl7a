<template>
    <div>
       <h1 class="text-center">Our Service</h1>
       <p class="text-center font-weight-light">We Will Serve You With Special !</p>
        <!-- Swiper -->
        <div class="a">

      <div class="carousel"
        data-flickity='{ "wrapAround": true }'>
            <div class="carousel-cell">
                 <div class="serve">
                  <img src="..\..\public\imgs\auth\t.jpg" width="100%" alt="">
                  <h5 class="pt-3">barber</h5>
                  <p>Chatting Between User & Service Provider Chatting Between User. </p>
                </div>
            </div>
            <div class="carousel-cell">
                 <div class="serve">
                  <img src="..\..\public\imgs\auth\t.jpg" width="100%" alt="">
                  <h5  class="pt-3">barber</h5>
                  <p>Chatting Between User & Service Provider Chatting Between User. </p>
                </div>
            </div>
              <div class="carousel-cell">
                  <div class="serve">
                    <img src="..\..\public\imgs\auth\t.jpg" width="100%" alt="">
                    <h5  class="pt-3">barber</h5>
                    <p>Chatting Between User & Service Provider Chatting Between User. </p>
                  </div>
              </div>
           
          </div>
        </div>
      </div>
</template>

<script>
    export default{
        
    }
</script>
<style lang="scss" scope>
* { box-sizing: border-box; }

body { font-family: sans-serif; }

.carousel {
  border-radius:10px !important;
  
} 

.a{
    width:60%;
    margin:auto;
    .active{

        
    }
}

.carousel-cell {
  width: 300px;
  margin-right: 10px;

  .serve{
    box-shadow: 0px 4px 4px -4px rgba(0,0,0,8);

    padding:10px;
    border-radius:10px !important;
    img{
      border-radius:10px
    }

  }
}

/* cell number */


</style>
