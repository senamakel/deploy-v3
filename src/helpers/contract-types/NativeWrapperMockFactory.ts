/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NativeWrapperMock } from "./NativeWrapperMock";

export class NativeWrapperMockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<NativeWrapperMock> {
    return super.deploy(
      _name,
      _symbol,
      overrides || {}
    ) as Promise<NativeWrapperMock>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): NativeWrapperMock {
    return super.attach(address) as NativeWrapperMock;
  }
  connect(signer: Signer): NativeWrapperMockFactory {
    return super.connect(signer) as NativeWrapperMockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NativeWrapperMock {
    return new Contract(address, _abi, signerOrProvider) as NativeWrapperMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526002805460ff191660121790553480156200001e57600080fd5b5060405162000a8c38038062000a8c83398101604081905262000041916200012c565b60006200004f838262000225565b5060016200005e828262000225565b505050620002f1565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008f57600080fd5b81516001600160401b0380821115620000ac57620000ac62000067565b604051601f8301601f19908116603f01168101908282118183101715620000d757620000d762000067565b81604052838152602092508683858801011115620000f457600080fd5b600091505b83821015620001185785820183015181830184015290820190620000f9565b600093810190920192909252949350505050565b600080604083850312156200014057600080fd5b82516001600160401b03808211156200015857600080fd5b62000166868387016200007d565b935060208501519150808211156200017d57600080fd5b506200018c858286016200007d565b9150509250929050565b600181811c90821680620001ab57607f821691505b602082108103620001cc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200022057600081815260208120601f850160051c81016020861015620001fb5750805b601f850160051c820191505b818110156200021c5782815560010162000207565b5050505b505050565b81516001600160401b0381111562000241576200024162000067565b620002598162000252845462000196565b84620001d2565b602080601f831160018114620002915760008415620002785750858301515b600019600386901b1c1916600185901b1785556200021c565b600085815260208120601f198616915b82811015620002c257888601518255948401946001909101908401620002a1565b5085821015620002e15787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61078b80620003016000396000f3fe6080604052600436106100a05760003560e01c8063313ce56711610064578063313ce5671461016c57806370a082311461019857806395d89b41146101c5578063a9059cbb146101da578063d0e30db0146101fa578063dd62ed3e1461020257600080fd5b806306fdde03146100b4578063095ea7b3146100df57806318160ddd1461010f57806323b872dd1461012c5780632e1a7d4d1461014c57600080fd5b366100af576100ad61023a565b005b600080fd5b3480156100c057600080fd5b506100c9610295565b6040516100d691906105a8565b60405180910390f35b3480156100eb57600080fd5b506100ff6100fa366004610612565b610323565b60405190151581526020016100d6565b34801561011b57600080fd5b50475b6040519081526020016100d6565b34801561013857600080fd5b506100ff61014736600461063c565b610390565b34801561015857600080fd5b506100ad610167366004610678565b6104e1565b34801561017857600080fd5b506002546101869060ff1681565b60405160ff90911681526020016100d6565b3480156101a457600080fd5b5061011e6101b3366004610691565b60036020526000908152604090205481565b3480156101d157600080fd5b506100c9610587565b3480156101e657600080fd5b506100ff6101f5366004610612565b610594565b6100ad61023a565b34801561020e57600080fd5b5061011e61021d3660046106ac565b600460209081526000928352604080842090915290825290205481565b33600090815260036020526040812080543492906102599084906106f5565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b600080546102a290610708565b80601f01602080910402602001604051908101604052809291908181526020018280546102ce90610708565b801561031b5780601f106102f05761010080835404028352916020019161031b565b820191906000526020600020905b8154815290600101906020018083116102fe57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061037e9086815260200190565b60405180910390a35060015b92915050565b6001600160a01b0383166000908152600360205260408120548211156103b557600080fd5b6001600160a01b038416331461042e576001600160a01b03841660009081526004602090815260408083203384529091529020548211156103f557600080fd5b6001600160a01b038416600090815260046020908152604080832033845290915281208054849290610428908490610742565b90915550505b6001600160a01b03841660009081526003602052604081208054849290610456908490610742565b90915550506001600160a01b038316600090815260036020526040812080548492906104839084906106f5565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516104cf91815260200190565b60405180910390a35060019392505050565b336000908152600360205260409020548111156104fd57600080fd5b336000908152600360205260408120805483929061051c908490610742565b9091555050604051339082156108fc029083906000818181858888f1935050505015801561054e573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b600180546102a290610708565b60006105a1338484610390565b9392505050565b600060208083528351808285015260005b818110156105d5578581018301518582016040015282016105b9565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461060d57600080fd5b919050565b6000806040838503121561062557600080fd5b61062e836105f6565b946020939093013593505050565b60008060006060848603121561065157600080fd5b61065a846105f6565b9250610668602085016105f6565b9150604084013590509250925092565b60006020828403121561068a57600080fd5b5035919050565b6000602082840312156106a357600080fd5b6105a1826105f6565b600080604083850312156106bf57600080fd5b6106c8836105f6565b91506106d6602084016105f6565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561038a5761038a6106df565b600181811c9082168061071c57607f821691505b60208210810361073c57634e487b7160e01b600052602260045260246000fd5b50919050565b8181038181111561038a5761038a6106df56fea2646970667358221220e564f502c76c091f36ced0b1219f51cd07c6af220123eefb8dcca5d6480be9f664736f6c63430008110033";
