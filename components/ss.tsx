"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";


export const SS = () => {
    return(
        <div className="container mx-auto px-4 py-8  text-white">
  <h2 className="text-3xl font-bold mb-2">Shared Sequencing </h2>
  <p className="text-gray-300 mb-4">
    Shared sequencing aims to bring stronger network security and better network decentralization through shared usage of sequencers. Currently, roll-up maintain their own sets of sequencers (usually only one) which are not censorship-resistant and interoperable with other rollups (similar to problems plaguing layer-1 networks).
  </p>

  <h3 className="text-2xl font-bold mb-4">Shared Sequencing Projects</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://www.astria.org/" className="text-blue-500 hover:underline">Astria</Link>
      </h4>
      <p className="text-white-700">
        Astria is a shared sequencing network that allows many rollups to share a single decentralized network of sequencers. These sequencers are simple and permissionless to join, completely replacing centralized sequencers. This shared sequencer network provides out-of-the-box censorship resistance, fast block confirmations, and atomic cross-rollup composability – all while retaining each rollup`&apos;`s sovereignty. Astria envisions a future where thousands of decentralized rollups flourish, each one tailored to meet the unique requirements of different industries, applications, and use cases.
      </p>
    </div>

    <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://www.theradius.xyz/" className="text-blue-500 hover:underline">Radius</Link>
      </h4>
      <p className="text-white-700">
        Radius is a shared sequencing layer designed to eliminate harmful MEV and censorship while creating economic value for rollups. It uses the encrypted mempool with PVDE (Practical Verifiable Delay Encryption), an advanced cryptography and ZK-based scheme. PVDE ensures that the transactions ordering process is trustless, preventing centralized sequencers from engaging in frontrunning, sandwiching, and censoring transactions.
      </p>
    </div>

    <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://www.espressosys.com/" className="text-blue-500 hover:underline">Espresso Systems</Link>
      </h4>
      <p className="text-white-700">
        Espresso Systems is working on the Espresso Sequencer, a tool designed to support rollups in achieving decentralization without compromising scalability. The Espresso Sequencer aims to provide rollups with credible neutrality, enhanced interoperability, mitigation of negative effects of MEV (Miner Extractable Value), and long-term economic incentive alignment with Layer 1 (L1) validators.
      </p>
    </div>
  </div>

  <h3 className="text-2xl font-bold mt-8 mb-4">Learn More</h3>
  <ul className="list-disc space-y-2 pl-4">
    <li>
      <Link href="https://maven11.substack.com/p/the-shared-sequencer" className="text-blue-500 hover:underline">The Shared Sequencer - Maven11 Research (substack.com)</Link>
    </li>
    <li>
      <Link href="https://docs.espressosys.com/sequencer/espresso-sequencer-architecture/readme" className="text-blue-500 hover:underline">Introduction - Espresso Sequencer (espressosys.com)</Link>
    </li>
    <li>
      <Link href="https://docs.theradius.xyz/overview/about-radius" className="text-blue-500 hover:underline">About Radius - Radius (theradius.xyz)</Link>
    </li>
    
      </ul>
      </div>

  );
};