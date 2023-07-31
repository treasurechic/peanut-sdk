////////////////// Peanut Library ///////////////////////
//
//  The intent of this library is to provide a set of stable functions to interact
//  with Peanut Protocol. This library is compatible with ethers v5 and v6, and
//  supports both node and browser environments.
//
/////////////////////////////////////////////////////////

import { ethers } from "ethers"; // client installed ethers (can be v5 or v6)
import { peanut as peanutV5 } from './indexEthersV5.js';
import { peanut as peanutV6 } from './indexEthersV6.js';

let peanut;

// detect ethers version and use the correct peanut library
if (ethers.version.startsWith('ethers/') || ethers.version.startsWith('5.')) {
    // Using ethers v5
    console.log('%cDetected ethers v5', 'color: #ff0000', ethers.version);
    peanut = peanutV5;
} else if (ethers.version.startsWith('6.')) {
    // Using ethers v6
    console.log('%cDetected ethers v6', 'color: #ff0000', ethers.version);
    peanut = peanutV6;
} else {
    throw new Error('Unsupported version of ethers');
}

export default peanut;
export { peanut };