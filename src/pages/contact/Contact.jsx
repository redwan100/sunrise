import { motion } from 'framer-motion';
import { FaRegUser } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import SectionTitle from '../../components/shared/SectionTitle';
const Contact = () => {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 1,
        opacity: {
          ease: 'linear'
        }
      }}
      className="w-full bg-white py-6"
    >
      <div className="">
        <div className="my-container">
          <div className="mb-8">
            <SectionTitle title="contact information" className="text-center" />
          </div>
          <div className="grid gap-10 md:gap-6 md:grid-cols-[1fr_2fr]">
            <div className="space-y-3 p-4 rounded-md bg-gradient-to-tr from-pink-100 to-violet-100">
              <p>
                <span className="text-gray-700 text-lg font-semibold ">Address:</span>
                <span className="text-gray-600 ml-1">Banani, Dhhaka Bangladesh</span>
              </p>
              <p>
                <span className="text-gray-700 text-lg font-semibold ">E-mail:</span>
                <span className="text-gray-600 ml-1">example@email.com</span>
              </p>
              <p>
                <span className="text-gray-700 text-lg font-semibold ">Call:</span>
                <span className="text-gray-600 ml-1">0123456789</span>
              </p>
            </div>

            {/* contact */}
            <div className=" space-y-4 bg-gray-200 p-4 rounded-md">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full h-10 rounded-md  px-2 bg-slate-500 placeholder:text-gray-200 text-gray-100 pl-8  focus:outline-offset-2 outline-slate-600"
                  placeholder="Name"
                />
                <FaRegUser className="absolute top-3 left-3 text-gray-100" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full h-10 rounded-md  px-2 bg-slate-500 placeholder:text-gray-200 text-gray-100 pl-8  focus:outline-offset-2 outline-slate-600 "
                  placeholder="Email"
                />
                <MdOutlineEmail className="absolute top-3 left-3 text-gray-200" />
              </div>

              <div>
                <textarea
                  name=""
                  rows="8"
                  placeholder="Your Message"
                  className="w-full rounded-md px-2  py-2 bg-slate-500 text-gray-100 placeholder:text-gray-100 focus:outline-offset-2 outline-slate-600 "
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-slate-500 hover:bg-slate-500 transition py-2 px-3 rounded-md text-white sm:w-max w-full uppercase font-medium tracking-wider  focus:ring-2 focus:ring-offset-2 ring-slate-900 flex items-center gap-2 justify-center"
              >
                send message <IoIosSend className="text-2xl" />
              </button>
            </div>
          </div>

          <div className="w-full h-[35rem] rounded-md overflow-hidden my-8">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29249.418700485472!2d89.82938024945821!3d23.597972151275506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1687929852557!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
