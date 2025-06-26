import React from "react";


const DashBoard = () => {

    return(<>

<main>

        
<div className="slider-area">
<div className="slider-active">
<div className="single-slider hero-overly slider-height d-flex align-items-center" style={{ backgroundImage: `url("assets/img/hero/h1_hero.jpg")` }}>
  <div className="container">
    <div className="row">
      <div className="col-lg-11">
        <div className="hero__caption">
          <div className="hero-text1">
            <span data-animation="fadeInUp" data-delay=".3s">
            Quality Craftsmanship in Every Build
            </span>
          </div>
          <h1 data-animation="fadeInUp" data-delay=".5s">Maskaf</h1>
          <div className="stock-text" data-animation="fadeInUp" data-delay=".8s">
            <h2>Construction</h2>
            <h2>Construction</h2>
          </div>
          <div className="hero-text2 mt-110" data-animation="fadeInUp" data-delay=".9s">
            <span>
              <a href="services.html">Our Services</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

   
    <div class="services-area1 section-padding30">
        <div class="container">
            
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-tittle mb-55">
                        <div class="front-text">
                            <h2 class="">Our Services</h2>
                        </div>
                        <span class="back-text">Services</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-service-cap mb-30">
                        <div class="service-img">
                            <img src="assets/img/pictures/building/build1.jpg" alt=""/>
                        </div>
                        <div class="service-cap">
                            <h4><a href="services_details.html">Building</a></h4>
                            {/* <a href="services_details.html" class="more-btn">Read More <i class="ti-plus"></i></a> */}
                        </div>
                        <div class="service-icon">
                            <img src="assets/img/icon/services_icon1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-service-cap mb-30">
                        <div class="service-img">
                            <img src="assets/img/pictures/doors/door6.jpg" alt=""/>
                        </div>
                        <div class="service-cap">
                            <h4><a href="services_details.html">Doors</a></h4>
                            {/* <a href="services_details.html" class="more-btn">Read More <i class="ti-plus"></i></a> */}
                        </div>
                        <div class="service-icon">
                            <img src="assets/img/icon/services_icon1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-service-cap mb-30">
                        <div class="service-img">
                            <img src="assets/img/pictures/pic4.jpg" alt=""/>
                        </div>
                        <div class="service-cap">
                            <h4><a href="services_details.html">Tiling</a></h4>
                            <a href="services_details.html" class="more-btn"></a>
                        </div>
                        <div class="service-icon">
                            <img src="assets/img/icon/services_icon1.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="single-service-cap mb-30">
                        <div class="service-img">
                            <img src="assets/img/pictures/pic5.jpg" alt=""/>
                        </div>
                        <div class="service-cap">
                            <h4><a href="services_details.htmlaa">Roofing</a></h4>
                            <a href="services_details.html" class="more-btn"></a>
                        </div>
                        <div class="service-icon">
                            <img src="assets/img/icon/services_icon1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <section class="support-company-area fix pt-10">
    <div class="support-wrapper align-items-start">
    <div class="left-content">
        <div class="section-tittle section-tittle2 mb-30">
            <div class="front-text">
                <h2>Who We Are</h2>
            </div>
            <span class="back-text">About Us</span>
        </div>
        <div class="support-caption">
            <p class="pera-top">
                <strong>Maskaf Construction</strong> is a trusted building and renovation company known for delivering quality construction solutions with a commitment to excellence and durability. Founded with a passion for modern infrastructure, we take pride in turning your dream projects into reality.
            </p>
            <p>
                We specialize in residential and commercial construction, remodeling, and general building works. What sets us apart is our flexible **installment payment options**, making it easier for clients to build or renovate without financial pressure. At Maskaf Construction, quality is not just a promise — it’s our standard.
            </p>
            <a href="about.html" class="btn red-btn2">Read More</a>
        </div>
    </div>

    <div class="right-content mt-4 mt-md-0">
        <div class="right-img">
            <img src="assets/img/pictures/CEO.jpg" alt="CEO of Maskaf Construction" style={{
             maxHeight: '700px',
             width: '100%',
            
            }}/>
        </div>
        <div class="support-img-cap text-center">
            <span>2010</span>
            <p>Since</p>
        </div>
    </div>
</div>

    </section>
  
    <section class="project-area  section-padding30">
        <div class="container">
           <div class="project-heading mb-35">
                <div class="row align-items-end">
                    <div class="col-lg-6">
                        
                        <div class="section-tittle section-tittle3">
                            <div class="front-text">
                                <h2 class="">Our Projects</h2>
                            </div>
                            <span class="back-text">Gellary</span>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="properties__button">
                                                                      
                            <nav> 
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false"> Show  all </a>
                                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"> Buildings</a>
                                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Roofing</a>
                                    <a class="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Doors</a>
                                    {/* <a class="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Grafoto/Tiling</a> */}
                                </div>
                            </nav>
                           
                        </div>
                    </div>
                </div>
           </div>
            <div class="row">
                <div class="col-12">
                  
                    <div class="tab-content active" id="nav-tabContent">
                       
                        <div class="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">           
                            <div class="project-caption">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door10.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                                <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/pic6.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/pic7.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/doors/door15.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof6.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build4.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div class="project-caption">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build2.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build4.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build3.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build5.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build6.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/building/build1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div class="project-caption">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof2.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof3.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof4.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof5.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof7.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof8.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof9.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof11.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof12.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof13.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof14.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof15.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof6.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/pictures/roofing/roof10.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                            <div class="project-caption">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door2.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door3.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door4.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door5.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door6.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door7.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door8.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door9.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door11.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door10.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door9.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door12.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door13.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door14.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door15.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                            <img src="assets/img/pictures/doors/door1.jpg" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                {/* <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                            <div class="project-caption">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/gallery/project1.png" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/gallery/project2.png" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/gallery/project3.png" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/gallery/project4.png" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/gallery/project5.png" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-6">
                                        <div class="single-project mb-30">
                                            <div class="project-img">
                                                <img src="assets/img/gallery/project6.png" alt=""/>
                                            </div>
                                            <div class="project-cap">
                                                <a href="project_details.html" class="plus-btn"><i class="ti-plus"></i></a>
                                               <h4><a href="project_details.html">Floride Chemicals</a></h4>
                                                <h4><a href="project_details.html">Factory</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </section>
   
    <section class="contact-with-area"  style={{ backgroundImage: `url("assets/img/gallery/section-bg2.jpg")` }}>
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-9 offset-xl-1 offset-lg-1">
                    <div class="contact-us-caption">
                        <div class="team-info mb-30 pt-45">
                            <div class="section-tittle section-tittle4">
                                <div class="front-text">
                                    <h2 class="">Lats talk with us</h2>
                                </div>
                                <span class="back-text">Lat`s chat</span>
                            </div>
                            <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.</p>
                            <a href="#" class="white-btn">read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <div class="count-area">
        <div class="container">
            <div class="count-wrapper count-bg"  style={{ backgroundImage: `url("assets/img/gallery/section-bg3.jpg")` }}>
                <div class="row justify-content-center" >
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="count-clients">
                            <div class="single-counter">
                                <div class="count-number">
                                    <span class="counter">34</span>
                                </div>
                                <div class="count-text">
                                    <p>Machinery</p>
                                    <h5>Tools</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="count-clients">
                            <div class="single-counter">
                                <div class="count-number">
                                    <span class="counter">76</span>
                                </div>
                                <div class="count-text">
                                    <p>Machinery</p>
                                    <h5>Tools</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="count-clients">
                            <div class="single-counter">
                                <div class="count-number">
                                    <span class="counter">08</span>
                                </div>
                                <div class="count-text">
                                    <p>Machinery</p>
                                    <h5>Tools</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="team-area section-padding30">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                  
                    <div class="section-tittle section-tittle5 mb-50">
                        <div class="front-text">
                            <h2 class="">Our team</h2>
                        </div>
                        <span class="back-text">exparts</span>
                    </div>
                </div>
            </div>
            <div class="row">
                
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img src="assets/img/team/team1.png" alt=""/>
                        </div>
                        <div class="team-caption">
                            <span>UX Designer</span>
                            <h3>Ethan Welch</h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img src="assets/img/team/team2.png" alt=""/>
                        </div>
                        <div class="team-caption">
                            <span>UX Designer</span>
                            <h3>Ethan Welch</h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
                    <div class="single-team mb-30">
                        <div class="team-img">
                            <img src="assets/img/team/team3.png" alt=""/>
                        </div>
                        <div class="team-caption">
                            <span>UX Designer</span>
                            <h3>Ethan Welch</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div class="testimonial-area t-bg testimonial-padding">
        <div class="container ">
            <div class="row">
                <div class="col-xl-12">
                   
                    <div class="section-tittle section-tittle6 mb-50">
                        <div class="front-text">
                            <h2 class="">Testimonial</h2>
                        </div>
                        <span class="back-text">Feedback</span>
                    </div>
                </div>
            </div>
           <div class="row">
                <div class="col-xl-10 col-lg-11 col-md-10 offset-xl-1">
                    <div class="h1-testimonial-active">
                        
                        <div class="single-testimonial">
                            
                            <div class="testimonial-caption ">
                            <div className="testimonial-top-cap">
                              <svg xmlns="http://www.w3.org/2000/svg" width="86px" height="63px">
                                <path fillRule="evenodd" strokeWidth="1px" stroke="rgb(255, 95, 19)" fillOpacity="0" fill="rgb(0, 0, 0)"
                                  d="M82.623,59.861 L48.661,59.861 L48.661,25.988 L59.982,3.406 L76.963,3.406 L65.642,25.988 L82.623,25.988 L82.623,59.861 ZM3.377,25.988 L14.698,3.406 L31.679,3.406 L20.358,25.988 L37.340,25.988 L37.340,59.861 L3.377,59.861 L3.377,25.988 Z"/>
                              </svg>
                              <p>
                                Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit
                                esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa
                                cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu
                                layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr
                                in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur
                                sfwsignjn.
                              </p>
                            </div>

                               
                                <div class="testimonial-founder d-flex align-items-center">
                                   <div class="founder-text">
                                        <span>Jessya Inn</span>
                                        <p>Co Founder</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="single-testimonial">
                            
                            <div class="testimonial-caption ">
                            <div className="testimonial-top-cap">
                              <svg xmlns="http://www.w3.org/2000/svg" width="86px" height="63px">
                                <path fillRule="evenodd" strokeWidth="1px" stroke="rgb(255, 95, 19)" fillOpacity="0" fill="rgb(0, 0, 0)"
                                  d="M82.623,59.861 L48.661,59.861 L48.661,25.988 L59.982,3.406 L76.963,3.406 L65.642,25.988 L82.623,25.988 L82.623,59.861 ZM3.377,25.988 L14.698,3.406 L31.679,3.406 L20.358,25.988 L37.340,25.988 L37.340,59.861 L3.377,59.861 L3.377,25.988 Z"/>
                              </svg>
                              <p>
                                Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr in re voluptate velit
                                esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa
                                cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu
                                layjobore mofllit anim. Mollit anim laborum. Dvcuis aute iruxvfg dhjkolohr
                                in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur
                                sfwsignjn.
                              </p>
                            </div>
                               
                                <div class="testimonial-founder d-flex align-items-center">
                                   <div class="founder-text">
                                        <span>Jessya Inn</span>
                                        <p>Co Founder</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
    
    <div class="latest-news-area section-padding30">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    
                    <div class="section-tittle section-tittle7 mb-50">
                        <div class="front-text">
                            <h2 class="">latest news</h2>
                        </div>
                        <span class="back-text">Our Blog</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                   
                    <div class="single-news mb-30">
                        <div class="news-img">
                            <img src="assets/img/david/david_1.png" alt=""/>
                            <div class="news-date text-center">
                                <span>24</span>
                                <p>Now</p>
                            </div>
                        </div>
                        <div class="news-caption">
                            <ul class="david-info">
                                <li> | &nbsp; &nbsp;  Porperties</li>
                            </ul>
                            <h2><a href="single-blog.html">Footprints in Time is perfect
                                House in Kurashiki</a></h2>
                            <a href="single-blog.html" class="d-btn">Read more »</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                    
                    <div class="single-news mb-30">
                        <div class="news-img">
                            <img src="assets/img/david/david_2.png" alt=""/>
                            <div class="news-date text-center">
                                <span>24</span>
                                <p>Now</p>
                            </div>
                        </div>
                        <div class="news-caption">
                            <ul class="david-info">
                                <li> | &nbsp; &nbsp;  Porperties</li>
                            </ul>
                            <h2><a href="single-blog.html">Footprints in Time is perfect
                                House in Kurashiki</a></h2>
                            <a href="single-blog.html" class="d-btn">Read more » </a>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </div>
   

</main>
    </>)


};

export default DashBoard