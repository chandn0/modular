import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {Tabs1} from "@/components/tabs";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-3">
			<div className="inline-block  text-center justify-center">
				<h1 className={title({ color: "violet" })}>
				Modular Ecosystems
				</h1>
				<div className="container mx-auto py-4">
    <div className="bg-blue-500 text-white p-2 rounded-t-lg">
      <h2 className="text-xl font-bold">Data Availability</h2>
    </div>
    <div className="bg-blue-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Celestia</h3>
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Blobs</h3>
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">EigenDA</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Avail Project</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">NEAR DA</h3>
        
      </div>
    </div>
    <div className="bg-green-500 text-white p-2 rounded-t-lg mt-4">
      <h2 className="text-xl font-bold">Rollup SDKs</h2>
    </div>
    <div className="bg-green-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Arbitrum Orbit</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">OP Stack</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Polygon CDK</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">ZkStack</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Cosmos SDK</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Hyper SDK</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Substrate</h3>
        
      </div>
    </div>
	<div className="bg-emerald-500 text-white p-2 rounded-t-lg mt-4">
      <h2 className="text-xl font-bold">Shared Sequencers</h2>
    </div>
    <div className="bg-emerald-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Astria</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Radius</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Espresso</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">NodeKit SEQ</h3>
        </div>
      
    </div>
	<div className="bg-fuchsia-500 text-white p-2 rounded-t-lg mt-4">
      <h2 className="text-xl font-bold">Rollup-as-a-Service</h2>
    </div>
    <div className="bg-fuchsia-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Caldera</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Conduit</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">AltLayer</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Dymension</h3>
        </div>
		<div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Cartesi</h3>
        </div>
    </div>
	<div className="bg-cyan-500 text-white p-2 rounded-t-lg mt-4">
      <h2 className="text-xl font-bold">zkVMs</h2>
    </div>
    <div className="bg-cyan-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Miden</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">zkWasm VM</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Jolt</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Nexus</h3>
        </div>
		<div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">RISC0 zkVM</h3>
        </div>
        <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Sp1</h3>
        </div>
        <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Valida</h3>
        </div>
        <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">zkOS</h3>
        </div>
        <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">TritonVM</h3>
        </div>
      
    </div>
	<div className="bg-yellow-500 text-white p-2 rounded-t-lg mt-4">
      <h2 className="text-xl font-bold">Interoperability</h2>
    </div>
    <div className="bg-yellow-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Hyperlane</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Union</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Mitosis</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Across Protocol</h3>
        </div>
    </div>
	<div className="bg-indigo-500 text-white p-2 rounded-t-lg mt-4">
      <h2 className="text-xl font-bold">App chains</h2>
    </div>
    <div className="bg-indigo-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">ionic</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Sanko </h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">GameCorp</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">degen</h3>
        </div>
		<div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">animeCoin</h3>
        </div>
		<div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Olive</h3>
        </div>
    </div>
	<div className="bg-purple-500 text-white p-2 rounded-t-lg mt-4">
      <h2 className="text-xl font-bold">Abstraction</h2>
    </div>
    <div className="bg-purple-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Particle Network</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Anoma </h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Essential</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Flashbots </h3>
        </div>
    </div>
	<div className="bg-teal-500 text-white p-2 rounded-t-lg mt-4">
      <h2 className="text-xl font-bold">Intent</h2>
    </div>
    <div className="bg-teal-400 p-2 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Essential</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Anoma </h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">SUAVE</h3>
        
      </div>
      <div className="bg-black rounded-lg shadow-md p-1">
        <h3 className="text-lg font-semibold mb-1">Cow Protocol </h3>
        </div>
    </div>


  </div>
			</div>
			<Tabs1 />

		</section>
	);
}
