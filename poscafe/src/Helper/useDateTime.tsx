import { useEffect, useState } from "react";

const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const dayname = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getCurrentDateTime() {
  const datenow = new Date();
  const minutes = String(datenow.getMinutes()).padStart(2, "0");

  return {
    date: `${datenow.getDate()} ${month[datenow.getMonth()]} ${datenow.getFullYear()}`,
    day: dayname[datenow.getDay()],
    time: `${datenow.getHours() % 12 || 12}:${minutes} ${datenow.getHours() >= 12 ? "PM" : "AM"}`,
  };
}

export default function useDateTime() {
  const [date, setDate] = useState(getCurrentDateTime);

  useEffect(() => {
    const interval = setInterval(() => setDate(getCurrentDateTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return date;
}
