import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

const Blogpost = ({ bg, label }) => {
  return (
    <div className="blogspost">
      <img src={bg} alt="" className="blogpostimg" />
      <Button className="bg-light text-dark fw-bold postsButton ">
        INTERIOR
      </Button>
      <div className="blogsContent">
        <em>signature</em>
        <h2>{label}</h2>
        <p>3 min Read . by Jessica</p>
        <h6>
         
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          dolorem error eos aut dolore, autem eligendi. At amet doloribus eius
          eos impedit qui non ut quam. Consequuntur, nihil quidem. Voluptatem.
        </h6>
        {/* <span><i className='fa fa-angle-right fa-2x'></i></span> */}
        <Button
        className='moreButton '
        color='dark'
          href="#"
           
           >
          <i className="fa fa-angle-right fa-3x  "></i>
            </Button>
      </div>
    </div>
  );
};

export default Blogpost;
