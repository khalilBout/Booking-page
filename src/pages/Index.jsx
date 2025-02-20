import { motion } from "framer-motion";
import sall from "../assets/sall.png";
import BgImg from "../assets/bg.svg";
import img1 from "../assets/m1.png";
import img2 from "../assets/m2.png";
import img3 from "../assets/m3.png";
import img4 from "../assets/m4.png";
import img5 from "../assets/m5.png";
import Icons from "../component/Icons/Icons";
import Form from "../component/Form/Form";

const images = [img1, img2, img3, img4, img5];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Index = () => {
  return (
    <div
      className="bg-darkGray text-white font-bodyAr"
      style={{ backgroundImage: `url(${BgImg})`, backgroundSize: "cover" }}
    >
      {/* Hero Section */}
      <section className="min-h-screen bg-hero-bg/40 bg-cover bg-center flex flex-col mdl:flex-row items-center">
        <motion.div
          className="m-12 mdl:m-8 mt-36 w-full mdl:w-1/2 h-1/2 mdl:h-full flex flex-col justify-center items-center max-mdl:absolute max-mdl:top-0 max-mdl:-left-12 z-20 "
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.h1
            className="mx-2 text-3xl sml:text-4xl md:text-5xl mdl:text-6xl font-titleAr text-primary mb-4"
            variants={fadeIn}
          >
            قاعة اللؤلؤة الفاخرة
          </motion.h1>
          <motion.h1
            className="text-xl md:text-2xl mdl:text-3xl font-titleAr text-yellow-500 my-2"
            variants={fadeIn}
          >
            حيث تلتقي الفخامة والراحة!
          </motion.h1>
          <motion.p className="text-lg max-w-2xl px-12" variants={fadeIn}>
            مرحبًا بك في قاعة اللؤلؤة الفاخرة، الوجهة المثالية لاستضافة مناسباتك
            المميزة.
          </motion.p>
          <motion.a
            href="#form"
            className="mt-6 px-6 py-3 bg-primaryDark text-white rounded-lg shadow-lg hover:bg-primary transition"
            whileHover={{ scale: 1.1 }}
          >
            احجز الآن
          </motion.a>
        </motion.div>

        <motion.div
          className="w-full mdl:w-1/2 max-mdl:absolute max-mdl:top-0 max-mdl:left-0 mdl:flex justify-center items-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <img
            src={sall}
            alt="صورة قاعة اللؤلؤة"
            className="h-[100vh] w-auto "
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 text-center container">
        <h2 className="text-3xl font-titleAr text-lightOrange mb-6">
          لماذا تختار قاعتنا؟
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "مساحة واسعة تستوعب حتى 300 شخص",
            "تصميم فاخر يجمع بين الحداثة والرقي",
            "أحدث أنظمة الإضاءة والصوت",
            "فريق دعم محترف لضمان سير الحدث بسلاسة",
            "موقع استراتيجي مع مواقف سيارات واسعة",
          ].map((feature, index) => (
            <motion.li
              key={index}
              className="relative h-[280px] p-6 bg-lightGray rounded-lg shadow-lg"
              style={{
                backgroundImage: `url(${images[index]})`,
                backgroundSize: "cover",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h1 className="absolute bottom-0 right-0 px-2 w-full text-xl bg-gray-400/60 text-primary font-semibold font-titleAr h-[60px]">
                {feature}
              </h1>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Booking Form */}
      <Form />
      {/* <section id="form" className="py-16 container">
        <h2 className="text-3xl font-titleAr text-lightOrange text-center mb-6">
          احجز قاعتك الآن
        </h2>
        <motion.form
          className="max-w-2xl mx-auto bg-lightGray p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[
            { placeholder: "الاسم واللقب", type: "text" },
            { placeholder: "طبيعة اللقاء", type: "text" },
            { placeholder: "الهيئة المنظمة", type: "text" },
            { placeholder: "الغرض من الحجز", type: "text" },
            { placeholder: "عدد الحضور المتوقع", type: "number" },
            { type: "datetime-local" },
          ].map((input, index) => (
            <motion.input
              key={index}
              type={input.type}
              placeholder={input.placeholder || ""}
              className="w-full p-3 mb-4 rounded bg-darkGray text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />
          ))}
          <button
            type="submit"
            className="w-full p-3 bg-primaryDark text-white rounded-lg hover:bg-primary transition"
          >
            إرسال الطلب
          </button>
        </motion.form>
      </section> */}

      {/* Footer */}
      <footer className="py-6 bg-primaryDark text-center">
        <div className="py-4 flex flex-col md:flex-row gap-4 justify-between items-center container mx-auto">
          <Icons />
          <p className="text-sm text-white text-center">
            © 2025 جميع الحقوق محفوظة – قاعة اللؤلؤة الفاخرة
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
