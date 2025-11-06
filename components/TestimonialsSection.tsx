import { getTestimonials } from '@/lib/cosmic'
import { Testimonial } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

export default async function TestimonialsSection() {
  const testimonials = await getTestimonials() as Testimonial[]
  
  if (testimonials.length === 0) {
    return null
  }
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}