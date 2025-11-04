import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    text: string
    className?: string
}

function TransparentGradientBtn({ text, className }: Props) {
    return (
        <div
            className={cn("flex justify-center items-center bg-[url('/images/dashboard/button-ring.svg')] bg-no-repeat bg-contain bg-center text-white", className)}
        >
            {text}
        </div>
    )
}

export default TransparentGradientBtn