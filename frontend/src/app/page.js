import HeroBanner from "@/app/components/HeroBanner";
import CategoryGrid from "@/app/components/CategoryGrid";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import PromoBanner from "@/app/components/PromoBanner";
import NewArrivals from "@/app/components/NewArrivals";
import Testimonials from "@/app/components/Testimonials";
import Newsletter from "@/app/components/Newsletter";
import Videolist from "@/app/components/Videolist";
import Subcategories from "@/app/components/Subcategories";
import Imagewall from "@/app/components/Imagewall";

export default function Home() {
  return (
    <>
      <CategoryGrid />
      <HeroBanner />
      <Videolist/>
      <Subcategories/>
      <FeaturedProducts />
      <Imagewall/>
      <PromoBanner />
      <NewArrivals />
      <Testimonials />
      {/* <Newsletter /> */}

    </>
  );
}
