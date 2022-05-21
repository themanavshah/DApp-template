const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const lotteryCompiled = require('../build/Lottery.json');

let accounts;
let lottery;

beforeEach( async () => {
    accounts = await web3.eth.getAccounts();

    //console.log(interface);
    lottery = await new web3.eth.Contract(lotteryCompiled.abi)
        .deploy({ data: lotteryCompiled.evm.bytecode.object})
        .send({from: accounts[0], gas: '1000000'})

});

describe('Lottery contract', () => {
    it('deploys a contract', () => {
        assert.ok(lottery.options.address);
    });

    it('allows one account to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.011', 'ether'),
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0],
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(1, players.length);
    });

    it('allows multiple account to enter', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.011', 'ether'),
        });

        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.011', 'ether'),
        });

        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.011', 'ether'),
        });

        const players = await lottery.methods.getPlayers().call({
            from: accounts[0],
        });

        assert.equal(accounts[0], players[0]);
        assert.equal(accounts[1], players[1]);
        assert.equal(accounts[2], players[2]);
        assert.equal(3, players.length);
    });


    it('requires a minimum amount of ether to enter', async () => {
        try {
            await lottery.methods.enter().send({
                from: accounts[0],
                value: 200,
            });
            //console.log('reached here!')
            assert(false);
        } catch (err) {
            //console.log('now here!')
            assert(err);
        }
    });

    it('only manager can call pickWinner() function', async () => {
        try {
            await lottery.methods.pickWinner().send({
                from: accounts[1]
            })
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it("sends money to the winner and resets the players array", async () => {
        await lottery.methods.enter().send({
          from: accounts[0],
          value: web3.utils.toWei("2", "ether"),
        });
    
        const initialBalance = await web3.eth.getBalance(accounts[0]);
        await lottery.methods.pickWinner().send({ from: accounts[0] });
        const finalBalance = await web3.eth.getBalance(accounts[0]);
        const difference = finalBalance - initialBalance;
    
        assert(difference > web3.utils.toWei("1.8", "ether"));
      });
});



