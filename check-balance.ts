import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";


const publicKey = new PublicKey("gacMrsrxNisAhCfgsUAVbwmTC3w9nJB6NychLAnTQFv")

const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");

const balance = await connection.getBalance(publicKey);

console.log(`Balance for ${publicKey.toBase58()}: ${balance / LAMPORTS_PER_SOL} SOL`);