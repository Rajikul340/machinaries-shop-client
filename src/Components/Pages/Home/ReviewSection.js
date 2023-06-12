import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillDribbbleSquare, AiFillStar } from "react-icons/ai";




export default function ReviewSlider() {
  return (
    <div className="my-10">
        <h1 className="uppercase  text-center  text-orange-500  my-5 font-bold md:text-4xl text-2xl mx-5">
          <span>
           
          </span>
          <span> Client Reviews</span>
        </h1>
     
      <Swiper 
       slidesPerView={1} // Default value for large devices
       breakpoints={{
         // Set breakpoints for different device sizes
         640: {
           slidesPerView: 3, // Value for small devices
         },
       }}
      className="mySwiper">
      
    
  
   
      <SwiperSlide>
          <div id="cardHover" className="  transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="flex my-5">
            <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Rawen omeen
                  </h3>
                  <h4 className="text-orange-400 font-bold name">
                    Project Manager Career Guidance
                  </h4>
                </div>
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&w=1000&q=80"
                alt="img"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="hoverIcon">
        
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
        
            </div>
          </div>
        </SwiperSlide>
   
      <SwiperSlide>
          <div id="cardHover" className="  transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="flex my-5">
            <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Rawen omeen
                  </h3>
                  <h4 className="text-orange-400 font-bold name">
                    Project Manager Career Guidance
                  </h4>
                </div>
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&w=1000&q=80"
                alt="img"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="hoverIcon">
        
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
        
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div id="cardHover" className="  transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="flex my-5">
            <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Rawen omeen
                  </h3>
                  <h4 className="text-orange-400 font-bold name">
                    Project Manager Career Guidance
                  </h4>
                </div>
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&w=1000&q=80"
                alt="img"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="hoverIcon">
        
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
        
            </div>
          </div>
        </SwiperSlide>
      <SwiperSlide>
          <div id="cardHover" className="  transition shadow-2xl p-5 m-5 rounded-lg">
            <div className="flex my-5">
            <div >
                  <h3 className="md:text-xl text-lg font-bold name">
                    Rawen omeen
                  </h3>
                  <h4 className="text-orange-400 font-bold name">
                    Project Manager Career Guidance
                  </h4>
                </div>
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fHww&w=1000&q=80"
                alt="img"
                className="w-16 h-16 rounded-full"
              />
            </div>
            <div className="hoverIcon">
        
              <p className="review">
                i have been mentoring students on choosing the right career
                since 8 years now. but the style of working at attitutd matteZ
                is a lot different than other companies. i enjoy freedom to
                strategize, plan and implement the ideas for my category and
                develop a comperhensive plan which impacts the life of thousands
              </p>
        
            </div>
          </div>
        </SwiperSlide>
     
     
   
     
      </Swiper>
    </div>
  );
}
