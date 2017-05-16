export default function parseCustomDateString(weirdDate) {
  let [date, time, offset, utc] = weirdDate.split(' ');
  let isoDate = `${date}T${time}+${offset[1] + '' + offset[2]}:${offset[3] + '' + offset[4]}`;
  return new Date(isoDate);
}