import { getServerAuthSession } from "note/server/auth";

export async function ProfileComponent() {
    const session = await getServerAuthSession();

    return (
        <>
            <h1>Username: {session?.user.name}</h1>
            <h1>Email: {session?.user.email}</h1>
            <img src={session?.user.image?.toString()}></img>
        </>
    )
}