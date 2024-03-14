"use client"
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import {Image} from "@nextui-org/image";

import {Divider} from "@nextui-org/react";

import Image from "next/image";
import {Link} from "@nextui-org/react";

export const Others = () => {
    return(        <div className="container mx-auto px-4 py-8  text-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://www.lavanet.xyz/" target="_blank" className="hover:underline">Lava Network</a>
    </h2>
    <p className="text-white">Lava is a modular data access (RPC & indexing) layer for rollups. Rollups deploy on Lava to give devs and users fast, reliable onboarding.</p>
  </div>
  
  <div className="bg-black rounded-lg shadow-md p-6">
    <h2 className="text-blue-500 font-bold text-lg mb-4">
      <a href="https://www.kyve.network/" target="_blank" className="hover:underline">Kyve Network</a>
    </h2>
    <p className="text-white"> KYVE offers Data Rollups-as-a-Service (DRaaS), simplifying historical data storage, validation, and accessibility for blockchains and rollups. Seven prominent Cosmos chains already rely on KYVE for historical data support, KYVE is spearheading support for Ethereum Layer 2s in response to the EIP4844 update, which removes historical data support for L2s.</p>
  </div>
  
 
</div>

    </div>
    );
};