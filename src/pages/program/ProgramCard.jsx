import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
  const { title, img } = program;

  return (
    <div className="cShadow rounded-md overflow-hidden group bg-white">
      <div className="overflow-hidden">
        <img
          src={img}
          alt="program image"
          className="max-w-full group-hover:scale-110 transition"
        />
      </div>
      <div className="my-3 px-3 w-full ">
        <h1 className="text-xl text-gray-700 font-semibold mb-1">{title}</h1>

        <Link
          to={'/'}
          className="transition hover:text-primary-1 inline-flex items-center font-semibold text-sm bg-primary-1/10 py-2 px-4  rounded-sm text-primary-1 hover:bg-primary-1/20 ml-auto "
        >
          Read More <IoIosArrowRoundForward className="text-xl " />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
