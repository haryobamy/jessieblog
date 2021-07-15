import React from 'react'
import {
    Button,
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselIndicators,
  } from "reactstrap";
import Sidebar from './Sidebar';
import bg from "../../assets/image/bg1.jpg";
import bg2 from "../../assets/image/bg2.jpg";
import bg3 from "../../assets/image/bg3.jpg";
import Blogpost from './Blogpost';

const Blog = () => {
    return (
        <div>
        <Row>
           <Col lg='2'></Col>
           <Col lg='7' sm='6'>
               <div className='blog'>
                   <div className='blogPosts'>
                       
                       <img src={bg} alt="" className="blogimg" />
                       <Button className='bg-light text-dark fw-bold topButton '>INTERIOR</Button>
                       <div className='blogContent'>
                           <em>signature</em>
                           <h2>The Weekend Style and Sales</h2>
                           <p>3 min Read . by Jessica</p>
                           <h6> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat dolorem error eos aut dolore, autem eligendi. At amet doloribus eius eos impedit qui non ut quam. Consequuntur, nihil quidem. Voluptatem. </h6>
                       </div>
                      
                   </div>

                   <div className='blogButton'>
                           <h6>Fashion</h6>
                           <Button color='dark'>Read More</Button>
                           
                           <h6>Share <i className='fa fa-share'></i></h6>
                       </div>
               </div>
               <Row className='mt-5'>
                   <Col sm='6'>
                   <Blogpost bg={bg2} label='Sweater Weather'/>
                   </Col>
                   <Col sm='6' >
                   <Blogpost bg={bg3} label='Nature of Reality'/>
                   </Col>
                   <Col sm='6'>
                   <Blogpost bg={bg} label='Throwing Hands'/>
                   </Col>
                   <Col sm='6' >
                   <Blogpost bg={bg3} label='Story in a Bottle'/>
                   </Col>
                   <Col sm='6'>
                   <Blogpost bg={bg} label='Cultural Expression'/>
                   </Col>
                   <Col sm='6' >
                   <Blogpost bg={bg3} label='Chasing the Sun'/>
                   </Col>
                   <Col sm='6'>
                   <Blogpost bg={bg2} label='Spring Edition'/>
                   </Col>
                   <Col sm='6' >
                   <Blogpost bg={bg3} label='Holiday Again'/>
                   </Col>
               </Row>
               
           </Col>
           <Col lg='3' sm='6'>
               <Sidebar/>
           </Col>
           </Row>
        </div>
    )
}

export default Blog
