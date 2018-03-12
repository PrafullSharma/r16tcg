import React, { Component, Fragment } from 'react'
import SlickSlider from 'react-slick'

class homeBanner extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Fragment>
        <SlickSlider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </SlickSlider>
      </Fragment>
    )
  }
}

export default homeBanner
