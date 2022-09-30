require('@nomiclabs/hardhat-waffle')
require('dotenv').config({ path: '.env' })

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

module.exports = {
  solidity: {
    version: '0.8.4',
    defaultNetwork: "goerli",

    networks: {
      hardhat: {
        chainId: 1337
      },
      
      goerli: {
        url: process.env.GOERLI_URL,
        accounts: [process.env.METAMASK_WALLET_PRIVATE_KEY],
      },
    },

    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  }
}
