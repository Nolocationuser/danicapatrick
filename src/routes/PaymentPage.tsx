import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import { useState } from 'react'
import Modal from 'react-modal'
import first from './fourth_danica.jpg'

Modal.setAppElement('#root') // Set the app element for accessibility with Modal

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cryptoAddress: '',
    appleCardId: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (paymentMethod === 'Credit Card' && paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv) {
      setSuccess(true)
    } else if (paymentMethod === 'Cryptocurrency' && paymentDetails.cryptoAddress) {
      setSuccess(true)
    } else if (paymentMethod === 'Apple Card' && paymentDetails.appleCardId) {
      setSuccess(true)
    } else {
      setError(true)
    }
  }

  function handleCloseModal() {
    setSuccess(false)
    setError(false)
  }

  return (
    <Layout>
      <Article
        title="Payment Page"
        imageAlt="Payment Methods"
        imageSrc={first}// Replace with a relevant image URL
      >
        <p>Please choose your payment method and enter the required details.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-medium leading-10" htmlFor="paymentMethod">
              Payment Method
            </label>
            <select
              className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
              id="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="" disabled>Select a payment method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Cryptocurrency">Cryptocurrency</option>
              <option value="Apple Card">Apple Card</option>
            </select>
          </div>

          {/* Credit Card Fields */}
          {paymentMethod === 'Credit Card' && (
            <>
              <div>
                <label className="block text-lg font-medium leading-10" htmlFor="cardNumber">
                  Card Number
                </label>
                <input
                  className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={paymentDetails.cardNumber}
                  onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                />
              </div>
              <div className="flex space-x-4">
                <div>
                  <label className="block text-lg font-medium leading-10" htmlFor="expiryDate">
                    Expiry Date
                  </label>
                  <input
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                    id="expiryDate"
                    name="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    value={paymentDetails.expiryDate}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, expiryDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium leading-10" htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                    id="cvv"
                    name="cvv"
                    type="text"
                    placeholder="123"
                    value={paymentDetails.cvv}
                    onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}

          {/* Cryptocurrency Fields */}
          {paymentMethod === 'Cryptocurrency' && (
            <div>
              <label className="block text-lg font-medium leading-10" htmlFor="cryptoAddress">
                Cryptocurrency Wallet Address
              </label>
              <input
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                id="cryptoAddress"
                name="cryptoAddress"
                type="text"
                placeholder="e.g., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
                value={paymentDetails.cryptoAddress}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cryptoAddress: e.target.value })}
              />
            </div>
          )}

          {/* Apple Card Fields */}
          {paymentMethod === 'Apple Card' && (
            <div>
              <label className="block text-lg font-medium leading-10" htmlFor="appleCardId">
                Apple Card ID
              </label>
              <input
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                id="appleCardId"
                name="appleCardId"
                type="text"
                placeholder="Enter your Apple Card ID"
                value={paymentDetails.appleCardId}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, appleCardId: e.target.value })}
              />
            </div>
          )}

          <button
            className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
            type="submit"
          >
            Confirm Payment
          </button>
        </form>

        {/* Modal for Success */}
        <Modal
          isOpen={success}
          onRequestClose={handleCloseModal}
          contentLabel="Payment Success Modal"
          className="modal-class"
          overlayClassName="overlay-class"
        >
          <h2 className="text-xl font-semibold text-green-500">Payment Successful!</h2>
          <p>Your payment was processed successfully. Thank you for your purchase!</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white" onClick={handleCloseModal}>
            Close
          </button>
        </Modal>

        {/* Modal for Error */}
        <Modal
          isOpen={error}
          onRequestClose={handleCloseModal}
          contentLabel="Payment Error Modal"
          className="modal-class"
          overlayClassName="overlay-class"
        >
          <h2 className="text-xl font-semibold text-red-500">Payment Failed!</h2>
          <p>Please check your payment details and try again.</p>
          <button className="mt-4 px-4 py-2 bg-red-500 text-white" onClick={handleCloseModal}>
            Close
          </button>
        </Modal>
      </Article>
    </Layout>
  )
}
