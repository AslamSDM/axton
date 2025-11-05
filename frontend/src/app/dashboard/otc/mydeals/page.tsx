"use client";
import React from "react";

import DealButton from "@/components/DealButton";
import { TabBar } from "@/components/TabBar";
import { ActiveDealsTable } from "./_components/ActiveDealsTable";
import { InitDealDrawer } from "./_components/InitDealDrawer";

function Page() {
    return (
        <main className="px-8 py-6">
            <TabBar activeTab="My Deals" />

            <div className="flex justify-end w-full">
                <div className="w-80">
                    {/* <DealButton /> */}
                    <InitDealDrawer />
                </div>
            </div>

            <div className="flex">
                <ActiveDealsTable />
            </div>



        </main>
    );
}

export default Page;