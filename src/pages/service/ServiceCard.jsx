const ServiceCard = ({ service }) => {
  const { icon: Icon, name } = service;
  return (
    <div className="flex items-center gap-2 border border-dashed border-primary-1/60 p-3 rounded-sm shadow-sm ">
      <Icon className="text-primary-1 text-4xl" />
      <p className="text-lg font-medium text-gray-800"> {name}</p>
    </div>
  );
};

export default ServiceCard;
