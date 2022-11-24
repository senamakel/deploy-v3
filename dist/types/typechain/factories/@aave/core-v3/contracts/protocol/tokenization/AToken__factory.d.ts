import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type { AToken, ATokenInterface } from "../../../../../../@mahalend/core-v3/contracts/protocol/tokenization/AToken";
type ATokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AToken__factory extends ContractFactory {
    constructor(...args: ATokenConstructorParams);
    deploy(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AToken>;
    getDeployTransaction(pool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AToken;
    connect(signer: Signer): AToken__factory;
    static readonly bytecode = "0x60e0604052600080553480156200001557600080fd5b50604051620038a8380380620038a883398101604081905262000038916200021d565b806040518060400160405280600b81526020016a105513d2d15397d253541360aa1b8152506040518060400160405280600b81526020016a105513d2d15397d253541360aa1b81525060008383838383838383836001600160a01b0316630542975c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000ca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000f091906200021d565b6001600160a01b03166080528251620001119060379060208601906200015e565b508151620001279060389060208501906200015e565b506039805460ff191660ff9290921691909117905550506001600160a01b031660a05250504660c052506200028195505050505050565b8280546200016c9062000244565b90600052602060002090601f016020900481019282620001905760008555620001db565b82601f10620001ab57805160ff1916838001178555620001db565b82800160010185558215620001db579182015b82811115620001db578251825591602001919060010190620001be565b50620001e9929150620001ed565b5090565b5b80821115620001e95760008155600101620001ee565b6001600160a01b03811681146200021a57600080fd5b50565b6000602082840312156200023057600080fd5b81516200023d8162000204565b9392505050565b600181811c908216806200025957607f821691505b602082108114156200027b57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c051613595620003136000396000611ccb0152600081816103a90152818161071d0152818161088201528181610a8101528181610c9b01528181610d8001528181610e6301528181610ee301528181610f87015281816110af01528181611707015281816119d70152818161238001526124f701526000818161113601526117c601526135956000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c80637df5bd3b1161012a578063b1bf962d116100bd578063d7020d0a1161008c578063e075398611610071578063e07539861461058c578063e655dbd8146105e8578063f866c319146105fb57600080fd5b8063d7020d0a14610533578063dd62ed3e1461054657600080fd5b8063b1bf962d146104f2578063b3f1c93d146104fa578063cea9d26f1461050d578063d505accf1461052057600080fd5b8063a457c2d7116100f9578063a457c2d714610490578063a9059cbb146104a3578063ae167335146104b6578063b16a19de146104d457600080fd5b80637df5bd3b1461044f5780637ecebe001461046257806388dd91a11461047557806395d89b411461048857600080fd5b806330adf81f116101bd5780634efecaa51161018c5780637535d246116101715780637535d246146103a457806375d26413146103f0578063781603761461041357600080fd5b80634efecaa51461037e57806370a082311461039157600080fd5b806330adf81f14610327578063313ce5671461034e5780633644e51514610363578063395093511461036b57600080fd5b806318160ddd116101f957806318160ddd146102e4578063183fb413146102ec5780631da24f3e1461030157806323b872dd1461031457600080fd5b806306fdde031461022b578063095ea7b3146102495780630afbcdc91461026c5780630bd7ad3b146102ce575b600080fd5b61023361060e565b6040516102409190612ffc565b60405180910390f35b61025c61025736600461304b565b6106a0565b6040519015158152602001610240565b6102b961027a366004613077565b73ffffffffffffffffffffffffffffffffffffffff166000908152603460205260409020546036546fffffffffffffffffffffffffffffffff90911691565b60408051928352602083019190915201610240565b6102d6600181565b604051908152602001610240565b6102d66106b6565b6102ff6102fa3660046130ee565b610795565b005b6102d661030f366004613077565b610b52565b61025c6103223660046131e2565b610b91565b6102d67f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b60395460405160ff9091168152602001610240565b6102d6610c11565b61025c61037936600461304b565b610c20565b6102ff61038c36600461304b565b610c64565b6102d661039f366004613077565b610d31565b6103cb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610240565b603954610100900473ffffffffffffffffffffffffffffffffffffffff166103cb565b6102336040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525081565b6102ff61045d366004613223565b610e2c565b6102d6610470366004613077565b610f25565b6102ff61048336600461304b565b610f50565b610233610ff4565b61025c61049e36600461304b565b611003565b61025c6104b136600461304b565b611047565b603c5473ffffffffffffffffffffffffffffffffffffffff166103cb565b603d5473ffffffffffffffffffffffffffffffffffffffff166103cb565b6102d661106a565b61025c610508366004613245565b611075565b6102ff61051b3660046131e2565b611132565b6102ff61052e36600461328b565b611376565b6102ff610541366004613245565b6116d0565b6102d66105543660046132f9565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260356020908152604080832093909416825291909152205490565b6102d661059a366004613077565b73ffffffffffffffffffffffffffffffffffffffff1660009081526034602052604090205470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1690565b6102ff6105f6366004613077565b6117c2565b6102ff6106093660046131e2565b6119a0565b60606037805461061d90613332565b80601f016020809104026020016040519081016040528092919081815260200182805461064990613332565b80156106965780601f1061066b57610100808354040283529160200191610696565b820191906000526020600020905b81548152906001019060200180831161067957829003601f168201915b5050505050905090565b60006106ad338484611a52565b50600192915050565b6000806106c260365490565b9050806106d157600091505090565b603d546040517fd15e005300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015261078f917f0000000000000000000000000000000000000000000000000000000000000000169063d15e005390602401602060405180830381865afa158015610764573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107889190613380565b8290611ac0565b91505090565b6001805460ff16806107a65750303b155b806107b2575060005481115b610843576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560448201527f656e20696e697469616c697a656400000000000000000000000000000000000060648201526084015b60405180910390fd5b60015460ff1615801561088057600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168117905560008290555b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168d73ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f38370000000000000000000000000000000000000000000000000000000000008152509061093d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b5061097d88888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b1792505050565b6109bc86868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611b2a92505050565b603980547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff8b16179055603c805473ffffffffffffffffffffffffffffffffffffffff808f167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617909255603d80548e8416921691909117905560398054918c16610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055610a79611b3d565b603b819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168b73ffffffffffffffffffffffffffffffffffffffff167fb19e051f8af41150ccccb3fc2c2d8d15f4a4cf434f32a559ba75fe73d6eea20b8e8d8d8d8d8d8d8d8d604051610b0c999897969594939291906133e2565b60405180910390a38015610b4357600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b50505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152603460205260408120546fffffffffffffffffffffffffffffffff165b92915050565b600080610b9d83611c02565b73ffffffffffffffffffffffffffffffffffffffff8616600090815260356020908152604080832033808552925290912054919250610bfb91879190610bf6906fffffffffffffffffffffffffffffffff86169061348c565b611a52565b610c06858583611ca8565b506001949350505050565b6000610c1b611cc7565b905090565b33600081815260356020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916106ad918590610bf69086906134a3565b60408051808201909152600281527f32330000000000000000000000000000000000000000000000000000000000006020820152337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610d08576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b50603d54610d2d9073ffffffffffffffffffffffffffffffffffffffff168383611d00565b5050565b603d546040517fd15e005300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152600091610b8b917f00000000000000000000000000000000000000000000000000000000000000009091169063d15e005390602401602060405180830381865afa158015610dc9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ded9190613380565b73ffffffffffffffffffffffffffffffffffffffff84166000908152603460205260409020546fffffffffffffffffffffffffffffffff165b90611ac0565b60408051808201909152600281527f32330000000000000000000000000000000000000000000000000000000000006020820152337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610ed0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b5081610eda575050565b603c54610f20907f00000000000000000000000000000000000000000000000000000000000000009073ffffffffffffffffffffffffffffffffffffffff168484611dd3565b505050565b73ffffffffffffffffffffffffffffffffffffffff81166000908152603a6020526040812054610b8b565b60408051808201909152600281527f32330000000000000000000000000000000000000000000000000000000000006020820152337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610f20576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b60606038805461061d90613332565b33600081815260356020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916106ad918590610bf690869061348c565b60008061105383611c02565b9050611060338583611ca8565b5060019392505050565b6000610c1b60365490565b60408051808201909152600281527f32330000000000000000000000000000000000000000000000000000000000006020820152600090337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461111c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b5061112985858585611dd3565b95945050505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa15801561119f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c391906134bb565b6040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015290915073ffffffffffffffffffffffffffffffffffffffff821690637be53ca190602401602060405180830381865afa158015611230573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125491906134d8565b6040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250906112c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b50603d5460408051808201909152600281527f383500000000000000000000000000000000000000000000000000000000000060208201529073ffffffffffffffffffffffffffffffffffffffff8681169116141561134e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b5061137073ffffffffffffffffffffffffffffffffffffffff85168484611d00565b50505050565b60408051808201909152600281527f3737000000000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff88166113f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b50834211156040518060400160405280600281526020017f37380000000000000000000000000000000000000000000000000000000000008152509061146b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b5073ffffffffffffffffffffffffffffffffffffffff87166000908152603a60205260408120549061149b610c11565b604080517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9602082015273ffffffffffffffffffffffffffffffffffffffff808d1692820192909252908a1660608201526080810189905260a0810184905260c0810188905260e0016040516020818303038152906040528051906020012060405160200161155c9291907f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8816918301919091526060820186905260808201859052915060019060a0016020604051602081039080840390855afa1580156115e2573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff16146040518060400160405280600281526020017f373900000000000000000000000000000000000000000000000000000000000081525090611688576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b506116948260016134a3565b73ffffffffffffffffffffffffffffffffffffffff8a166000908152603a60205260409020556116c5898989611a52565b505050505050505050565b60408051808201909152600281527f32330000000000000000000000000000000000000000000000000000000000006020820152337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614611774576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b5061178184848484612014565b73ffffffffffffffffffffffffffffffffffffffff8316301461137057603d546113709073ffffffffffffffffffffffffffffffffffffffff168484611d00565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663707cd7166040518163ffffffff1660e01b8152600401602060405180830381865afa15801561182f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061185391906134bb565b6040517f7be53ca100000000000000000000000000000000000000000000000000000000815233600482015290915073ffffffffffffffffffffffffffffffffffffffff821690637be53ca190602401602060405180830381865afa1580156118c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e491906134d8565b6040518060400160405280600181526020017f310000000000000000000000000000000000000000000000000000000000000081525090611952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b50506039805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b60408051808201909152600281527f32330000000000000000000000000000000000000000000000000000000000006020820152337f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614611a44576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b50610f208383836000612332565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526035602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff83900484111517611af557600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b8051610d2d906037906020840190612f01565b8051610d2d906038906020840190612f01565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611b686125ae565b8051602091820120604080518082018252600181527f310000000000000000000000000000000000000000000000000000000000000090840152805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b60006fffffffffffffffffffffffffffffffff821115611ca4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f3238206269747300000000000000000000000000000000000000000000000000606482015260840161083a565b5090565b610f208383836fffffffffffffffffffffffffffffffff166001612332565b60007f0000000000000000000000000000000000000000000000000000000000000000461415611cf85750603b5490565b610c1b611b3d565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff84166004830152602482018390529060008060448382895af1611d63573d6000803e3d6000fd5b50611d6d846125b8565b611370576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f475076323a206661696c6564207472616e736665720000000000000000000000604482015260640161083a565b600080611de08484612684565b60408051808201909152600281527f3234000000000000000000000000000000000000000000000000000000000000602082015290915081611e4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b5073ffffffffffffffffffffffffffffffffffffffff85166000908152603460205260408120546fffffffffffffffffffffffffffffffff8082169291611eac918491700100000000000000000000000000000000900416611ac0565b611eb68387611ac0565b611ec0919061348c565b9050611ecb85611c02565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260346020526040902080546fffffffffffffffffffffffffffffffff928316700100000000000000000000000000000000029216919091179055611f3387611f2e85611c02565b6126c3565b6000611f3f82886134a3565b90508773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611fa191815260200190565b60405180910390a3604080518281526020810184905290810187905273ffffffffffffffffffffffffffffffffffffffff808a1691908b16907f458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b861969060600160405180910390a35050159695505050505050565b60006120208383612684565b60408051808201909152600281527f323500000000000000000000000000000000000000000000000000000000000060208201529091508161208f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083a9190612ffc565b5073ffffffffffffffffffffffffffffffffffffffff85166000908152603460205260408120546fffffffffffffffffffffffffffffffff80821692916120ec918491700100000000000000000000000000000000900416611ac0565b6120f68386611ac0565b612100919061348c565b905061210b84611c02565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260346020526040902080546fffffffffffffffffffffffffffffffff9283167001000000000000000000000000000000000292169190911790556121738761216e85611c02565b61283f565b84811115612252576000612187868361348c565b90508773ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516121e991815260200190565b60405180910390a3604080518281526020810184905290810186905273ffffffffffffffffffffffffffffffffffffffff89169081907f458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b861969060600160405180910390a350612329565b600061225e828761348c565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516122c091815260200190565b60405180910390a3604080518281526020810184905290810186905273ffffffffffffffffffffffffffffffffffffffff80891691908a16907f4cf25bc1d991c17529c25213d3cc0cda295eeaad5f13f361969b12ea48015f90906060015b60405180910390a3505b50505050505050565b603d546040517fd15e005300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201819052916000917f00000000000000000000000000000000000000000000000000000000000000009091169063d15e005390602401602060405180830381865afa1580156123c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ed9190613380565b9050600061243382610e268973ffffffffffffffffffffffffffffffffffffffff166000908152603460205260409020546fffffffffffffffffffffffffffffffff1690565b9050600061247983610e268973ffffffffffffffffffffffffffffffffffffffff166000908152603460205260409020546fffffffffffffffffffffffffffffffff1690565b9050612487888888866128a3565b8415612554576040517fd5ed393300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015289811660248301528881166044830152606482018890526084820184905260a482018390527f0000000000000000000000000000000000000000000000000000000000000000169063d5ed39339060c401600060405180830381600087803b15801561253b57600080fd5b505af115801561254f573d6000803e3d6000fd5b505050505b73ffffffffffffffffffffffffffffffffffffffff8088169089167f4beccb90f994c31aced7a23b5611020728a23d8ec5cddd1a3e9d97b96fda866661259a8987612684565b60408051918252602082018890520161231f565b6060610c1b61060e565b60006125f8565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d80156126375760208114612671576126327f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f6125bf565b61267e565b823b612668576126687f475076323a206e6f74206120636f6e747261637400000000000000000000000060146125bf565b6001915061267e565b3d6000803e600051151591505b50919050565b600081156b033b2e3c9fd0803ce8000000600284041904841117156126a857600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b6036546126e26fffffffffffffffffffffffffffffffff8316826134a3565b60365573ffffffffffffffffffffffffffffffffffffffff83166000908152603460205260409020546fffffffffffffffffffffffffffffffff1661272783826134fa565b73ffffffffffffffffffffffffffffffffffffffff858116600090815260346020526040902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff93909316929092179091556039546101009004168015612838576040517f31873e2e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018590526fffffffffffffffffffffffffffffffff841660448301528216906331873e2e90606401600060405180830381600087803b15801561282457600080fd5b505af11580156116c5573d6000803e3d6000fd5b5050505050565b60365461285e6fffffffffffffffffffffffffffffffff83168261348c565b60365573ffffffffffffffffffffffffffffffffffffffff83166000908152603460205260409020546fffffffffffffffffffffffffffffffff16612727838261352e565b73ffffffffffffffffffffffffffffffffffffffff84166000908152603460205260408120546fffffffffffffffffffffffffffffffff80821692916128ff918491700100000000000000000000000000000000900416611ac0565b6129098385611ac0565b612913919061348c565b905060006129558673ffffffffffffffffffffffffffffffffffffffff166000908152603460205260409020546fffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff8716600090815260346020526040812054919250906129b090839070010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff16611ac0565b6129ba8387611ac0565b6129c4919061348c565b90506129cf85611c02565b73ffffffffffffffffffffffffffffffffffffffff8916600090815260346020526040902080546fffffffffffffffffffffffffffffffff928316700100000000000000000000000000000000029216919091179055612a2e85611c02565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260346020526040902080546fffffffffffffffffffffffffffffffff928316700100000000000000000000000000000000029216919091179055612aa08888612a9b612a968a8a612684565b611c02565b612c56565b60405183815273ffffffffffffffffffffffffffffffffffffffff8916906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36040805184815260208101859052808201879052905173ffffffffffffffffffffffffffffffffffffffff8a169133917f458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b861969181900360600190a38015612bf75760405181815273ffffffffffffffffffffffffffffffffffffffff8816906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36040805182815260208101839052808201879052905173ffffffffffffffffffffffffffffffffffffffff89169133917f458f5fa412d0f69b08dd84872b0215675cc67bc1d5b6fd93300a1c3878b861969181900360600190a35b8673ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8860405161231f91815260200190565b73ffffffffffffffffffffffffffffffffffffffff83166000908152603460205260409020546fffffffffffffffffffffffffffffffff16612c98828261352e565b73ffffffffffffffffffffffffffffffffffffffff85811660009081526034602052604080822080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9586161790559186168152205416612d0c83826134fa565b73ffffffffffffffffffffffffffffffffffffffff858116600090815260346020526040902080547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff93909316929092179091556039546101009004168015612ef9576036546040517f31873e2e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8881166004830152602482018390526fffffffffffffffffffffffffffffffff861660448301528316906331873e2e90606401600060405180830381600087803b158015612e0c57600080fd5b505af1158015612e20573d6000803e3d6000fd5b505050508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614612329576040517f31873e2e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152602482018390526fffffffffffffffffffffffffffffffff851660448301528316906331873e2e90606401600060405180830381600087803b158015612edf57600080fd5b505af1158015612ef3573d6000803e3d6000fd5b50505050505b505050505050565b828054612f0d90613332565b90600052602060002090601f016020900481019282612f2f5760008555612f75565b82601f10612f4857805160ff1916838001178555612f75565b82800160010185558215612f75579182015b82811115612f75578251825591602001919060010190612f5a565b50611ca49291505b80821115611ca45760008155600101612f7d565b6000815180845260005b81811015612fb757602081850181015186830182015201612f9b565b81811115612fc9576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061300f6020830184612f91565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461303857600080fd5b50565b803561304681613016565b919050565b6000806040838503121561305e57600080fd5b823561306981613016565b946020939093013593505050565b60006020828403121561308957600080fd5b813561300f81613016565b803560ff8116811461304657600080fd5b60008083601f8401126130b757600080fd5b50813567ffffffffffffffff8111156130cf57600080fd5b6020830191508360208285010111156130e757600080fd5b9250929050565b60008060008060008060008060008060006101008c8e03121561311057600080fd5b6131198c61303b565b9a5061312760208d0161303b565b995061313560408d0161303b565b985061314360608d0161303b565b975061315160808d01613094565b965067ffffffffffffffff8060a08e0135111561316d57600080fd5b61317d8e60a08f01358f016130a5565b909750955060c08d013581101561319357600080fd5b6131a38e60c08f01358f016130a5565b909550935060e08d01358110156131b957600080fd5b506131ca8d60e08e01358e016130a5565b81935080925050509295989b509295989b9093969950565b6000806000606084860312156131f757600080fd5b833561320281613016565b9250602084013561321281613016565b929592945050506040919091013590565b6000806040838503121561323657600080fd5b50508035926020909101359150565b6000806000806080858703121561325b57600080fd5b843561326681613016565b9350602085013561327681613016565b93969395505050506040820135916060013590565b600080600080600080600060e0888a0312156132a657600080fd5b87356132b181613016565b965060208801356132c181613016565b955060408801359450606088013593506132dd60808901613094565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561330c57600080fd5b823561331781613016565b9150602083013561332781613016565b809150509250929050565b600181811c9082168061334657607f821691505b6020821081141561267e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006020828403121561339257600080fd5b5051919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff808c168352808b1660208401525060ff8916604083015260c0606083015261342560c08301888a613399565b8281036080840152613438818789613399565b905082810360a084015261344d818587613399565b9c9b505050505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561349e5761349e61345d565b500390565b600082198211156134b6576134b661345d565b500190565b6000602082840312156134cd57600080fd5b815161300f81613016565b6000602082840312156134ea57600080fd5b8151801515811461300f57600080fd5b60006fffffffffffffffffffffffffffffffff8083168185168083038211156135255761352561345d565b01949350505050565b60006fffffffffffffffffffffffffffffffff838116908316818110156135575761355761345d565b03939250505056fea26469706673582212209ffba07fbf9d86f57700ed2e532716a6727668fad52e120bc926ba28b8a49a1e64736f6c634300080a0033";
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
    static createInterface(): ATokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AToken;
}
export {};
