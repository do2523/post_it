import { PostInput } from "../_components/post-input";
import { PostList } from "../_components/post-list";

export default function Chat() {
    return (
        <main>
            <h1>Welcome to Chat</h1>
            <PostList />
            <PostInput />
        </main>
    )
}