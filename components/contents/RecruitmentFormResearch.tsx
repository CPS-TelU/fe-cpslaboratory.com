"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

interface RecruitmentFormProps {
  onClose: () => void;
}

const RecruitmentFormResearch: React.FC<RecruitmentFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    nim: "",
    phone: "",
    email: "",
    faculty: "",
    year: "",
    major: "",
    className: "",
    gender: "", // Tambahkan gender
    documentLink: "",
    agreement: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setFormData({
        ...formData,
        [target.name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [target.name]: target.value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      toast.error("Please agree to start your journey.");
      return;
    }

    try {
      const response = await fetch("https://be-cyberrecruitment2024.vercel.app/register/research", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          nim: formData.nim,
          noHp: formData.phone,
          email: formData.email,
          faculty: formData.faculty,
          year: formData.year,
          major: formData.major,
          className: formData.className,
          gender: formData.gender, 
          document: formData.documentLink,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(`Success! Your application has been submitted.`);
        setTimeout(() => {
            onClose();
          }, 2000);
      } else {
        toast.error(`Submission failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-[999999]"
      onClick={(e) => e.stopPropagation()} 
    >
      <Toaster position="top-right" reverseOrder={false} />
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-md lg:h-[95vh] flex flex-col animate-slide-in-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-center">Join Our Research Team</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &#x2715;
          </button>
        </div>

        {/* Scrollable Form */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Nama anda"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">NIM</label>
              <input
                type="text"
                name="nim"
                value={formData.nim}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="1010123XXXX"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">Handphone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="08123456"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">E-Mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700">Faculty</label>
                <input
                  type="text"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Fakultas Teknik Elektro"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">Year of Enrollment</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="2024"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">Major</label>
              <input
                type="text"
                name="major"
                value={formData.major}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="S1 - Teknik Telekomunikasi"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">Class</label>
              <input
                type="text"
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="TI-A"
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">
                Perhatian !!
              </label>
              <textarea
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500 bg-gray-100"
                readOnly
                value={`Pastikan semua dokumen rekrutmen yang diunggah sesuai dengan syarat dan ketentuan yang telah ditentukan. Berikut adalah dokumen yang perlu disiapkan:\n\n- CV dalam format ATS-Friendly\n- Foto Formal 4x6 \n- Portfolio (opsional)\n- KHS sebagai bukti pencapaian akademik\n- Essay sesuai dengan pilihan topik Anda\n- Surat Commitment yang menegaskan komitmen Anda\n\nGabungkan semua dokumen ke dalam satu tautan publik agar lebih mudah diakses oleh tim penilai .Terima kasih!`}

                style={{
                  height: "230px", // Set tinggi tetap untuk menampung semua konten
                  overflow: "hidden", // Hilangkan scroll
                  resize: "none", // Nonaktifkan kemampuan untuk resize
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700">Document</label>
              <input
                type="text"
                name="documentLink"
                value={formData.documentLink}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Paste your Document Link Here"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="mr-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <label className="text-xs font-medium text-gray-700">I am ready to start my Journey</label>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentFormResearch;
