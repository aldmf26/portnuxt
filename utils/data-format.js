export function formatDate(dateTimeString) {
  const date = new Date(dateTimeString);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("id-ID", options);
  const time = date.toLocaleTimeString("id-ID", {
    hour: "numeric",
    minute: "numeric",
  });
  return `${formattedDate} ${time}`;
}
