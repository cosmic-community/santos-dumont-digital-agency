import { getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import CaseStudyCard from '@/components/CaseStudyCard'
import Link from 'next/link'

export default async function CaseStudiesSection() {
  const allCaseStudies = await getCaseStudies() as CaseStudy[]
  const caseStudies = allCaseStudies.slice(0, 2)
  
  if (caseStudies.length === 0) {
    return null
  }
  
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Featured Case Studies</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover how we've helped businesses achieve remarkable results through innovative digital solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/case-studies" className="btn-primary">
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}