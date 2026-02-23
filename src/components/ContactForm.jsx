import { useState } from 'react'
import './ContactForm.css'
import Popup from './Popup'

function ContactForm() {
    const [isTrue, setIsTrue] = useState(false)
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value
        setInputs(prev => ({ ...prev, [key]: value }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        setIsTrue(true)
        // for (let i = 0; i < e.target.length-1; i++) {
        //     const key = e.target[i].name
        //     const value = e.target[i].value
        //     setInputs
        // }
        // console.log(e.target.length)
        // console.log(inputs)
        setInputs({
            name: '',
            email: '',
            message: ''
        })
    }
    return (
        <div className="form-section">
            <form onSubmit={handleSubmit}>
                <label>
                    name:
                    <input type="text" placeholder='enter your name' name='name' value={inputs.name} onChange={handleChange} />
                </label>
                <label>
                    email:
                    <input type="email" placeholder='enter your email' name='email' value={inputs.email} onChange={handleChange} required />
                </label>
                <label>
                    message:
                    <textarea placeholder='enter your message' name='message' value={inputs.message} onChange={handleChange} />
                </label>
                <button type="submit">submit</button>
            </form>
            <Popup isTrue={isTrue} isClose={() => setIsTrue(false)} />
        </div>
    )
}

export default ContactForm