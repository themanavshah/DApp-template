// If you don't want to deploy a contract or you don't secret key phase, 
// then you can use this contract which is already deployed by me at this address:
// contract address: 0x7D97ACe091677935AD10D2045AB2D7524f5a493a

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const lotteryCompiled = require('./build/Lottery.json');

//If you want to deploy it then replace this SECRET_KEY_PHASE and INFURA_API_KEY
const SECRET_KEY_PHASE = "";
const INFURA_API_KEY = "";

const provider = new HDWalletProvider(
    SECRET_KEY_PHASE,
    `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0])

    const response = await new web3.eth.Contract(lotteryCompiled.abi)
                            .deploy({ data: lotteryCompiled.evm.bytecode.object})
                            .send({from: accounts[0], gas: '1000000'});


    console.log('Contract deployed at: ', response.options.address);
    provider.engine.stop();
};

deploy();
