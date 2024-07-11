import { useGetAllNewsQuery } from '../../../redux/features/news/newsApi';

const AllNews = () => {
  const { data } = useGetAllNewsQuery({});
  console.log(data);
  return <div>AllNews</div>;
};

export default AllNews;
