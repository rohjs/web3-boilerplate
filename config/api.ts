export const apiKeys = {
  infura: process.env.NEXT_PUBLIC_INFURA_API_KEY ?? '',
  nodeReal: process.env.NEXT_PUBLIC_NODE_REAL_API_KEY ?? '',
}

export const baseUrls = {
  imgix: process.env.NEXT_PUBLIC_IMGIX_HOSTNAME,
  server: process.env.BACKEND_API_HOSTNAME,
}
