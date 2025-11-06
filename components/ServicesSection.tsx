import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'
import Link from 'next/link'

export default async function ServicesSection() {
  const allServices = await getServices() as Service[]
  const services = allServices.slice(0, 3)
  
  if (services.length === 0) {
    return null
  }
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}