import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let error = {};
    if (!formData.name) error.name = "Name is required";
    if (!formData.email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = "Email is invalid!";
    }
    if (!formData.message) error.message = "Message is required";
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return; // Stop submission if there are errors
    }
    setIsSending(true);

    emailjs.send(
      "service_8dnnm0j",
      "template_7cmeoen",
      formData,
      "AiYaA6dVvCR3gqxTV"
    ).then((response) => {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setError({});
    }).catch((error) => {
      console.log("Failed...", error);
      toast.error("Failed to send message. Please try again later.");
    }).finally(() => {
      setIsSending(false);
    });
  };

  return (
    <div className='p-4 lg:w-3/4' id='contact'>
      <Toaster />
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>
        Let's Connect
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='mb-4 flex space-x-4'>
          <motion.div
            className='lg:w-1/2'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input 
              type="text"
              id='name'
              name='name'
              value={formData.name}
              placeholder='Name'
              onChange={handleChange}
              className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm
                focus:border-stone-400 focus:outline-none'
            />
            {error.name && (
              <motion.p
                className='text-sm text-rose-800'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error.name}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            className='lg:w-1/2'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input 
              type="email"
              id='email'
              name='email'
              value={formData.email}
              placeholder='Email'
              onChange={handleChange}
              className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm
                focus:border-stone-400 focus:outline-none'
            />
            {error.email && (
              <motion.p
                className='text-sm text-rose-800'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {error.email}
              </motion.p>
            )}
          </motion.div>
        </div>

        <motion.div
          className='mb-4'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <textarea 
            id='message'
            name='message'
            value={formData.message}
            placeholder='Message'
            onChange={handleChange}
            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm
              focus:border-stone-400 focus:outline-none'
          />
          {error.message && (
            <motion.p
              className='text-sm text-rose-800'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error.message}
            </motion.p>
          )}
        </motion.div>

        <button 
          type='submit'
          className={`w-full mb-8 rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSending}
        >
          <div className='flex items-center justify-center gap-2'>
            {isSending ? "Sending..." : "Send Message"}
            <FiSend />
          </div>
        </button>
      </motion.form>
    </div>
  );
}

export default ContactForm;
