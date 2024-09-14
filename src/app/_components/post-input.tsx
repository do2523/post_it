"use client"

import { useState } from "react";

export function PostInput() {
    const [text, setText] = useState("");
    
    return (
        <>
        <div>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="type here" className="border p-4" type="text" />
        <button onClick={() => {
            setText("")

        }} className="bg-black p-5 text-white">Submit Post</button>
        </div>
        </>
        
    )
}