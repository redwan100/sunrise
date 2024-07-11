import { FaUsers } from 'react-icons/fa6';
import { ImUsers } from 'react-icons/im';
import { IoLocationSharp } from 'react-icons/io5';
import { MdHomeWork } from 'react-icons/md';
import ServiceCard from './ServiceCard';

import { motion } from 'framer-motion';
import SectionTitle from '../../components/shared/SectionTitle';

const services = [
  {
    id: 639,
    name: '45 DISTRICTS COVERED',
    icon: IoLocationSharp
  },
  {
    id: 39,
    name: '611 BRANCHES',
    icon: MdHomeWork
  },
  {
    id: 3659,
    name: '6716+ EMPLOYEE',
    icon: ImUsers
  },
  {
    id: 39865,
    name: '1,124,818 MEMBERS',
    icon: FaUsers
  }
];

const Service = () => {
  return (
    <div className="my-container py-8">
      <div className="p-4">
        <div>
          <SectionTitle title="Providing inclusive financial services" className="py-5" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              initial={{
                opacity: 0,
                translateY: index % 2 === 0 ? -50 : 50,
                translateX: index % 2 === 0 ? 50 : -50,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                translateY: 0,
                translateX: 0,
                scale: 1
              }}
              transition={{
                duration: 0.5,
                staggerChildren: 0.6
              }}
              viewport={{ once: false, amount: 0.5 }}
              key={service.id}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
