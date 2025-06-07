"use client";

import { useEffect } from "react";

export default function Adm() {
    useEffect(() => {
        window.location.href = "https://seovileo.admin.datocms.com/editor";
    }, []);
}