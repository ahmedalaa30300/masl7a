<template>
  <div>
    <section class="nav-bar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand p-3" href="#">MSL7A</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <i class="fas fa-bars"></i>
          </button>
          <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Top Worker</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Feedback</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class=" ms-2 me-4">
              <button type="button" class="btn" style="background-color:white;">Signup</button>
            </li>
            <li class="">
              <button type="button" class="btn btn-outline-light">Login</button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar{
  background: #447AE6;
}
a{
  color: white;
  font-weight: 600;
}
button{
  opacity: 10;
}
</style>
