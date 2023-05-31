"use client"

import styles from "./page.module.css"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import HomePage from "@/components/HomePage"

export default function Home() {
    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <div className={styles.description}>
                    <HomePage />
                </div>
            </NotificationProvider>
        </MoralisProvider>
    )
}
