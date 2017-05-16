import moment from 'moment';
import parseCustomDateString from './parseCustomDateString';

export default function formatCustomDateString(weirdDate) {
  let result = weirdDate;
  if (typeof weirdDate === 'string') {
    result = parseCustomDateString(weirdDate);
  }

  return moment(result).format('h:mm A');
}