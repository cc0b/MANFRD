'use client'

import { useState, useRef } from 'react'
import { sendEmail } from '@/app/actions/sendEmail'

const labelClass = `block text-[9px] tracking-[0.35em] uppercase mb-2`
const inputClass = `w-full bg-transparent border-b py-2.5 text-[12px] tracking-[0.15em] outline-none transition-colors duration-300`

const labelStyle = { color: 'rgba(240,237,232,0.35)' }
const inputStyle = {
  borderColor: 'rgba(240,237,232,0.15)',
  color: 'rgba(240,237,232,0.85)',
}
const inputFocusClass = `focus:border-cream`

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
    <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-8">

      {/* Row 1: Name + Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelClass} style={labelStyle}>Name</label>
          <input
            name="name"
            type="text"
            required
            placeholder="—"
            className={`${inputClass} ${inputFocusClass}`}
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} style={labelStyle}>Email or Phone</label>
          <input
            name="contact"
            type="text"
            required
            placeholder="—"
            className={`${inputClass} ${inputFocusClass}`}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Row 2: Service */}
      <div>
        <label className={labelClass} style={labelStyle}>Service</label>
        <select
          name="service"
          required
          defaultValue=""
          className={`${inputClass} ${inputFocusClass}`}
          style={{ ...inputStyle, backgroundColor: 'transparent' }}
        >
          <option value="" disabled style={{ background: '#0a0a0a' }}>Select a service</option>
          <option value="Film" style={{ background: '#0a0a0a' }}>Film</option>
          <option value="Music" style={{ background: '#0a0a0a' }}>Music</option>
          <option value="Dance" style={{ background: '#0a0a0a' }}>Dance</option>
          <option value="Multiple Services" style={{ background: '#0a0a0a' }}>Multiple Services</option>
          <option value="Other" style={{ background: '#0a0a0a' }}>Other</option>
        </select>
      </div>

      {/* Row 3: Message */}
      <div>
        <label className={labelClass} style={labelStyle}>Message</label>
        <textarea
          name="message"
          required
          placeholder="—"
          rows={5}
          className={`${inputClass} ${inputFocusClass} resize-none`}
          style={inputStyle}
        />
      </div>

      {/* Submit row */}
      <div className="flex items-center justify-between pt-2">
        <span
          className="tracking-[0.25em] uppercase transition-all duration-300"
          style={{
            color: status === 'sent' ? 'rgba(240,237,232,0.7)' : 'rgba(240,237,232,0.2)',
            fontSize: status === 'sent' ? '13px' : status === 'error' ? '11px' : '9px',
          }}
        >
          {status === 'sent'
            ? "Message received — I'll be in touch."
            : status === 'error'
            ? errorMsg
            : 'All fields required'}
        </span>

        <button
          type="submit"
          disabled={status === 'sending' || status === 'sent'}
          className="border px-8 py-3 text-[10px] tracking-[0.35em] uppercase transition-colors duration-300 hover:border-cream hover:text-cream disabled:opacity-40"
          style={{ borderColor: 'rgba(240,237,232,0.25)', color: 'rgba(240,237,232,0.6)' }}
        >
          {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent' : 'Send'}
        </button>
      </div>

    </form>
  )
}
