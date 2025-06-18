'use client'

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import emailjs from 'emailjs-com'

type FormData = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        'service_ue00wpc', // ✅ Your Service ID
        'template_44xd84h', // ⛳️ Replace this with your actual Template ID from EmailJS
        {
          name: data.name,           // Matches {{name}}
          email: data.email,         // Matches {{email}} (used as reply-to)
          message: data.message,     // Matches {{message}}
          title: 'New Inquiry',      // Matches {{title}}, customize if needed
          time: new Date().toLocaleString(), // Matches {{time}} in the template
        },
        'MmHPzHHwRZt5nou_c' // 🔐 Replace with your actual EmailJS Public Key
      )
  
      reset()
    } catch (error) {
      console.error('Email sending error:', error)
    }
  }

  return (
    <section className="bg-[#0e0e0e] text-white py-28 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Contact <span className="text-[#3B82F6]">Me</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-gray-400 max-w-xl mx-auto mb-10"
      >
        Got a project or just want to say hi? Shoot me a message below.
      </motion.p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your name"
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
          />
          {errors.name && (
            <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Your email"
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
          />
          {errors.email && (
            <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register('message', { required: 'Message is required' })}
            rows={5}
            placeholder="Your message..."
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
          />
          {errors.message && (
            <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>
          )}
        </div>

        <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring' }}>
          <Button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium py-3 rounded-md transition shadow-lg hover:shadow-[#3B82F6]/40"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </motion.div>

        {isSubmitSuccessful && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-sm text-center mt-4"
          >
            ✅ Message sent! I&rsquo;ll get back to you soon.
          </motion.p>
        )}
      </form>
    </section>
  )
}
