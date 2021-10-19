require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain hole idea enroll fortune segment'; 
let testAccounts = [
"0x40074d9d7fe0379b916da2591bb72f491b5090199421c69f18b8adcb974bd80d",
"0x0a43055fba8ec7a683c089e8f5f546f695a259edcd33798b67d3d2f76c9eb8f1",
"0x93ecc79ecc02e41a1fdffe6d4c52c851437518913c6c0e031fff2ba9d2e7351d",
"0xab9e2d6b164ad7e0567b96c1d3a25f11898396b4f5b5159b09d8ccbcb0b795e8",
"0x89e8941707497478dd2dca047daa09f8388b96880a36587838fa5e31854687c4",
"0xb0cc56361948b22b2398c462b6efa564408044cff533b091776f91c535c4fea0",
"0x967b45bf6ba1df1d5b2bf5293d790ee2c659b54c77b06a3c46cf955cfd4e0e5c",
"0xe19780bdfb77aa4d06d794c7ba9812296fad26d1651dfeaeedb07356f2f7dc51",
"0xe99a3cb25887ebc1f022064fa5e5aff2b49a7270e97a2fc349d7e95cee3f4de5",
"0x4bb8a6f4d43a1793bb6a550c1607a93f096aa966cf581db687d9103481c73718"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

