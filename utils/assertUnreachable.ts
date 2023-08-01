import config from 'config'

export function assertUnreachable(value: any): never {
  if (config.env === 'development') {
    console.log('🚨 ASSERTION:', value)
  }

  throw new Error('Error: Unexpected value received: ', value)
}
