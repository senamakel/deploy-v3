/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ValidationLogic,
  ValidationLogicInterface,
} from "../ValidationLogic";

const _abi = [
  {
    inputs: [],
    name: "HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_HEALTH_FACTOR_LIQUIDATION_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REBALANCE_UP_LIQUIDITY_RATE_THRESHOLD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60b8610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060475760003560e01c8063561cbec914604c578063abfcc86a14606c578063c3525c28146074575b600080fd5b605a670d2f13f7789f000081565b60405190815260200160405180910390f35b605a61232881565b605a670de0b6b3a76400008156fea2646970667358221220e59f6c805d374acd960c614d0f6ffa5f835ac6e2c596d2732d801921f4ca931364736f6c634300080a0033";

export class ValidationLogic__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ValidationLogic> {
    return super.deploy(overrides || {}) as Promise<ValidationLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ValidationLogic {
    return super.attach(address) as ValidationLogic;
  }
  connect(signer: Signer): ValidationLogic__factory {
    return super.connect(signer) as ValidationLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ValidationLogicInterface {
    return new utils.Interface(_abi) as ValidationLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ValidationLogic {
    return new Contract(address, _abi, signerOrProvider) as ValidationLogic;
  }
}
