import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { FlashLoanSimpleReceiverBase, FlashLoanSimpleReceiverBaseInterface } from "../../../../../../@mahalend/core-v3/contracts/flashloan/base/FlashLoanSimpleReceiverBase";
export declare class FlashLoanSimpleReceiverBase__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): FlashLoanSimpleReceiverBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): FlashLoanSimpleReceiverBase;
}
