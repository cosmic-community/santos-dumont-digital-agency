import { getTeamMembers } from '@/lib/cosmic'
import { TeamMember } from '@/types'
import TeamMemberCard from '@/components/TeamMemberCard'

export default async function TeamSection() {
  const team = await getTeamMembers() as TeamMember[]
  
  if (team.length === 0) {
    return null
  }
  
  return (
    <section id="team" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our talented team of experts is dedicated to delivering exceptional results for every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}