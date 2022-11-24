import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type { ReserveLogic, ReserveLogicInterface } from "../../../../../../../@mahalend/core-v3/contracts/protocol/libraries/logic/ReserveLogic";
type ReserveLogicConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReserveLogic__factory extends ContractFactory {
    constructor(...args: ReserveLogicConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReserveLogic>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReserveLogic;
    connect(signer: Signer): ReserveLogic__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122084cbaf42f83d25d72b4b4162347b120913d16b3867ebf815adc1e8e5b8f8aedc64736f6c634300080a0033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ReserveLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReserveLogic;
}
export {};
