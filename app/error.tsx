'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-secondary-900">Something went wrong!</h2>
        <p className="text-secondary-600 mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="btn-primary"
        >
          Try again
        </button>
      </div>
    </div>
  )
}