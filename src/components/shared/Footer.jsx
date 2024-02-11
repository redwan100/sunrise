import { CiCalendarDate } from "react-icons/ci";
import gallery from "../../assets/gallery.jpg";
const Footer = () => {
  return (
    <div className="w-full bg-zinc-700 py-8 px-3">
      <div className="my-container grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        <div>
          <h1 className="text-white mb-1 text-2xl font-semibold capitalize">
            photo gallery
          </h1>
          <hr className="mb-6" />
          <div className="grid gap-5 grid-cols-3 mt-4">
            <img src={gallery} alt="gallery image" />
            <img src={gallery} alt="gallery image" />
            <img src={gallery} alt="gallery image" />
            <img src={gallery} alt="gallery image" />
            <img src={gallery} alt="gallery image" />
            <img src={gallery} alt="gallery image" />
          </div>
        </div>

        <div>
          <h1 className="text-white mb-1 text-2xl font-semibold capitalize">
            recent post
          </h1>
          <hr className="mb-6" />
          <div className="mt-4">
            <ul className="space-y-4 ">
              <li>
                <h3 className="text-gray-50 font-semibold mb-1">
                  Managers’ Workshop-2024 Held
                </h3>
                <p className="flex items-center gap-1 text-gray-200 text-sm">
                  <CiCalendarDate className="text-gray-100" /> january 10, 2024
                </p>
              </li>
              <li>
                <h3 className="text-gray-50 font-semibold mb-1">
                  Managers’ Workshop-2024 Held
                </h3>
                <p className="flex items-center gap-1 text-gray-200 text-sm">
                  <CiCalendarDate className="text-gray-100" /> january 10, 2024
                </p>
              </li>
              <li>
                <h3 className="text-gray-50 font-semibold mb-1">
                  Managers’ Workshop-2024 Held
                </h3>
                <p className="flex items-center gap-1 text-gray-200 text-sm">
                  <CiCalendarDate className="text-gray-100" /> january 10, 2024
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1 className="text-white mb-1 text-2xl font-semibold capitalize">
            contact us
          </h1>
          <hr className="mb-6" />
          <div className="mt-4">
            <ul className="space-y-4">
              <li>
                <p className="text-gray-50">
                  <span className="font-semibold">Head Office</span>:SSS Bhaban,
                  House-6/1, Block -A, Lalmatia, Mohammadpur, Dhaka-1207.Tel:
                  88-02-55008334-5
                </p>
              </li>
              <li>
                <p className="text-gray-50">
                  <span className="font-semibold">Head Office</span>:SSS Bhaban,
                  House-6/1, Block -A, Lalmatia, Mohammadpur, Dhaka-1207.Tel:
                  88-02-55008334-5
                </p>
              </li>
              <li>
                <p className="text-gray-50">
                  <span className="font-semibold">Head Office</span>:SSS Bhaban,
                  House-6/1, Block -A, Lalmatia, Mohammadpur, Dhaka-1207.Tel:
                  88-02-55008334-5
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
