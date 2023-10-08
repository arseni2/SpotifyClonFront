"use client";
import {getProviders, signIn} from "next-auth/react";
import React, {useEffect, useRef} from "react";
import {GithubButton} from "@/components/AuthButtons/GithubButton";

const LoginPage = () => {
    const userName = useRef("");
    const pass = useRef("");
    useEffect(() => {
        const providers = getProviders();
        console.log(providers)
    }, [])
    const onSubmit = async () => {
        const result = await signIn("credentials", {
            username: userName.current,
            password: pass.current,
            redirect: true,
            callbackUrl: "/",
        });
    };
    return (
        <div
            className={
                "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
            }
        >
            <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
                <input
                    labelText="User Name"
                    onChange={(e) => (userName.current = e.target.value)}
                />
                <input
                    labelText="Password"
                    type={"password"}
                    onChange={(e) => (pass.current = e.target.value)}
                />
                <button onClick={onSubmit}>Login</button>
                <GithubButton />
            </div>
        </div>
    );
};

export default LoginPage;