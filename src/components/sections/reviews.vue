<template>
  <div class="flex-container" id="reviews">
    <div class="content left">
      <div class="col">
        <img src="../../assets/feedback/Reviews.png" alt="" />
      </div>
    </div>

    <div class="content right">
      <div class="col">
        <h3>Reviews</h3>
        <p>
          What Does Our Users Say About Us?
        </p>
        <div class="row" style="padding-top:40px;">
          <div class="col-3 shadow p-3 mb-5 bg-white rounded Reviews">
            <div class="row">
              <div class="col">
                <img src="@/assets/topworker/p1.png" class="review-img" />
              </div>
              <div class="col">
                <p class="name">Roger Cunningham</p>
                <img class="star" src="@/assets/feedback/stars.png" alt="" />
              </div>
            </div>
            <p>
              Now Workers Can Co-operate With Each Others Creating A Virtual
              Workshop That Will Serve You In A More Efficient Way On A Large
              Scale
            </p>
          </div>
          <div class="col-3 shadow p-3 mb-5 bg-white rounded Reviews">
            <div class="row">
              <div class="col">
                <img src="@/assets/topworker/p1.png" class="review-img" />
              </div>
              <div class="col">
                <p class="name">Roger Cunningham</p>
                <img class="star" src="@/assets/feedback/stars.png" alt="" />
              </div>
            </div>

            <p>
              Now Workers Can Co-operate With Each Others Creating A Virtual
              Workshop That Will Serve You In A More Efficient Way On A Large
              Scale
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}
.content {
  height: 100%;
  width: 100%;
  -webkit-flex: 1; /* Safari */
  -ms-flex: 1; /* IE 10 */
  flex: 1; /* Standard syntax */
  display: flex;
}
.left {
  margin-left: -200px;
  margin-top: 30px;
  padding: 0;
}
.left img {
  height: 650px;
  width: 800px;
}
.right {
  padding-top: 120px;
  padding-left: 150px;
}
h3 {
  font-weight: 700;
}
.Reviews {
  padding: 20px;
  margin-bottom: 20px;
  height: 250px;
  width: 300px;
  margin-right: 70px;
}
.review-img {
  width: 50px;
  height: 50px;
  margin-top: 10px;
}
.name {
  font-size: 14px;
  margin-left: -70px;
  margin-top: 10px;
}
.star {
  height: 15px;
  margin-left: -70px;
  margin-top: -30px;
}
</style>
