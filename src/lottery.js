import web3 from './web3';

// Here is a dummy address, but if you want to deploy your own contract 
// then you can deploy it with my manual script and add fetch that address from your terminal after running the deploy script.
const address = '0x7D97ACe091677935AD10D2045AB2D7524f5a493a';

//If you are changing functions then also change this contract, because it will be a different contract with different functionality.
const contract = require('./Lottery.json');

export default new web3.eth.Contract(contract.abi, address);