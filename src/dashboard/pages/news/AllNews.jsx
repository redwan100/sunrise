import { useGetAllNewsQuery } from '../../../redux/features/news/newsApi';

const AllNews = () => {
  const { data } = useGetAllNewsQuery();
  console.log(data);
  return <div>AllNews{data?.lengt}</div>;
};

export default AllNews;
