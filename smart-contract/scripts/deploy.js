const hre = require('hardhat')
const fs = require('fs')

async function main() {
  const amazonCoinFactory = await hre.ethers.getContractFactory('AmazonCoin')
  const amazonCoin = await amazonCoinFactory.deploy()

  await amazonCoin.deployed()

  console.log('Amazon Coin deployed to:', amazonCoin.address)

  let config = `
  export const amazoncoinaddress = "${amazonCoin.address}" 
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))
  
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
