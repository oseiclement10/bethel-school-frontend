export const formatMoney = (amount: number | string, hideGh?: boolean, noSign: boolean = false) => {
  const amountParsed = (amount || 0).toString().replace(",", "");
  const amountFormated = new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
  }).format(Number(amountParsed));
  return amountFormated.replace("GH₵", noSign ? "" : hideGh ? "₵" : "GHS ");
};

export const formatMoneyAlt = (amount: number) => {
  return `GHS ${formatMoney(amount, true, true)}`;
}


