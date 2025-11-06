import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-white animate-fade-in">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-slide-up">
            "As invenções são sobretudo o resultado de um trabalho teimoso"
          </p>
          <p className="text-lg mb-12 text-primary-50 max-w-2xl mx-auto">
            We combine strategic thinking with creative execution to deliver digital solutions 
            that drive real business results. From web development to brand strategy, 
            we're your partner in digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Explore Services
            </Link>
            <Link href="/case-studies" className="btn-secondary bg-primary-700 text-white hover:bg-primary-600">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}