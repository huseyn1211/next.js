import Header from './companents/Header'
import SectionSecond from './companents/SectionSecond';
import PinkBox from './companents/PinkBox'
import Slide from './companents/Slide'
import Why from './companents/Why'
import Texts from './companents/Texts'
import Footer from './companents/Footer'
import Carousel from './companents/Carousel'





export default function Home() {
  return (
    <div>
      <Header> </Header>
      <SectionSecond></SectionSecond>
      <PinkBox></PinkBox>
      <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
      <Carousel></Carousel>
      <Carousel></Carousel>
      </div>
      {/* <Slide></Slide> */}
      <Why></Why>
      <Texts></Texts>
      <Footer></Footer>
     
    </div>
  );
}