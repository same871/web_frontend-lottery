import { useMoralis } from "react-moralis"
import Header from "./Header"
// import styles from "../app/page.module.css"
import LotteryEntrance from "./LotteryEntrance"
const supportedChains = ["31337", "11155111"]

export default function HomePage() {
    const { isWeb3Enabled, chainId } = useMoralis()

    return (
        <div>
            <Header />
            {isWeb3Enabled ? (
                <div>
                    {supportedChains.includes(parseInt(chainId).toString()) ? (
                        <div className="flex flex-row">
                            <LotteryEntrance className="p-8" />
                        </div>
                    ) : (
                        <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
                    )}
                </div>
            ) : (
                <div>Please connect to a Wallet</div>
            )}
        </div>
    )
}
