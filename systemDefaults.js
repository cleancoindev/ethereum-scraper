// -----------------------
// System default settings
// -----------------------
module.exports = {

  // --------------------------------------------------------
  // The port to run the indexer API endpoints
  // --------------------------------------------------------
  port: 8080,

  // --------------------------------------------------------
  // The start and end block range to index
  // (endBlock:null = index indefinitely into the future)
  // --------------------------------------------------------
  startBlock: 9285500, // The genesis of Liquality
  endBlock: null,

  // --------------------------------------------------------
  // The write capacity for MongoDB batch updates
  // (blockSize * transactionSize = transactions per batch)
  // --------------------------------------------------------
  maxBlockBatchSize: 10,       // Number of blocks to handle per batch
  maxTransactionBatchSize: 15, // Number of transactions to handle per block

  // --------------------------------------------------------
  // The reorg depth threshold of the indexer
  // (indexer will stop indexing at this depth)
  // --------------------------------------------------------
  reorgGap: 10,

  // --------------------------------------------------------
  // The poll frequency of the Infura endpoint (in ms)
  // (for transaction confirmation requests)
  // NOTE: This is only relevant when using an HTTPS endpoint
  // --------------------------------------------------------
  blockTime: 15000 // millseconds

}
