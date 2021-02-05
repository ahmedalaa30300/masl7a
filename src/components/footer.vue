<template>
  <footer  id="footer">
    <div class="new_footer_top p-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div
              class="company_widget"
              data-wow-delay="0.2s"
              style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"
            >
              <h3 class="f-title f_600 t_color f_size_18">masl7a</h3>
              <p>plaplaplapalplpalapla</p>
              <form
                class="f_subscribe_two mailchimp"
              >
                <input
                  type="text"
                  name="EMAIL"
                  class="form-control "
                  placeholder="Email"
                />
                <button class="btn btn_get btn_get_two" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
      
              <h3 class="f-title  f_size_18">company</h3>
              <ul class="list-unstyled">
                <li><a href="#">text</a></li>
                <li><a href="#">text</a></li>
                <li><a href="#">text</a></li>
              </ul>
      
          </div>
          <div class="col-lg-3 col-md-6">
      
              <h3 class="f-title f_size_18">Recources</h3>
              <ul class="list-unstyled ">
                <li><a href="#">text</a></li>
                <li><a href="#">text</a></li>
                <li><a href="#">text</a></li>
                <li><a href="#">text</a></li>
                <li><a href="#">text</a></li>
                <li><a href="#">text</a></li>
              </ul>
          </div>
          <div class="col-lg-3 col-md-6">
              <h3 class="f-title f_size_18">social media</h3>
              <div class="f_social_icon">
                <font-awesome-icon
                  :icon="['fab', 'facebook-f']"
                  transform="shrink-3.5 down-1.6 right-1.25"
                  style="color:white; margin-right:10px;"
                  size="2x"
                />
                <font-awesome-icon
                  :icon="['fab', 'twitter']"
                  transform="shrink-3.5 down-1.6 right-1.25"
                  style="color:white; margin-right:10px;"
                  size="2x"
                />
                <font-awesome-icon
                  :icon="['fab', 'youtube']"
                  transform="shrink-3.5 down-1.6 right-1.25"
                  style="color:white; margin-right:10px;"
                  size="2x"
                />
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  transform="shrink-3.5 down-1.6 right-1.25"
                  style="color:white; margin-right:10px;"
                  size="2x"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-sm-7">
            <p class="mb-0 f_500">© masl7a Inc.. 2021 All rights reserved.</p>
          </div>
          <div class="col-lg-6 col-sm-5 text-right">
            <p class="mb-0 f_500">
              Made with <i class="icon_heart"></i> in <a href="#" style="color:">masl7a</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
   background: #4073DA;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   background-position-y: -200px;
   margin-top: 200px;
   margin-left:-10px ;
   height: 100%;
}
.new_footer_top {
  padding: 100px 0px 200px;
  position: relative;
  overflow-x: hidden;
}

.footer_bottom {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color:white;
  opacity: 0.7;
  padding: 25px 0px;
}

.new_footer_top .company_widget .f_subscribe_two .btn_get {
  border-width: 1px;
  margin-top: 20px;
}
a{
  text-decoration: none;
}
.btn_get_two:hover {
  background: transparent;
  color: #5e2ced;
}
h3 , p ,a{
  color: white;
}

.btn_get_two {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #5e2ced;
  border-color: #5e2ced;
  color: #fff;
}
.btn_get_two:hover {
  color: #5e2ced;
}

.new_footer_top .f-title {
  margin-bottom: 30px;
  text-decoration: none;
}
.f_size_18 {
  font-size: 18px;
}


@-moz-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}
@-webkit-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}
@keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}
</style>
