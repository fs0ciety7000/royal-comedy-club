/** @type {import('next').NextConfig} */
const nextConfig = {
  // On dit à Next.js d'ignorer les erreurs de "police du code" (ESLint) pendant le build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // On lui dit aussi d'ignorer les erreurs TypeScript s'il y en a
  typescript: {
    ignoreBuildErrors: true,
  },
  // Désactive l'optimisation d'image stricte (permet d'utiliser des <img> classiques)
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig