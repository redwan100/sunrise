const MomentOfSunriseCard = ({ moment }) => {
  const { title, date, img } = moment;

  return (
    <div className="cShadow rounded-md w-full overflow-hidden hoverEffect group transition duration-300">
      <div className="overflow-hidden">
        <img src={img} alt="moment image" className="max-w-full group-hover:scale-105 transition" />
      </div>
      <div className="space-y-3 py-3 px-2">
        <h2 className="text-2xl font-medium text-center text-gray-800 md:text-xl">{title}</h2>
        <p className="text-gray-600 text-xl text-center">{date}</p>
      </div>
    </div>
  );
};

export default MomentOfSunriseCard;
