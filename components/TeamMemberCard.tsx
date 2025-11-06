import { TeamMember } from '@/types'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="card">
      {member.metadata.photo && (
        <div className="aspect-square overflow-hidden">
          <img
            src={`${member.metadata.photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
            alt={member.metadata.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width="400"
            height="400"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{member.metadata.name}</h3>
        <p className="text-primary-600 font-semibold mb-4">{member.metadata.role}</p>
        
        {member.metadata.bio && (
          <p className="text-secondary-600 mb-4 line-clamp-3">
            {member.metadata.bio}
          </p>
        )}
        
        <div className="flex items-center space-x-4">
          {member.metadata.linkedin_url && (
            <a
              href={member.metadata.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-500 hover:text-primary-600 transition-colors"
              aria-label={`${member.metadata.name} LinkedIn`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
          {member.metadata.twitter_url && (
            <a
              href={member.metadata.twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-500 hover:text-primary-600 transition-colors"
              aria-label={`${member.metadata.name} Twitter`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
          )}
          {member.metadata.email && (
            <a
              href={`mailto:${member.metadata.email}`}
              className="text-secondary-500 hover:text-primary-600 transition-colors"
              aria-label={`Email ${member.metadata.name}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}