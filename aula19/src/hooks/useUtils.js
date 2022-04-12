export function formatMoney(value) {
  if (value) {
    return new Intl.NumberFormat("pt", {
      style: "currency",
      currency: "BRL",
    }).format(Number(value));
  }
  return "Saldo indisponível";
}

export function formatDate(dateUTC) {
  if (dateUTC) {
    return new Intl.DateTimeFormat("pt", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
    }).format(new Date(dateUTC));
  }
  return "Data não informada";
}
