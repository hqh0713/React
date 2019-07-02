import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile'
import './index.less'

class Banner extends Component {
  state = {
    data: [require('./images/banner_1.webp'), require('./images/banner_2.webp'), require('./images/banner_3.webp')],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    //   });
    // }, 100);
  }
  render() { 
    return ( 
      <WingBlank>
        <Carousel
          className='space-carousel'
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          afterChange={index => this.setState({ slideIndex: index })}
          >
            {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight
              }}
            >
               <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
            ))}
          </Carousel>
      </WingBlank>
    )
  }
}
 
export default Banner;