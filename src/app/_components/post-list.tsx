"use client"

import { api } from "note/trpc/react"


export function PostList() {
    const { data, isPending, error } = api.post.all.useQuery();

    if (isPending){
        return <div>Loading...</div>
    }
    
    if (error){
        return <div>Error: {error.message}</div>
    }

    return (
        <>
        <h1>Chat</h1>
        {data.map((post, i) => (
            <div key={i}>{post.content}</div>
        ))}
        </>
    )
}