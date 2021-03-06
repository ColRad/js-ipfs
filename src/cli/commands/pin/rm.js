'use strict'

const multibase = require('multibase')
const { print } = require('../../utils')
const { cidToString } = require('../../../utils/cid')

module.exports = {
  command: 'rm <ipfsPath...>',

  describe: 'Removes the pinned object from local storage.',

  builder: {
    recursive: {
      type: 'boolean',
      alias: 'r',
      default: true,
      describe: 'Recursively unpin the objects linked to by the specified object(s).'
    },
    'cid-base': {
      describe: 'Number base to display CIDs in.',
      type: 'string',
      choices: multibase.names
    }
  },

  handler: ({ ipfs, ipfsPath, recursive, cidBase, resolve }) => {
    resolve((async () => {
      const results = await ipfs.pin.rm(ipfsPath, { recursive })
      results.forEach((res) => {
        print(`unpinned ${cidToString(res.hash, { base: cidBase })}`)
      })
    })())
  }
}
