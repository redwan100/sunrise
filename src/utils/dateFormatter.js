import { format } from 'date-fns';
const dateFormatter = (date) => {
  return format(new Date(date), 'dd-MMM-yyyy');
};

export default dateFormatter;
