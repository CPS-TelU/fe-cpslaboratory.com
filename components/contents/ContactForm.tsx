"use client";

import React, { useState } from 'react';
import { poppins } from '@/styles/font';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() !== '') {
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("You have to fill in the form first");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsModalOpen(true);
        setTimeout(() => {
          setSuccess(false);
          setIsModalOpen(false);
        }, 3000);
      } else {
        console.error('Failed to send email');
        setError('Failed to send your message. Please try again later.');
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
      setError('An error occurred. Please try again later.');
      setIsModalOpen(true);
    }
  };

  return (
    <div className={`my-12 px-4 ${poppins.className}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] bg-gradient-to-r from-[#BA2025] to-[#FFDCDC] bg-clip-text text-transparent font-extrabold text-center">
        We&apos;re all ears!
      </h1>
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[20px] text-[#575757] text-center mt-4">
        Share your ideas, critiques, and suggestions with us
      </h2>
      <div className="outline outline-1 outline-gray-500 outline-[rgba(0,0,0,0.1)] rounded-md p-6 sm:p-8 my-10 lg:my-20 mx-auto max-w-lg sm:max-w-xl md:max-w-2xl lg:w-[950px]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col lg:flex-row lg:space-x-6">
            <div className="flex-1 space-y-6">
              <div>
                <label className="text-gray-800 text-sm block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Juned"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-black-500"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="juned@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-black-500"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="08123456789"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md py-2.5 px-4 border text-sm outline-black-500"
                />
              </div>
            </div>
            <div className="flex-1 mt-6 lg:mt-0">
              <label className="text-gray-800 text-sm block mb-2">Tell Us Your Ideas and Critiques</label>
              <textarea
                name="message"
                placeholder="Tell Us Your Ideas and Critiques"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full h-[230px] rounded-md px-4 border text-sm pt-2.5 outline-black-500"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-[#BA2025] hover:bg-red-600 font-semibold rounded-md text-sm px-6 py-3 w-full"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Here'}
          </button>
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="p-4 text-center">
              <svg className="mx-auto mb-4 text-green-500 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l3 3L15 7"/>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-green-500">
                {success ? 'Thank you! Your message has been sent.' : error || 'Something went wrong.'}
              </h3>
              <button
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
