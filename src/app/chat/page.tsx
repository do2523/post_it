import { getServerAuthSession } from "note/server/auth";
import { PostList } from "../_components/post-list";
import Link from "next/link";

export default async function Chat() {
    const session = await getServerAuthSession();
    return (
        <div>
            <Link href="/">
                Homepage
            </Link>
            <p>{session?.user.name}</p>
            {/* This div will take the full height of the viewport and center its children */}
            <div
                className="flex justify-center items-center"
                style={{ height: "100vh", flexDirection: "column" }}
                >
                <h1 className="text-5xl hover:text-black cursor-pointer transition hover:bg-blue-500 border rounded-full p-4">Welcome to Chat</h1>
                <br />
                <PostList />
                
            </div>
        </div>
    );
}
