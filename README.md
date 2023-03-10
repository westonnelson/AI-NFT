# Alchemy AI NFT Minter Replit Template

Welcome to the Alchemy AI NFT Minter Replit Template! This is a template built in Next.js that enables developers to create their own NFT minting platform powered by artificial intelligence.


# Features

* Create your own NFT minting platform with AI technology.
  
* Easy to use web interface for users to mint their own NFTs.
  
* Integration with popular blockchain networks like Ethereum.


# Set up walkthrough: 

1. Configure your Repl
  - If prompted, choose to “Use run command” (default run command is `npm run start`)
2. Add your environment variables
  - Go to the 'Secrets' tab on the Tools section of the Repl. You will need to add the following secrets to the Repl: 
  - OPENAI_API_KEY 
  - PINATA_KEY - 
  - PINATA_SECRET
  - PINATA_JWT
  - For OpenAI, visit https://platform.openai.com/account/api-keys
  - For Pinata, visit https://app.pinata.cloud/developers/api-keys, Once you create/login to your Pinata account, create a new key by clicking 'API Keys' and clicking New Key, check Admin access to allow for storage pinning, name your key, and then click Create Key. Then copy each value to the Repl Secrets with the appropriate names above.
3. Run the Repl
  - Once your Environment variables are set, you can start/restart the Repl!

# For development/testing, use Sepolia testnet
  Alchemy provides a Sepolia faucet here: https://sepoliafaucet.com
  Make sure your metamask wallet is set to use the Sepolia testnet

# Visit Alchemy's API Documentation for some more great info on Web3 development:

https://docs.alchemy.com/docs/nft-minter


# Environment variables / API Keys

## You will need to set the following environment variables/secrets to include the appropriate API Keys.

* OpenAI: OPENAI_API_KEY https://platform.openai.com/account/api-keys
* IPFS: PINATA_KEY, PINATA_SECRET, PINATA_JWT https://app.pinata.cloud/developers/api-keys
