import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef()
    const [status, setStatus] = useState(null) // 'success' or 'error'

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_xt2r67u',      // Service ID from EmailJS dashboard
            'template_psvr6ra',     // Email template ID from EmailJS dashboard
            form.current,
            'J2acYRX5H_mH-J4nQ'       // Public Key from EmailJS dashboard
        ).then(() => {
            setStatus('success')
            form.current.reset()
        }).catch(() => {
            setStatus('error')
        })
    }

    return (
        <div id="contact" className="container mt-5 bg-dark bg-opacity-50 rounded-4 p-5 shadow-lg">
            <h1 className="fw-bold mb-4">Contact Me</h1>
            {status === 'success' && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Thank you for your message. I will get back to you soon.
                    <button type="button" className="btn-close" onClick={() => setStatus(null)}></button>
                </div>
            )}

            {status === 'error' && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Something went wrong. Please try again.
                    <button type="button" className="btn-close" onClick={() => setStatus(null)}></button>
                </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label className="form-label text-white">Name</label>
                    <input type="text" name="user_name" className="form-control" placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white">Email</label>
                    <input type="email" name="user_email" className="form-control" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label className="form-label text-white">Message</label>
                    <textarea name="message" className="form-control" rows="5" placeholder="Write your message here" required></textarea>
                </div>
                <button type="submit" className="btn btn-light fw-bold px-4">Send Message</button>
            </form>
        </div>
    )
}

export default Contact