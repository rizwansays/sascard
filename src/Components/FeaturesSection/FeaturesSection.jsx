import './FeaturesSection.scss';
import Wrapper from '../Wrapper/Wrapper';
import Img1 from "../../assets/feature-1.svg";
import Img2 from "../../assets/feature-2.svg";
import Img3 from "../../assets/feature-3.svg";
import Img4 from "../../assets/feature-4.svg";
import Img5 from "../../assets/feature-5.svg";
import Img6 from "../../assets/feature-6.svg";

function FeaturesSection() {
  return (
    <section className='features'>
      <Wrapper>
        <div className="features__text">
          <h3>Explore our amazing features</h3>
          <p>Lose john poor same it case do year we Full how way even the sigh Extremely nor furniture fat questions now provision incommode.</p>
        </div>

        <div className="features__container">
          <div className="features__feature dark-feature">
            <img src={Img1} alt="" />
            <h4 className='dark-feature-title'>Free Enrollment</h4>
            <p>Engaged was the evident pleased husband. Ye goodness felicity does disposal dwelling no.</p>
          </div>
          <div className="features__feature white-feature">
            <img src={Img2} alt="" />
            <h4 className='white-feature-title'>Fast & Easy Support</h4>
            <p>Engaged was the evident pleased husband. Ye goodness felicity does disposal dwelling no.</p>
          </div>
          <div className="features__feature dark-feature">
            <img src={Img3} alt="" />
            <h4 className='dark-feature-title'>Crypto Support</h4>
            <p>Engaged was the evident pleased husband. Ye goodness felicity does disposal dwelling no.</p>
          </div>
          <div className="features__feature white-feature">
            <img src={Img4} alt="" />
            <h4 className='white-feature-title'>No Hidden Fees</h4>
            <p>Engaged was the evident pleased husband. Ye goodness felicity does disposal dwelling no.</p>
          </div>
          <div className="features__feature dark-feature">
            <img src={Img5} alt="" />
            <h4 className='dark-feature-title'>Automatic card lock/unlock</h4>
            <p>Engaged was the evident pleased husband. Ye goodness felicity does disposal dwelling no.</p>
          </div>
          <div className="features__feature white-feature">
            <img src={Img6} alt="" />
            <h4 className='white-feature-title'>24/7 Customer Support</h4>
            <p>Engaged was the evident pleased husband. Ye goodness felicity does disposal dwelling no.</p>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default FeaturesSection
