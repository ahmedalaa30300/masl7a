<template>
  <div>
    <!--nav secion-->
    <section id="nav-bar">
      <nav
        class="navbar navbar-expand-lg navbar-light"
        :class="{ onScroll: !view.topOfPage }"
      >
        <a class="navbar-brand" href="#">MSL7A</a>
        <div class="navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li>
              <a class="nav-link" href="#home" v-smooth-scroll>Home</a>
            </li>
            <li>
              <a class="nav-link" href="#services" v-smooth-scroll
                >Our Services</a
              >
            </li>
            <li>
              <a class="nav-link" href="#topworkers" v-smooth-scroll
                >Top Workers</a
              >
            </li>
            <li>
              <a class="nav-link" href="#reviews" v-smooth-scroll>Feedback</a>
            </li>
            <li>
              <a class="nav-link" href="#footer" v-smooth-scroll>Contact</a>
            </li>
            <li class=" ms-2 me-3">
              <a href="/signup">
                <button
                  class="btn"
                  style="background:white; color: #3C6CCC !important;"
                >
                  Signup
                </button></a
              >
            </li>
            <li>
              <a href="/login">
                <button
                  class="btn"
                  style="border-color:white !important; color:white !important"
                >
                  Login
                </button></a
              >
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  el: '#navbar',
  data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
};
</script>

<style lang="scss" scoped>
#nav-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
}
.navbar {
  padding: 1 !important;
}
.navbar-brand {
  color: black !important;
  padding-left: 15px;
  font-weight: 500;
}
.navbar-nav {
  padding: 0 10px;
}
.navbar-nav li {
  padding-right: 15px;
}
.navbar-nav li a {
  color: white !important;
  font-weight: 600;
}
nav {
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &.onScroll {
    box-shadow: 0 0 4px #fff;
    background-color:#4073DA;
    scroll-margin-block-end: 100px;
    ul li {
      color: #10b761;
    }
    .navbar-brand{
      color: white !important;
    }
  }

}
</style>
