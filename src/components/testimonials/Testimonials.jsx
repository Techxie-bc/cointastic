import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonials.css'
import girl from '../../images/first.jpg'
import john from '../../images/image-john.jpg'
import tan from '../../images/image-tanya.jpg'
import flora from '../../images/newFirst.jpg' 
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';



// const Testimonials = () => {
  function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: { BiChevronRight}, color: 'black', }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={ className }
      style={{ ...style, display: "block", background: {BiChevronLeft} }}
      onClick={onClick}
    />
  );
}

  export default class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.SlickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
      const settings = {
        dots: true,
        
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        slidesToScroll: 1,
        className: "slides",
        arrow: true,
        autoplay: true,
    autoplaySpeed: 2000

      }
      return (
        <div className='testSection'>

          <div className="container" >
            <div className="testItems">
              <div className="header">
                <h2>Hear From Our Alumnis </h2>
              </div>
              <div className='testDiv'>

                <Slider {...settings}>
                  <Card prof={john} name='John Wesley' job='BlockChain developer, Wallet' />
                  <Card prof={tan} name='Tanyi Gregor' job='Lead Developer, Microhard'/>
                  <Card prof={flora} name='Hilary Hunter' job='Web3 Frontend Dev., UncleRed' />
                  <Card prof={girl} name='Grilso Gundaz' job='Lecturer, UColver' />
                </Slider>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
 
const Card = ({ prof, name, job }) => {
 
  return (
    <>
      <div className='forImg'>
        <img src={prof} alt="lady" />
        <p style={{margin: 20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestias quis consequatur dolorem architecto accusantium voluptatum distinctio beatae delectus eaque!</p>
        <h4 classNme='page'><span>{name}</span> {job}</h4>

      </div>
     
    </>

  )
}

