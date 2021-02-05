<template>
  <div>
    <!--banner section-->
    <section id="banner">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 pt-5" style="margin-top:170px;">
            <p class="col-md-6 pt-5 fs-3">Welcome To Our Website</p>
            <p class="title fs-2 fw-bold">We Are Here For Your Help !</p>
            <p>
              Welcome To Our Website Welcome To Our Website Welcome To Our<br />
              Website Welcome To Our Website Welcome To Our Website Welcome
              To<br />
              Our Website Welcome To Our Website Welcome
            </p>
            <div class="row">
              <button class="btn btn-primary rounded-pill">Download App</button>
              <button class="btn p-3 mb-5 bg-white rounded-pill" style="color:#4379E4;">
                View More
              </button>
            </div>
          </div>
          <div class="col-6 " style="margin-top:150px;">
            <img src="@/assets/header.png" class="img-fluid" />
          </div>
        </div>
      </div>
      <!--<img src="./images/Path 2598.png" class="bottom-img">-->
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#banner {
  background-image: url("../../assets/Path738.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  background-size: 900px 640px;
  color: #fff;
}
.title {
  font-size: 30px;
  font-weight: 100px;
  margin-top: 20px;
  color: black;
}
p {
  color: black;
}
button {
  background: #4379e4;
  height: 60px;
  width: 250px;
  margin-right:30px ;
  margin-top: 20px;
  border-color:#4379E4;
  }
.bottom-img {
  width: 100%;
  margin-top: 5px;
}
</style>
