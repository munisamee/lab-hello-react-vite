// import ImageOne from '../assets/ironhack-logo.png';
// import ImageTwo from '../assets/burger-menu.png';
import ImageThree from '../assets/wrench.png';
import ImageFour from '../assets/laptop.png';
import ImageFive from '../assets/screen.png';
import ImageSix from '../assets/tag.png';

function Pictures() {
    return (
      <div className="pictures">
        {/* <img src={ImageOne} alt="ironhack-logo_image"  />
        <img src={ImageTwo} alt="burger-menu_image"  /> */}
        <img src={ImageThree} alt="wrench_image" />
        <img src={ImageFour} alt="laptop_image" />
        <img src={ImageFive} alt="screen_image" />
        <img src={ImageSix} alt="tag_image" />
      </div>
    )
}
  
export default Pictures // component export