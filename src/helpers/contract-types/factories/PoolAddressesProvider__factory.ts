/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoolAddressesProvider,
  PoolAddressesProviderInterface,
} from "../PoolAddressesProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "marketId",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
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
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "ACLAdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "ACLManagerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "AddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proxyAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldImplementationAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newImplementationAddress",
        type: "address",
      },
    ],
    name: "AddressSetAsProxy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "oldMarketId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "string",
        name: "newMarketId",
        type: "string",
      },
    ],
    name: "MarketIdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "PoolConfiguratorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "PoolDataProviderUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "PoolUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "PriceOracleSentinelUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "PriceOracleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "proxyAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "implementationAddress",
        type: "address",
      },
    ],
    name: "ProxyCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "getACLAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getACLManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMarketId",
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
    name: "getPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolConfigurator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolDataProvider",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceOracleSentinel",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAclAdmin",
        type: "address",
      },
    ],
    name: "setACLAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAclManager",
        type: "address",
      },
    ],
    name: "setACLManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "setAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "newImplementationAddress",
        type: "address",
      },
    ],
    name: "setAddressAsProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newMarketId",
        type: "string",
      },
    ],
    name: "setMarketId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPoolConfiguratorImpl",
        type: "address",
      },
    ],
    name: "setPoolConfiguratorImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newDataProvider",
        type: "address",
      },
    ],
    name: "setPoolDataProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPoolImpl",
        type: "address",
      },
    ],
    name: "setPoolImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPriceOracle",
        type: "address",
      },
    ],
    name: "setPriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPriceOracleSentinel",
        type: "address",
      },
    ],
    name: "setPriceOracleSentinel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b7838038062002b788339810160408190526200003491620003aa565b600080546001600160a01b0319163390811782556040519091829160008051602062002b58833981519152908290a3506200006f8262000082565b6200007a816200018d565b5050620004d2565b600060018054620000939062000477565b80601f0160208091040260200160405190810160405280929190818152602001828054620000c19062000477565b8015620001125780601f10620000e65761010080835404028352916020019162000112565b820191906000526020600020905b815481529060010190602001808311620000f457829003601f168201915b5050855193945062000130936001935060208701925090506200029e565b5081604051620001419190620004b4565b604051809103902081604051620001599190620004b4565b604051908190038120907fe685c8cdecc6030c45030fd54778812cb84ed8e4467c38294403d68ba786082390600090a35050565b6000546001600160a01b03163314620001ed5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116620002545760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401620001e4565b600080546040516001600160a01b038085169392169160008051602062002b5883398151915291a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b828054620002ac9062000477565b90600052602060002090601f016020900481019282620002d057600085556200031b565b82601f10620002eb57805160ff19168380011785556200031b565b828001600101855582156200031b579182015b828111156200031b578251825591602001919060010190620002fe565b50620003299291506200032d565b5090565b5b808211156200032957600081556001016200032e565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620003775781810151838201526020016200035d565b8381111562000387576000848401525b50505050565b80516001600160a01b0381168114620003a557600080fd5b919050565b60008060408385031215620003be57600080fd5b82516001600160401b0380821115620003d657600080fd5b818501915085601f830112620003eb57600080fd5b81518181111562000400576200040062000344565b604051601f8201601f19908116603f011681019083821181831017156200042b576200042b62000344565b816040528281528860208487010111156200044557600080fd5b620004588360208301602088016200035a565b80965050505050506200046e602084016200038d565b90509250929050565b600181811c908216806200048c57607f821691505b60208210811415620004ae57634e487b7160e01b600052602260045260246000fd5b50919050565b60008251620004c88184602087016200035a565b9190910192915050565b61267680620004e26000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c806376d84ffc116100d8578063e4ca28b71161008c578063f2fde38b11610066578063f2fde38b1461052f578063f67b184714610542578063fca513a81461055557600080fd5b8063e4ca28b7146104a3578063e860accb146104b6578063ed301ca91461051c57600080fd5b8063a1564406116100bd578063a15644061461046a578063ca446dd91461047d578063e44e9ed11461049057600080fd5b806376d84ffc146104395780638da5cb5b1461044c57600080fd5b80635dcc528c1161013a578063707cd71611610114578063707cd716146103b8578063715018a61461041e57806374944cec1461042657600080fd5b80635dcc528c146102d95780635eb88d3d146102ec578063631adfca1461035257600080fd5b806321f8a7211161016b57806321f8a72114610279578063530e784f146102af578063568ef470146102c457600080fd5b8063026b1d5f146101875780630e67178c14610213575b600080fd5b7f504f4f4c0000000000000000000000000000000000000000000000000000000060005260026020527f4fe005067814bb4b024d9515847377d15011b64593c006223b4a722952d2c05a5473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b7f41434c5f41444d494e000000000000000000000000000000000000000000000060005260026020527ffab167ad2009dcb80ee379700bb4bd029d97c1181ed9d961625632c8a6f051c65473ffffffffffffffffffffffffffffffffffffffff166101e9565b6101e9610287366004611962565b60009081526002602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6102c26102bd36600461199d565b6105bb565b005b6102cc6106ff565b60405161020a9190611a3b565b6102c26102e7366004611a4e565b610791565b7f50524943455f4f5241434c455f53454e54494e454c000000000000000000000060005260026020527f0d2c1bcee56447b4f46248272f34207a580a5c40f666a31f4e2fbb470ea53ab85473ffffffffffffffffffffffffffffffffffffffff166101e9565b7f504f4f4c5f434f4e464947555241544f5200000000000000000000000000000060005260026020527f90c127ef1c12c03f5781afeca3079527ea5333738078bba6fea26825bf9bf2c55473ffffffffffffffffffffffffffffffffffffffff166101e9565b7f41434c5f4d414e4147455200000000000000000000000000000000000000000060005260026020527f9edef266ef35fd0c6e131df0f31a330f3dd4c4d19dd31ed615c21d005c68116b5473ffffffffffffffffffffffffffffffffffffffff166101e9565b6102c26108a7565b6102c261043436600461199d565b610997565b6102c261044736600461199d565b610ad6565b60005473ffffffffffffffffffffffffffffffffffffffff166101e9565b6102c261047836600461199d565b610c15565b6102c261048b366004611a4e565b610d4b565b6102c261049e36600461199d565b610e4f565b6102c26104b136600461199d565b610f8e565b7f444154415f50524f56494445520000000000000000000000000000000000000060005260026020527fcd7944601aaa5cd7ccdae1bebec659e98c6aac8f12486b30e59db0d39698051f5473ffffffffffffffffffffffffffffffffffffffff166101e9565b6102c261052a36600461199d565b6110c4565b6102c261053d36600461199d565b611203565b6102c2610550366004611aad565b6113b4565b7f50524943455f4f5241434c45000000000000000000000000000000000000000060005260026020527f740f710666bd7a12af42df98311e541e47f7fd33d382d11602457a6d540cbd635473ffffffffffffffffffffffffffffffffffffffff166101e9565b60005473ffffffffffffffffffffffffffffffffffffffff163314610641576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b7f50524943455f4f5241434c450000000000000000000000000000000000000000600090815260026020527f740f710666bd7a12af42df98311e541e47f7fd33d382d11602457a6d540cbd63805473ffffffffffffffffffffffffffffffffffffffff8481167fffffffffffffffffffffffff00000000000000000000000000000000000000008316811790935560405191169283917f56b5f80d8cac1479698aa7d01605fd6111e90b15fc4d2b377417f46034876cbd9190a35050565b60606001805461070e90611b7c565b80601f016020809104026020016040519081016040528092919081815260200182805461073a90611b7c565b80156107875780601f1061075c57610100808354040283529160200191610787565b820191906000526020600020905b81548152906001019060200180831161076a57829003601f168201915b5050505050905090565b60005473ffffffffffffffffffffffffffffffffffffffff163314610812576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b60008281526002602052604081205473ffffffffffffffffffffffffffffffffffffffff169061084184611441565b905061084d84846114f8565b60405173ffffffffffffffffffffffffffffffffffffffff8281168252808516919084169086907f3bbd45b5429b385e3fb37ad5cd1cd1435a3c8ec32196c7937597365a3fd3e99c9060200160405180910390a450505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610928576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610a18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b7f50524943455f4f5241434c455f53454e54494e454c0000000000000000000000600090815260026020527f0d2c1bcee56447b4f46248272f34207a580a5c40f666a31f4e2fbb470ea53ab8805473ffffffffffffffffffffffffffffffffffffffff8481167fffffffffffffffffffffffff00000000000000000000000000000000000000008316811790935560405191169283917f5326514eeca90494a14bedabcff812a0e683029ee85d1e23824d44fd14cd6ae79190a35050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b7f41434c5f41444d494e0000000000000000000000000000000000000000000000600090815260026020527ffab167ad2009dcb80ee379700bb4bd029d97c1181ed9d961625632c8a6f051c6805473ffffffffffffffffffffffffffffffffffffffff8481167fffffffffffffffffffffffff00000000000000000000000000000000000000008316811790935560405191169283917fe9cf53972264dc95304fd424458745019ddfca0e37ae8f703d74772c41ad115b9190a35050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b6000610cc17f504f4f4c00000000000000000000000000000000000000000000000000000000611441565b9050610ced7f504f4f4c00000000000000000000000000000000000000000000000000000000836114f8565b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f90affc163f1a2dfedcd36aa02ed992eeeba8100a4014f0b4cdc20ea265a6662760405160405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610dcc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b60008281526002602052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8681169182179093559251911692839186917f9ef0e8c8e52743bb38b83b17d9429141d494b8041ca6d616a6c77cebae9cd8b791a4505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ed0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b7f444154415f50524f564944455200000000000000000000000000000000000000600090815260026020527fcd7944601aaa5cd7ccdae1bebec659e98c6aac8f12486b30e59db0d39698051f805473ffffffffffffffffffffffffffffffffffffffff8481167fffffffffffffffffffffffff00000000000000000000000000000000000000008316811790935560405191169283917fc853974cfbf81487a14a23565917bee63f527853bcb5fa54f2ae1cdf8a38356d9190a35050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461100f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b600061103a7f504f4f4c5f434f4e464947555241544f52000000000000000000000000000000611441565b90506110667f504f4f4c5f434f4e464947555241544f52000000000000000000000000000000836114f8565b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8932892569eba59c8382a089d9b732d1f49272878775235761a2a6b0309cd46560405160405180910390a35050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611145576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b7f41434c5f4d414e41474552000000000000000000000000000000000000000000600090815260026020527f9edef266ef35fd0c6e131df0f31a330f3dd4c4d19dd31ed615c21d005c68116b805473ffffffffffffffffffffffffffffffffffffffff8481167fffffffffffffffffffffffff00000000000000000000000000000000000000008316811790935560405191169283917fb30efa04327bb8a537d61cc1e5c48095345ad18ef7cc04e6bacf7dfb6caaf5079190a35050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611284576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b73ffffffffffffffffffffffffffffffffffffffff8116611327576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610638565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314611435576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610638565b61143e816117bf565b50565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16806114745750600092915050565b60008190508073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156114c6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ea9190611bca565b949350505050565b50919050565b60008281526002602052604080822054905130602482015273ffffffffffffffffffffffffffffffffffffffff90911691908190604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fc4d66de800000000000000000000000000000000000000000000000000000000179052905073ffffffffffffffffffffffffffffffffffffffff831661172e57306040516115cf906118bc565b73ffffffffffffffffffffffffffffffffffffffff9091168152602001604051809103906000f080158015611608573d6000803e3d6000fd5b506000868152600260205260409081902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841690811790915590517fd1f578940000000000000000000000000000000000000000000000000000000081529194508493509063d1f578949061169c9087908590600401611be7565b600060405180830381600087803b1580156116b657600080fd5b505af11580156116ca573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16867f4a465a9bd819d9662563c1e11ae958f8109e437e7f4bf1c6ef0b9a7b3f35d47860405160405180910390a46117b8565b6040517f4f1ef28600000000000000000000000000000000000000000000000000000000815283925073ffffffffffffffffffffffffffffffffffffffff831690634f1ef286906117859087908590600401611be7565b600060405180830381600087803b15801561179f57600080fd5b505af11580156117b3573d6000803e3d6000fd5b505050505b5050505050565b6000600180546117ce90611b7c565b80601f01602080910402602001604051908101604052809291908181526020018280546117fa90611b7c565b80156118475780601f1061181c57610100808354040283529160200191611847565b820191906000526020600020905b81548152906001019060200180831161182a57829003601f168201915b50508551939450611863936001935060208701925090506118c9565b50816040516118729190611c16565b6040518091039020816040516118889190611c16565b604051908190038120907fe685c8cdecc6030c45030fd54778812cb84ed8e4467c38294403d68ba786082390600090a35050565b610a0e80611c3383390190565b8280546118d590611b7c565b90600052602060002090601f0160209004810192826118f7576000855561193d565b82601f1061191057805160ff191683800117855561193d565b8280016001018555821561193d579182015b8281111561193d578251825591602001919060010190611922565b5061194992915061194d565b5090565b5b80821115611949576000815560010161194e565b60006020828403121561197457600080fd5b5035919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461143e57600080fd5b6000602082840312156119af57600080fd5b81356119ba8161197b565b9392505050565b60005b838110156119dc5781810151838201526020016119c4565b838111156119eb576000848401525b50505050565b60008151808452611a098160208601602086016119c1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006119ba60208301846119f1565b60008060408385031215611a6157600080fd5b823591506020830135611a738161197b565b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215611abf57600080fd5b813567ffffffffffffffff80821115611ad757600080fd5b818401915084601f830112611aeb57600080fd5b813581811115611afd57611afd611a7e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611b4357611b43611a7e565b81604052828152876020848701011115611b5c57600080fd5b826020860160208301376000928101602001929092525095945050505050565b600181811c90821680611b9057607f821691505b602082108114156114f2577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060208284031215611bdc57600080fd5b81516119ba8161197b565b73ffffffffffffffffffffffffffffffffffffffff831681526040602082015260006114ea60408301846119f1565b60008251611c288184602087016119c1565b919091019291505056fe60a060405234801561001057600080fd5b50604051610a0e380380610a0e83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516109606100ae6000396000818161014f015281816101a101528181610274015281816104110152818161043a01526105ab01526109606000f3fe60806040526004361061005a5760003560e01c80635c60da1b116100435780635c60da1b14610097578063d1f57894146100d5578063f851a440146100e85761005a565b80633659cfe6146100645780634f1ef28614610084575b6100626100fd565b005b34801561007057600080fd5b5061006261007f3660046106be565b610137565b6100626100923660046106e0565b610189565b3480156100a357600080fd5b506100ac61025a565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100626100e3366004610792565b6102cb565b3480156100f457600080fd5b506100ac6103f7565b61010561045c565b6101356101307f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b610464565b565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156101815761017e81610488565b50565b61017e6100fd565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561024d576101d083610488565b60008373ffffffffffffffffffffffffffffffffffffffff1683836040516101f9929190610872565b600060405180830381855af49150503d8060008114610234576040519150601f19603f3d011682016040523d82523d6000602084013e610239565b606091505b505090508061024757600080fd5b50505050565b6102556100fd565b505050565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156102c057507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6102c86100fd565b90565b60006102f57f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b73ffffffffffffffffffffffffffffffffffffffff161461031557600080fd5b61034060017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610882565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc1461036e5761036e6108c0565b610377826104d5565b8051156103f35760008273ffffffffffffffffffffffffffffffffffffffff16826040516103a591906108ef565b600060405180830381855af49150503d80600081146103e0576040519150601f19603f3d011682016040523d82523d6000602084013e6103e5565b606091505b505090508061025557600080fd5b5050565b60003373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156102c057507f000000000000000000000000000000000000000000000000000000000000000090565b610135610593565b3660008037600080366000845af43d6000803e808015610483573d6000f35b3d6000fd5b610491816104d5565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6104de81610659565b61056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603b60248201527f43616e6e6f742073657420612070726f787920696d706c656d656e746174696f60448201527f6e20746f2061206e6f6e2d636f6e74726163742061646472657373000000000060648201526084015b60405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161415610135576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f43616e6e6f742063616c6c2066616c6c6261636b2066756e6374696f6e20667260448201527f6f6d207468652070726f78792061646d696e00000000000000000000000000006064820152608401610566565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061068d57508115155b949350505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146106b957600080fd5b919050565b6000602082840312156106d057600080fd5b6106d982610695565b9392505050565b6000806000604084860312156106f557600080fd5b6106fe84610695565b9250602084013567ffffffffffffffff8082111561071b57600080fd5b818601915086601f83011261072f57600080fd5b81358181111561073e57600080fd5b87602082850101111561075057600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156107a557600080fd5b6107ae83610695565b9150602083013567ffffffffffffffff808211156107cb57600080fd5b818501915085601f8301126107df57600080fd5b8135818111156107f1576107f1610763565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561083757610837610763565b8160405282815288602084870101111561085057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b8183823760009101908152919050565b6000828210156108bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000825160005b8181101561091057602081860181015185830152016108f6565b8181111561091f576000828501525b50919091019291505056fea264697066735822122070de66600b0bfec0fbe1980c4c2b7dc695101993cab237f657e898f4da32126b64736f6c634300080a0033a26469706673582212202d7aaeeaa155b75942a9284b045280220730e93b16742d4e2c7fd204738405b764736f6c634300080a00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";

export class PoolAddressesProvider__factory extends ContractFactory {
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
    marketId: string,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolAddressesProvider> {
    return super.deploy(
      marketId,
      owner,
      overrides || {}
    ) as Promise<PoolAddressesProvider>;
  }
  getDeployTransaction(
    marketId: string,
    owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(marketId, owner, overrides || {});
  }
  attach(address: string): PoolAddressesProvider {
    return super.attach(address) as PoolAddressesProvider;
  }
  connect(signer: Signer): PoolAddressesProvider__factory {
    return super.connect(signer) as PoolAddressesProvider__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolAddressesProviderInterface {
    return new utils.Interface(_abi) as PoolAddressesProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolAddressesProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PoolAddressesProvider;
  }
}
