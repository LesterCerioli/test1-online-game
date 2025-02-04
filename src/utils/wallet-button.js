import { useState } from "react";

const WalletButton = ({ setWalletAddress }) => {
    const [wallet, setWallet] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setWallet(accounts[0]);
                setWalletAddress(accounts[0]); // Update wallet address in GameScene
                console.log("Wallet connected:", accounts[0]);
            } catch (error) {
                console.error("Error connecting to the wallet:", error);
            }
        } else {
            alert("MetaMask not found. Please install it and try again.");
        }
    };

    return (
        <button onClick={connectWallet}>
            {wallet ? `Connected: ${wallet}` : "Connect Wallet"}
        </button>
    );
};

export default WalletButton;
