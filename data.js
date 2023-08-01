import PEANUT_ABI_V3 from './data/peanutAbiV3.json';
import PEANUT_ABI_V4 from './data/peanutAbiV4.json';
import ERC20_ABI from './data/erc20abi.json';
import ERC721_ABI from './data/erc721abi.json';
import ERC1155_ABI from './data/erc1155abi.json';
import PEANUT_CONTRACTS from './data/contracts.json';
import PROVIDERS from './data/providers.json';
import CHAIN_MAP from './data/chainMap.json';


// package version (from package.json)
import { version } from './package.json';

// export ethers supported version as well
// ...

// export default contract version too
// ...

// export verbosity levels
// ...

// export all these functions (imported in index.js)
export {
  PEANUT_ABI_V3,
  PEANUT_ABI_V4,
  PEANUT_CONTRACTS,
  ERC20_ABI,
  ERC721_ABI,
  ERC1155_ABI,
  CHAIN_MAP,
  PROVIDERS,
  version,
};
