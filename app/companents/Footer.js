import Link from 'next/link';
import '../../styles/footer.css'; 

const Footer = () => {
  return (
    <div className='footer-parent'>
      <div className='footer-divs'>
        <div className='img-parent-icons'>
          <div>
            <div className='img-parent-footer'>
              <img src='gonulden sevenler.jpg' alt='logo' />
            </div>
            <div className='img-parent-div'>
              <a
                href='https://play.google.com/store/apps/details?id=com.gonuldensevenler.evlilik'
                target='_blank'
                className='img-child-div'
                rel='noopener noreferrer'
              >
                <img style={{ cursor: 'pointer' }} src='astore.png' alt='Google Play' />
              </a>
              <a
                href='https://apps.apple.com/tr/app/g%C3%B6n%C3%BClden-sevenler-evlilik/id997270377'
                target='_blank'
                className='img-child-div'
                rel='noopener noreferrer'
              >
                <img style={{ cursor: 'pointer' }} src='gplay.png' alt='App Store' />
              </a>
            </div>
          </div>
        </div>

        <div className='footer-main-page'>
          <Link className='footer-box' href='/headerPage'  >MAIN PAGE</Link>
          <Link href="/blog" className='footer-box'>Blog</Link>
          <a className='footer-box'>Help</a>
          <Link href='/guide' className='footer-box'>Guide</Link>
          <a className='footer-box'>Happy Couples</a>
          <Link href="/agreement" className='footer-box'>Confidentiality Agreement</Link>
          <Link href="/user" className='footer-box'>User Agreement</Link>
          <Link href="#" className='footer-box'>Contact</Link>
        </div>
      </div>

      <div className='last-p'>
        <div className='paragraf-parent'>
          This site is protected by reCAPTCHA and the Google
          <p className='blue'>Privacy Policy</p> and <p className='blue'>Terms of Service</p> apply.
        </div>
      </div>
    </div>
  );
};

export default Footer;

