import { getAuthSession } from "@/lib/auth"
import { LoginButton } from "./auth/LoginButton";
import { LoggedInButton } from "./auth/loggedInButton";

export type AuthButtonProps = {

}

export const AuthButton = async (props: AuthButtonProps) => {
    const session = await getAuthSession();

    const user = session?.user

if (!user) {
    return <LoginButton/> 
}

return <LoggedInButton user={user}/>
}