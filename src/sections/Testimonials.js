import React from 'react'
import TestimonialCards from '../components/TestimonialCards'
import TestimonialsData from '../data/testimonials.json'

const Testimonials = () => {
  return (
    <TestimonialCards testimonials={TestimonialsData} />
  )
}

export default Testimonials