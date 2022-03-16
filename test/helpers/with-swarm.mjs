import Bitswarm from '@web4/bitswarm'

export async function withSwarm (dht, cb) {
  const swarm = new Bitswarm({ dht })

  try {
    await cb(swarm)
  } finally {
    await swarm.destroy()
  }
}
