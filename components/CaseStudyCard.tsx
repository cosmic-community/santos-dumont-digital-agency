import { CaseStudy } from '@/types'
import Link from 'next/link'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="card group">
      {caseStudy.metadata.featured_image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={`${caseStudy.metadata.featured_image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
            alt={caseStudy.metadata.project_title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width="600"
            height="338"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-secondary-500 mb-3">
          <span>{caseStudy.metadata.client_name}</span>
          {caseStudy.metadata.industry && (
            <>
              <span>•</span>
              <span>{caseStudy.metadata.industry}</span>
            </>
          )}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-secondary-900 group-hover:text-primary-600 transition-colors">
          {caseStudy.metadata.project_title}
        </h3>
        
        {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.metadata.services_used.slice(0, 3).map((service) => (
              <span
                key={service.id}
                className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
              >
                {service.metadata.service_name}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
          Read Case Study
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}