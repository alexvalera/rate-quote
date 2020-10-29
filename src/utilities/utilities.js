export const formatNumber = (num) => `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const sanitizeNumber = (num) => {
  return num.replace(/[$,]/g, '')
}