import './About.css';
import paris from '../../assets/paris.jpg';
const About = () => {
  return (
  <>
    <main class="About-Us-container">
    <h1>About Us</h1>
    <p>SCE Tours is an Israeli traveling agency with over 12,000 travel
         experiences in 25+ countries all over the world. Enjoy the amazing and vast options of our traveling packages with 
         attractive prices and start ordering right now! special prices with many options will be displayed.</p>
    <img width="600px" height="450px" src={paris}></img>
   
</main>

</>
  );
};

export default About;
// <div className="about-section">
    //       <div className="inner-container">

    //   <h1>About us</h1>
    //   <p className="text">
    //     SCE Tours is an Israeli traveling agency with over 12,000 travel
    //     experiences in 25+ countries all over the world.
    //   </p>
    //   <div className="skills">
    //     <span>This1</span>
    //     <span>This2</span>
    //     <span>This3</span>

    //   </div>
    // </div>
    // </div>