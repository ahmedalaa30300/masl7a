<template>
  <div class="flex-container">
    <div class="content left">
      <div class="col">
        <img src="@/assets/Verify.png" />
        <p>
          Help us getting better by sending your thoughts about us and about
          our<br />
          services, you can also mention any other points that are related by<br />
          sending your by sending thoughts by sending your thoughts.
        </p>
      </div>
    </div>
    <div class="content right">
      <div class="col">
        <h3>Verify your e-mail</h3>
        <span
          >Please enter the 4 digit code sent to <br />
          name@example.com</span
        >
        <form style=" text-align:center; padding-top:50px;">
          <div class="my-4 v-code">
            <input
              type="number"
              min="0"
              max="9"
              class="i-code"
              @keyup="check($event)"
              v-model="i.i1"
            />
            <input
              type="number"
              min="0"
              max="9"
              class="i-code"
              @keyup="check($event)"
              v-model="i.i2"
            />
            <input
              type="number"
              min="0"
              max="9"
              class="i-code"
              @keyup="check($event)"
              v-model="i.i3"
            />
            <input
              type="number"
              min="0"
              max="9"
              class="i-code"
              @keyup="check($event)"
              v-model="i.i4"
            />
          </div>
          <p style="font-size:20px; text-align:center; font-weight:bold;">
            1:50
          </p>
          <router-link :to="{ name: 'newpassword' }"
            ><button type="submit" class="btn btn-primary">
              Verify
            </button></router-link
          >
          <span style="text-decoration:underline;">
            <router-link
              :to="{}"
              style="color:#4B00FF; text-decoration:none; font-weight:bold;"
              >Resend Code</router-link
            ></span
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "verfiyemail",
  data() {
    return {
      i: {
        i1: null,
        i2: null,
        i3: null,
        i4: null,
      },
    };
  },
  methods: {
    check(e) {
      // check verfiy inputs
      var reqnumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      var isallow = reqnumber.includes(parseInt(e.target.value));

      if (isallow) {
        if (e.target.nextElementSibling != null) {
          e.target.nextElementSibling.focus();
        }
      } else {
        e.target.value = "";
        console.log("test");
      }
    },
  },
  mounted() {
    //counter
    const StartMinutes = 2;
    let time = StartMinutes * 60;

    const CountdownE = document.getElementById("count");

    var my = setInterval(() => {
      const minutes = Math.floor(time / 60);
      const sec = time % 60;

      CountdownE.innerHTML = `${minutes}: ${sec}`;

      time--;
      if (time < 0) {
        clearInterval(my);
      }
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
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
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 90px;
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

h3 {
  font-weight: 700;
  padding-bottom: 10px;
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
.right {
  text-align: center;
  align-items: center;
  justify-content: center;
}
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
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.i-code {
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  text-align: center;
  height: 60px;
  width: 60px;
  border-radius: 10px;
  margin: 0 4px;
  border: 2px solid #4f5b66;
  font-size: 38px;
  &:focus {
    outline: none;
  }
}
.form-group {
  width: 500px;
  margin: auto;
  label {
    text-align: left;
    display: block;
    font-weight: 400;
  }
  .form-control {
    border-radius: 10px;
  }
  .highlight {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
  .create-account {
    .btn-create-account {
      width: 461px;
      opacity: 0.5019607843137255;
      background-color: #4378e3;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      padding: 6px;
      margin-right: 10px;
      box-shadow: 2px 2px 3px grey;
      height: 50px;
      margin-bottom: 20px;
      transition: all 0.2s;
      &:hover {
        opacity: 1;
      }
      &:focus {
        outline: none;
      }
    }
  }
}
</style>
