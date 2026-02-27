import { client } from '../../utils/sanity'

async function getProjects() {
  const query = `*[_type == "project"]{
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    description
  }`
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-8 md:p-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-emerald-500 tracking-tight">
          NYANETIC
        </h1>
        <p className="text-gray-400 mb-12">Showcasing our creative tech solutions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <div key={project.slug} className="group bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300">
              {project.imageUrl && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              )}
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="h-1 w-12 bg-emerald-500 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}