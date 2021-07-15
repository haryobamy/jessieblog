
import React from "react";
import {
    Button,
  } from "reactstrap";
  import world from "../../assets/image/world.jpg";
  import profile from "../../assets/image/4.jpeg";
  import profile1 from "../../assets/image/10.jpeg";
  import profile2 from "../../assets/image/2.jpeg";
  import beach from "../../assets/image/bg3.jpg";


const Sidebar = () => {
  return (
    <div className="sidebarSection">
      <div className="whereweare">
        <h6>Where are We Now?</h6>
        <hr/>
        <img src={world} alt=""  />
        <p>Las Vagas, Navada, USA</p>
      </div>
      <hr/>
      <div className="Hello">
          <h6>Hello</h6>
          <hr/>
        <img src={profile} alt=""  />
        
        <em>by jessie Stanley</em>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laborum quo. </p>
        <div >
            <Button size='sm' color='secondary' className='mx-1 text-dark' > <i className='fa fa-instagram fa-2x'></i> </Button>
            <Button size='sm'className='mx-1 text-dark ' ><i className='fa fa-facebook-square fa-2x'></i></Button>
            <Button size='sm' className='mx-1 text-dark'><i className='fa fa-twitter-square fa-2x'></i></Button>
            <Button size='sm' className='mx-1 text-dark' ><i className='fa fa-pinterest fa-2x'></i></Button>
            <Button size='sm' className='mx-1 text-dark'><i className='fa fa-gratipay fa-2x'></i></Button>
        </div>
      </div>

      <div className="trendingPost">
          <h6>Trending Posts</h6>
          <hr/>
        <img src={beach} alt=""  />
        <div>
            <p>Perfect For New Daytime</p>
        <Button>Read More</Button>
        </div>
        
      </div>
      <div className="popularPost">
          <h6> Popular Post</h6>
          <hr/>
          <div>
        <img src={profile} alt=""  />
        <div>
            <h6>Sweet and sharp two outfit of spring</h6>
            <p>July 27, 2019</p>

        </div>
        </div>
        <div>
        <img src={profile} alt=""  />
        <div>
            <h6>Presense of you to find the Absence</h6>
            <p>July 27, 2019</p>

        </div>
        </div>
        <div>
        <img src={profile} alt=""  />
        <div>
            <h6>Dress get you Exicted for spring</h6>
            <p>July 27, 2019</p>

        </div>
        </div>
        <div>
        <img src={profile} alt=""  />
        <div>
            <h6>Sweet and sharp two outfit of spring</h6>
            <p>July 27, 2019</p>

        </div>
        </div>
      </div>
      <div className="buttons">
          <Button>Interior</Button> 
          <Button> FASHION</Button>
          <Button>Interior</Button>
          <Button>Interior</Button>
          <Button>Interior</Button>
          <Button>Interior</Button>
      </div>
      <div className="sidebarImage">
          <h6>INSTAGRAM</h6>
          <hr/>
          <img src={profile} alt="" className="sidebarimg" />
          <img src={profile1} alt="" className="sidebarimg" />
          <img src={profile2} alt="" className="sidebarimg" />
          <img src={profile} alt="" className="sidebarimg" />
          <div>
              <i className='fa fa-instagram'></i>
              <p>follow me </p>
          </div>
          
      </div>
    </div>
  );
};

export default Sidebar;
