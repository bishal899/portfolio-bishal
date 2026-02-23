import './ContactForm.css'

function ContactForm() {
    return (
        <div className="form-section">
            <form>
                <label>
                    name:
                    <input type="text" placeholder='enter your name' name='name'/>
                </label>
                <label>
                    email:
                    <input type="email" placeholder='enter your email' name='email'/>
                </label>
                <label>
                    message:
                    <textarea placeholder='enter your message' name='message' />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ContactForm