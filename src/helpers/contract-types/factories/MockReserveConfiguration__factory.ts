/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockReserveConfiguration,
  MockReserveConfigurationInterface,
} from "../MockReserveConfiguration";

const _abi = [
  {
    inputs: [],
    name: "configuration",
    outputs: [
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBorrowCap",
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
    name: "getBorrowingEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCaps",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "getDecimals",
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
    name: "getEModeCategory",
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
    name: "getFlags",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFrozen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLiquidationBonus",
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
    name: "getLiquidationProtocolFee",
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
    name: "getLiquidationThreshold",
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
    name: "getLtv",
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
    name: "getParams",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "getReserveFactor",
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
    name: "getStableRateBorrowingEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupplyCap",
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
    name: "getUnbackedMintCap",
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
    inputs: [
      {
        internalType: "uint256",
        name: "borrowCap",
        type: "uint256",
      },
    ],
    name: "setBorrowCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setBorrowingEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "decimals",
        type: "uint256",
      },
    ],
    name: "setDecimals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "categoryId",
        type: "uint256",
      },
    ],
    name: "setEModeCategory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "frozen",
        type: "bool",
      },
    ],
    name: "setFrozen",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bonus",
        type: "uint256",
      },
    ],
    name: "setLiquidationBonus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidationProtocolFee",
        type: "uint256",
      },
    ],
    name: "setLiquidationProtocolFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    name: "setLiquidationThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ltv",
        type: "uint256",
      },
    ],
    name: "setLtv",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "reserveFactor",
        type: "uint256",
      },
    ],
    name: "setReserveFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setStableRateBorrowingEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "supplyCap",
        type: "uint256",
      },
    ],
    name: "setSupplyCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "unbackedMintCap",
        type: "uint256",
      },
    ],
    name: "setUnbackedMintCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f87806100206000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80638145bd2e11610104578063b6a3f59a116100a2578063ead8aa0211610071578063ead8aa02146104d8578063f0141d84146104f9578063f1514a1a14610516578063fa573d071461052957600080fd5b8063b6a3f59a14610471578063c37bdcec14610484578063d0b0c816146104a2578063e08a28a3146104b557600080fd5b80639d706d31116100de5780639d706d31146103f1578063a37e52e31461042a578063a62006351461043d578063aede7b761461045057600080fd5b80638145bd2e146103b05780638c8885c8146103cb57806392dfb2fb146103de57600080fd5b80635f558e531161017c57806371cb13321161014b57806371cb1332146103385780637495b3531461034b57806379750bc41461037a5780637e932d321461039d57600080fd5b80635f558e53146102c55780636c70bee9146102e15780636cc7149d146102eb578063717186d11461032557600080fd5b8063356f235c116101b8578063356f235c146102375780634ae9b8bc1461025457806359aa9e72146102725780635e615a6b1461029057600080fd5b80631c446983146101df57806320361814146101f457806328842d4f14610224575b600080fd5b6101f26101ed366004610e9c565b61053c565b005b60408051602081019091526000549081905260741c640fffffffff165b6040519081526020015b60405180910390f35b6101f2610232366004610e9c565b61055d565b60408051602081019091526000549081905260a81c60ff16610211565b60408051602081019091526000549081905260101c61ffff16610211565b60408051602080820190925260005490819052901c61ffff16610211565b610298610577565b604080519687526020870195909552938501929092526060840152608083015260a082015260c00161021b565b6040805160208101825260005490819052901c61ffff16610211565b6000546102119081565b6102f36105e0565b60408051951515865293151560208601529115159284019290925290151560608301521515608082015260a00161021b565b6101f2610333366004610e9c565b61065b565b6101f2610346366004610eb5565b610675565b6040805160208101909152600054908190526702000000000000001615155b604051901515815260200161021b565b60408051602081019091526000549081905267040000000000000016151561036a565b6101f26103ab366004610eb5565b61068f565b60408051602081019091526000549081905261ffff16610211565b6101f26103d9366004610e9c565b6106a9565b6101f26103ec366004610e9c565b6106c3565b604080516020810190915260005490819052640fffffffff605082901c81169160741c166040805192835260208301919091520161021b565b6101f2610438366004610e9c565b6106dd565b6101f261044b366004610e9c565b6106f7565b60408051602081019091526000549081905260501c640fffffffff16610211565b6101f261047f366004610e9c565b610711565b60408051602081019091526000549081905260981c61ffff16610211565b6101f26104b0366004610e9c565b61072b565b60408051602081019091526000549081905267080000000000000016151561036a565b60408051602081019091526000549081905260b01c640fffffffff16610211565b60408051602081019091526000549081905260301c60ff16610211565b6101f2610524366004610eb5565b610745565b6101f2610537366004610e9c565b61075f565b604080516020810190915260005481526105568183610779565b5160005550565b604080516020810190915260005481526105568183610823565b6000806000806000806105cd60006040518060200160405290816000820154815250505161ffff80821692601083901c821692602081901c831692603082901c60ff90811693604084901c9092169260a81c1690565b949b939a50919850965094509092509050565b600080600080600061064a600060405180602001604052908160008201548152505051670100000000000000811615159167020000000000000082161515916704000000000000008116151591670800000000000000821615159167100000000000000016151590565b945094509450945094509091929394565b6040805160208101909152600054815261055681836108c4565b604080516020810190915260005481526105568183610968565b6040805160208101909152600054815261055681836109ad565b6040805160208101909152600054815261055681836109f2565b604080516020810190915260005481526105568183610a92565b604080516020810190915260005481526105568183610b36565b604080516020810190915260005481526105568183610bd1565b604080516020810190915260005481526105568183610c72565b604080516020810190915260005481526105568183610d16565b604080516020810190915260005481526105568183610db7565b604080516020810190915260005481526105568183610dfc565b60408051808201909152600281527f3637000000000000000000000000000000000000000000000000000000000000602082015261ffff8211156107f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b60405180910390fd5b5081517fffffffffffffffffffffffffffffffffffffffffffff0000ffffffffffffffff1660409190911b179052565b60408051808201909152600281527f3635000000000000000000000000000000000000000000000000000000000000602082015261ffff821115610894576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517fffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffffffff1660209190911b179052565b60408051808201909152600281527f36380000000000000000000000000000000000000000000000000000000000006020820152640fffffffff821115610938576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517ffffffffffffffffffffffffffffffffffff000000000ffffffffffffffffffff1660509190911b179052565b603b81610976576000610979565b60015b83517ffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffff1660ff9190911690911b1790915250565b6039816109bb5760006109be565b60015b83517ffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffff1660ff9190911690911b1790915250565b60408051808201909152600281527f3636000000000000000000000000000000000000000000000000000000000000602082015260ff821115610a62576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517fffffffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffff1660309190911b179052565b60408051808201909152600281527f37320000000000000000000000000000000000000000000000000000000000006020820152640fffffffff821115610b06576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517ffffffffffff000000000ffffffffffffffffffffffffffffffffffffffffffff1660b09190911b179052565b60408051808201909152600281527f3633000000000000000000000000000000000000000000000000000000000000602082015261ffff821115610ba7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000016179052565b60408051808201909152600281527f3730000000000000000000000000000000000000000000000000000000000000602082015261ffff821115610c42576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517fffffffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffff1660989190911b179052565b60408051808201909152600281527f36390000000000000000000000000000000000000000000000000000000000006020820152640fffffffff821115610ce6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517fffffffffffffffffffffffffff000000000fffffffffffffffffffffffffffff1660749190911b179052565b60408051808201909152600281527f3634000000000000000000000000000000000000000000000000000000000000602082015261ffff821115610d87576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000ffff1660109190911b179052565b603a81610dc5576000610dc8565b60015b83517ffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffff1660ff9190911690911b1790915250565b60408051808201909152600281527f3731000000000000000000000000000000000000000000000000000000000000602082015260ff821115610e6c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ea9190610ede565b5081517fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1660a89190911b179052565b600060208284031215610eae57600080fd5b5035919050565b600060208284031215610ec757600080fd5b81358015158114610ed757600080fd5b9392505050565b600060208083528351808285015260005b81811015610f0b57858101830151858201604001528201610eef565b81811115610f1d576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea264697066735822122063c7cc4bd4d1e7c4a4772107d2fc0fbc396a3da18244c27d8af62b87bea353c264736f6c634300080a0033";

export class MockReserveConfiguration__factory extends ContractFactory {
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
  ): Promise<MockReserveConfiguration> {
    return super.deploy(overrides || {}) as Promise<MockReserveConfiguration>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockReserveConfiguration {
    return super.attach(address) as MockReserveConfiguration;
  }
  connect(signer: Signer): MockReserveConfiguration__factory {
    return super.connect(signer) as MockReserveConfiguration__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockReserveConfigurationInterface {
    return new utils.Interface(_abi) as MockReserveConfigurationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockReserveConfiguration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockReserveConfiguration;
  }
}
