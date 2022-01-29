require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth oil essay idea knee bridge gauge'; 
let testAccounts = [
"0x3ee46e82019938be45562320ffaa114fd9d96011173e53b0604f9385d08fe859",
"0x58a16e55b5dec1f8a62650abf428a791aa6c6bcdb1807680cfe1acc830b21dcf",
"0xafa4eb0522f6d61acf3546849458d214252eed04a9951f88a40d6d0e88b23982",
"0x6ff592b7a3a53322144b4dab77a3c93570752b9ffc0ab23e8ab4aa7509645094",
"0x8cc0a71978d034ce467fa6d5ad33e16439aaa630d0d9df192c66cb6d38937be7",
"0xe4483d29a1436729179f53b095d310db412bda15d674d7bd0663f5af194a163f",
"0xf9160ca1f350acc333efd03cceff19b508d7291cef6e3da46e6a55019670cd21",
"0x6c91e088d7db69be52db8d931b8498613a0128d7730b7acb012bb6694efd0aac",
"0xc53acbfa74d1bec00ad329a5384a0870097698d46e78427c5cd32285d5ecee33",
"0xa7d685b23a68b43d154d2c967ecea02f28c85f5bb920ebac911e17f3b26f9602"
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

