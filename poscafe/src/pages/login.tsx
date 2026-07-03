import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconPosCafe } from "../Helper/icons";
import { login, register } from "../api/AuthApi";
import type { RegisterRequest, LoginRequest } from "../Types/Types";
import { useState } from "react";
import axios from "axios";

type AuthField = {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    icon: string;
    hasToggle?: boolean;
};

const loginFields: AuthField[] = [
    { label: "Username", name: "username", type: "text", placeholder: "Enter your username", icon: "person" },
    { label: "Password", name: "password", type: "password", placeholder: "Enter your password", icon: "lock", hasToggle: true },
];

const signupFields: AuthField[] = [
    { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter your full name", icon: "person" },
    { label: "Username", name: "username", type: "text", placeholder: "Enter your username", icon: "person" },
    { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email address", icon: "mail" },
    { label: "Password", name: "password", type: "password", placeholder: "Create a password", icon: "lock", hasToggle: true },
    { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm your password", icon: "lock", hasToggle: true },
];

function AuthInput({ field }: { field: AuthField; }) {
    const location = useLocation();
    const isSignup = location.pathname.toLowerCase().includes("signup") || location.pathname.toLowerCase().includes("register");
    return (
        <label className={`flex flex-col gap-1 ${isSignup ? "text-ss-55" : "text-ss-65"} font-bold text-[#080a28]`}>
            {field.label}
            <div className={`flex ${isSignup ? "h-8" : "h-10"} items-center overflow-hidden rounded-md border border-[#d8d9ea] bg-white focus-within:border-[#6334f6]`}>
                <span className={`flex h-full ${isSignup ? "w-8" : "w-10"} items-center justify-center bg-[#f7f6ff]`}>
                    <IconPosCafe icon={field.icon} color="purple" size={14} />
                </span>
                <input
                    className="h-full min-w-0 flex-1 px-1 text-ss-60 font-medium text-[#11133d] outline-none placeholder:text-[#7778a7]"
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                />
                {field.hasToggle ? (
                    <button type="button" className="flex h-full w-12 items-center justify-center" aria-label="Show password">
                        <IconPosCafe icon="eyeoff" color="purple" size={12} />
                    </button>
                ) : null}
            </div>
        </label>
    );
}

function BrandPanel() {
    const features = [
        { title: "Fast & Easy Billing", description: "Create bills in seconds", icon: "billing" },
        { title: "Inventory Management", description: "Track stock in real time", icon: "inventory" },
        { title: "Detailed Reports", description: "Insights to grow your business", icon: "salesreport" },
    ];

    return (
        <aside className="relative hidden min-h-180 overflow-hidden bg-[#080827] text-white lg:flex lg:w-[52%]">
            <img src="/assets/login.png" alt="" className="absolute h-full w-full object-cover bottom-0" />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,8,39,0.98)_0%,rgba(41,14,118,0.84)_30%,rgba(8,8,39,0.01)_50%)]" />
            <div className="relative z-10 flex h-full max-w-140 flex-col justify-start px-14 py-12 xl:px-16">
                <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gpurple shadow-[0_18px_45px_rgba(91,49,246,0.35)]">
                    <IconPosCafe icon="cafe" size={32} />
                </div>
                <h1 className="text-3xl font-semibold leading-tight">POS Cafe</h1>
                <p className="mt-1.5 text-sm font-medium">Point of Sale System</p>
                <div className="mt-6 h-0.5 w-10 rounded-full bg-[#7c4dff]" />
                <h2 className="mt-6 text-sm font-bold">Smart Billing. Happy Business.</h2>
                <p className="mt-2 max-w-40 text-ss-60 font-medium leading-4 text-white/92">
                    All-in-one POS solution to streamline your cafe operations.
                </p>
                <div className="mt-6 flex flex-col gap-6">
                    {features.map((feature) => (
                        <div className="flex items-center gap-2" key={feature.title}>
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4b1aa4]">
                                <IconPosCafe icon={feature.icon} size={18} />
                            </div>
                            <div>
                                <p className="text-ss-60 font-semibold">{feature.title}</p>
                                <p className="mt-0.5 text-ss-55 font-medium text-white/88">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const isSignup = location.pathname.toLowerCase().includes("signup") || location.pathname.toLowerCase().includes("register");
    const fields = isSignup ? signupFields : loginFields;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        const formData = new FormData(event.currentTarget);

        try {
            if (isSignup) {
                const userData: RegisterRequest = {
                    username: formData.get("username") as string,
                    fullname: formData.get("fullName") as string,
                    email: formData.get("email") as string,
                    password: formData.get("password") as string,
                };

                const user = await register(userData);
                if (user.token != "") {
                    // localStorage.setItem("user", JSON.stringify(user));
                    navigate("/login");
                } else {
                    throw new Error("Registeration Failed");
                }
            } else {
                const userData: LoginRequest = {
                    username: formData.get("username") as string,
                    password: formData.get("password") as string,
                };

                const user = await login(userData);
                if (user.token != "") {
                    localStorage.setItem("user", JSON.stringify(user));
                    navigate("/billing");
                } else {
                    throw new Error("Invalid username or password");
                }
            }
        } catch (err) {
            // if (isSignup) {
            //     if (axios.isAxiosError(err) && err.response?.status === 409) {
            //         setError("User already exists.");
            //     } else {
                    // setError("Registration failed. Please try again.");
                // }
            // } else {
                setError("Invalid username or password.");
            // }
            console.error("Authentication error:", err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        // <main className="h-full w-full bg-[#f5f4ff] p-2 sm:p-4">
        <main className="h-full w-full bg-[#f5f4ff]">
            {/* <section className="mx-auto flex min-h-[calc(100vh-1rem)] w-full max-w-385 overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(27,24,74,0.12)] sm:min-h-[calc(100vh-2rem)] sm:h-11/12"> */}
            <section className="mx-auto flex min-h-[calc(100vh-1rem)] w-full max-w-385 overflow-hidden bg-white shadow-[0_18px_50px_rgba(27,24,74,0.12)] sm:min-h-[calc(100vh-2rem)] sm:h-full">
                <BrandPanel />
                <div className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
                    {
                        !isSignup ? (
                            <div className="absolute right-6 top-6 hidden grid-cols-4 gap-2 opacity-30 sm:grid">
                                {Array.from({ length: 16 }).map((_, index) => (
                                    <span className="h-1 w-1 rounded-full bg-[#8c7cf1]" key={index} />
                                ))}
                            </div>
                        ) : null
                    }
                    {/* <div className="absolute -bottom-22 -right-18 h-48 w-48 rounded-full border-28 border-[#ede9ff]" /> */}
                    {/* <div className="absolute -bottom-8 right-0 h-28 w-28 rounded-full bg-[#f1efff]" /> */}

                    <form onSubmit={handleSubmit} className="relative z-10 flex w-full max-w-147.5 flex-col">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gpurple">
                            <IconPosCafe icon="cafe" size={32} />
                        </div>
                        <h1 className="mt-2 text-center text-ss-70 font-black text-[#090b2f] sm:text-lg">
                            {isSignup ? "Create Your Account" : "Welcome Back!"}
                        </h1>
                        <p className="mt-1 text-center text-ss-70 font-medium text-[#7778a7] sm:text-ss-65">
                            {isSignup ? "Join POS Cafe and start managing your business smarter." : "Sign in to continue to POS Cafe"}
                        </p>

                        <div className={`mt-8 flex flex-col ${isSignup ? "gap-3" : "gap-5"} sm:mt-4`}>
                            {fields.map((field) => (
                                <AuthInput field={field} key={field.name} />
                            ))}
                            {error && (
                                <div className="text-ss-55 font-semibold text-red-500">
                                    {error}
                                </div>
                            )}
                        </div>

                        {isSignup ? (
                            <label className="mt-5 flex items-start gap-3 text-ss-55 font-medium text-[#68699a]">
                                <input type="checkbox" defaultChecked className="mt-0.5 h-3 w-3 accent-[#5d34f3]" />
                                <span>
                                    I agree to the <a className="font-bold text-ipurple">Terms and Conditions</a> and{" "}
                                    <a className="font-bold text-ipurple">Privacy Policy</a>
                                </span>
                            </label>
                        ) : (
                            <div className="mt-5 flex items-center justify-between gap-4 text-ss-55 font-semibold text-[#7778a7]">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" defaultChecked className="h-3 w-3 accent-[#5d34f3]" />
                                    Remember me
                                </label>
                                <a className="text-[#4a23f4]">Forgot Password?</a>
                            </div>
                        )}

                        <button
                            disabled={isLoading}
                            className="mt-4 flex h-9 items-center justify-center gap-1 rounded-md bg-gpurple px-5 text-ss-70 font-extrabold text-white transition hover:brightness-105 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <IconPosCafe icon="lock" size={18} />
                            {isLoading ? "Processing..." : (isSignup ? "Create Account" : "Sign In")}
                        </button>

                        <div className="my-4 flex items-center gap-3 text-ss-65 font-bold text-[#8585ad]">
                            <span className="h-px flex-1 bg-[#dddeeb]" />
                            or
                            <span className="h-px flex-1 bg-[#dddeeb]" />
                        </div>

                        {isSignup ? (
                            <p className="text-center text-ss-70 font-medium text-[#68699a]">
                                Already have an account? <Link className="font-extrabold text-ipurple" to="/login">Sign In</Link>
                            </p>
                        ) : (
                            <Link
                                className="flex h-9 items-center justify-center gap-1 rounded-md border border-[#6c43ff] px-5 text-ss-70 font-extrabold text-[#4a23f4]"
                                to="/signup"
                            >
                                <IconPosCafe icon="shield" color="purple" size={18} />
                                Register
                            </Link>
                        )}

                        {!isSignup ? (
                            <p className="mt-6 text-center text-ss-55 font-semibold text-[#8585ad] sm:mt-6">
                                &copy; 2024 POS Cafe. All rights reserved.
                            </p>
                        ) : null}
                    </form>
                </div>
            </section>
        </main>
    );
}
