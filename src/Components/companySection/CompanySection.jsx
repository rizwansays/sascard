import "./CompanySection.scss";
import Wrapper from "../Wrapper/Wrapper";
import Company1 from "../../assets/company-1.svg";
import Company2 from "../../assets/company-2.svg";
import Company3 from "../../assets/company-3.svg";
import Company4 from "../../assets/company-4.svg";
import Company5 from "../../assets/company-5.svg";
import Phone from "../../assets/companies-phone.png";
import AppStore from "../../assets/appstore.svg";
import PlayStore from "../../assets/playstore.svg";
import Bg from "../../assets/companies-bg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function CompanySection() {
  useEffect(()=> {
    Aos.init({duration: 1000});
  })
  return (
    <section className="company">
      <Wrapper>
        <div data-aos="fade-up">
        <h4>Trusted by over 30,000 companies</h4>
        <div className="company__companies">
          <img src={Company1} alt="" />
          <img src={Company2} alt="" />
          <img src={Company3} alt="" />
          <img src={Company4} alt="" />
          <img src={Company5} alt="" />
        </div>
        </div>

        <div className="company__container">
          <div className="company__left" data-aos='fade-right'>
            <img src={Phone} className="img-1" alt="" />
            <div className="img-2">
              <img src={AppStore} alt="" />
            </div>
            <div className="img-3">
              <img src={PlayStore} alt="" />
            </div>
          </div>

          <div className="company__right" data-aos='fade-left'>
            <h3>Sascard work process</h3>
            <p>We so entreaties cultivated astonished is. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in.</p>

            <div className="company__points-container">
              <div className="company__point">
                <div className="company__point-icon">
                  <div>1</div>
                </div>
                <div className="company__point-text">
                  Download & Register App
                </div>
              </div>
              <div className="company__point">
                <div className="company__point-icon">
                  <div>2</div>
                </div>
                <div className="company__point-text">
                  Personal information & form submit
                </div>
              </div>
              <div className="company__point">
                <div className="company__point-icon">
                  <div>3</div>
                </div>
                <div className="company__point-text">
                  Approved & get digital card
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <img src={Bg} className="company__bg" alt="" />
    </section>
  );
}

export default CompanySection;
