import './Footer.scss';
import Wrapper from '../Wrapper/Wrapper';
import PlayStore from "../../assets/footer-playstore.png"
import AppStore from "../../assets/footer-appstore.png"
import Logo from "../../assets/footer-logo.svg"

function Footer() {
  return (
    <section className='footer'>
      <Wrapper>
        <div className="footer__text">
          <h3>The feature of strategic finance</h3>
          <p>Does he part last in? Merits ye if Mr narrow points. Melancholy particularly Devonshire alteration its favorable appearance up.
          </p>
        </div>

        <div className="footer__stores">
          <img src={PlayStore} alt="" />
          <img src={AppStore} alt="" />
        </div>
        <div className="footer__logo">
          <img src={Logo} alt="" />
        </div>
        <ul className='footer__links'>
          <li>Services</li>
          <li>Pricing</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
      </Wrapper>
    </section>
  )
}

export default Footer
