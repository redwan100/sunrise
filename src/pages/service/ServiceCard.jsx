const ServiceCard = ({ service }) => {
  const { icon: Icon, name } = service;
  return (
    <div className="flex items-center gap-2 border border-dashed border-primary-1/40 p-3 rounded-sm shadow-sm hover:-translate-y-2 transition-transform  ">
      <Icon className="text-primary-1 text-4xl" />
      <p className="text-xl font-medium text-gray-800"> 45 {name}</p>
    </div>
  );
};

export default ServiceCard;
