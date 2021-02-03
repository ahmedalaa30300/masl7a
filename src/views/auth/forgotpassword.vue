<template>
    <!-- Container Login-->
  <div class="flex-container">
    <!-- Start Left Container (image & text)-->
    <div class="content left">
      <div class="col">
      <!-- image -->
      <img src="@/assets/Forgot.png" />
      <!-- text -->
      <p>
        Help us getting better by sending your thoughts about us and about our
        services,<br />
        you can also mention any other points that are related by<br />
        sending your by sending thoughts by sending your thoughts.
      </p>
      <!-- dots -->
      <div class="dots-wrapper">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot active"></span>
      </div>
    </div>
    </div>
    <!-- End Left Container -->
    <!-- Start Right Container -->
    <div class="content right">
      <div class="col">
      <h3>Forget Password</h3>
      <span
        >Please enter your e-mail address to receive a <br />
        verification code.</span
      >
      <!-- Start Form  -->
      <form style="padding-top:70px;">
           <div class="form-group">
        <!-- Email -->
        <label>Email</label>
        <input
          type="email"
          required
          v-model="email"
          placeholder="name@example.com"
        />
          </div>
        <!-- button -->
        <router-link :to="{ name: 'vemail'}">
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </router-link>
        <!-- Link -->
        <span style="text-decoration:underline; margin-left:150px;">
          <router-link
            style="color:#4B00FF; text-decoration:none; font-weight:bold;"
          >
            Try another way
          </router-link>
        </span>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.left{
  background:#4378E3;
  align-items: center;
  margin: auto;
  padding:auto;
  text-align: center;
  color: white;
}
p{
  padding-top: 40px;
}
/* Container (left & right) */
body {
  font-family: Arial, Helvetica, sans-serif;
}
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
.left img {
  height: 450px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 90px;
}
.right {
  text-align: center;
  align-items: center;
  justify-content: center;
}
/* Dot Wrapper */
.dots-wrapper {
  display: flex;
  justify-content: center;
  margin: auto;
  margin: 50px;
}
.dot {
  height: 13px;
  width: 13px;
  background-color: rgba(255, 255, 255, 0.336);
  border-radius: 50%;
  display: inline-block;
  outline: none;
  margin: 5px;
}
.dot:hover {
  background: rgba(53, 53, 53, 0.466);
}
.dot.active {
  background: white;
}
h3 {
  font-weight: 700;
  padding-bottom: 10px
}


/* form */
form {
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
  font-size: 13px;
  font-family: "Segoe UI";
}

/* inputs */
input[type="email"],
input[type="password"] {
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
  opacity: 0.5;
  color: white;
  padding: 14px 20px;
  margin: 25px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
}
button:hover {
  opacity: 1;
}
</style>