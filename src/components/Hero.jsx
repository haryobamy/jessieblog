import React from 'react'
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import { Link } from 'react-router-dom';
import { SliderData } from '../Data/sliderData';







const Hero = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === SliderData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? SliderData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };


  return (
    <div>

      <Row className="justify-content-center">
        <Col lg="12" md="12">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators

              items={SliderData}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {SliderData.map((item) => {
              return (

                <CarouselItem
                  onExiting={onExiting}
                  onExited={onExited}
                  key={item.src}

                >
                  <div className="page-header page-header-small">
                    <img src={item.src} alt={item.altText} className="page-header-image"
                    />

                    <div className='heroContent'>
                      <Link className='heroLink'>{item.facebook}</Link>
                      <Link className='heroLink'>{item.twitter}</Link>
                      <Link className='heroLink'>{item.pin}</Link>

                    </div>

                  </div>
                </CarouselItem>
              );
            })}
            <a
              className="carousel-control-prev"
              data-slide="prev"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                previous();
              }}
              role="button"
            >
              {/* <i className="fa fa-angle-left fa-3x"></i> */}
            </a>
            <a
              className="carousel-control-next "


              data-slide="next"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                next();
              }}
              role="button"
            >
              {/* <i className="fa fa-angle-right fa-3x "></i> */}
            </a>
          </Carousel>
        </Col>
      </Row>

    </div>
  )
}

export default Hero;
