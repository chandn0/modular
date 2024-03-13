import { title } from "@/components/primitives";
import {
	Table,
	TableHeader,
	TableBody,
	TableColumn,
	TableRow,
	TableCell,
	getKeyValue
  } from "@nextui-org/table";



  const columns = [
	{
		key: "Token-Name",
		label: "Token Name",
	  },
	{
	  key: "Symbol",
	  label: "Symbol",
	},
	{
	  key: "Type",
	  label: "Type",
	},
	{
	  key: " Chart",
	  label: " Chart",
	},
  ];


export default function PricingPage() {
	return (
		<div>
			<h1 className={title()}>Modular Protocols with Tokens</h1>
			<br/>
			<br/>
			<table className="table-auto w-full border border-collapse border-gray-800">
        <thead >
            <tr>
                <th className="border px-4 py-2">Token Name</th>
                <th className="border px-4 py-2">Symbol</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Link to Market Cap Chart</th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td className="border px-4 py-2">Celestia</td>
                <td className="border px-4 py-2">TIA</td>
                <td className="border px-4 py-2">DA Layer</td>
                <td className="border px-4 py-2"><a href="https://www.coingecko.com/en/coins/celestia" target="_blank" className="text-blue-500 hover:underline">Market Cap Chart</a></td>
            </tr>
            <tr >
                <td className="border px-4 py-2">Dymension</td>
                <td className="border px-4 py-2">DYM</td>
                <td className="border px-4 py-2">RaaS</td>
                <td className="border px-4 py-2"><a href="https://www.coingecko.com/en/coins/dymension" target="_blank" className="text-blue-500 hover:underline">Market Cap Chart</a></td>
            </tr>
            <tr >
                <td className="border px-4 py-2">Cartesi</td>
                <td className="border px-4 py-2">CTSI</td>
                <td className="border px-4 py-2">RaaS</td>
                <td className="border px-4 py-2"><a href="https://coinmarketcap.com/currencies/cartesi/" target="_blank" className="text-blue-500 hover:underline">Market Cap Chart</a></td>
            </tr>
            <tr >
                <td className="border px-4 py-2">Kyve Network</td>
                <td className="border px-4 py-2">KYVE</td>
                <td className="border px-4 py-2">DA-Archivle</td>
                <td className="border px-4 py-2"><a href="https://coinmarketcap.com/currencies/kyve-network/" target="_blank" className="text-blue-500 hover:underline">Market Cap Chart</a></td>
            </tr>
            <tr >
                <td className="border px-4 py-2">Gelato</td>
                <td className="border px-4 py-2">GEL</td>
                <td className="border px-4 py-2">RaaS</td>
                <td className="border px-4 py-2"><a href="https://www.coingecko.com/en/coins/gelato" target="_blank" className="text-blue-500 hover:underline">Market Cap Chart</a></td>
            </tr>
        </tbody>
    </table>
		</div>
	);
}
