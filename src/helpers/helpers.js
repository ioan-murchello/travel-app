export function multiplyDates(date) {
  const today = new Date();
  const incoming = new Date(date);
  let time = "";
  // Reset time for both dates to 00:00:00 to compare only by date
  today.setHours(0, 0, 0, 0);
  incoming.setHours(0, 0, 0, 0);

  if (incoming.getTime() >= today.getTime()) {
    time = "future";
  } else if (incoming.getTime() < today.getTime()) {
    time = "past";
  }

  return time;
}

export const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export const convertToEmoji = (countryCode) => {
  return countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt())
    .reduce((emoji, code) => emoji + String.fromCodePoint(code), "");
};

export const setDateToLocalStorage = (data) => {
  localStorage.setItem("cities", JSON.stringify(data));
};

export const getDataFromLoacleStorage = () => {
  const data = localStorage.getItem("cities");
  return data ? JSON.parse(data) : [];
};
