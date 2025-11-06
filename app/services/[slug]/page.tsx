// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const services = await getServices() as Service[]
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug) as Service | null
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
  
  return {
    title: `${service.metadata.service_name} - Santos Dumont Digital Agency`,
    description: service.metadata.short_description,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug) as Service | null
  
  if (!service) {
    notFound()
  }
  
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/services"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          
          {service.metadata.service_icon && (
            <div className="mb-8">
              <img
                src={`${service.metadata.service_icon.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={service.metadata.service_name}
                className="w-32 h-32 object-cover rounded-2xl shadow-lg"
                width="128"
                height="128"
              />
            </div>
          )}
          
          <h1 className="mb-4">{service.metadata.service_name}</h1>
          
          {service.metadata.featured && (
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Featured Service
            </span>
          )}
          
          <p className="text-xl text-secondary-600 mb-8">
            {service.metadata.short_description}
          </p>
          
          {service.metadata.pricing && (
            <div className="bg-secondary-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-2">Pricing</h3>
              <p className="text-2xl text-primary-600 font-bold">{service.metadata.pricing}</p>
            </div>
          )}
          
          {service.metadata.full_description && (
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: service.metadata.full_description }} />
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-secondary-200">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}