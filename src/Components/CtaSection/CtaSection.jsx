import './CtaSection.scss';
import Wrapper from '../Wrapper/Wrapper';
import PhoneImg from "../../assets/cta-phone.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function CtaSection() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section className='cta'>
      <Wrapper className='cta__container'>
       <div className="cta__left" data-aos='fade-right'>
        <img src={PhoneImg} alt="" />
       </div>

       <div className="cta__right" data-aos='fade-left'>
        <h3>Take control of your finance today</h3>
        <p>
          One-click Apps & Integrations to help you supercharge your teams workflow. Attended overcome repeated it is perceived Marianne in.
        </p>

        <form action="">
          <input type="email" placeholder='Enter Your Email' className='email' name="" id="" />
          <input type="submit" value='submit' className='button-primary' />
        </form>
       </div>
      </Wrapper>
    </section>
  )
}

export default CtaSection
