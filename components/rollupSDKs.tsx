"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";


export const RollupSDKs = () => {
    return(

           <div className="container mx-auto p-4">

<h1 className="text-4xl font-bold mb-4">Rollup SDKs</h1>

<p className="mb-4">Rollup SDKs serve as frameworks that empower developers to construct customized rollups from the ground up. In practical terms, this allows any developer to create their dedicated application-specific rollup (AppRollup) using the same underlying software as popular general-purpose rollups such as Arbitrum and Optimism. Notable rollup SDK providers include Arbitrum Orbit, the OP Stack, and Rollkit.</p>
<div className="overflow-x-auto mb-8">
    <table className="table-auto w-full border border-gray-300">
      <thead>
        <tr>
          <th className="border px-4 py-2">Rollup SDK</th>
          <th className="border px-4 py-2">Rollup Type</th>
          <th className="border px-4 py-2">Chains built with this SDK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Arbitrum Orbit</td>
          <td className="border px-4 py-2">Optimistic Rollup</td>
          <td className="border px-4 py-2">
            Rari Chain, XAI Games, Deri Protocol, Parallel Finance, Kinto
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">OP Stack</td>
          <td className="border px-4 py-2">Optimistic Rollup</td>
          <td className="border px-4 py-2 whitespace-pre-line">
            Base, Zora, Gitcoin, Worldcoin, Aevo, Mantle Network, Mode, Blast, Manta Network
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Polygon CDK</td>
          <td className="border px-4 py-2">ZK Rollup</td>
          <td className="border px-4 py-2 whitespace-pre-line">
            Libre, Hypr, OKX, Astar, Canto, Gnosis Pay, Immutable, Palm Network, IDEX
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">ZkStack</td>
          <td className="border px-4 py-2">ZK Rollup</td>
          <td className="border px-4 py-2">-</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Cosmos SDK</td>
          <td className="border px-4 py-2">-</td>
          <td className="border px-4 py-2 whitespace-pre-line">
            Akash, Fetch.ai, Stargaze, Osmosis, DYdX, Keplr, Monsterra
          </td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Hyper SDK</td>
          <td className="border px-4 py-2">-</td>
          <td className="border px-4 py-2">-</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Substrate</td>
          <td className="border px-4 py-2">-</td>
          <td className="border px-4 py-2 whitespace-pre-line">
            Acala Network, Phala Network, ChainX, Moonbeam, Energy Web Chain, xx Network, Chinlink
          </td>
        </tr>
      </tbody>
    </table>
  </div>
<section className="mb-8">

    <h2 className="text-3xl mb-2">1. Arbitrum Orbit</h2>

    <p className="mb-1">Arbitrum Orbit is designed to facilitate modifications to the Arbitrum Nitro codebase. It features a perpetual and recursive license, enabling the creation of Orbit chains capable of hosting other chains under the same license conditions. Orbit chains can settle on various Arbitrum networks but are not tailored for post-deployment network switching. The platform supports both AnyTrust and Rollup chain types, accommodating diverse security and cost requirements.</p>

    <h3 className="text-2xl mb-1">Key Features:</h3>

    <ul className="list-disc pl-6">
        <li><strong>Optimistic Rollups:</strong> At its core, Arbitrum operates as an optimistic rollup, ensuring the recording of all transactions on the Ethereum chain for integrity and security.</li>
        <li><strong>WAVM for Fraud Proofs:</strong> Nitro introduces the WebAssembly Virtual Machine (WAVM) for executing fraud proofs, a modified version of Wasm designed for the blockchain environment, enhancing security and reliability.</li>
        <li><strong>Advanced Calldata Compression:</strong> Nitro employs battle-tested compression algorithms, significantly reducing the cost of posting transaction data on Ethereum, contributing to overall lower transaction fees.</li>
    </ul>

</section>

<section className="mb-8">

    <h2 className="text-3xl mb-2">2. OP Stack by Optimism</h2>

    <p className="mb-1">OP Stack comprises software components forming the infrastructure of the Optimism mainnet. Operating on the Bedrock iteration, OP Stack facilitates the launch of optimistic Rollup networks and supports the proposed Optimism Superchain, an interconnected network of layer 2s. Its architecture includes the Ethereum Virtual Machine (EVM) for the execution layer, a single sequencer module for transaction processing, and various layers for data formatting, settlement, and governance.</p>

    <h3 className="text-2xl mb-1">Key Features:</h3>

    <ul className="list-disc pl-6">
        <li><strong>The Superchain:</strong> The Superchain is a future development by Optimism, envisioned as a network of Layer 2 chains (OP Chains) built on the OP Stack. The OP Chains will share security, a communication layer, and a technology stack, but will be standardized and interchangeable, differing from traditional multi-chain designs.</li>
        <li><strong>Ethereum Equivalence:</strong> Bedrock aims for high compatibility with Ethereum, offering developers a familiar experience by allowing the running of smart contracts and dApps designed for Ethereum without modification and utilizing existing Ethereum tooling and infrastructure.</li>
    </ul>

</section>

<section className="mb-8">

    <h2 className="text-3xl mb-2">3. Polygon CDK</h2>

    <p className="mb-1">Polygon CDK is an open-source and modular codebase designed to simplify the intricate process of constructing and launching ZK-powered Layer 2 (L2) chains for Ethereum. Leveraging zero-knowledge proofs ensures cryptographic security and near-instant finality for transactions.</p>

    <h3 className="text-2xl mb-1">Key Features:</h3>

    <ul className="list-disc pl-6">
        <li><strong>Unified Liquidity:</strong> Polygon CDK fosters fluid asset transfers across the ecosystem, enhancing the digital economy of both Polygon and Ethereum.</li>
        <li><strong>Robust Data Availability:</strong> A dedicated Data Availability Committee (DAC) ensures off-chain data remains accessible and secure, maintaining the integrity and resilience of the blockchain.</li>
        <li><strong>Composable Interoperability:</strong> The innovative LXLY bridge underscores Polygon CDK`&apos;`s commitment to seamless interaction among diverse blockchains, fostering a unified and versatile ecosystem.</li>
    </ul>

</section>

<section className="mb-8">

    <h2 className="text-3xl mb-2">4. zk Stack by zkSync</h2>

    <p className="mb-1">ZK Stack is a modular, open-source framework. It is specifically designed to build custom ZK-powered Layer 2 (L2) and Layer 3 (L3) Hyperchains. The framework is based on the code of zkSync Era.</p>

    <h3 className="text-2xl mb-1">Key Features:</h3>

    <ul className="list-disc pl-6">
        <li><strong>Trustless Network Connectivity:</strong> Hyperchains built with ZK Stack seamlessly connect in a trustless network. This connectivity ensures low latency and shared liquidity, enhancing interoperability.</li>
        <li><strong>Versatility Across Use Cases:</strong> ZK Stack caters to various use cases, including gaming, social networks, and enterprise applications. It offers tailored solutions to meet specific needs within diverse application scenarios.</li>
        <li><strong>Asynchronous Connectivity Option:</strong> ZK Stack provides an asynchronous connectivity option. This feature positions ZK</li>
</ul>
</section>
<section className="mb-8">

        <h2 className="text-3xl mb-2">5. Cosmos SDK</h2>

        <p className="mb-1">The Cosmos SDK is an open-source framework for multi-asset PoS and permissioned PoA blockchains, known for modularity and supporting application-specific blockchains with tools for enhanced interoperability and scalability.</p>

        <h3 className="text-2xl mb-1">Key Features:</h3>

        <ul className="list-disc pl-6">
            <li><strong>Customizability and Flexibility:</strong> The Cosmos SDK provides a highly customizable and flexible framework, enabling developers to create bespoke blockchain solutions tailored to specific use cases, with ongoing modularity improvements.</li>
            <li><strong>Inter-Blockchain Communication (IBC):</strong> A cornerstone of the Cosmos ecosystem, IBC streamlines communication and transactions between different protocols, enhancing interoperability without the need for token wrapping.</li>
            <li><strong>Developer-Friendly Environment:</strong> With Go support, the Cosmos SDK is accessible to a broad range of developers, fostering a collaborative and secure environment for building decentralized platforms.</li>
        </ul>

    </section>

    <section className="mb-8">

        <h2 className="text-3xl mb-2">6. Hyper SDK by Avalanche</h2>

        <p className="mb-1">HyperSDK, developed by Ava Labs, is an opinionated framework that expedites the creation of high-performance blockchains in the Avalanche ecosystem, simplifying custom VM development for fast, scalable, and efficient blockchain solutions.</p>

        <h3 className="text-2xl mb-1">Key Features:</h3>

        <ul className="list-disc pl-6">
            <li><strong>High-Performance Virtual Machines:</strong> HyperSDK provides a robust foundation for quickly constructing high-performance VMs.</li>
            <li><strong>Simplified Development Process:</strong> By abstracting away runtime complexities, HyperSDK allows developers to focus on customization and innovation.</li>
            <li><strong>Versatile HyperChains:</strong> HyperSDK-produced HyperChains are adaptable, serving various functions from NFT marketplaces to DeFi protocols.</li>
        </ul>

    </section>

    <section className="mb-8">

        <h2 className="text-3xl mb-2">7. Substrate by Polkadot</h2>

        <p className="mb-1">Substrate, an open-source SDK using Rust, enables the creation of application-specific blockchains. These can operate independently or collaboratively with other Polkadot chains, benefiting from shared security and interoperability features.</p>

        <h3 className="text-2xl mb-1">Key Features:</h3>

        <ul className="list-disc pl-6">
            <li><strong>Modularity and Flexibility:</strong> Substrate`&apos;`s modular architecture allows developers to create tailored blockchains for various applications, from DeFi to gaming, by selecting and combining components like consensus mechanisms and governance models.</li>
            <li><strong>Seamless Upgrades:</strong> Substrate`&apos;`s unique upgrade mechanism allows for blockchain network upgrades without hard forks, ensuring uninterrupted service.</li>
            <li><strong>Interoperability:</strong> Substrate supports the Polkadot ecosystem, facilitating communication and asset exchange between Substrate-based blockchains and other Polkadot networks, enabling diverse cross-chain applications and services.</li>
        </ul>

    </section>

    <p className="mt-8">
        Learn more about Rollup SDKs at:
        <ul className="list-disc pl-6">
          <li><Link href="https://blog.thirdweb.com/optimistic-rollups-vs-zero-knowledge-zk-rollups/" className="text-blue-500">Optimistic vs Zero-Knowledge Rollups: Which is best?</Link></li>
          <li><Link href="https://en.foresightnews.pro/comparative-analysis-of-rollup-sdks-and-recent-project-options/#:~:text=Overview%20of%20Rollup%20SDKs,to%20establish%20on%2Dchain%20trust." className="text-blue-500">Comparative Analysis of Rollup SDKs and Recent Project Options - Foresight News EN</Link></li>
          <li><Link href="https://medium.com/zeeve/diving-into-the-hottest-arbitrum-orbit-projects-2b34aee24661" className="text-blue-500">Diving into the Hottest Arbitrum Orbit Projects | by Zeeve | Zeeve News | Feb, 2024 | Medium</Link></li>
        </ul>
    </p>
        </div>
    );
};