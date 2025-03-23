"use client";

import { useEffect, useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import getPage from "@/services/getPage";
import { WPPage } from "@/common/models/wpPage";

function NewsPage() {
    const [data, setData] = useState<WPPage | null>(null);

    useEffect(() => {
        getPage()
            .then(setData)
            .catch(console.error);
    }, []);

    useEffect(() => {
        getPage()
            .then(setData)
            .catch(console.error);

        const wpStyle = document.createElement("link");
        wpStyle.rel = "stylesheet";
        wpStyle.href = "http://3.68.99.140/wp-includes/css/dist/block-library/style.min.css";
        document.head.appendChild(wpStyle);

        const inlineStyle = document.createElement("link");
        inlineStyle.rel = "stylesheet";
        inlineStyle.href = "/wp-inline.css";
        document.head.appendChild(inlineStyle);

        return () => {
            document.head.removeChild(wpStyle);
            document.head.removeChild(inlineStyle);
        };
    }, []);

    return (
        <>

            <Header />

            <div
                className="prose"
                dangerouslySetInnerHTML={{
                    __html: data?.content.rendered ?? ""
                }}
            />

            <Footer />
        </>
    );
}

export default NewsPage;
