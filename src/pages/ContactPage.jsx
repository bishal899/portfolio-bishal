import ContactForm from "../components/ContactForm"
import './ContactPage.css'
function ContactPage() {
  return (
    <div className='contact-page'>
      <div className="information-container">
        <div className="heading-container">
          <h2 className="contact-heading">contact me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda voluptate accusamus!</p>
        </div>
        <div className="email-section">
          <h6>email me: </h6>
          <a href="mailto:bishalsardar76@gmail.com">bishalsardar76@gmail.com</a>
        </div>
        <div className="number-section">
          <h6>phone: </h6>
          <a href="tel:+918343863934">+91 8343863934</a>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}
export default ContactPage