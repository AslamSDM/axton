"use client"

import React from 'react'

// function InitDealDrawer() {
//   return (
//     <div>InitDealDrawer</div>
//   )
// }

// export default InitDealDrawer



import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import DealButton from '@/components/DealButton'
import { LabeledDropdown } from './LabeledDropdown'
import { CounterpartySelector } from './CounterPartySelector'
import { TradeInputSection } from './TradeInputSelection'
import { CollateralEscrow } from './CollateralEscrow'
import { SettlementSchedule } from './SettlementSchedule'
import { RiskLevelIndicator } from './RiskLevelIndicator'
import { FeesSummary } from './DrawerFooter'

const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
]

export function InitDealDrawer() {
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <Drawer direction='right'>
            <DrawerTrigger asChild>
                <DealButton />
            </DrawerTrigger>
            <DrawerContent className='bg-[#0C0C0E] text-white border-none px-4 py-2 data-[vaul-drawer-direction=right]:max-w-[700px]! w-[90vw]! overflow-clip overflow-y-auto'>
                <div className="mx-auto w-full text-white">
                    <DrawerHeader>
                        <DrawerTitle className='text-white'>Deal Configuration</DrawerTitle>
                    </DrawerHeader>
                    <div className="space-y-2 w-full p-4 bg-transparent">
                        <LabeledDropdown
                            label='Asset'
                            options={['BTC', 'Option 1']}
                            defaultValue='BTS'
                        />
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-green-400 font-medium">24h Price: +2.34%</span>
                            <span className="text-blue-400 font-medium">Liquidity: $12.4M</span>
                        </div>
                        <CounterpartySelector />
                        <TradeInputSection />
                        <CollateralEscrow />
                        <SettlementSchedule />
                        <RiskLevelIndicator riskPercentage={70} />
                    </div>
                    <DrawerFooter>
                        <FeesSummary
                            platformFee="0.25%"
                            escrowFee="0.15%"
                            gasEstimate="$12.50"
                            totalFees="$47.80"
                            onDiscard={() => console.log('Discard clicked')}
                            onSeePreview={() => console.log('See Preview clicked')}
                            onInitiateDeal={() => console.log('Initiate Deal clicked')}
                        />
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
