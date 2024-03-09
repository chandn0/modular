"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";


export const Raas = () => {
    return(
    <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-2">Rollup-as-a-Service</h2>
    <p className="text-white-700 mb-4">
      Developers building dApps have several options for deployment, including existing blockchains, Layer 2 solutions (L2), custom appchains, and rollups. Rollups can offer a sweet spot between customization, performance, and development effort, particularly with the simplified setup offered by Rollups-as-a-Service (RaaS) providers. These providers offer tools and services, ranging from rollup management to no-code deployment, enabling easy creation and maintenance of custom rollups.
    </p>
  
    <p className="text-white-700 mb-8">
      Imagine running a busy restaurant (traditional blockchain): you handle everything from cooking to deliveries. RaaS is like hiring a delivery service (RaaS provider): they manage deliveries, freeing you to focus on cooking (development) and providing a smooth experience for customers (users).
    </p>
  
    <h3 className="text-2xl font-bold mb-4">Prominent RaaS Providers</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-black rounded-lg shadow-md">
        <h4 className="text-lg font-bold mb-2">Caldera</h4>
        <p className="text-white-700">
          Caldera is a RaaS provider offering users options to build rollups using Arbitrum Nitro, OP Stack, or Polygon CDK. Developers can opt for shared decentralized sequencing, reduce fees significantly via Celestia, Eigen, or NEAR for data availability, and choose any token as the native chain`&apos;`s currency.
        </p>
      </div>
  
      <div className="p-4 bg-black rounded-lg shadow-md">
        <h4 className="text-lg font-bold mb-2">Conduit</h4>
        <p className="text-white-700">
          Conduit supports OP stack and Arbitrum Nitro and allows anyone to deploy a rollup in a matter of minutes, no code required. They provide the all-in-one infrastructure that enables their customers, like Zora and Gitcoin, to rapidly deploy on the mainnet or testnet.
        </p>
      </div>
  
      <div className="p-4 bg-black rounded-lg shadow-md">
        <h4 className="text-lg font-bold mb-2">AltLayer</h4>
        <p className="text-white-700">
          AltLayer is a decentralized protocol that facilitates the launch of native and restaked rollups with both optimistic and zk rollup stacks. The restaked rollups framework combines the power of various rollup stacks to launch appchain. It offers an SDK for hands-on management of rollups.
        </p>
      </div>
  
      <div className="p-4 bg-black rounded-lg shadow-md">
        <h4 className="text-lg font-bold mb-2">Dymension ($DYM)</h4>
        <p className="text-white-700">
          Dymension leverages a modular blockchain architecture. Users interact with RollApps (front-end), while Dymension (back-end) coordinates the ecosystem and facilitates communication. Data Availability Networks (decentralized databases) provide temporary data storage.
        </p>
      </div>
  
      <div className="p-4 bg-black rounded-lg shadow-md">
        <h4 className="text-lg font-bold mb-2">Cartesi</h4>
        <p className="text-white-700">
          Cartesi provides a dedicated CPU and rollup for your dApp, preserving decentralization, security, and censorship resistance while enhancing computational scalability. It utilizes the Cartesi Virtual Machine, allowing you to use familiar libraries, languages, and tooling, moving beyond the EVM.
        </p>
      </div>
    </div>
  
    <h3 className="text-2xl font-bold mt-8 mb-4">Learn More</h3>
    <ul className="list-disc space-y-2 pl-4">
    <li>
      <Link href="https://thirdweb.dev/resources/what-is-rollup-as-a-service-which-is-best" className="text-blue-500 hover:underline">What is a Rollup-as-a-Service (& Which is Best)? (thirdweb.com)</Link>
    </li>
    <li>
      <Link href="https://ethresear.ch/t/rollup-as-a-service-opportunities-and-challenges/6349" className="text-blue-500 hover:underline">Rollup as a Service: Opportunities and Challenges - Layer 2 - Ethereum Research (ethresear.ch)</Link>
    </li>
  </ul>
</div>
  );
};