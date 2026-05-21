const WA_NUMBER = '6285899041795'

export function useWhatsApp() {
  const getWhatsAppLink = (message?: string): string => {
    const baseUrl = 'https://wa.me/'
    const encodedMessage = message ? encodeURIComponent(message) : ''
    return `${baseUrl}${WA_NUMBER}${encodedMessage ? `?text=${encodedMessage}` : ''}`
  }

  const openWhatsApp = (message?: string): void => {
    const link = getWhatsAppLink(message)
    window.open(link, '_blank')
  }

  const getProductMessage = (productName: string, productPrice: string): string => {
    return `Hello Smart Security! 👋\n\nI am interested in the product:\n📦 *${productName}*\n💰 ${productPrice}\n\nPlease provide more information. Thank you!`
  }

  const openProductWhatsApp = (productName: string, productPrice: string): void => {
    const message = getProductMessage(productName, productPrice)
    openWhatsApp(message)
  }

  return {
    WA_NUMBER,
    getWhatsAppLink,
    openWhatsApp,
    getProductMessage,
    openProductWhatsApp,
  }
}
