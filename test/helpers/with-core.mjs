import Unichain from '@web4/unichain'
import RAM from 'random-access-memory'

export async function withChain (options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = {}
  }

  const chain = new Unichain(RAM, options)
  await chain.ready()

  try {
    await cb(chain)
  } finally {
    await chain.close()
  }
}
