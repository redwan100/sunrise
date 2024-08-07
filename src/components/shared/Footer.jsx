import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import footerImg from '../../assets/footerSvg.svg';
import gallery from '../../assets/gallery.jpg';

const Footer = () => {
  return (
    <div className="relative  pt-16 bg-[#142A31] mt-56">
      <img
        src={footerImg}
        alt=""
        className="w-full object-cover absolute top-0 left-0 xl:-translate-y-56 z-10 -translate-y-20 md:-translate-y-36"
      />
      <div className="w-full  mt-6 px-3  pt-4 z-30 pb-10">
        <div className="my-container grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <h1 className="text-white mb-1 text-2xl font-semibold capitalize">photo gallery</h1>
            <hr className="mb-6" />
            <div className="grid gap-5 grid-cols-3 mt-4">
              <div className="overflow-hidden rounded-sm grid-cols-2">
                <img src={gallery} alt="gallery image" className="hover:scale-105 transition" />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img src={gallery} alt="gallery image" className="hover:scale-105 transition" />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img src={gallery} alt="gallery image" className="hover:scale-105 transition" />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img src={gallery} alt="gallery image" className="hover:scale-105 transition" />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img src={gallery} alt="gallery image" className="hover:scale-105 transition" />
              </div>
              <div className="overflow-hidden rounded-sm">
                <img src={gallery} alt="gallery image" className="hover:scale-105 transition" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-white mb-1 text-2xl font-semibold capitalize">recent post</h1>
            <hr className="mb-6" />
            <div className="mt-4">
              <ul className="space-y-4 ">
                <li>
                  <h3 className="text-gray-50 font-semibold mb-1">Managers’ Workshop-2024 Held</h3>
                  <p className="flex items-center gap-1 text-gray-200 text-sm">
                    <CiCalendarDate className="text-gray-100" /> january 10, 2024
                  </p>
                </li>
                <li>
                  <h3 className="text-gray-50 font-semibold mb-1">Managers’ Workshop-2024 Held</h3>
                  <p className="flex items-center gap-1 text-gray-200 text-sm">
                    <CiCalendarDate className="text-gray-100" /> january 10, 2024
                  </p>
                </li>
                <li>
                  <h3 className="text-gray-50 font-semibold mb-1">Managers’ Workshop-2024 Held</h3>
                  <p className="flex items-center gap-1 text-gray-200 text-sm">
                    <CiCalendarDate className="text-gray-100" /> january 10, 2024
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-white mb-1 text-2xl font-semibold capitalize">contact us</h1>
            <hr className="mb-6" />
            <div className="mt-4">
              <ul className="space-y-4">
                <li>
                  <p className="text-gray-50">
                    <span className="font-semibold">Head Office</span>:SSS Bhaban, House-6/1, Block
                    -A, Lalmatia, Mohammadpur, Dhaka-1207.Tel: 88-02-55008334-5
                  </p>
                </li>
                <li>
                  <p className="text-gray-50">
                    <span className="font-semibold">Head Office</span>:SSS Bhaban, House-6/1, Block
                    -A, Lalmatia, Mohammadpur, Dhaka-1207.Tel: 88-02-55008334-5
                  </p>
                </li>
                <li>
                  <p className="text-gray-50">
                    <span className="font-semibold">Head Office</span>:SSS Bhaban, House-6/1, Block
                    -A, Lalmatia, Mohammadpur, Dhaka-1207.Tel: 88-02-55008334-5
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-900 py-4">
        <div className=" flex items-center justify-between my-container">
          <p className="text-gray-50">© 2024 Society for Social Service All rights reserved</p>

          <div className="flex items-center gap-3 text-gray-50 text-lg">
            <a
              href="*"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#316FF6] transition">
              <FaFacebook />
            </a>
            <a
              href="*"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition">
              <FaInstagramSquare />
            </a>
            <a
              href="*"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1DA1F2] transition">
              <FaXTwitter />
            </a>
            <a
              href="*"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077B5] transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
