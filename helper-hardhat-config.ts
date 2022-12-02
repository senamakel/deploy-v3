import { HardhatNetworkForkingUserConfig, HardhatUserConfig } from 'hardhat/types';

import { eEthereumNetwork, iParamsPerNetwork } from './src/helpers/types';
import { eNetwork } from './src/helpers/types';

require('dotenv').config();

const INFURA_KEY = process.env.INFURA_KEY || '';
const ALCHEMY_KEY = process.env.ALCHEMY_KEY || '';
const TENDERLY_FORK_ID = process.env.TENDERLY_FORK_ID || '';
const FORK: string = process.env.FORK || '';
const FORK_BLOCK_NUMBER: number = process.env.FORK_BLOCK_NUMBER
    ? parseInt(process.env.FORK_BLOCK_NUMBER)
    : 0;

const GWEI = 1000 * 1000 * 1000;

export const buildForkConfig = (): HardhatNetworkForkingUserConfig | undefined => {
    let forkMode: HardhatNetworkForkingUserConfig | undefined;
    if (FORK) {
        forkMode = {
            url: NETWORKS_RPC_URL[FORK as eNetwork],
        };
    }
    return forkMode;
};

export const NETWORKS_RPC_URL: iParamsPerNetwork<string> = {
    [eEthereumNetwork.kovan]: ALCHEMY_KEY
        ? `https://eth-kovan.alchemyapi.io/v2/${ALCHEMY_KEY}`
        : `https://kovan.infura.io/v3/${INFURA_KEY}`,
    [eEthereumNetwork.ropsten]: ALCHEMY_KEY
        ? `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_KEY}`
        : `https://ropsten.infura.io/v3/${INFURA_KEY}`,
    [eEthereumNetwork.main]: ALCHEMY_KEY
        ? `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`
        : `https://mainnet.infura.io/v3/${INFURA_KEY}`,
    [eEthereumNetwork.coverage]: 'http://localhost:8555',
    [eEthereumNetwork.hardhat]: 'http://localhost:8545',
    [eEthereumNetwork.tenderlyMain]: `https://rpc.tenderly.co/fork/${TENDERLY_FORK_ID}`,
    [eEthereumNetwork.rinkeby]: `https://rinkeby.infura.io/v3/${INFURA_KEY}`,
};

export const BLOCK_TO_FORK: iParamsPerNetwork<number | undefined> = {
    [eEthereumNetwork.main]: 12012081,
    [eEthereumNetwork.kovan]: undefined,
    [eEthereumNetwork.ropsten]: undefined,
    [eEthereumNetwork.rinkeby]: undefined,
    [eEthereumNetwork.coverage]: undefined,
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.tenderlyMain]: 12406069,
};
