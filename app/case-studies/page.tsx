import { getCaseStudies } from '@/lib/cosmic'
import { CaseStudy } from '@/types'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies - Santos Dumont Digital Agency',
  description: 'Explore our portfolio of successful projects and client transformations.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies() as CaseStudy[]
  
  return (
    <div className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="mb-4">Case Studies</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve 
            measurable results. Each project showcases our commitment to excellence and innovation.
          </p>
        </div>
        
        {caseStudies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-secondary-500">No case studies available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}