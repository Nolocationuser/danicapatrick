import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Welcome to Danica Patrick's Fan Club"
        content="Explore the legacy of Danica Patrick, the trailblazing driver who has made history in the world of motorsports. Learn about her achievements, milestones, and the impact she continues to make both on and off the track."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
