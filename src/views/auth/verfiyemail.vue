<template>
     <div class="container">
    <div class="left">
      <img class="leftImage" src="@/assets/Verify.png" />
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
      <h2>Verify your e-mail</h2>
      <span
        >Please enter the 4 digit code sent to <br />
        name@example.com</span
      >
      <form  style=" text-align:center; padding-top:50px;">
    <div class="my-4 v-code">
                 <input type="number" min="0"  max="9" class="i-code" @keyup="check($event)" v-model="i.i1">
                 <input type="number" min="0"  max="9" class="i-code" @keyup="check($event)" v-model="i.i2"> 
                 <input type="number" min="0"  max="9" class="i-code" @keyup="check($event)" v-model="i.i3">
                 <input type="number" min="0"  max="9" class="i-code" @keyup="check($event)" v-model="i.i4">
             </div>
        <p style="font-size:20px; text-align:center; font-weight:bold;">1:50</p>
        <router-link :to="{ name: 'newpassword'}"
          ><button type="submit" class="btn btn-primary">
            Verify
          </button></router-link
        >
        <span style="text-decoration:underline;">
          <router-link
            :to="{ }"
            style="color:#4B00FF; text-decoration:none; font-weight:bold;"
            >Resend Code</router-link
          ></span
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'verfiyemail',
    data(){
       return{
        i:{
            i1:null,
            i2:null,
            i3:null,
            i4:null,
         }
       }
    },
    methods:{
        check(e){
            // check verfiy inputs
            var reqnumber = [0,1,2,3,4,5,6,7,8,9];  
            var isallow   = reqnumber.includes(parseInt(e.target.value)); 
            
            if(isallow){
                if(e.target.nextElementSibling != null){
                    e.target.nextElementSibling.focus();
                    
                }
            } else {
                e.target.value = '';
                console.log("test")
            }
        }
    },
    mounted(){
        //counter
        const StartMinutes = 2;
        let time = StartMinutes * 60;

        const CountdownE = document.getElementById("count");

        var my = setInterval(()=>{
                const minutes = Math.floor(time / 60);
                const sec     = time % 60;

                CountdownE.innerHTML = `${minutes}: ${sec}`;

                time--;
                if(time < 0) {
                    clearInterval(my);
                }
            }, 1000)
        }
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

.verify {
  margin: 0 5px;
  text-align: center;
  line-height: 80px;
  font-size: 50px;
  border: solid 1px #ccc;
  box-shadow: 0 0 5px #ccc inset;
  outline: none;
  width: 20%;
  transition: all 0.2s ease-in-out;
  border-radius: 3px;
}
.verify:focus {
  border-color: purple;
  box-shadow: 0 0 5px purple inset;
}
.verify:selection {
  background: transparent;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
-webkit-appearance: none; 
}
</style>