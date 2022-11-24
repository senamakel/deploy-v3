"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlashLoanLogic__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "target",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "initiator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "asset",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum DataTypes.InterestRateMode",
                name: "interestRateMode",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "premium",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint16",
                name: "referralCode",
                type: "uint16",
            },
        ],
        name: "FlashLoan",
        type: "event",
    },
];
const _bytecode = "0x612b6b61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c80632e7263ea14610045578063a1fe0e8d14610067575b600080fd5b81801561005157600080fd5b506100656100603660046122d2565b610087565b005b81801561007357600080fd5b5061006561008236600461246f565b610928565b61009a8582602001518360400151610b94565b6101066040518060e00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016060815260200160008152602001600081525090565b81602001515167ffffffffffffffff8111156101245761012461201a565b60405190808252806020026020018201604052801561014d578160200160208202803683370190505b506080820152815173ffffffffffffffffffffffffffffffffffffffff1681526101a0820151610187578161010001518260e0015161018b565b6000805b60c083015260a0820152600060208201525b816020015151816020015110156102fb5781604001518160200151815181106101c8576101c8612539565b60209081029190910101516060820181905260a08201516101e99190610c85565b816080015182602001518151811061020357610203612539565b602002602001018181525050856000836020015183602001518151811061022c5761022c612539565b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff90811683529082019290925260409081016000206004908101548551606086015193517f4efecaa5000000000000000000000000000000000000000000000000000000008152908516928101929092526024820192909252911690634efecaa590604401600060405180830381600087803b1580156102cb57600080fd5b505af11580156102df573d6000803e3d6000fd5b50505060208201805191506102f382612597565b90525061019d565b806000015173ffffffffffffffffffffffffffffffffffffffff1663920f5c84836020015184604001518460800151338760a001516040518663ffffffff1660e01b8152600401610350959493929190612676565b6020604051808303816000875af115801561036f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610393919061272a565b6040518060400160405280600281526020017f31330000000000000000000000000000000000000000000000000000000000008152509061040a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104019190612747565b60405180910390fd5b50600060208201525b8160200151518160200151101561092057816020015181602001518151811061043e5761043e612539565b6020026020010151816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050816040015181602001518151811061049757610497612539565b60209081029190910101516060820152600082606001518260200151815181106104c3576104c3612539565b602002602001015160028111156104dc576104dc61275a565b60028111156104ed576104ed61275a565b14156105d4576105cf866000836040015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c0016040528084606001518152602001846080015185602001518151811061056757610567612539565b602002602001015181526020018460c001518152602001846040015173ffffffffffffffffffffffffffffffffffffffff168152602001856000015173ffffffffffffffffffffffffffffffffffffffff1681526020018560c0015161ffff16815250610cc8565b610908565b73__$f250b95a8491f1e84f401ed6d1693cd837$__631e6473f987878787604051806101800160405280886040015173ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff168152602001896080015173ffffffffffffffffffffffffffffffffffffffff16815260200188606001518152602001896060015189602001518151811061067e5761067e612539565b602002602001015160028111156106975761069761275a565b60028111156106a8576106a861275a565b81526020018960c0015161ffff1681526020016000151581526020018961012001518152602001896101400151815260200189610160015173ffffffffffffffffffffffffffffffffffffffff1663fca513a86040518163ffffffff1660e01b8152600401602060405180830381865afa15801561072a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074e9190612789565b73ffffffffffffffffffffffffffffffffffffffff16815260200189610180015160ff16815260200189610160015173ffffffffffffffffffffffffffffffffffffffff16635eb88d3d6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107eb9190612789565b73ffffffffffffffffffffffffffffffffffffffff168152506040518663ffffffff1660e01b81526004016108249594939291906127e1565b60006040518083038186803b15801561083c57600080fd5b505af4158015610850573d6000803e3d6000fd5b505050508160c0015161ffff16816040015173ffffffffffffffffffffffffffffffffffffffff16836000015173ffffffffffffffffffffffffffffffffffffffff167fefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f033856060015187606001518760200151815181106108d4576108d4612539565b602002602001015160028111156108ed576108ed61275a565b60006040516108ff9493929190612909565b60405180910390a45b6020810180519061091882612597565b905250610413565b505050505050565b61093182610fd5565b805160c0820151604083015160009161094a9190610c85565b600480860154855160408088015190517f4efecaa500000000000000000000000000000000000000000000000000000000815294955073ffffffffffffffffffffffffffffffffffffffff90921693634efecaa5936109cb93910173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156109e557600080fd5b505af11580156109f9573d6000803e3d6000fd5b505050506020830151604080850151606086015191517f1b11d0ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861693631b11d0ff93610a6293919287913391600401612949565b6020604051808303816000875af1158015610a81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa5919061272a565b6040518060400160405280600281526020017f313300000000000000000000000000000000000000000000000000000000000081525090610b13576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104019190612747565b50610b8e846040518060c00160405280866040015181526020018481526020018660a001518152602001866020015173ffffffffffffffffffffffffffffffffffffffff168152602001866000015173ffffffffffffffffffffffffffffffffffffffff168152602001866080015161ffff16815250610cc8565b50505050565b80518251146040518060400160405280600281526020017f343900000000000000000000000000000000000000000000000000000000000081525090610c07576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104019190612747565b5060005b8251811015610b8e57610c73846000858481518110610c2c57610c2c612539565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020610fd5565b80610c7d81612597565b915050610c0b565b600081157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec7783900484111517610cba57600080fd5b506127109102611388010490565b6000610ce582604001518360200151610c8590919063ffffffff16565b90506000818360200151610cf99190612999565b9050600083602001518460000151610d1191906129b0565b90506000610d1e8661115f565b9050610d2a8682611378565b6101008101516008870154610ddb91610d55916fffffffffffffffffffffffffffffffff1690611403565b826101e0015173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610da5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc991906129c8565b610dd391906129b0565b87908561145a565b6101008201819052610df790610df290869061150a565b611549565b600887018054600090610e1d9084906fffffffffffffffffffffffffffffffff166129e1565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550610e718186606001518460008a6115ef90949392919063ffffffff16565b60808501516101e08201516060870151610ea49273ffffffffffffffffffffffffffffffffffffffff909116918561196f565b6101e081015160808601516040517f88dd91a100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9182166004820152602481018590529116906388dd91a190604401600060405180830381600087803b158015610f1f57600080fd5b505af1158015610f33573d6000803e3d6000fd5b505050508460a0015161ffff16856060015173ffffffffffffffffffffffffffffffffffffffff16866080015173ffffffffffffffffffffffffffffffffffffffff167fefefaba5e921573100900a3ad9cf29f222d995fb3b6045797eaea7521bd8d6f033896000015160006002811115610fb057610fb061275a565b8b60200151604051610fc59493929190612909565b60405180910390a4505050505050565b60408051602081019091528154808252671000000000000000161515156040518060400160405280600281526020017f323900000000000000000000000000000000000000000000000000000000000081525090611060576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104019190612747565b5080516701000000000000001615156040518060400160405280600281526020017f3237000000000000000000000000000000000000000000000000000000000000815250906110dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104019190612747565b5080516780000000000000001615156040518060400160405280600281526020017f39310000000000000000000000000000000000000000000000000000000000008152509061115a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104019190612747565b505050565b611167611f6d565b61116f611f6d565b60408051602081018252845481526101c0830181905251901c61ffff166101a082015260018301546fffffffffffffffffffffffffffffffff808216610100840181905260e0840152600285015480821661014085018190526101208501527001000000000000000000000000000000009283900482166101608501528290041661018083015260048085015473ffffffffffffffffffffffffffffffffffffffff9081166101e085015260058601548116610200850152600686015416610220840181905260038601549290920464ffffffffff16610240840152604080517fb1bf962d000000000000000000000000000000000000000000000000000000008152905163b1bf962d928281019260209291908290030181865afa15801561129c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c091906129c8565b816020018181525081600001818152505080610200015173ffffffffffffffffffffffffffffffffffffffff1663797743386040518163ffffffff1660e01b8152600401608060405180830381865afa158015611321573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113459190612a15565b64ffffffffff166102608501526060840181905260808401829052604084019290925260c083015260a082015292915050565b60038201544264ffffffffff9081167001000000000000000000000000000000009092041614156113a7575050565b6113b18282611a51565b6113bb8282611b72565b5060030180547fffffffffffffffffffffff0000000000ffffffffffffffffffffffffffffffff167001000000000000000000000000000000004264ffffffffff1602179055565b600081157ffffffffffffffffffffffffffffffffffffffffffe6268e1b017bfe18bffffff8390048411151761143857600080fd5b506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b600183015460009081906114b2906fffffffffffffffffffffffffffffffff166b033b2e3c9fd0803ce80000006114a261149388611cf1565b61149c88611cf1565b9061150a565b6114ac91906129b0565b90611403565b90506114bd81611549565b6001860180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9290921691909117905590505b9392505050565b600081156b033b2e3c9fd0803ce80000006002840419048411171561152e57600080fd5b506b033b2e3c9fd0803ce80000009190910260028204010490565b60006fffffffffffffffffffffffffffffffff8211156115eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203160448201527f32382062697473000000000000000000000000000000000000000000000000006064820152608401610401565b5090565b61161a6040518060800160405280600081526020016000815260200160008152602001600081525090565b610140850151602086015161162e91611403565b606082015260078601546040805161012081019091526101c08701515173ffffffffffffffffffffffffffffffffffffffff9092169163a58987099190819060b01c640fffffffff166116825760006116ae565b60088a015470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff165b6fffffffffffffffffffffffffffffffff1681526020018681526020018581526020018860c001518152602001846060015181526020018860a001518152602001886101a0015181526020018773ffffffffffffffffffffffffffffffffffffffff168152602001886101e0015173ffffffffffffffffffffffffffffffffffffffff168152506040518263ffffffff1660e01b81526004016117ce9190600061012082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015173ffffffffffffffffffffffffffffffffffffffff80821660e0850152610100915080828601511682850152505092915050565b606060405180830381865afa1580156117eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061180f9190612a60565b6040840152602083015280825261182590611549565b6001870180546fffffffffffffffffffffffffffffffff928316700100000000000000000000000000000000029216919091179055602081015161186890611549565b6003870180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff9290921691909117905560408101516118b990611549565b6002870180546fffffffffffffffffffffffffffffffff92831670010000000000000000000000000000000002921691909117905580516020808301516040808501516101008a01516101408b0151835196875294860193909352908401526060830152608082015273ffffffffffffffffffffffffffffffffffffffff8516907f804c9b842b2748a22bb64b345453a3de7ca54a6ca45ce00d415894979e22897a9060a00160405180910390a2505050505050565b6040517f23b872dd0000000000000000000000000000000000000000000000000000000080825273ffffffffffffffffffffffffffffffffffffffff8581166004840152841660248301526044820183905290600080606483828a5af16119da573d6000803e3d6000fd5b506119e485611d0c565b611a4a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f475076323a206661696c6564207472616e7366657246726f6d000000000000006044820152606401610401565b5050505050565b61016081015115611ae1576000611a72826101600151836102400151611dd8565b9050611a8b8260e001518261140390919063ffffffff16565b6101008301819052611a9c90611549565b6001840180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055505b805115611b6e576000611afe826101800151836102400151611e1d565b9050611b188261012001518261140390919063ffffffff16565b6101408301819052611b2990611549565b6002840180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000166fffffffffffffffffffffffffffffffff92909216919091179055505b5050565b611bab6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6101a0820151611bba57505050565b6101208201518251611bcb91611403565b60208201526101408201518251611be191611403565b60408201526060820151610260830151610240840151611c0992919064ffffffffff16611e26565b606082018190526040830151611c1e91611403565b808252602082015160808401516040840151611c3a91906129b0565b611c449190612999565b611c4e9190612999565b608082018190526101a0830151611c659190610c85565b60a082018190521561115a57611c90610df28361010001518360a0015161150a90919063ffffffff16565b600884018054600090611cb69084906fffffffffffffffffffffffffffffffff166129e1565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff160217905550505050565b633b9aca008181029081048214611d0757600080fd5b919050565b6000611d4c565b7f08c379a00000000000000000000000000000000000000000000000000000000060005260206004528060245250806044525060646000fd5b3d8015611d8b5760208114611dc557611d867f475076323a206d616c666f726d6564207472616e7366657220726573756c7400601f611d13565b611dd2565b823b611dbc57611dbc7f475076323a206e6f74206120636f6e74726163740000000000000000000000006014611d13565b60019150611dd2565b3d6000803e600051151591505b50919050565b600080611dec64ffffffffff841642612999565b611df69085612a8e565b6301e1338090049050611e15816b033b2e3c9fd0803ce80000006129b0565b949350505050565b60006115038383425b600080611e3a64ffffffffff851684612999565b905080611e56576b033b2e3c9fd0803ce8000000915050611503565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81016000808060028511611e8c576000611e91565b600285035b925066038882915c4000611ea58a80611403565b81611eb257611eb2612acb565b0491506301e13380611ec4838b611403565b81611ed157611ed1612acb565b049050600082611ee18688612a8e565b611eeb9190612a8e565b60029004905060008285611eff888a612a8e565b611f099190612a8e565b611f139190612a8e565b60069004905080826301e13380611f2a8a8f612a8e565b611f349190612afa565b611f4a906b033b2e3c9fd0803ce80000006129b0565b611f5491906129b0565b611f5e91906129b0565b9b9a5050505050505050505050565b6040518061028001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611ff16040518060200160405280600081525090565b815260006020820181905260408201819052606082018190526080820181905260a09091015290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561206d5761206d61201a565b60405290565b60405160e0810167ffffffffffffffff8111828210171561206d5761206d61201a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120dd576120dd61201a565b604052919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461210757600080fd5b50565b8035611d07816120e5565b600067ffffffffffffffff82111561212f5761212f61201a565b5060051b60200190565b600082601f83011261214a57600080fd5b8135602061215f61215a83612115565b612096565b82815260059290921b8401810191818101908684111561217e57600080fd5b8286015b848110156121a2578035612195816120e5565b8352918301918301612182565b509695505050505050565b600082601f8301126121be57600080fd5b813560206121ce61215a83612115565b82815260059290921b840181019181810190868411156121ed57600080fd5b8286015b848110156121a257803583529183019183016121f1565b600082601f83011261221957600080fd5b813567ffffffffffffffff8111156122335761223361201a565b61226460207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612096565b81815284602083860101111561227957600080fd5b816020850160208301376000918101602001919091529392505050565b803561ffff81168114611d0757600080fd5b803560ff81168114611d0757600080fd5b801515811461210757600080fd5b8035611d07816122b9565b600080600080600060a086880312156122ea57600080fd5b85359450602086013593506040860135925060608601359150608086013567ffffffffffffffff8082111561231e57600080fd5b908701906101c0828a03121561233357600080fd5b61233b612049565b6123448361210a565b815260208301358281111561235857600080fd5b6123648b828601612139565b60208301525060408301358281111561237c57600080fd5b6123888b8286016121ad565b6040830152506060830135828111156123a057600080fd5b6123ac8b8286016121ad565b6060830152506123be6080840161210a565b608082015260a0830135828111156123d557600080fd5b6123e18b828601612208565b60a0830152506123f360c08401612296565b60c082015260e08381013590820152610100808401359082015261012080840135908201526101408084013590820152610160915061243382840161210a565b8282015261018091506124478284016122a8565b828201526101a0915061245b8284016122c7565b828201528093505050509295509295909350565b6000806040838503121561248257600080fd5b82359150602083013567ffffffffffffffff808211156124a157600080fd5b9084019060e082870312156124b557600080fd5b6124bd612073565b6124c68361210a565b81526124d46020840161210a565b6020820152604083013560408201526060830135828111156124f557600080fd5b61250188828601612208565b60608301525061251360808401612296565b608082015260a083013560a082015260c083013560c08201528093505050509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156125c9576125c9612568565b5060010190565b600081518084526020808501945080840160005b83811015612600578151875295820195908201906001016125e4565b509495945050505050565b6000815180845260005b8181101561263157602081850181015186830182015201612615565b81811115612643576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60a0808252865190820181905260009060209060c0840190828a01845b828110156126c557815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101612693565b505050838103828501526126d981896125d0565b91505082810360408401526126ee81876125d0565b905073ffffffffffffffffffffffffffffffffffffffff85166060840152828103608084015261271e818561260b565b98975050505050505050565b60006020828403121561273c57600080fd5b8151611503816122b9565b602081526000611503602083018461260b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60006020828403121561279b57600080fd5b8151611503816120e5565b600381106127dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b858152602081018590526040810184905260608101839052815173ffffffffffffffffffffffffffffffffffffffff1660808201526102008101602083015173ffffffffffffffffffffffffffffffffffffffff811660a084015250604083015173ffffffffffffffffffffffffffffffffffffffff811660c084015250606083015160e0830152608083015161010061287d818501836127a6565b60a085015191506101206128968186018461ffff169052565b60c086015192506101406128ad8187018515159052565b60e087015161016087810191909152928701516101808701529086015173ffffffffffffffffffffffffffffffffffffffff9081166101a08701529086015160ff166101c0860152908501519081166101e085015290506121a2565b73ffffffffffffffffffffffffffffffffffffffff85168152602081018490526080810161293a60408301856127a6565b82606083015295945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835286602084015285604084015280851660608401525060a0608083015261298e60a083018461260b565b979650505050505050565b6000828210156129ab576129ab612568565b500390565b600082198211156129c3576129c3612568565b500190565b6000602082840312156129da57600080fd5b5051919050565b60006fffffffffffffffffffffffffffffffff808316818516808303821115612a0c57612a0c612568565b01949350505050565b60008060008060808587031215612a2b57600080fd5b845193506020850151925060408501519150606085015164ffffffffff81168114612a5557600080fd5b939692955090935050565b600080600060608486031215612a7557600080fd5b8351925060208401519150604084015190509250925092565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615612ac657612ac6612568565b500290565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082612b30577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220073e49c8744651a445457bbe27196180ee83b4d788280b80d0520309f1b057c764736f6c634300080a0033";
const isSuperArgs = (xs) => {
    return (typeof xs[0] === "string" ||
        Array.isArray(xs[0]) ||
        "_isInterface" in xs[0]);
};
class FlashLoanLogic__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            const [linkLibraryAddresses, signer] = args;
            super(_abi, FlashLoanLogic__factory.linkBytecode(linkLibraryAddresses), signer);
        }
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$f250b95a8491f1e84f401ed6d1693cd837\\$__", "g"), linkLibraryAddresses["@mahalend/core-v3/contracts/protocol/libraries/logic/BorrowLogic.sol:BorrowLogic"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.FlashLoanLogic__factory = FlashLoanLogic__factory;
FlashLoanLogic__factory.bytecode = _bytecode;
FlashLoanLogic__factory.abi = _abi;
