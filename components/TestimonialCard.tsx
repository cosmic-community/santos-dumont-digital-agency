import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const renderStars = (rating?: { key: string; value: string }) => {
    if (!rating) return null
    
    const numStars = parseInt(rating.key)
    return (
      <div className="flex text-yellow-400 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < numStars ? 'text-yellow-400' : 'text-secondary-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }
  
  return (
    <div className="card">
      <div className="p-6">
        {renderStars(testimonial.metadata.rating)}
        
        <p className="text-secondary-700 mb-6 italic">
          "{testimonial.metadata.testimonial}"
        </p>
        
        <div className="flex items-center">
          {testimonial.metadata.client_photo && (
            <img
              src={`${testimonial.metadata.client_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
              alt={testimonial.metadata.client_name}
              className="w-12 h-12 rounded-full object-cover mr-4"
              width="48"
              height="48"
            />
          )}
          <div>
            <p className="font-semibold text-secondary-900">
              {testimonial.metadata.client_name}
            </p>
            <p className="text-sm text-secondary-600">
              {testimonial.metadata.position && `${testimonial.metadata.position}, `}
              {testimonial.metadata.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}