'use client'

import { trpc } from "@/trpc/client";

export const PageClient = () => {
    const [data] = trpc.categories.getmany.useSuspenseQuery();
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}