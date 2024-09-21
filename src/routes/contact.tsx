import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import first from './first_danica.jpg'

export default function ContactPage() {
  return (
    <Layout>
      <Article
        title="Contact Danica Patrick's Fan Club"
        imageAlt="Danica Patrick Contact"
        imageSrc={first}
      >
        <p>
          We love hearing from Danica Patrick fans! If you have any questions, suggestions, or fan mail, feel free to reach out to us through the form below. Whether it's about Danica's racing career, her businesses, or any other related inquiries, we're here to help.
        </p>
        <p>
          You can also follow Danica on her social media platforms or subscribe to the fan club newsletter for the latest updates and exclusive content.
        </p>
        <ul>
          <li><strong>Email:</strong> fanclub@danicapatrick.com</li>
          <li><strong>Fan Club Office:</strong> 123 Speedway Blvd, Indianapolis, IN</li>
        </ul>
      </Article>
    </Layout>
  )
}
