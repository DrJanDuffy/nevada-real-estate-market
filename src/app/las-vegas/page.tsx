import type { Metadata } from 'next'
import Link from 'next/link'
import { lasVegasCommunities } from '@/lib/las-vegas-communities'

export const metadata: Metadata = {
  title: 'Las Vegas NV Real Estate | Neighborhoods & Homes For Sale',
  description: 'Las Vegas Nevada real estate expert Dr. Jan Duffy. Browse Centennial Hills, Spring Valley, Rhodes Ranch, Silverstone Ranch, Lone Mountain & Arts District listings.',
  alternates: { canonical: 'https://nevadarealestatemarket.com/las-vegas' },
}

export default function LasVegasPage() {
  return (
    <main>
      <section className="bg-blue-950 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Las Vegas, NV Real Estate
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            From guard-gated golf communities to walkable urban living — every Las Vegas neighborhood has its own story.
          </p>
          <a
            href="tel:7022221964"
            className="inline-block bg-yellow-400 text-blue-950 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Call Dr. Jan · 702-222-1964
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-950 mb-2 text-center">
            Las Vegas Neighborhoods
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Each neighborhood has its own personality — and its own price points.
            Here&apos;s what to expect in every one.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lasVegasCommunities.map((c) => (
              <Link
                key={c.slug}
                href={`/las-vegas/${c.slug}`}
                className="group border rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition"
              >
                <h3 className="text-xl font-bold text-blue-950 group-hover:text-blue-700 mb-1">
                  {c.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{c.tagline}</p>
                <p className="text-blue-800 font-semibold mb-3">{c.priceRange}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {c.highlights.slice(0, 4).map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="text-yellow-500">✦</span> {h}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure Which Neighborhood Fits?</h2>
          <p className="text-blue-200 mb-6">
            500+ families helped across Las Vegas. I know which streets have the views,
            which communities have the best commutes, and where the value is hiding right now.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-blue-950 font-bold px-8 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Get a Free Neighborhood Comparison
          </a>
        </div>
      </section>
    </main>
  )
}
