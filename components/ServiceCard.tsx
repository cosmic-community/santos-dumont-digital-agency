import { Service } from '@/types'
import Link from 'next/link'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/services/${service.slug}`} className="card group">
      <div className="p-6">
        {service.metadata.service_icon && (
          <div className="mb-6">
            <img
              src={`${service.metadata.service_icon.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
              alt={service.metadata.service_name}
              className="w-16 h-16 object-cover rounded-lg"
              width="64"
              height="64"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
            {service.metadata.service_name}
          </h3>
          {service.metadata.featured && (
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-secondary-600 mb-4 line-clamp-3">
          {service.metadata.short_description}
        </p>
        
        {service.metadata.pricing && (
          <p className="text-primary-600 font-semibold mb-4">
            {service.metadata.pricing}
          </p>
        )}
        
        <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
          Learn More
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}