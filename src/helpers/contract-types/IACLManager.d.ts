/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IACLManagerInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "ASSET_LISTING_ADMIN_ROLE()": FunctionFragment;
    "BRIDGE_ROLE()": FunctionFragment;
    "EMERGENCY_ADMIN_ROLE()": FunctionFragment;
    "FLASH_BORROWER_ROLE()": FunctionFragment;
    "POOL_ADMIN_ROLE()": FunctionFragment;
    "RISK_ADMIN_ROLE()": FunctionFragment;
    "addAssetListingAdmin(address)": FunctionFragment;
    "addBridge(address)": FunctionFragment;
    "addEmergencyAdmin(address)": FunctionFragment;
    "addFlashBorrower(address)": FunctionFragment;
    "addPoolAdmin(address)": FunctionFragment;
    "addRiskAdmin(address)": FunctionFragment;
    "isAssetListingAdmin(address)": FunctionFragment;
    "isBridge(address)": FunctionFragment;
    "isEmergencyAdmin(address)": FunctionFragment;
    "isFlashBorrower(address)": FunctionFragment;
    "isPoolAdmin(address)": FunctionFragment;
    "isRiskAdmin(address)": FunctionFragment;
    "removeAssetListingAdmin(address)": FunctionFragment;
    "removeBridge(address)": FunctionFragment;
    "removeEmergencyAdmin(address)": FunctionFragment;
    "removeFlashBorrower(address)": FunctionFragment;
    "removePoolAdmin(address)": FunctionFragment;
    "removeRiskAdmin(address)": FunctionFragment;
    "setRoleAdmin(bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ASSET_LISTING_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BRIDGE_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EMERGENCY_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FLASH_BORROWER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POOL_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RISK_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAssetListingAdmin",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "addBridge", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addEmergencyAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addFlashBorrower",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addPoolAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addRiskAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isAssetListingAdmin",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isBridge", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isEmergencyAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isFlashBorrower",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isPoolAdmin", values: [string]): string;
  encodeFunctionData(functionFragment: "isRiskAdmin", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeAssetListingAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBridge",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeEmergencyAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFlashBorrower",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removePoolAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRiskAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoleAdmin",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ASSET_LISTING_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BRIDGE_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EMERGENCY_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FLASH_BORROWER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POOL_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RISK_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAssetListingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addEmergencyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addFlashBorrower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addPoolAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addRiskAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAssetListingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isBridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isEmergencyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFlashBorrower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPoolAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isRiskAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAssetListingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeEmergencyAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFlashBorrower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePoolAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRiskAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRoleAdmin",
    data: BytesLike
  ): Result;

  events: {};
}

export class IACLManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IACLManagerInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    BRIDGE_ROLE(overrides?: CallOverrides): Promise<[string]>;

    EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    addAssetListingAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addBridge(
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addFlashBorrower(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addRiskAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAssetListingAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBridge(bridge: string, overrides?: CallOverrides): Promise<[boolean]>;

    isEmergencyAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isFlashBorrower(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPoolAdmin(admin: string, overrides?: CallOverrides): Promise<[boolean]>;

    isRiskAdmin(admin: string, overrides?: CallOverrides): Promise<[boolean]>;

    removeAssetListingAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeBridge(
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeFlashBorrower(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removePoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeRiskAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  BRIDGE_ROLE(overrides?: CallOverrides): Promise<string>;

  EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<string>;

  POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  addAssetListingAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addBridge(
    bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addEmergencyAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addFlashBorrower(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPoolAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addRiskAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAssetListingAdmin(
    admin: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBridge(bridge: string, overrides?: CallOverrides): Promise<boolean>;

  isEmergencyAdmin(admin: string, overrides?: CallOverrides): Promise<boolean>;

  isFlashBorrower(
    borrower: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPoolAdmin(admin: string, overrides?: CallOverrides): Promise<boolean>;

  isRiskAdmin(admin: string, overrides?: CallOverrides): Promise<boolean>;

  removeAssetListingAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeBridge(
    bridge: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeEmergencyAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeFlashBorrower(
    borrower: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removePoolAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeRiskAdmin(
    admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRoleAdmin(
    role: BytesLike,
    adminRole: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    BRIDGE_ROLE(overrides?: CallOverrides): Promise<string>;

    EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<string>;

    POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    addAssetListingAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addBridge(bridge: string, overrides?: CallOverrides): Promise<void>;

    addEmergencyAdmin(admin: string, overrides?: CallOverrides): Promise<void>;

    addFlashBorrower(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addPoolAdmin(admin: string, overrides?: CallOverrides): Promise<void>;

    addRiskAdmin(admin: string, overrides?: CallOverrides): Promise<void>;

    isAssetListingAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBridge(bridge: string, overrides?: CallOverrides): Promise<boolean>;

    isEmergencyAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isFlashBorrower(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPoolAdmin(admin: string, overrides?: CallOverrides): Promise<boolean>;

    isRiskAdmin(admin: string, overrides?: CallOverrides): Promise<boolean>;

    removeAssetListingAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBridge(bridge: string, overrides?: CallOverrides): Promise<void>;

    removeEmergencyAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeFlashBorrower(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removePoolAdmin(admin: string, overrides?: CallOverrides): Promise<void>;

    removeRiskAdmin(admin: string, overrides?: CallOverrides): Promise<void>;

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    ASSET_LISTING_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    BRIDGE_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    EMERGENCY_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    FLASH_BORROWER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    addAssetListingAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addBridge(
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addFlashBorrower(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addRiskAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAssetListingAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBridge(bridge: string, overrides?: CallOverrides): Promise<BigNumber>;

    isEmergencyAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFlashBorrower(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPoolAdmin(admin: string, overrides?: CallOverrides): Promise<BigNumber>;

    isRiskAdmin(admin: string, overrides?: CallOverrides): Promise<BigNumber>;

    removeAssetListingAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeBridge(
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeFlashBorrower(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removePoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeRiskAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ASSET_LISTING_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BRIDGE_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EMERGENCY_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FLASH_BORROWER_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    POOL_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RISK_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAssetListingAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addBridge(
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addFlashBorrower(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addRiskAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAssetListingAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBridge(
      bridge: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isEmergencyAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFlashBorrower(
      borrower: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPoolAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isRiskAdmin(
      admin: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeAssetListingAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeBridge(
      bridge: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeEmergencyAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeFlashBorrower(
      borrower: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removePoolAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeRiskAdmin(
      admin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRoleAdmin(
      role: BytesLike,
      adminRole: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
