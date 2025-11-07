import { createPublicClient, http } from "viem";
import { base } from "viem/chains";

const client = createPublicClient({
  chain: base,
  transport: http(),
});

async function main() {
  const address = process.argv[2];

  if (!address) {
    console.log("Usage: node index.js <adresse_eth>");
    process.exit(1);
  }

  const balance = await client.getBalance({ address });
  console.log(`Solde sur Base de ${address} : ${balance / 10n ** 18n} ETH 🟦`);
}

main();
