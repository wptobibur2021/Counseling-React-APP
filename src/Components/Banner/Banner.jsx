import './Banner.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
export default function Banner() {
    return (
        <div className="banners-sections-area">
            <AliceCarousel autoPlay autoPlayInterval="1000">
                <img src='./asserts/image/bg3.jpg' className="sliderimg"/>
                <img src='./asserts/image/bg1.jpg' className="sliderimg"/>
                <img src='./asserts/image/bg11.jpg' className="sliderimg"/>
                <img src='./asserts/image/bg9.jpg' className="sliderimg"/>
                <img src='./asserts/image/bg5.jpg' className="sliderimg"/>
            </AliceCarousel>
        </div>
    )
}
