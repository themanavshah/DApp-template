
# DApp template

This is an example for creating a basic decentralsied application on web which can be used as a template. Here is that instagram post:
<a href="https://www.instagram.com/p/Cd0bpD3j1oQ/?igshid=YmMyMTA2M2Y=">
         How to create a web3 website?
</a>


## Tech-stack

[![Ethereum](https://img.shields.io/static/v1?label=Blockchain&message=Ethereum&color=blue)](https://ethereum.org/en/)
[![Ethereum](https://img.shields.io/static/v1?label=language&message=Solidity&color=inactive)](https://docs.soliditylang.org/en/v0.8.14/) 
[![React](https://img.shields.io/static/v1?label=frontend&message=React&color=9cf)](https://reactjs.org/)

## Brief overview

Frontend is not that attractive it is just an effort to create a decentralised backend. Just for learning and demonstration purposes

[![Image](https://i.ibb.co/d0z9Q44/Screenshot-2022-05-21-at-1-55-16-PM.png)](https://github.com/themanavshah/DApp-template)


## Accroding to instagram post
- **contracts/** is the smart contract(s) written
- **compile.js** will compile your contract(s) manually and the resulting JSON will be saved in build/.
- **test/lottery.test.js** is the tests for the smart contract(s).
- **deploy.js** is the file for manually deploying contracts, it will log the contract address, which will be your contract address deployed on rinkeby test-net.
- **src** it is react stuff which is pretty understanble on how to create an react app.

## How to use it?

You have to npm installed on your system and the browser you are using should have an metamask extension.


```bash
git clone git@github.com:themanavshah/DApp-template.git
```

```bash
cd DApp-template
```

```bash
npm install
```
You have to add **Infura API key in src/web3.js** before you run npm start.

If you want to re-deploy contracts then add your infura API key and secret key phase in deploy.js. After deploying change the contract address and json file in src/lottery.json

Make sure you are **logged into metamask extension** on your browser before you run this on your local host or else it will throw and error.

```bash
npm start
```

## Support
If you want more like this then you can go to my instagram page and **follow me for more content** or you can also **follow me on github**.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/themanavshah)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/flutterdev)
<a href="https://www.instagram.com/manavcodes">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" width="32"> Instagram
</a>
