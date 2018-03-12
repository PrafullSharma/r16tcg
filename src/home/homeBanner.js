import React, { Component, Fragment } from 'react'
import SlickSlider from 'react-slick'

class homeBanner extends Component {
  render() {
    const settings = {
      className: 'homeslide',
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 5000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <Fragment>
        <SlickSlider {...settings}>
          <div style={{backgroundImage: 'url("https://placehold.it/1200x600/999?text=Slide-1")'}}>
            Space, the final frontier.
          </div>
          <div style={{backgroundImage: 'url("https://placehold.it/1200x600/999?text=Slide-2")'}}>
            Space, the final frontier.
          </div>
          <div style={{backgroundImage: 'url("https://placehold.it/1200x600/999?text=Slide-3")'}}>
            Space, the final frontier.
          </div>
          <div style={{backgroundImage: 'url("https://placehold.it/1200x600/999?text=Slide-4")'}}>
            Space, the final frontier.
          </div>
        </SlickSlider>
      </Fragment>
    )
  }
}

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    ></div>
  );
}

export default homeBanner
