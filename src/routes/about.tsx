import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import first from './second_danica.jpg'

function AboutPage() {
  return (
    <Layout>
      <Article
        title="About Danica Patrick"
        imageAlt="Danica Patrick"
        imageSrc={first} 
      >
        <p>
          Danica Patrick is a trailblazing American race car driver, entrepreneur, and author, widely recognized as the most successful woman in the history of American open-wheel racing. She gained international fame after becoming the first woman to win an IndyCar Series race in 2008 and holds the highest finish by a female driver in both the Indianapolis 500 and the Daytona 500.
        </p>
        <p>
          After retiring from professional racing in 2018, Danica shifted her focus to her entrepreneurial ventures, including her successful clothing line, <em>Warrior by Danica Patrick</em>, and her wine brand, <em>Somnium</em>. She also authored the book <em>Pretty Intense</em>, sharing her passion for fitness and a healthy lifestyle.
        </p>
        <p>
          Through her journey, Danica has broken barriers and inspired millions, becoming a role model not only in motorsports but across industries. Her contributions continue to make an impact both on and off the track.
        </p>
      </Article>
    </Layout>
  )
}

export default AboutPage
