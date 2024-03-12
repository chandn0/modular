"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";


export const EE = () => {
    return(
        <div className="container mx-auto px-4 py-8  text-white">
  <h2 className="text-3xl font-bold mb-2">Execution Environments </h2>
  <p className="text-gray-300 mb-4">
  The Execution Environments (EEs) can be tailored to specific use cases and optimized for different performance characteristics, such as throughput, latency, or security.

  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://polygon.technology/polygon-miden" className="text-blue-500 hover:underline">Polygon Miden</Link>
      </h4>
      <p className="text-white-700">
       Polygon Miden is a modular execution layer that uses powerful features such as parallel transaction execution and client-side proving. With Miden, developers can create novel, high throughput, privacy preserving dApps for DeFi, RWA and Autonomous Worlds using their favourite languages such as Rust and TypeScript.
      </p>
    </div>



    <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://fluentlabs.xyz/" className="text-blue-500 hover:underline">zkWasm VM</Link>
      </h4>
      <p className="text-white-700">
      zkWasm VM developed by Fluentlabs, aiming to leverage the efficiency and security of zk-SNARKs (zero-knowledge proofs) while utilizing the Wasm (WebAssembly) standard for smart contract development. It enables the use of nearly any general-purpose programming language, such as Rust, TypeScript, and more, along with preferred web2 libraries and frameworks.
      </p>
    </div>
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://fuel.network/" className="text-blue-500 hover:underline">fuel VM</Link>
      </h4>
      <p className="text-white-700">
      fuelVM developed by Fuellabs,Designed from the start to be easily fraud-provable, the Fuel VM can be used as the transaction execution layer for an optimistic rollup. The FuelVM is optimized to better utilize hardware to increase the throughput of transaction execution.
      </p>
    </div>  <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://movementlabs.xyz/" className="text-blue-500 hover:underline">moveVM</Link>
      </h4>
      <p className="text-white-700">
      moveVM potentially offers a secure and efficient execution environment based on the Move language, originally developed by Facebook for its Diem (Libra) project. M2 will be the first Move Layer-2 on Ethereum. 
      </p>
    </div>
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://docs.eclipse.builders/how-eclipse-mainnet-works/what-is-eclipse-mainnet/execution-solana-virtual-machine-svm" className="text-blue-500 hover:underline">Solana Virtual Machine </Link>
      </h4>
      <p className="text-white-700">
      The Solana Virtual Machine, SVM in short, is the execution environment that processes transactions and smart contracts/programs on the Solana network.Eclipse Mainnet uses SVM execution environment, giving it extreme scale.
      </p>
    </div>
    <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="https://www.risczero.com/" className="text-blue-500 hover:underline">RISC0 zkVM</Link>
      </h4>
      <p className="text-white-700">
      A virtual machine that lets you generate zero-knowledge proofs of computational correctness for Rust programs while maintaining full privacy of the input data.
      </p>
    </div>
  </div>
   {/* <div className="p-4 bg-black rounded-lg shadow-md">
      <h4 className="text-lg font-bold mb-2">
        <Link href="" className="text-blue-500 hover:underline"></Link>
      </h4>
      <p className="text-white-700">
      
      </p>
    </div> */}

{/* 
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
    
      </ul> */}
      </div>

  );
};