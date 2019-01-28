'use strict'

module.exports = [
  require('./version'),
  require('./shutdown'),
  require('./id'),
  ...require('./bootstrap'),
  ...require('./block'),
  ...require('./object'),
  ...require('./pin'),
  ...require('./repo'),
  ...require('./config'),
  require('./ping'),
  ...require('./swarm'),
  ...require('./bitswap'),
  require('./file'),
  ...require('./files-regular'),
  ...require('ipfs-mfs/http'),
  ...require('./pubsub'),
  require('./debug'),
  ...require('./webui'),
  require('./dns'),
  ...require('./key')
  // require('./stats')(server)
  // require('./resolve')(server)
  // require('./name')(server)
]
