import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Our Services - Santos Dumont Digital Agency',
  description: 'Explore our comprehensive range of digital services including web development, digital marketing, and brand strategy.',
}

export default async function ServicesPage() {
  const services = await getServices() as Service[]
  
  return (
    <div className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="mb-4">Our Services</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital age. 
            From strategy to execution, we're with you every step of the way.
          </p>
        </div>
        
        {services.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-secondary-500">No services available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}