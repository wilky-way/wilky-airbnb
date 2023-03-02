import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="">
                <Head>
                </Head>
                {/* Header */}
                <Header />
                {/* Banner */}

            </div>
        </>
    );
}
