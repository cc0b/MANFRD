'use client'

import { useState, useRef } from 'react'
import { sendEmail } from '@/app/actions/sendEmail'

const inputClass = `w-full bg-transparent border-b py-3 text-[11px] tracking-[0.2em] uppercase outline-none transition-colors duration-300 placeholder:tracking-[0.2em] placeholder:uppercase focus:border-cream`
const inputStyle = {
  borderColor: 'rgba(240,237,232,0.2)',
  color: 'rgba(240,237,232,0.8)',
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.currentTarget)
    const result = await sendEmail(formData)
    if (result?.success) {
      setStatus('sent')
      formRef.current?.reset()
    } else {
      setStatus('error')
      setErrorMsg(result?.error ?? 'Something went wrong.')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6 w-full max-w-lg">
      <input
        name="name"
        type="text"
        placeholder="Name"
        required
        className={inputClass}
        style={inputStyle}
      />

      <input
        name="contact"
        type="text"
        placeholder="Email or Phone"
        required
        className={inputClass}
        style={inputStyle}
      />

      <select
        name="service"
        required
        className={inputClass}
        style={{ ...inputStyle, backgroundColor: 'transparent' }}
        defaultValue=""
      >
        <option value="" disabled style={{ background: '#0a0a0a' }}>Service</option>
        <option value="Cinematography" style={{ background: '#0a0a0a' }}>Cinematography</option>
        <option value="Composition" style={{ background: '#0a0a0a' }}>Composition</option>
        <option value="Choreography" style={{ background: '#0a0a0a' }}>Choreography</option>
        <option value="Multiple Services" style={{ background: '#0a0a0a' }}>Multiple Services</option>
        <option value="Other" style={{ background: '#0a0a0a' }}>Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Message"
        required
        rows={4}
        className={`${inputClass} resize-none`}
        style={inputStyle}
      />

      <button
        type="submit"
        disabled={status === 'sending' || status === 'sent'}
        className="self-start text-[10px] tracking-[0.35em] uppercase transition-colors duration-300 hover:text-cream disabled:opacity-40"
        style={{ color: 'rgba(240,237,232,0.5)' }}
      >
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent' : 'Send Message'}
      </button>

      {status === 'sent' && (
        <p className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(240,237,232,0.4)' }}>
          Message received — I'll be in touch.
        </p>
      )}
      {status === 'error' && (
        <p className="text-[10px] tracking-[0.25em] uppercase text-red-400">{errorMsg}</p>
      )}
    </form>
  )
}
