import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's discuss how we can help you achieve your digital goals. 
            Get in touch with our team today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              View Our Services
            </Link>
            <Link href="/case-studies" className="btn-secondary bg-primary-700 text-white hover:bg-primary-600">
              See Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}