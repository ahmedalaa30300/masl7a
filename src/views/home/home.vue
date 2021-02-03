<template>
    <div>
        <div>home</div>
        <router-link to="/signup">signup</router-link> <br>
        <router-link to="/login"> login</router-link> <br>
        <router-link to="/forgotpassword"> forgotpassword</router-link> <br>
        <router-link to="/vemail"> verfiy email</router-link> <br>   
        <router-link to="/newpassword"> newpassword</router-link>

        <Footer />

    
    </div>
</template>

<script>
import Footer from '../../components/footer'
export default {
components:{
    Footer

}
}
</script>

