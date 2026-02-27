import { client } from '../../utils/sanity'
import { PortableText } from '@portabletext/react'

async function getAboutData() {
  const query = `*[_type == "about"][0]{
    title,
    subtitle,
    story,
    mission,
    vision,
    "imageUrl": aboutImage.asset->url
  }`
  return await client.fetch(query)
}

export default async function AboutPage() {
  const data = await getAboutData()

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-4 text-emerald-500">{data?.title}</h1>
        <p className="text-xl text-gray-400 mb-12">{data?.subtitle}</p>
        
        {data?.imageUrl && (
          <img src={data.imageUrl} className="w-full rounded-3xl mb-12 border border-white/10" alt="About" />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-[#080808] p-8 rounded-3xl border border-white/5">
            <h2 className="text-emerald-500 font-bold mb-4 uppercase tracking-widest">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">{data?.mission}</p>
          </div>
          <div className="bg-[#080808] p-8 rounded-3xl border border-white/5">
            <h2 className="text-cyan-500 font-bold mb-4 uppercase tracking-widest">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">{data?.vision}</p>
          </div>
        </div>

        <div className="prose prose-invert prose-emerald max-w-none">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <PortableText value={data?.story} />
        </div>
      </div>
    </main>
  )
}