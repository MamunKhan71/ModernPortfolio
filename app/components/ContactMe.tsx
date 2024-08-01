"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { toast } from "sonner";

export function ContactMe() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLInputElement).value;
        const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
        var emailData = {
            service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_USER_ID,
            template_params: {
                from_name: name,
                from_email: email,
                subject: subject,
                to_name: "Md. Mamun",
                message: message
            }
        };

        fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(emailData)
        })
            .then(() => toast.success('Email Sent Successfully!'))
            .catch(() => toast.error("Something went wrong!"))
    };
    return (
        <div className="space-y-12" id="contact">
            <TextGenerateEffect words="Let's get in touch" className="text-4xl text-center" />
            <div className="w-full max-w-5xl mx-auto rounded-xl p-4 md:p-12 shadow-input  border-[0.2px] border-slate-800 bg-black">
                <form className="my-8" onSubmit={handleSubmit} name="contact">
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name here" type="text" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="info@mdmamun.tech" type="email" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-8">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            placeholder="Subject"
                            type="text"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-8">
                        <Label htmlFor="message">Message</Label>
                        <Input
                            id="message"
                            placeholder="Message"
                            type="text"
                        />
                    </LabelInputContainer>

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Send Message &rarr;
                        <BottomGradient />
                    </button>

                </form>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
