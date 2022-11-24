import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { GovernancePowerWithSnapshot, GovernancePowerWithSnapshotInterface } from "../../../../../../../@mahalend/safety-module/contracts/proposals/extend-stkaave-distribution/StakedTokenV2Rev3.sol/GovernancePowerWithSnapshot";
export declare class GovernancePowerWithSnapshot__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): GovernancePowerWithSnapshotInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GovernancePowerWithSnapshot;
}
