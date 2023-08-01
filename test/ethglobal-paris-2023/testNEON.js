import peanut from "../../index.js"; // local
// import peanut from '@squirrel-labs/peanut-sdk-ethersv5';
import { ethers } from 'ethers'; // ethers v6
import dotenv from 'dotenv';
dotenv.config({path: '../../.env'});


const RPC_URL = "https://devnet.neonevm.org";
const CHAINID = 245022926;
// create goerli wallet with optimism rpc
const wallet = new ethers.Wallet(
    process.env.TEST_WALLET_PRIVATE_KEY,
    new ethers.JsonRpcProvider(RPC_URL)
);

// create link
console.log('creating link....')
const { link, txReceipt } = await peanut.createLink({
  signer: wallet,
  chainId: CHAINID,
  tokenAmount: 0.001,
  tokenType: 0, // 0 for ether, 1 for erc20, 2 for erc721, 3 for erc1155
  verbose: true,
  contractVersion: "v4",
  eip1559: false,
});



// get status of link
// console.log((await peanut.getLinkStatus({signer: wallet, link: link})).claimed);


// claim link
console.log('claiming....')
await new Promise(r => setTimeout(r, 3000));
const claimTx = await peanut.claimLink({ signer: wallet, link: link });
console.log("claimTx: ", claimTx.hash);

// const res = await peanut.claimLinkGasless(link, wallet.address, process.env.PEANUT_DEV_API_KEY);
// console.log(res);

// get status of link
// console.log((await peanut.getLinkStatus({signer: wallet, link: link})).claimed);