import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolor molestiae vitae voluptatem deserunt repudiandae inventore. Tenetur ad fugit recusandae atque officia architecto, sapiente autem labore at maxime earum alias!'
  },
  {
    avatar: AVT2,
    name: 'Wale',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolor molestiae vitae voluptatem deserunt repudiandae inventore. Tenetur ad fugit recusandae atque officia architecto, sapiente autem labore at maxime earum alias!'
  },
  {
    avatar: AVT3,
    name: 'Kwame despite',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolor molestiae vitae voluptatem deserunt repudiandae inventore. Tenetur ad fugit recusandae atque officia architecto, sapiente autem labore at maxime earum alias!'
  },
  {
    avatar: AVT4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolor molestiae vitae voluptatem deserunt repudiandae inventore. Tenetur ad fugit recusandae atque officia architecto, sapiente autem labore at maxime earum alias!'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
      className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {
          data.map((item, i) => (
            <SwiperSlide key={i} className="testimonial">
              <div className="client__avatar">
                <img src={item.avatar} alt={item.name} />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__review">
                {item.review}
              </small>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Testimonials