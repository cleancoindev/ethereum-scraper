#! /bin/sh

echo "--------------------------------"
echo "ENV_ALIAS: ${ENV_ALIAS}"
echo "--------------------------------"
echo ""

echo "Starting the Ethereum indexer service..."

# npm run start
npm run api-test
