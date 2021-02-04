<template>
  <div>
    <NavBar />
    <Header />
    <Features />
    <OurServices />
    <TopWorker />
    <Reviews />
    <FeedBack />
    <Footer />
  </div>
</template>

<script>
import NavBar from "../../components/navbar";
import Header from "../../components/sections/Header";
import Features from "../../components/sections/features";
import OurServices from "../../components/sections/ourservices";
import TopWorker from "../../components/sections/topworker";
import FeedBack from "../../components/sections/feedback";
import Reviews from "../../components/sections/reviews";
import Footer from "../../components/footer";

export default {
  components: {
    Header,
    NavBar,
    Features,
    OurServices,
    TopWorker,
    FeedBack,
    Reviews,
    Footer,
  },
};
</script>
