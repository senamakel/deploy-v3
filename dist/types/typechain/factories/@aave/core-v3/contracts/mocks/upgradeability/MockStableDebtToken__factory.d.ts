import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type { MockStableDebtToken, MockStableDebtTokenInterface } from "../../../../../../@mahalend/core-v3/contracts/mocks/upgradeability/MockStableDebtToken";
type MockStableDebtTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockStableDebtToken__factory extends ContractFactory {
    constructor(...args: MockStableDebtTokenConstructorParams);
    deploy(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockStableDebtToken>;
    getDeployTransaction(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockStableDebtToken;
    connect(signer: Signer): MockStableDebtToken__factory;
    static readonly bytecode = "0x60e0604052600080553480156200001557600080fd5b5060405162002cb438038062002cb4833981016040819052620000389162000237565b80806040518060400160405280601681526020017f535441424c455f444542545f544f4b454e5f494d504c000000000000000000008152506040518060400160405280601681526020017f535441424c455f444542545f544f4b454e5f494d504c0000000000000000000081525060004660808181525050836001600160a01b0316630542975c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000115919062000237565b6001600160a01b031660a05282516200013690603b90602086019062000178565b5081516200014c90603c90602085019062000178565b50603d805460ff191660ff9290921691909117905550506001600160a01b031660c052506200029b9050565b82805462000186906200025e565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b6001600160a01b03811681146200023457600080fd5b50565b6000602082840312156200024a57600080fd5b815162000257816200021e565b9392505050565b600181811c908216806200027357607f821691505b602082108114156200029557634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c0516129cd620002e76000396000818161030501528181610c4501528181611144015281816116a401526117ff015260006118cb01526000610abd01526129cd6000f3fe608060405234801561001057600080fd5b506004361061020b5760003560e01c806390f6fcf21161012a578063c04a8a10116100bd578063e655dbd81161008c578063e78c9b3b11610071578063e78c9b3b146105b5578063f3bfc73814610611578063f731e9be1461063857600080fd5b8063e655dbd81461057f578063e74848901461059257600080fd5b8063c04a8a1014610503578063c222ec8a14610516578063c634dfaa14610529578063dd62ed3e1461057157600080fd5b8063a9059cbb116100f9578063a9059cbb1461022e578063b16a19de146104ad578063b3f1c93d146104cb578063b9a7b622146104fb57600080fd5b806390f6fcf21461046357806395d89b411461047d5780639dc29fac14610485578063a457c2d71461022e57600080fd5b80636bd76d24116101a25780637816037611610171578063781603761461036f57806379774338146103ab57806379ce6b8c146103da5780637ecebe001461042d57600080fd5b80636bd76d24146102a757806370a08231146102ed5780637535d2461461030057806375d264131461034c57600080fd5b806323b872dd116101de57806323b872dd1461027c578063313ce5671461028a5780633644e5151461029f578063395093511461022e57600080fd5b806306fdde0314610210578063095ea7b31461022e5780630b52d5581461025157806318160ddd14610266575b600080fd5b610218610640565b604051610225919061233e565b60405180910390f35b61024161023c366004612381565b6106d2565b6040519015158152602001610225565b61026461025f3660046123be565b610742565b005b61026e610a93565b604051908152602001610225565b61024161023c36600461242c565b603d5460405160ff9091168152602001610225565b61026e610ab9565b61026e6102b536600461246d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260366020908152604080832093909416825291909152205490565b61026e6102fb3660046124a6565b610af2565b6103277f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610225565b603d54610100900473ffffffffffffffffffffffffffffffffffffffff16610327565b6102186040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b6103b3610b9e565b6040805194855260208501939093529183015264ffffffffff166060820152608001610225565b6104176103e83660046124a6565b73ffffffffffffffffffffffffffffffffffffffff166000908152603e602052604090205464ffffffffff1690565b60405164ffffffffff9091168152602001610225565b61026e61043b3660046124a6565b73ffffffffffffffffffffffffffffffffffffffff1660009081526034602052604090205490565b603f546fffffffffffffffffffffffffffffffff1661026e565b610218610bfa565b610498610493366004612381565b610c09565b60408051928352602083019190915201610225565b60375473ffffffffffffffffffffffffffffffffffffffff16610327565b6104de6104d93660046124c3565b611129565b604080519315158452602084019290925290820152606001610225565b61026e600181565b610264610511366004612381565b6115ab565b610264610524366004612625565b6115ba565b61026e6105373660046124a6565b73ffffffffffffffffffffffffffffffffffffffff166000908152603860205260409020546fffffffffffffffffffffffffffffffff1690565b61026e61023c36600461246d565b61026461058d3660046124a6565b6118c7565b603f54700100000000000000000000000000000000900464ffffffffff16610417565b61026e6105c33660046124a6565b73ffffffffffffffffffffffffffffffffffffffff1660009081526038602052604090205470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1690565b61026e7f323db0410fecc107e39e2af5908671f4c8d106123b35a51501bb805c5fa36aa081565b610498611aa5565b6060603b805461064f906126fa565b80601f016020809104026020016040519081016040528092919081815260200182805461067b906126fa565b80156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b5050505050905090565b604080518082018252600281527f3830000000000000000000000000000000000000000000000000000000000000602082015290517f08c379a00000000000000000000000000000000000000000000000000000000081526000916107399160040161233e565b60405180910390fd5b60408051808201909152600281527f3737000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff88166107c4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610739919061233e565b50834211156040518060400160405280600281526020017f373800000000000000000000000000000000000000000000000000000000000081525090610837576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610739919061233e565b5073ffffffffffffffffffffffffffffffffffffffff871660009081526034602052604081205490610867610ab9565b604080517f323db0410fecc107e39e2af5908671f4c8d106123b35a51501bb805c5fa36aa0602082015273ffffffffffffffffffffffffffffffffffffffff8b1691810191909152606081018990526080810184905260a0810188905260c0016040516020818303038152906040528051906020012060405160200161091f9291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8816918301919091526060820186905260808201859052915060019060a0016020604051602081039080840390855afa1580156109a5573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f373900000000000000000000000000000000000000000000000000000000000081525090610a4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610739919061233e565b50610a5782600161277d565b73ffffffffffffffffffffffffffffffffffffffff8a16600090815260346020526040902055610a88898989611ad0565b505050505050505050565b603f54600090610ab4906fffffffffffffffffffffffffffffffff16611b47565b905090565b60007f0000000000000000000000000000000000000000000000000000000000000000461415610aea575060355490565b610ab4611b96565b73ffffffffffffffffffffffffffffffffffffffff81166000908152603860205260408120546fffffffffffffffffffffffffffffffff8082169170010000000000000000000000000000000090041681610b51575060009392505050565b73ffffffffffffffffffffffffffffffffffffffff84166000908152603e6020526040812054610b8990839064ffffffffff16611c5b565b9050610b958382611c6f565b95945050505050565b603f546000908190819081906fffffffffffffffffffffffffffffffff16610bc5603a5490565b610bce82611b47565b603f549197909650919450700100000000000000000000000000000000900464ffffffffff1692509050565b6060603c805461064f906126fa565b60408051808201909152600281527f323300000000000000000000000000000000000000000000000000000000000060208201526000908190337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610cb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610739919061233e565b50600080610cbf86611cc6565b92509250506000610cce610a93565b73ffffffffffffffffffffffffffffffffffffffff881660009081526038602052604081205491925090819070010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff16888411610d5957603f80547fffffffffffffffffffffffffffffffff000000000000000000000000000000001690556000603a55610e53565b610d638985612795565b603a81905591506000610d93610d7886611d4b565b603f546fffffffffffffffffffffffffffffffff1690611c6f565b90506000610daa610da38c611d4b565b8490611c6f565b9050818110610de957603f80547fffffffffffffffffffffffffffffffff000000000000000000000000000000001690556000603a8190559450610e50565b610e0d610e08610df886611d4b565b610e028486612795565b90611d66565b611da5565b603f80547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216918217905594505b50505b85891415610ecb5773ffffffffffffffffffffffffffffffffffffffff8a16600090815260386020908152604080832080546fffffffffffffffffffffffffffffffff169055603e909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000169055610f20565b73ffffffffffffffffffffffffffffffffffffffff8a166000908152603e6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000164264ffffffffff161790555b603f80547fffffffffffffffffffffff0000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000004264ffffffffff160217905588851115611049576000610f788a87612795565b9050610f858b8287611e4b565b60405181815273ffffffffffffffffffffffffffffffffffffffff8c16906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36040805182815260208101899052908101879052606081018390526080810185905260a0810184905273ffffffffffffffffffffffffffffffffffffffff8c169081907fc16f4e4ca34d790de4c656c72fd015c667d688f20be64eea360618545c4c530f9060c00160405180910390a350611119565b6000611055868b612795565b90506110628b8287611fbc565b60405181815260009073ffffffffffffffffffffffffffffffffffffffff8d16907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36040805182815260208101899052908101879052606081018590526080810184905273ffffffffffffffffffffffffffffffffffffffff8c16907f44bd20a79e993bdcc7cbedf54a3b4d19fb78490124b6b90d04fe3242eea579e89060a00160405180910390a2505b50955093505050505b9250929050565b6000808073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163373ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f3233000000000000000000000000000000000000000000000000000000000000815250906111ea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610739919061233e565b506112246040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b8673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146112625761126287898861200c565b60008061126e89611cc6565b925092505061127b610a93565b808452603f546fffffffffffffffffffffffffffffffff1660a08501526112a390899061277d565b603a81905560208401526112b688611d4b565b60408481019190915273ffffffffffffffffffffffffffffffffffffffff8a1660009081526038602052205470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff16606084015261135261132261131d8a8561277d565b611d4b565b6040850151611331908a611c6f565b61134861133d86611d4b565b606088015190611c6f565b610e02919061277d565b6080840181905261136290611da5565b73ffffffffffffffffffffffffffffffffffffffff8a16600090815260386020908152604080832080546fffffffffffffffffffffffffffffffff908116700100000000000000000000000000000000969091168602179055603e825290912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000164264ffffffffff16908117909155603f80547fffffffffffffffffffffff0000000000ffffffffffffffffffffffffffffffff16919093021790915583015161146190610e089061143690611d4b565b6040860151611446908b90611c6f565b6113486114568860000151611d4b565b60a089015190611c6f565b603f80547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216918217905560a084015260006114b2828a61277d565b90506114c38a828660000151611e4b565b60405181815273ffffffffffffffffffffffffffffffffffffffff8b16906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a360808085015160a080870151602080890151604080518881529283018a9052820188905260608201949094529384015282015273ffffffffffffffffffffffffffffffffffffffff808c1691908d16907fc16f4e4ca34d790de4c656c72fd015c667d688f20be64eea360618545c4c530f9060c00160405180910390a35050602082015160a0909201519015999198509650945050505050565b6115b6338383611ad0565b5050565b60015460039060ff16806115cd5750303b155b806115d9575060005481115b611665576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a65640000000000000000000000000000000000006064820152608401610739565b60015460ff161580156116a257600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f38370000000000000000000000000000000000000000000000000000000000008152509061175f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610739919061233e565b50611769866120cc565b611772856120df565b603d80546037805473ffffffffffffffffffffffffffffffffffffffff8d81167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179091558a16610100027fffffffffffffffffffffff00000000000000000000000000000000000000000090911660ff8a16171790556117f7611b96565b6035819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff167f40251fbfb6656cfa65a00d7879029fec1fad21d28fdcff2f4f68f52795b74f2c8a8a8a8a8a8a604051611884969594939291906127ac565b60405180910390a380156118bb57600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b50505050505050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa158015611934573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611958919061284c565b6040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015290915073ffffffffffffffffffffffffffffffffffffffff821690637be53ca190602401602060405180830381865afa1580156119c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119e99190612869565b6040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525090611a57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610739919061233e565b5050603d805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b603f5460009081906fffffffffffffffffffffffffffffffff16611ac881611b47565b939092509050565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526036602090815260408083208786168085529083529281902086905560375490518681529416939192917fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1910160405180910390a4505050565b600080611b53603a5490565b905080611b635750600092915050565b6000611b8284603f60109054906101000a900464ffffffffff16611c5b565b9050611b8e8282611c6f565b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611bc16120f2565b8051602091820120604080518082018252600181527f310000000000000000000000000000000000000000000000000000000000000090840152805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000611c688383426120fc565b9392505050565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff83900484111517611ca457600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600080600080611d0a8573ffffffffffffffffffffffffffffffffffffffff166000908152603860205260409020546fffffffffffffffffffffffffffffffff1690565b905080611d2257600080600093509350935050611d44565b6000611d2d86610af2565b90508181611d3b8282612795565b94509450945050505b9193909250565b633b9aca008181029081048214611d6157600080fd5b919050565b600081156b033b2e3c9fd0803ce800000060028404190484111715611d8a57600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b60006fffffffffffffffffffffffffffffffff821115611e47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401610739565b5090565b6000611e5683611da5565b73ffffffffffffffffffffffffffffffffffffffff85166000908152603860205260409020549091506fffffffffffffffffffffffffffffffff16611e9b828261288b565b73ffffffffffffffffffffffffffffffffffffffff868116600090815260386020526040902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9390931692909217909155603d5461010090041615611fb557603d546040517f31873e2e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152602482018690526fffffffffffffffffffffffffffffffff84166044830152610100909204909116906331873e2e90606401600060405180830381600087803b158015611fa157600080fd5b505af1158015610a88573d6000803e3d6000fd5b5050505050565b6000611fc783611da5565b73ffffffffffffffffffffffffffffffffffffffff85166000908152603860205260409020549091506fffffffffffffffffffffffffffffffff16611e9b82826128bf565b73ffffffffffffffffffffffffffffffffffffffff808416600090815260366020908152604080832093861683529290529081205461204c908390612795565b73ffffffffffffffffffffffffffffffffffffffff808616600081815260366020908152604080832089861680855292529182902085905560375491519495509216927fda919360433220e13b51e8c211e490d148e61a3bd53de8c097194e458b97f3e1906120be9086815260200190565b60405180910390a450505050565b80516115b690603b906020840190612243565b80516115b690603c906020840190612243565b6060610ab4610640565b60008061211064ffffffffff851684612795565b90508061212c576b033b2e3c9fd0803ce8000000915050611c68565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81016000808060028511612162576000612167565b600285035b925066038882915c400061217b8a80611c6f565b81612188576121886128f0565b0491506301e1338061219a838b611c6f565b816121a7576121a76128f0565b0490506000826121b7868861291f565b6121c1919061291f565b600290049050600082856121d5888a61291f565b6121df919061291f565b6121e9919061291f565b60069004905080826301e133806122008a8f61291f565b61220a919061295c565b612220906b033b2e3c9fd0803ce800000061277d565b61222a919061277d565b612234919061277d565b9b9a5050505050505050505050565b82805461224f906126fa565b90600052602060002090601f01602090048101928261227157600085556122b7565b82601f1061228a57805160ff19168380011785556122b7565b828001600101855582156122b7579182015b828111156122b757825182559160200191906001019061229c565b50611e479291505b80821115611e4757600081556001016122bf565b6000815180845260005b818110156122f9576020818501810151868301820152016122dd565b8181111561230b576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000611c6860208301846122d3565b73ffffffffffffffffffffffffffffffffffffffff8116811461237357600080fd5b50565b8035611d6181612351565b6000806040838503121561239457600080fd5b823561239f81612351565b946020939093013593505050565b803560ff81168114611d6157600080fd5b600080600080600080600060e0888a0312156123d957600080fd5b87356123e481612351565b965060208801356123f481612351565b95506040880135945060608801359350612410608089016123ad565b925060a0880135915060c0880135905092959891949750929550565b60008060006060848603121561244157600080fd5b833561244c81612351565b9250602084013561245c81612351565b929592945050506040919091013590565b6000806040838503121561248057600080fd5b823561248b81612351565b9150602083013561249b81612351565b809150509250929050565b6000602082840312156124b857600080fd5b8135611c6881612351565b600080600080608085870312156124d957600080fd5b84356124e481612351565b935060208501356124f481612351565b93969395505050506040820135916060013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261254957600080fd5b813567ffffffffffffffff8082111561256457612564612509565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156125aa576125aa612509565b816040528381528660208588010111156125c357600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008083601f8401126125f557600080fd5b50813567ffffffffffffffff81111561260d57600080fd5b60208301915083602082850101111561112257600080fd5b60008060008060008060008060e0898b03121561264157600080fd5b883561264c81612351565b9750602089013561265c81612351565b965061266a60408a01612376565b955061267860608a016123ad565b9450608089013567ffffffffffffffff8082111561269557600080fd5b6126a18c838d01612538565b955060a08b01359150808211156126b757600080fd5b6126c38c838d01612538565b945060c08b01359150808211156126d957600080fd5b506126e68b828c016125e3565b999c989b5096995094979396929594505050565b600181811c9082168061270e57607f821691505b60208210811415612748577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156127905761279061274e565b500190565b6000828210156127a7576127a761274e565b500390565b73ffffffffffffffffffffffffffffffffffffffff8716815260ff8616602082015260a0604082015260006127e460a08301876122d3565b82810360608401526127f681876122d3565b905082810360808401528381528385602083013760006020858301015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f860116820101915050979650505050505050565b60006020828403121561285e57600080fd5b8151611c6881612351565b60006020828403121561287b57600080fd5b81518015158114611c6857600080fd5b60006fffffffffffffffffffffffffffffffff8083168185168083038211156128b6576128b661274e565b01949350505050565b60006fffffffffffffffffffffffffffffffff838116908316818110156128e8576128e861274e565b039392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156129575761295761274e565b500290565b600082612992577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea264697066735822122040441a7ef1e29806363e59975b22bc096903f3cc5399c8a98676394275181a3b64736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
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
    static createInterface(): MockStableDebtTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockStableDebtToken;
}
export {};
