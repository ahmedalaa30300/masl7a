<template>
  <div id="services">
    <h1 class="text-center">Our Service</h1>
    <p class="text-center font-weight-light">
      We Will Serve You With Special !
    </p>
    <!-- Swiper -->
    <div class="a">
      <div class="carousel" data-flickity='{ "wrapAround": true }'>
        <div class="carousel-cell">
          <div class="serve shadow p-3 mb-5 bg-white rounded worker">
            <img src="@/assets/topworker/p1.png" width="100%" alt="" />
            <h5 class="pt-3">barber</h5>
            <p>
              Chatting Between User
            </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="serve shadow p-3 mb-5 bg-white rounded worker">
            <img src="@/assets/topworker/p1.png" width="100%" alt="" />
            <h5 class="pt-3">barber</h5>
            <p>
              Chatting Between User
            </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="serve shadow p-3 mb-5 bg-white rounded worker">
            <img src="@/assets/topworker/p1.png" width="100%" alt="" />
            <h5 class="pt-3">barber</h5>
            <p>
              Chatting Between User
            </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="serve shadow p-3 mb-5 bg-white rounded worker">
            <img src="@/assets/topworker/p1.png" width="100%" alt="" />
            <h5 class="pt-3">barber</h5>
            <p>
              Chatting Between User
            </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="serve shadow p-3 mb-5 bg-white rounded worker">
            <img src="@/assets/topworker/p1.png" width="100%" alt="" />
            <h5 class="pt-3">barber</h5>
            <p>
              Chatting Between User
            </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="serve shadow p-3 mb-5 bg-white rounded worker">
            <img src="@/assets/topworker/p1.png" width="100%" alt="" />
            <h5 class="pt-3">barber</h5>
            <p>
              Chatting Between User
            </p>
          </div>
        </div>
        <div class="carousel-cell">
          <div class="serve shadow p-3 mb-5 bg-white rounded worker">
            <img src="@/assets/topworker/p1.png" width="100%" alt="" />
            <h5 class="pt-3">barber</h5>
            <p>
              Chatting Between User
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="btn shadow p-3 mb-5 bg-white rounded button">
      View More
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
* {
  box-sizing: border-box;
}
.flickity-viewport {
  height: 420px !important;
}

body {
  font-family: sans-serif;
}

.carousel {
  border-radius: 10px !important;
}

.a {
  width: 60%;
  margin: auto;
}

.carousel-cell {
  width: 300px;
  height: 150px;
  margin-right: 10px;

  .serve {
    box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 8);
    border-radius: 10px !important;
    img {
      border-radius: 10px;
    }
  }
}
.button {
  border-radius: 50px;
  margin-left: 1200px;
  font-weight: 700;
  color: #4379e4;
  margin-top: 10px;
}
</style>
