<template>
  <div class="flex-container">
    <div class="content left">
      <div class="col">
        <h3>Feedback</h3>
        <p>
          Help us getting better by sending your<br />
          thoughts about us and about our services,<br />
          you can also mention any other points that are related.
        </p>
        <form class="form">
          <!-- sms -->
          <input type="text" v-model="feedback" />
          <!-- Button  -->
          <button>Submit</button>
        </form>
        <!-- End Form  -->
      </div>
    </div>

    <div class="content right">
      <div class="col">
        <img src="../../assets/feedback.png" alt="" />
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
  margin: auto;
  padding: auto;
  margin-left: 150px;
  margin-top: 200px;
}
h3 {
  font-weight: 700;
}
form {
  max-width: 400px;
  text-align: left;
  font-size: 13px;
  font-family: "Segoe UI";
  padding-top: 20px;
}
/* inputs */
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
}
/* button */
button {
  background-color: #4378e3;
  color: white;
  padding: 14px 20px;
  margin: 25px 0;
  border: none;
  cursor: pointer;
  width: 50%;
  border-radius: 10px;
}
.right {
  text-align: center;
  align-items: center;
  justify-content: center;
}
.right img {
  height: 550px;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
