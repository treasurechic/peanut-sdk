import { peanut } from '@squirrel-labs/peanut-sdk';
import { ethers } from 'ethers'; // ethers v5.7.2
import dotenv from 'dotenv';
dotenv.config({path: '../../.env'});

console.log('Ethers version: ', ethers.version);
console.log('Peanut version: ', peanut.version);

////////////////////////////////////////////////////////////
// replace with ethers signer from browser wallet
const CHAINID = 5; // goerli
const RPC_URL = "https://rpc.ankr.com/eth_goerli";
////////////////////////////////////////////////////////////
// create goerli wallet with optimism rpc
const wallet = new ethers.Wallet(
    process.env.TEST_WALLET_PRIVATE_KEY,
    new ethers.providers.JsonRpcProvider(RPC_URL)
);
////////////////////////////////////////////////////////////


let tx = "0x0673075bbe42c4496c9d1ed0e012f522e8bff04ea179f271dc0a9b0c3c0b12b9"
let chainid = 5
let txReceipt = await wallet.provider.getTransactionReceipt(tx)
console.log(peanut.getDepositIdx(txReceipt, chainid))