// app/tabs/page.tsx
"use client";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";


export const  Tabs1=() => {


  return (
    <Tabs  aria-label="Options">
      <Tab key="Data-Availability" title="Data Availability">
        <Card>
          <CardBody>
          <div className="mb-8">

        <h2 className="text-3xl font-bold mb-4"><a href="https://celestia.org/" target="_blank" className="text-blue-500">Celestia</a></h2>
        <p>Develops a modular DA architecture, aiming to separate consensus from execution, potentially improving scalability and flexibility.</p>
    </div>

    <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4"><a href="https://www.initia.org/" target="_blank" className="text-blue-500">Initia</a></h2>
        <p>Proposes alternative DA (altDA) + alternative VM (altVM) rollups with IBC (Inter-Blockchain Communication), potentially enabling interoperability and scalability through custom rollup designs.</p>
    </div>

    <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4"><a href="https://www.availproject.org/da" target="_blank" className="text-blue-500">Avail Project</a></h2>
        <p>Proposes a DA then unification approach, potentially offering efficient scaling through modular design and DA implementation.</p>
    </div>

    <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4"><a href="https://near.org/" target="_blank" className="text-blue-500">NEAR Protocol</a></h2>
        <p>Explores DA + chain abstraction, potentially offering a more abstract and user-friendly layer for interacting with blockchains.</p>
    </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Shared-Sequencers" title="Shared Sequencers" >
        <Card>
          <CardBody>

          <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4"><a href="https://www.espressosys.com/" target="_blank" className="text-blue-500">Espresso Systems</a></h2>
        <p>Introduces the concept of Distributed Agreement (DA) + shared sequencing, aiming to achieve efficient and secure consensus while minimizing communication overhead.</p>
    </div>

    <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4"><a href="https://astria.ai/" target="_blank" className="text-blue-500">Astria</a></h2>
        <p>Explores shared sequencer interoperability, seeking to create a shared infrastructure for efficient cross-chain communication.</p>
    </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Interoperability" title="Interoperability" >
        <Card>
          <CardBody>
          <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4"><a href="https://hyperlane.xyz/" target="_blank" className="text-blue-500">Hyperlane</a></h2>
        <p>Focuses on permissionless interoperability, enabling seamless communication and interaction between different blockchains without relying on centralized entities.</p>
    </div>

    <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4"><a href="https://union.build/" target="_blank" className="text-blue-500">Union</a></h2>
        <p>Focuses on sovereign interoperability, aiming to facilitate secure and decentralized communication between different blockchain ecosystems while preserving their individual sovereignty.</p>
    </div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Rollup-as-a-Service" title="Rollup as a Service" >
        <Card>
          <CardBody>
            <div>

<p className="my-4">Developers building dApps have several options for deployment, including existing blockchains, Layer 2
    solutions (L2),
    custom appchains, and rollups. Rollups can offer a sweet spot between customization, performance, and development
    effort,
    particularly with the simplified setup offered by Rollups-as-a-Service (RaaS) providers. These providers offer tools
    and
    services, ranging from rollup management to no-code deployment, enabling easy creation and maintenance of custom
    rollups.
</p>

<p className="my-4">Imagine running a busy restaurant (traditional blockchain): you handle everything from cooking to
    deliveries.
    RaaS is like hiring a delivery service (RaaS provider): they manage deliveries, freeing you to focus on cooking
    (development) and
    providing a smooth experience for customers (users).
</p>

<h2 className="text-2xl font-bold my-3">Conduit:</h2>
<p className="my-2">This platform empowers anyone to launch their own rollup quickly and easily, without needing to write any
    code. The
    self-serve platform takes care of everything, from infrastructure to security, so you can focus on what matters -
    building the product. Leading companies like Zora and Gitcoin trust Conduit to handle the technical complexities.
</p>

<h2 className="text-2xl font-bold my-3">Dymension ($DYM):</h2>
<p className="my-2">Dymension leverages a modular blockchain architecture. Users interact with RollApps (front-end), while
    Dymension (back-end)
    coordinates the ecosystem and facilitates communication. Data Availability Networks (decentralized databases)
    provide
    temporary data storage.
</p>

<h2 className="text-2xl font-bold my-3">Cartesi:</h2>
<p className="my-2">Cartesi provides a dedicated CPU and rollup for your dApp, preserving decentralization, security, and
    censorship resistance
    while enhancing computational scalability. It utilizes the Cartesi Virtual Machine, allowing you to use familiar
    libraries,
    languages, and tooling, moving beyond the EVM.
</p>

</div>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="App-Chains" title="App Chains" >
        <Card>
          <CardBody>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}