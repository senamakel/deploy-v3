/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReserveLogic, ReserveLogicInterface } from "../ReserveLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "reserve",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
    ],
    name: "ReserveDataUpdated",
    type: "event",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e1a5172be256bd06cbfe5b618a74855de914a0ad1d0281d10c27793bc267f43b64736f6c634300080a0033";

export class ReserveLogic__factory extends ContractFactory {
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
  ): Promise<ReserveLogic> {
    return super.deploy(overrides || {}) as Promise<ReserveLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReserveLogic {
    return super.attach(address) as ReserveLogic;
  }
  connect(signer: Signer): ReserveLogic__factory {
    return super.connect(signer) as ReserveLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReserveLogicInterface {
    return new utils.Interface(_abi) as ReserveLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveLogic {
    return new Contract(address, _abi, signerOrProvider) as ReserveLogic;
  }
}
