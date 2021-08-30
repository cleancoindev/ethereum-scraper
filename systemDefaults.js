// -----------------------
// System default settings
// -----------------------
module.exports = {

  // -------------------------------------------------------
  // The port to run the indexer API endpoints
  // -------------------------------------------------------
  port: 8080,

  // -------------------------------------------------------
  // The start and end block range to index
  // (endBlock:null = index indefinitely into the future)
  // -------------------------------------------------------
  startBlock: 9285500,
  endBlock: null,

  // -------------------------------------------------------
  // The write capacity for MongoDB batch updates
  // (blockSize * transactionSize = transactions per batch)
  // -------------------------------------------------------
  maxBlockBatchSize: 10,
  maxTransactionBatchSize: 15,

  // -------------------------------------------------------
  // The reorg depth threshold of the indexer
  // (indexer will stop indexing at this depth)
  // -------------------------------------------------------
  reorgGap: 10,

  // -------------------------------------------------------
  // The poll frequency of the Infura endpoint (in seconds)
  // (for transaction confirmation requests)
  // -------------------------------------------------------
  blockTime: 15

}
