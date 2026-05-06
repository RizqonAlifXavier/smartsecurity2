const WA_NUMBER = '6281234567890' // Ganti dengan nomor WhatsApp Anda

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
    return `Halo Smart Security! 👋\n\nSaya tertarik dengan produk:\n📦 *${productName}*\n💰 ${productPrice}\n\nMohon info lebih lanjut. Terima kasih!`
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
