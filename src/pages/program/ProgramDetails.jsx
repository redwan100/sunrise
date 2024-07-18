import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/shared/Container';
import { useSingleProgramQuery } from '../../redux/features/program/programApi';
import dateFormatter from '../../utils/dateFormatter';

const ProgramDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleProgramQuery(id);

  return (
    <>
      {!isLoading ? (
        <>
          <div className="pt-24 md:pt-10 pb-6 px-2">
            <Container>
              <div>
                <img
                  src={data?.image}
                  alt="program image"
                  className="max-w-full w-full object-cover md:max-h-[34rem] max-h-[20rem] h-full rounded-md "
                />
              </div>
              <div className="space-y-2 my-8">
                <h2 className="text-3xl font-semibold md:text-4xl text-center">{data?.title}</h2>
                <p className="text-gray-800 text-justify">{data?.description}</p>

                <p className="text-slate-600 pt-4 italic">{dateFormatter(data?.date)}</p>
              </div>
            </Container>
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default ProgramDetails;
