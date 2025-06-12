import Link from "next/link";
import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const contactDetails = [
    {
        href: "tel:570037077",
        icon: FaPhoneAlt,
        text: "570 037 077",
        label: "Zadzwoń do seovileo",
    },
    {
        href: "mailto:seovileo@gmail.com",
        icon: IoMdMail,
        text: "seovileo@gmail.com",
        label: "Napisz do seovileo",
    },
];

export default function ContactBtns() {
    return (
        <section className="flex flex-col mx-auto sm:flex-row justify-center items-center gap-4 my-4 text-white">
            <div className="bg-brand w-full h-px hidden lg:block" />
            {contactDetails.map(({ href, icon: Icon, text, label }, index) => (
                <Link
                    key={index}
                    href={href}
                    aria-label={label}
                    className="flex lg:w-max w-full text-center items-center gap-2 px-4 py-2 bg-brand"
                >
                    <Icon className="" />
                    <span className="font-medium w-max">{text}</span>
                </Link>
            ))}
            <div className="bg-brand w-full h-px hidden lg:block " />
        </section>
    );
}