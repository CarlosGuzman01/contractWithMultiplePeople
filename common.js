import { hash160 } from '@cashscript/utils';
import {
  deriveHdPrivateNodeFromSeed,
  deriveHdPath,
  secp256k1,
  encodeCashAddress,
} from '@bitauth/libauth';
import bip39 from 'bip39';

// This is duplicated from common.ts because it is not possible to import from a .ts file in p2pkh.js

// Generate entropy from BIP39 mnemonic phrase and initialise a root HD-wallet node
const seed = await bip39.mnemonicToSeed('CashScript Examples');
const rootNode = deriveHdPrivateNodeFromSeed(seed, true);
const baseDerivationPath = "m/44'/145'/0'/0";

// Derive Alice's private key, public key, public key hash and address
const aliceNode = deriveHdPath(rootNode, `${baseDerivationPath}/0`);
if (typeof aliceNode === 'string') throw new Error();
export const alicePub = secp256k1.derivePublicKeyCompressed(aliceNode.privateKey);
export const alicePriv = aliceNode.privateKey;
export const alicePkh = hash160(alicePub);
export const aliceAddress = encodeCashAddress('bchtest', 'p2pkh', alicePkh);


// Derive Bob's private key, public key, public key hash and address 
const bobNode = deriveHdPath(rootNode, `${baseDerivationPath}/1`);
if (typeof bobNode === 'string') throw new Error();
export const bobPub = secp256k1.derivePublicKeyCompressed(bobNode.privateKey);
export const bobPriv = bobNode.privateKey;
export const bobPkh = hash160(bobPub);
export const bobAddress = encodeCashAddress('bchtest', 'p2pkh', bobPkh);


// Derive charlie's private key, public key, public key hash and address 
const charlieNode = deriveHdPath(rootNode, `${baseDerivationPath}/2`);
if (typeof charlieNode === 'string') throw new Error();
export const charliePub = secp256k1.derivePublicKeyCompressed(charlieNode.privateKey);
export const charliePriv = charlieNode.privateKey;
export const charliePkh = hash160(charliePub);
export const charlieAddress = encodeCashAddress('bchtest', 'p2pkh', charliePkh);

