"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";


export const DA = () => {
    return( 
    <div className="container mx-auto px-4 py-8">

    <h1 className="text-3xl font-bold mb-4">Data Availability</h1>
    <table className="table-auto w-full border border-white-300 mb-8">
            <thead>
                <tr>
                    <th className="border px-4 py-2">DA Layer</th>
                    <th className="border px-4 py-2">AVAIL</th>
                    <th className="border px-4 py-2">Near DA</th>
                    <th className="border px-4 py-2">Celestia</th>
                    <th className="border px-4 py-2">EigenDA</th>
                    <th className="border px-4 py-2">EIP-4844</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">Encoding proof scheme</td>
                    <td className="border px-4 py-2">Validity Proofs</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">Fraud proofs</td>
                    <td className="border px-4 py-2">Validity Proofs</td>
                    <td className="border px-4 py-2">Validity Proofs</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Supports data availability sampling</td>
                    <td className="border px-4 py-2">Yes</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">Yes</td>
                    <td className="border px-4 py-2">No</td>
                    <td className="border px-4 py-2">No</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Consensus Mechanisms</td>
                    <td className="border px-4 py-2">GRANDPA+ BABE</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">Tendermint</td>
                    <td className="border px-4 py-2">Committee based</td>
                    <td className="border px-4 py-2">GHOST and Casper 3</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Cost/Block (1 OP mainnet block ~218kb)</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">$0.0016</td>
                    <td className="border px-4 py-2">$0.046</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">-</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Data Throughput mb/s</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">16</td>
                    <td className="border px-4 py-2">6.67</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">1.33</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Block Time</td>
                    <td className="border px-4 py-2">20 secs</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">15 secs</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">12 secs</td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Time to Finality</td>
                    <td className="border px-4 py-2">20 secs</td>
                    <td className="border px-4 py-2">-</td>
                    <td className="border px-4 py-2">15 secs</td>
                    <td className="border px-4 py-2">12 mins</td>
                    <td className="border px-4 py-2">12 mins</td>
                </tr>
            </tbody>
        </table>
    <p className="mb-4">Data availability refers to guarantees that the data needed to verify a block in the blockchain is actually available to all network participants. This concept is fundamental to the proper functioning of blockchains, as it allows for full validation of the blockchain&apos;s history and current state by any participant, thereby maintaining the decentralized and trustless nature of the network. Without guaranteed data availability, participants could not independently verify the legitimacy of transactions and blocks, which could lead to issues like fraud or censorship within the network.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="p-4 bg-black rounded-lg shadow-md">
    <h4 className="text-lg font-bold mb-2">Celestia</h4>
    <p className="text-white-700">
      Celestia is a modular blockchain providing a dedicated data availability (DA) layer. It specializes in ordering transaction data and keeping it available off-chain. Two key features of Celestia&apos;s DA layer are data availability sampling (DAS) and Namespaced Merkle trees (NMTs). Both features are novel blockchain scaling solutions: DAS enables light nodes to verify data availability without needing to download an entire block; NMTs enable execution and settlement layers on Celestia to download transactions that are only relevant to them.
    </p>
  </div>
  <div className="p-4 bg-black rounded-lg shadow-md">
    <h4 className="text-lg font-bold mb-2">EigenDA - EigenLayer</h4>
    <p className="text-white-700">
      EigenDA is a data availability (DA) service built on top of Ethereum using the EigenLayer restaking primitive. Developed by EigenLabs, EigenDA will be the first actively validated service (AVS) to launch on EigenLayer. Once launched, restakers will be able to delegate stake to node operators performing validation tasks for EigenDA in exchange for service payments, and rollups will be able to post data to EigenDA in order to access lower transaction costs, higher transaction throughput, and secure composability across the EigenLayer ecosystem, with security and throughput designed to horizontally scale with the amount of restake and operators opted into servicing the protocol.
    </p>
  </div>

  <div className="p-4 bg-black rounded-lg shadow-md">
    <h4 className="text-lg font-bold mb-2">Avail Project</h4>
    <p className="text-white-700">
      Avail Project aims to solve the data availability problem through DAS with the help of KZG polynomial commitments. Avail DA uses validity proofs to make sure that devs don&apos;t have to trust Avail&apos;s claims about their data being available or not, they can verify it for themselves.
    </p>
  </div>

  <div className="p-4 bg-black rounded-lg shadow-md">
    <h4 className="text-lg font-bold mb-2">NEAR | Data Availability</h4>
    <p className="text-white-700">
      NEAR Data Availability (NEAR DA) is a solution offered by the NEAR Protocol to address scalability challenges in Web3, particularly for Ethereum rollups.
    </p>
  </div>

  <div className="p-4 bg-black rounded-lg shadow-md">
    <h4 className="text-lg font-bold mb-2">EIP-4844: Proto-Danksharding (eip4844.com)</h4>
    <p className="text-white-700">
      EIP-4844 introduces a new kind of transaction type to Ethereum which accepts blobs of data to be persisted in the beacon node for a short period of time.
    </p>
  </div>
  </div>


    <p className="mb-1">Learn more about DA at:</p>

    <ul className="list-disc ml-6 mb-6">
        <li><Link href="https://blog.thirdweb.com/data-availability-blockchain/" className="text-blue-500" target="_blank"
                rel="noopener noreferrer">What is Data Availability in Blockchain? 5-Minute Explainer
            </Link></li>

        <li><Link href="https://x.com/lyteraio_en/status/1613292674018168861?s=20" className="text-blue-500" target="_blank"
                rel="noopener noreferrer">LyteraIO Status Update</Link></li>
        <li><Link href="https://x.com/bkiepuszewski/status/1745776464543224184?s=20" className="text-blue-500" target="_blank"
                rel="noopener noreferrer">Bkiepuszewski&apos;s Status</Link></li>
        <li><Link href="https://x.com/henrlihenrli/status/1541823636562219008?s=20" className="text-blue-500" target="_blank"
                rel="noopener noreferrer">Henrlihenrli&apos;s Status</Link></li>


        <li><Link href="https://blog.availproject.org/a-guide-to-selecting-the-right-data-availability-layer/"
                className="text-blue-500" target="_blank" rel="noopener noreferrer">A Guide to Selecting the Right Data
                Availability Layer</Link></li>
        <li><Link href="https://bridgeharris.substack.com/p/on-data-availability-layers" className="text-blue-500"
                target="_blank" rel="noopener noreferrer">On Data Availability Layers - Blueprints by Bridget
                Harris</Link></li>

         <li><Link href="https://forum.celestia.org/t/a-comparison-between-da-layers/899" className="text-blue-500"
         target="_blank" rel="noopener noreferrer">A comparison between DA layers - General - Celestia
         Forum</Link></li>
         <li><Link href="https://x.com/mraltantutar/status/1766888258288677258?s=20" className="text-blue-500"
         target="_blank" rel="noopener noreferrer">Why choose NEAR for Data Availability (DA)?</Link></li>
</ul>

</div>


        );
};