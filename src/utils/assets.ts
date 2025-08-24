// Função utilitária para resolver caminhos de assets
export const getAssetUrl = (path: string): string => {
  // Em desenvolvimento, use caminho absoluto simples
  // Em produção, use o BASE_URL configurado
  if (import.meta.env.DEV) {
    return `/${path}`
  }
  
  const basePath = import.meta.env.BASE_URL || '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${basePath}${cleanPath}`
}

export const getPetUrl = (petName: string): string => {
  return getAssetUrl(`pet/${petName}`)
}

export const getBackgroundUrl = (backgroundName: string): string => {
  return getAssetUrl(`background/${backgroundName}`)
}
