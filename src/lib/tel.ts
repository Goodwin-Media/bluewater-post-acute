export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, '').slice(-10)}`
