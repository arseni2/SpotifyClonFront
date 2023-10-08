"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type propsType = {
    isRegister?: boolean
}
const GithubButton = ({isRegister}: propsType) => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/profile";

    return (
        <button onClick={() => signIn("github", { callbackUrl })}>
            {isRegister ? 'Signup' : 'Signin'} in with Github
        </button>
    );
};

export { GithubButton };