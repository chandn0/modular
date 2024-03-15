"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";

export const Bridges = () => {
    return(        <div className="container mx-auto px-4 py-8  text-white">
    <h2 className="text-3xl font-bold mb-2">Interoperability </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://www.nodekit.xyz/" target="_blank" className="hover:underline">NodeKit SEQ</a>
    </h2>
    <p className="text-white">NodeKit SEQ is a decentralized shared sequencer built into a custom L1 blockchain which allows rollups to decentralize their sequencer and increase cross-rollup interoperability.</p>
  </div>
  
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://hyperlane.xyz/" target="_blank" className="hover:underline">Hyperlane</a>
    </h2>
    <p className="text-white">Focuses on permissionless interoperability, enabling seamless communication and interaction between different blockchains without relying on centralized entities.</p>
  </div>
  
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://union.build/" target="_blank" className="hover:underline">Union</a>
    </h2>
    <p className="text-white">Focuses on sovereign interoperability, aiming to facilitate secure and decentralized communication between different blockchain ecosystems while preserving their individual sovereignty.</p>
  </div>
  
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://initia.xyz/" target="_blank" className="hover:underline">Initia</a>
    </h2>
    <p className="text-white">The Initia Layer 1 was built as an orchestration layer. It is used to coordinate security, liquidity, routing, and interoperability throughout the network of interwoven rollups on Initia&apos;s vm-agnostic optimistic rollup framework: the OPinit Stack. Initia&apos;s product stack takes this system one step further — eliminating barriers to entry for both users and liquidity while providing a unified UX to seamlessly navigate thousands of interwoven rollups.</p>
  </div>
  
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://debridge.finance/" target="_blank" className="hover:underline">deBridge</a>
    </h2>
    <p className="text-white">deBridge is a high-performance and secure interoperability layer for Web3 that enables decentralized transfers of arbitrary messages and value between blockchains. The validation of cross-chain transactions is performed by a network of independent validators who are elected by and work for deBridge governance. Validators maintain the blockchain infrastructure and each run a deBridge node to sign all transactions that pass through deBridge smart contracts in different blockchains.</p>
  </div>
  
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://omni.network/" target="_blank" className="hover:underline">Omni Network</a>
    </h2>
    <p className="text-white">Introducing a novel network architecture tailored for low latency cross-rollup communications and global compatibility with Ethereum&apos;s entire rollup ecosystem, underpinned by the cryptoeconomic security of restaked $ETH. This design achieves sub-second cross-rollup message verification while harnessing Ethereum&apos;s industry leading cryptoeconomic security budget. Furthermore, Omni is intentionally designed to be easily integrated with any rollup architecture and local rollup application, while also providing a programmable state layer for managing application deployments across rollups.</p>
  </div>
<div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://across.to/" target="_blank" className="hover:underline">Across Protocol</a>
    </h2>
    <p className="text-white"> Interoperability Powered by Intents Secured by UMAprotocol&apos;s Optimistic Oracle</p>
  </div>
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://mitosis.org/" target="_blank" className="hover:underline">Mitosis</a>
    </h2>
    <p className="text-white"> Mitosis is a liquidity protocol that proposes a new, capital efficient paradigm in cross-chain interoperability fit for the modular blockchain ecosystem.</p>
  </div>
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://www.zkm.io/" target="_blank" className="hover:underline">ZKM</a>
    </h2>
    <p className="text-white"> ZKM is building a general purpose zkVM that will integrate with the infrastructure of every blockchain (and eventually systems beyond blockchain), allowing the communication of state changes between chains without any sacrifice to security or decentralization. </p>
  </div>
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://www.zkm.io/" target="_blank" className="hover:underline">ZKM</a>
    </h2>
    <p className="text-white"> ZKM is building a general purpose zkVM that will integrate with the infrastructure of every blockchain (and eventually systems beyond blockchain), allowing the communication of state changes between chains without any sacrifice to security or decentralization. </p>
  </div>
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://www.zkm.io/" target="_blank" className="hover:underline">Lagrange</a>
    </h2>
    <p className="text-white"> Seamlessly interact between chains with cryptographically secure state proofs, not opaque intermediaries. Run expressive and dynamic distributed ZK computation at a Big Data scale on top of multi-chain contract states. </p>
  </div>
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://catalyst.exchange/" target="_blank" className="hover:underline">Catalyst</a>
    </h2>
    <p className="text-white"> Catalyst is permissionless liquidity, purpose-built to connect all chains</p>
  </div>
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://www.trestleprotocol.io/" target="_blank" className="hover:underline">Trestle</a>
    </h2>
    <p className="text-white"> Connecting projects and users of Ethereum to the Celestia ecosystem.</p>
  </div>
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://www.trestleprotocol.io/" target="_blank" className="hover:underline">Trestle</a>
    </h2>
    <p className="text-white"> Connecting projects and users of Ethereum to the Celestia ecosystem.</p>
  </div>
  </div>

    </div>
    );
};