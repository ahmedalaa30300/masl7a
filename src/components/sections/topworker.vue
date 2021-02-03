<template>
  <div>
    <!--services section-->
    <section id="worker">
      <div class="container text-center">
        <h1 class="mainTitle">
          Meet Our Top Workers Of The Year
        </h1>
        <p>
          Our experts in the field of crypto currency can always help you<br />
          with any of your questions!
        </p>
        <div class="row text-center">
          <div class="col-3 worker">
            <img src="@/assets/p1.png" class="worker-img" />
            <h5>All Time Support</h5>
            <p>We will serve you with special all over the day !</p>
          </div>
          <div class="col-3 worker">
            <img src="@/assets/p2.png" class="worker-img" />
            <h5>Chatting</h5>
            <p>You can get connected with your service provider.</p>
          </div>
          <div class="col-3 worker">
            <img src="@/assets/p3.png" class="worker-img" />
            <h5>Location Tracking</h5>
            <p>You can now track your service provider at any time.</p>
          </div>
          <div class="col-3 worker">
            <img src="@/assets/p4.png" class="worker-img" />
            <h5>All Time Support</h5>
            <p>We will serve you with special all over the day !</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.worker-img {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}
/*---------------services section------------*/
#worker {
  padding: 80px 0;
}

.worker {
  padding: 20px;
  box-shadow: 5px 5px 5px grey;
  border-radius: 10px;
  margin-bottom: 20px;
  height: 280px;
}
.worker h5 {
  padding: 2px;
  margin-top: 10px;
}
.worker p {
  margin-top: 5px;
  padding: 5px;
}
</style>
