import { FaUsers } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
const Service = () => {
  return (
    <div className="my-container py-8">
      <div className="p-4">
        <div>
          <h1
            className="text-center text-4xl sm:text-3xl md:text-4xl
         font-medium text-primary-1 mb-7"
          >
            Providing inclusive financial services
          </h1>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-primary-1 text-4xl" />
            <p className="text-xl font-medium text-gray-800">
              {" "}
              45 DISTRICTS COVERED
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdHomeWork className="text-primary-1 text-4xl" />
            <p className="text-xl font-medium text-gray-800"> 611 BRANCHES</p>
          </div>
          <div className="flex items-center gap-2">
            <ImUsers className="text-primary-1 text-4xl" />
            <p className="text-xl font-medium text-gray-800"> 6716+ EMPLOYEE</p>
          </div>
          <div className="flex items-center gap-2">
            <FaUsers className="text-primary-1 text-4xl" />
            <p className="text-xl font-medium text-gray-800">
              {" "}
              1,124,818 MEMBERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
