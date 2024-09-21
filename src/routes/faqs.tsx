import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import first from './third_danica.jpg'

export default function FaqsPage() {
  return (
    <Layout>
      <Article
        title="FAQ's"
        imageAlt="Danica Patrick Fan Club"
        imageSrc={first}
      >
        <p>Find answers to frequently asked questions about Danica Patrick's Fan Club and exclusive fan cards.</p>

        <details
          className="mt-4 block rounded-sm border px-4 open:border-primary-400 hover:border-primary-300"
          open
        >
          <summary className="-mx-4 cursor-pointer border-primary-200 px-4 py-3">
            How can I purchase a Danica Patrick fan card?
          </summary>
          <p>
            You can purchase an exclusive Danica Patrick fan card through the <a href="/fan-card-purchase-link">link here</a>. 
            We accept multiple payment options, including Visa, Mastercard, American Express, Discover, and popular gift cards.
            Get your personalized fan card today and join the official Danica Patrick fan club!
          </p>
        </details>

        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">What is included in a Danica Patrick fan card?</summary>
          <p>
            The fan card includes a personalized message from Danica, a high-quality image of her in action, and exclusive access to special events and offers available only to fan card holders.
          </p>
        </details>

        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Can I gift a fan card to someone else?</summary>
          <p>
            Yes! You can purchase a fan card as a gift for another Danica Patrick fan. When purchasing, simply choose the "Gift" option and provide the recipient's email address for delivery.
          </p>
        </details>

        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Is there a refund policy for fan cards?</summary>
          <p>
            Unfortunately, fan cards are non-refundable due to their personalized nature. If you encounter any issues, feel free to reach out to our support team for assistance.
          </p>
        </details>

        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">How long does it take to receive my fan card?</summary>
          <p>
            Once your purchase is completed, your fan card will be emailed to you instantly. If you haven't received it within 24 hours, please contact our support team.
          </p>
        </details>

        <details className="mt-4 block rounded-sm border border-gray-200 px-4 hover:border-primary-300">
          <summary className="-mx-4 cursor-pointer px-4 py-3">Can I get a physical version of the fan card?</summary>
          <p>
            Currently, all fan cards are digital. However, we are working on offering physical copies in the future. Stay tuned for updates!
          </p>
        </details>

      </Article>
    </Layout>
  )
}
