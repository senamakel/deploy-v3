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

interface IAaveOracleInterface extends ethers.utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "BASE_CURRENCY()": FunctionFragment;
    "BASE_CURRENCY_UNIT()": FunctionFragment;
    "getAssetPrice(address)": FunctionFragment;
    "getAssetsPrices(address[])": FunctionFragment;
    "getFallbackOracle()": FunctionFragment;
    "getSourceOfAsset(address)": FunctionFragment;
    "setAssetSources(address[],address[])": FunctionFragment;
    "setFallbackOracle(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_CURRENCY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_CURRENCY_UNIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetsPrices",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getFallbackOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSourceOfAsset",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetSources",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setFallbackOracle",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY_UNIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetsPrices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSourceOfAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetSources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackOracle",
    data: BytesLike
  ): Result;

  events: {
    "AssetSourceUpdated(address,address)": EventFragment;
    "BaseCurrencySet(address,uint256)": EventFragment;
    "FallbackOracleUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetSourceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BaseCurrencySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FallbackOracleUpdated"): EventFragment;
}

export type AssetSourceUpdatedEvent = TypedEvent<
  [string, string] & { asset: string; source: string }
>;

export type BaseCurrencySetEvent = TypedEvent<
  [string, BigNumber] & { baseCurrency: string; baseCurrencyUnit: BigNumber }
>;

export type FallbackOracleUpdatedEvent = TypedEvent<
  [string] & { fallbackOracle: string }
>;

export class IAaveOracle extends BaseContract {
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

  interface: IAaveOracleInterface;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    BASE_CURRENCY(overrides?: CallOverrides): Promise<[string]>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAssetPrice(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAssetsPrices(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getFallbackOracle(overrides?: CallOverrides): Promise<[string]>;

    getSourceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setAssetSources(
      assets: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFallbackOracle(
      fallbackOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;

  BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  getAssetsPrices(
    assets: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getFallbackOracle(overrides?: CallOverrides): Promise<string>;

  getSourceOfAsset(asset: string, overrides?: CallOverrides): Promise<string>;

  setAssetSources(
    assets: string[],
    sources: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFallbackOracle(
    fallbackOracle: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAssetsPrices(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getFallbackOracle(overrides?: CallOverrides): Promise<string>;

    getSourceOfAsset(asset: string, overrides?: CallOverrides): Promise<string>;

    setAssetSources(
      assets: string[],
      sources: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    setFallbackOracle(
      fallbackOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AssetSourceUpdated(address,address)"(
      asset?: string | null,
      source?: string | null
    ): TypedEventFilter<[string, string], { asset: string; source: string }>;

    AssetSourceUpdated(
      asset?: string | null,
      source?: string | null
    ): TypedEventFilter<[string, string], { asset: string; source: string }>;

    "BaseCurrencySet(address,uint256)"(
      baseCurrency?: string | null,
      baseCurrencyUnit?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { baseCurrency: string; baseCurrencyUnit: BigNumber }
    >;

    BaseCurrencySet(
      baseCurrency?: string | null,
      baseCurrencyUnit?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { baseCurrency: string; baseCurrencyUnit: BigNumber }
    >;

    "FallbackOracleUpdated(address)"(
      fallbackOracle?: string | null
    ): TypedEventFilter<[string], { fallbackOracle: string }>;

    FallbackOracleUpdated(
      fallbackOracle?: string | null
    ): TypedEventFilter<[string], { fallbackOracle: string }>;
  };

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_CURRENCY(overrides?: CallOverrides): Promise<BigNumber>;

    BASE_CURRENCY_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    getAssetPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;

    getAssetsPrices(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFallbackOracle(overrides?: CallOverrides): Promise<BigNumber>;

    getSourceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAssetSources(
      assets: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFallbackOracle(
      fallbackOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    BASE_CURRENCY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BASE_CURRENCY_UNIT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetPrice(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetsPrices(
      assets: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFallbackOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSourceOfAsset(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAssetSources(
      assets: string[],
      sources: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFallbackOracle(
      fallbackOracle: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
