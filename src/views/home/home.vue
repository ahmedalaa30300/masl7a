<template>
    <div>
        <body data-spy="scroll" data-target=".fixed-top">
        <NavBar />
        <Home />
        <Features />
        <OurServices />
        <TopWorker />
        <FeedBack />
        <Reviews />
        <Footer />
        </body>
    </div>
</template>

<script>
import NavBar from '../../components/navbar'
import Home from '../../components/sections/home'
import Features from '../../components/sections/features'
import OurServices from '../../components/sections/ourservices'
import TopWorker from '../../components/sections/topworker'
import FeedBack from '../../components/sections/feedback'
import Reviews from '../../components/sections/feedback'
import Footer from '../../components/footer'

export default {
    components:{
        Home,
        NavBar,
        Features,
        OurServices,
        TopWorker,
        FeedBack,
        Reviews,
        Footer
    }
}
</script>