import Header from './companents/Header'
import SectionSecond from './companents/SectionSecond';
import PinkBox from './companents/PinkBox'
import Slide from './companents/Slide'
import Why from './companents/Why'
import Texts from './companents/Texts'
import Footer from './companents/Footer'
import Carousel from './companents/Carousel'
import newPage from  './companents/NewPage'
import NewPage from './companents/NewPage';





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
      {/* <NewPage></NewPage> */}
     
    </div>
  );
}
// import Footer from './companents/Footer'
// import Header from './companents/Header'
// import './globals.css'

// export const metadata = {
//   title: 'Gönülden Sevenler',
//   description: 'Evlilik platforması',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Header />
//         {children} {/* Burada page.js və ya digər səhifələrin kontenti göstərilir */}
//         <Footer />
//       </body>
//     </html>
//   )
// }
// pages/_app.js
// import '../styles/globals.css'; // Ümumi stillər (əgər varsa)
// import RootLayout from './layout';

// function MyApp({ Component, pageProps }) {
//   return (
//     <RootLayout>
//       <Component {...pageProps} />
//     </RootLayout>
//   );
// }

// export default MyApp;


