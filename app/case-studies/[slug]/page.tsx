// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies() as CaseStudy[]
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug) as CaseStudy | null
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }
  
  return {
    title: `${caseStudy.metadata.project_title} - Case Study`,
    description: `Learn how we helped ${caseStudy.metadata.client_name} achieve their goals.`,
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug) as CaseStudy | null
  
  if (!caseStudy) {
    notFound()
  }
  
  return (
    <div className="section-padding">
      <div className="container-custom">
        <Link 
          href="/case-studies"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Case Studies
        </Link>
        
        {caseStudy.metadata.featured_image && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={`${caseStudy.metadata.featured_image.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
              alt={caseStudy.metadata.project_title}
              className="w-full h-[400px] object-cover"
              width="1200"
              height="400"
            />
          </div>
        )}
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="mb-4">{caseStudy.metadata.project_title}</h1>
            <div className="flex flex-wrap gap-4 text-secondary-600">
              <span className="font-semibold">{caseStudy.metadata.client_name}</span>
              {caseStudy.metadata.industry && (
                <>
                  <span>•</span>
                  <span>{caseStudy.metadata.industry}</span>
                </>
              )}
              {caseStudy.metadata.project_date && (
                <>
                  <span>•</span>
                  <span>{new Date(caseStudy.metadata.project_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </>
              )}
            </div>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">The Challenge</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }} />
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">Our Solution</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }} />
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-secondary-900">Results</h2>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }} />
            </section>
          </div>
          
          {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
            <div className="mt-12 pt-8 border-t border-secondary-200">
              <h3 className="text-xl font-bold mb-4">Services Used</h3>
              <div className="flex flex-wrap gap-3">
                {caseStudy.metadata.services_used.map((service) => (
                  <span 
                    key={service.id}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {service.metadata.service_name}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {caseStudy.metadata.gallery && caseStudy.metadata.gallery.length > 0 && (
            <div className="mt-12 pt-8 border-t border-secondary-200">
              <h3 className="text-xl font-bold mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.metadata.gallery.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={`${image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                      alt={`${caseStudy.metadata.project_title} - Gallery image ${index + 1}`}
                      className="w-full h-64 object-cover"
                      width="600"
                      height="400"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-secondary-200">
            <Link href="/case-studies" className="btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}