<template>
  <div>
       <!--services section-->
    <section id="services">
        <div class="container text-center">
            <h1 class="mainTitle">We Provide Best Dispatch And<br>
                Parcel Service.</h1>
            <p>Our experts in the field of crypto currency can always help you<br>
                with any of your questions!</p>
            <div class="row text-center">
                <div class="col-4 services">
                    <img src="@/assets/24-hours.png" class="service-img">
                    <h2>All Time Support</h2>
                    <p>We will serve you with special all over the day !</p>
                </div>
                <div class="col-4 services">
                    <img src="@/assets/chat (2).png" class="service-img">
                    <h2>Chatting</h2>
                    <p>You can get connected with your
                        service provider.</p>
                </div>
                <div class="col-4 services">
                    <img src="@/assets/order-tracking1.png" class="service-img">
                    <h2>Location Tracking</h2>
                    <p>You can now track your service
                        provider at any time.</p>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/*---------------services section------------*/

#services{
    padding: 80px 0;
}
.service-img{
    width: 70px;
    margin-top: 20px;
}
.services{
    padding:20px;
    box-shadow: 5px 5px 5px grey;
    border-radius: 10px;
    margin-bottom: 20px;
}
.services h2{
    padding:5px ;
    margin-top: 25px;
}
.services p{
    margin-top: 25px;
    padding:5px ;
}

</style>