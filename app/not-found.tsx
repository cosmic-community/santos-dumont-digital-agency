import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-primary-600">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-secondary-900">Page Not Found</h2>
        <p className="text-secondary-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}