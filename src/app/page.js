import Banner from "@/components/Banner";
import CardSection from "@/components/CardScetion";
import Dessert from "@/components/Dessert";
import Dinning from "@/components/Dinning";
import Entertainment from "@/components/Entertainment";
import Explore from "@/components/Explore";
import Food from "@/components/Food";
import Fountain from "@/components/Fountain";
import Gallery from "@/components/Gallery";
import Pool from "@/components/Pool";
import Resort from "@/components/Resort";
import Slider from "@/components/Slider";



export default function Home() {

  return (
   
      <main className="">
        <Banner></Banner>
        <CardSection></CardSection>
        <Resort></Resort>
        <Entertainment></Entertainment>
        <Fountain></Fountain>
        <Explore></Explore>
        <Dinning></Dinning>
        <Gallery></Gallery>
        <Slider></Slider>
        <Dessert></Dessert>
        <Food></Food>
        <Pool></Pool>
      </main>
  );
}
