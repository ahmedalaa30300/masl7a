<template>
   <div class="container">
    <div class="left">
      <img class="leftImage" src="@/assets/Create.png" />
      <p>
        Help us getting better by sending your thoughts about us and about
        our<br />
        services, you can also mention any other points that are related by<br />
        sending your by sending thoughts by sending your thoughts.
      </p>

      <div class="dots-wrapper">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot active"></span>
      </div>
    </div>
    <div class="right" style="padding-top:40px;">
      <h2>Create new password</h2>
      <span>Your new password must be different from<br />
        previously used password.</span
      >
      <form style="padding-top:70px;">
        <div class="form-group">
               <label for="psw">New Password</label>
          <input
            type="password"
            required
            v-model="password"
            placeholder="at least 8 charachters"
          />
             <label for="psw">Confirm Password</label>
          <input
            type="password"
            required
            v-model="password"
            placeholder="at least 8 charachters"
          />
        </div>
        <router-link :to="{ name: 'login' }"
          ><button type="submit" class="btn btn-primary">
            Save
          </button></router-link
        >
        <span style="text-decoration:underline; margin-left:150px;">
          <router-link
            :to="{}"
            style="color:#4B00FF; text-decoration:none; font-weight:bold;"
            >Change Password</router-link
          ></span
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
/* Container (left & right) */
.container {
  display: flex;
  height: 100%;
  width: 100%;
}
/* left Container */
.left {
  text-align: center;
  background-image: linear-gradient(#447ae6, #223d73);
  text-align: center;
  width: 50%;
  height: 100vh;
}
/* left Image */
.leftImage {
  padding-top: 90px;
  width: 280px;
  height: 250px;
}
/* left Paragraph */
.left p {
  font-size: 12px;
  font-family: Segoe UI;
  color: white;
  padding-top: 60px;
  text-align: center;
  letter-spacing: 1px;
}
/* Dot Wrapper */
.dots-wrapper {
  display: flex;
  justify-content: center;
  margin: auto;
  margin: 60px;
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
/* right Container*/
.right {
  display: block;
  width: 50%;
  text-align: center;
  align-items: center;
  font-size: 20px;
  font-family: Segoe UI;
  color: black;
  padding-top: 5px;
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