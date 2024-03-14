// app/tabs/page.tsx
"use client";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { RollupSDKs } from "@/components/rollupSDKs";
import { DA } from "@/components/da";
import{SS} from "@/components/ss";
import { Raas } from "@/components/raas";
import {EE} from "@/components/EE";
import { Bridges } from "@/components/bridges";
import { Others } from "@/components/others";

export const  Tabs1=() => {


  return (
    <div >
    <Tabs aria-label="Options">
      <Tab key="Data-Availability" title="Data Availability">
        <Card>
          <CardBody>
          <DA/>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Shared-Sequencers" title="Shared Sequencers" >
        <Card>
          <CardBody>
 <SS/>
          </CardBody>
        </Card>
      </Tab>
      
      <Tab key="Rollup-as-a-Service" title="Rollup as a Service" >
        <Card>
          <CardBody>
           <Raas/>
          </CardBody>
        </Card>
      </Tab>
   
      <Tab key="RollupSDK" title="Rollup SDKs" >
        <Card>
          <CardBody>
            <RollupSDKs/>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Execution-Environments" title="Execution Environments" >
        <Card>
          <CardBody>
            <EE/>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="bridges" title="Interoperability" >
        <Card>
          <CardBody>
            <Bridges/>
          </CardBody>
        </Card>
      </Tab>
      <Tab key="Others" title="Others" >
        <Card>
          <CardBody>
            <Others/>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
    </div>
  );
}