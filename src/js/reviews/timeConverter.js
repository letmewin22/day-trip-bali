const timeConverter = (UNIX_timestamp) => {
  const a = new Date(UNIX_timestamp * 1000),
    months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    year = a.getFullYear(),
    month = months[a.getMonth()],
    date = a.getDate(),
    hour = a.getHours(),
    min = a.getMinutes(),
    sec = a.getSeconds(),
    time = `${date}.${month}.${year}`
  return time
}

export default timeConverter
