"use client"
import { api } from "note/trpc/react"

export function ProfileUsername() {
    const data = api.post.all.useQuery();
    return (
        <h1>Username: </h1>
        
    )
}