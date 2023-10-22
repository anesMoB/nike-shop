import AboutUs from "./sections/AboutUs";
import CustomersReview from "./sections/CustomersReview";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import PopularShoes from "./sections/PopularShoes";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscription from "./sections/Subscription";

export default function Home() {
  return (
    <main className="max-container flex flex-col justify-start items-center  ">
        <NavBar/>
        < Hero />
        <PopularShoes />
        <AboutUs />
        <Services />
        <SpecialOffer  />
        <CustomersReview />
        <Subscription />
        <Footer />
    </main>
  )
}
