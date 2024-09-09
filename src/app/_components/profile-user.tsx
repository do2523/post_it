"use client"
import { api } from "note/trpc/react"

export function ProfileComponent() {
    const data = api.post.all.useQuery();
    return (
        <>
            <h1>Username: </h1>
            <h1>Email: </h1>
        </>
    )
}