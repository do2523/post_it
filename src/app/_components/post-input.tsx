"use client"

import { useState } from "react";
import { api } from "../../trpc/react"

export function PostInput() {
    const [text, setText] = useState("");
    
    const utils = api.useUtils();
    const createPost = api.post.create.useMutation({
        onSuccess: async () => {
            await utils.post.all.invalidate();
        },
    });

    return (
        <>
        <div>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="type here" className="border p-4" type="text" />
        <button onClick={() => {
            createPost.mutate({ content: text });
            setText("")

        }} className="bg-black p-5 text-white">Submit Post</button>
        </div>
        </>
        
    )
}