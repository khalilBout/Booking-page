import { motion } from "framer-motion";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    meetingType: "",
    organization: "",
    purpose: "",
    attendees: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("تم إرسال الحجز بنجاح!");
        setFormData({
          name: "",
          meetingType: "",
          organization: "",
          purpose: "",
          attendees: "",
          date: "",
        });
      } else {
        throw new Error("فشل في إرسال الطلب. حاول مرة أخرى.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <motion.section
      className=" p-12 text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">احجز قاعة الاجتماعات</h2>
      <p className="text-lg mb-6">قم بحجز قاعتك بكل سهولة وسرعة.</p>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-lightGray p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded bg-transparent outline-none"
        />
        <input
          type="text"
          name="meetingType"
          placeholder="نوع الاجتماع"
          value={formData.meetingType}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded bg-transparent outline-none"
        />
        <input
          type="text"
          name="organization"
          placeholder="المؤسسة"
          value={formData.organization}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded bg-transparent outline-none"
        />
        <textarea
          name="purpose"
          placeholder="الغرض من الاجتماع"
          value={formData.purpose}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded bg-transparent outline-none"
        ></textarea>
        <input
          type="number"
          name="attendees"
          placeholder="عدد الحضور"
          value={formData.attendees}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded bg-transparent outline-none"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded bg-transparent outline-none"
        />
        <motion.button
          type="submit"
          className="bg-secondary text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-secondaryDark transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          احجز الآن
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
