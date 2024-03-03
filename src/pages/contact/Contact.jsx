import { motion } from "framer-motion";
import { FaRegUser } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import SectionTitle from "../../components/shared/SectionTitle";
const Contact = () => {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        opacity: {
          ease: "linear",
        },
      }}
      className="w-full bg-white py-6"
    >
      <div className="">
        <div className="my-container">
          <div className="mb-8">
            <SectionTitle title="contact information" isCenter />
          </div>
          <div className="grid gap-10 md:gap-6 md:grid-cols-[1fr_2fr]">
            <div className="space-y-3 p-4 rounded-md bg-gradient-to-tr from-pink-100 to-violet-100">
              <p>
                <span className="text-gray-700 text-lg font-semibold ">
                  Address:
                </span>
                <span className="text-gray-600 ml-1">
                  Banani, Dhhaka Bangladesh
                </span>
              </p>
              <p>
                <span className="text-gray-700 text-lg font-semibold ">
                  E-mail:
                </span>
                <span className="text-gray-600 ml-1">example@email.com</span>
              </p>
              <p>
                <span className="text-gray-700 text-lg font-semibold ">
                  Call:
                </span>
                <span className="text-gray-600 ml-1">0123456789</span>
              </p>
            </div>

            {/* contact */}
            <div className=" space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full h-10 border border-green-300 rounded-md focus:border-green-500 focus:outline-none px-2 focus:border-2"
                  placeholder="Your name"
                />
                <FaRegUser className="absolute top-3 right-3 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full h-10 border border-green-300 rounded-md focus:border-green-500 focus:outline-none px-2 focus:border-2"
                  placeholder="Your email"
                />
                <MdOutlineEmail className="absolute top-3 right-3 text-gray-400" />
              </div>

              <div>
                <textarea
                  name=""
                  rows="8"
                  placeholder="Your Message"
                  className="w-full border border-green-300 rounded-md focus:border-green-500 focus:outline-none px-2 focus:border-2 py-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary-1 hover:bg-primary-1/90 transition py-2 px-3 rounded-md text-white sm:w-max w-full uppercase font-medium tracking-wider  focus:ring-2 focus:ring-offset-2 ring-primary-1 flex items-center gap-2 justify-center"
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
