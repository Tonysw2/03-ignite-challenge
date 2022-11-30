export const dateFormatter = new Intl.DateTimeFormat('pt-br', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

export const priceFormatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})
