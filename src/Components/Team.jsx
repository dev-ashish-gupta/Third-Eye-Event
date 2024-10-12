
const teamMembers = [
  {
    name: "Jenny Wilson",
    role: "DEVELOPER",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Mike hardson",
    role: "DESIGNER",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Aleesha brown",
    role: "MANAGER",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export default function Team() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-yellow-400 px-2">O</span>ur Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our young team has what it takes to tackle any creative task
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md relative">
              <div className="relative h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                {index === 1 && (
                  <div className="flex space-x-4">
                    
                  </div>
                )}
              </div>
              <div className="absolute bottom-4 right-4">
                <button className="bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}