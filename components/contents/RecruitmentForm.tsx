import React from "react";

interface RecruitmentFormProps {
    onClose: () => void;
}

const RecruitmentForm: React.FC<RecruitmentFormProps> = ({ onClose }) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-[999999]"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md bg-white rounded-lg shadow-md lg:h-[95vh] flex flex-col animate-slide-in-right"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                    <h2 className="text-xl font-bold text-center">Apply Here</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        &#x2715;
                    </button>
                </div>

                {/* Scrollable Form */}
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    <form>
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Nama anda"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700">NIM</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="1010123XXXX"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700">E-Mail</label>
                            <input
                                type="email"
                                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="youremail@gmail.com"
                            />
                        </div>
                        <div className="mb-4 grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Faculty</label>
                                <select className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>Select an Option</option>
                                    {/* Tambahkan opsi lainnya */}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Year of Enrollment</label>
                                <select className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>Select an Option</option>
                                    {/* Tambahkan opsi lainnya */}
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700">Major</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="S1 - Teknik xxxxxx"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700">Perhatian !!</label>
                            <textarea
                                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-500 bg-gray-100"
                                rows={6}
                                readOnly
                                value={`Pastikan semua dokumen rekrutmen pada link yang dilampirkan sesuai dengan syarat dan ketentuan, seperti:\n- CV dalam format ATS-Friendly\n- Foto Formal 4x6\n- Portfolio (jika ada lebih baik)\n- KSM\n- KTM\n- Essay\n- Surat Commitment\n\nSemua dokumen dijadikan 1 link`}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-xs font-medium text-gray-700">Document</label>
                            <input
                                type="text"
                                className="w-full border rounded-md px-3 py-2 mt-1 text-xs focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Paste your Document Link Here"
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                            <label className="text-xs font-medium text-gray-700">
                                I am ready to start my CYBER Journey
                            </label>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t">
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecruitmentForm;
