const { Web3 } = require("web3");
const ABI = require("../ABI.json");
const web3 = new Web3(
  "https://lingering-solemn-seed.ethereum-goerli.discover.quiknode.pro/3ab6e26419420fae8ced25770e52a6fe4ac76be1/"
);
const contractAddress = "0x8518F7d8818C907A05fD8cf6c7e39745f657e597";
// on goerli 
const contract = new web3.eth.Contract(ABI, contractAddress);
// console.log(contract);
module.exports = { contract };

