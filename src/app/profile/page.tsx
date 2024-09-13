import Button from "../_components/button";
import { ProfileComponent } from "../_components/user-profile";

export default function Profile() {
    return (
        <div className="bg-slate-500 text-white flex flex-col p-3 rounded-xl">
            <div className="items-center justify-center flex">
                <ProfileComponent />
            </div>
            <Button href="../"/>
        </div>
    )
}