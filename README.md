# # zkVoteDAO - Private DAO Voting System

zkVoteDAO is a decentralized application (dApp) designed for **private and secure DAO voting** using **zkFHE (Zero-Knowledge Fully Homomorphic Encryption)**. This project ensures that votes remain confidential while maintaining transparency and verifiability, allowing decentralized organizations to conduct fair and tamper-proof elections without compromising voter privacy.

![image](https://github.com/user-attachments/assets/b0a4f849-bc1c-45b5-828a-3f2f1123310b)

## 🚀 Features

- 🔒 **Privacy-Preserving Voting** - Implements zkFHE to guarantee end-to-end encrypted voting, keeping voter choices anonymous.
- 📊 **Live Tally Updates** - Enables real-time vote counting while ensuring confidentiality, so no individual vote is exposed.
- 🏛 **DAO Governance** - Allows for decentralized proposal creation, governance decisions, and voting processes with full encryption.
- 🛡 **Zero-Knowledge Proofs** - Ensures that voting results are correct and verifiable without revealing individual voter choices.
- 💳 **Web3 Wallet Integration** - Seamlessly supports MetaMask, WalletConnect, and Coinbase Wallet for decentralized authentication.
- 🎨 **Modern UI** - Features an interactive and visually appealing design, complete with animations, progress bars, tooltips, and smooth transitions.
- 📈 **Audit-Friendly Logs** - Provides encrypted audit trails that allow verifiers to confirm the legitimacy of votes without revealing identities.
- 🔄 **Seamless User Experience** - Ensures a frictionless onboarding process with intuitive wallet connection and proposal interaction.

## 🛠 Tech Stack

- **Frontend:** React.js (TypeScript), Tailwind CSS, DaisyUI for UI components.
- **State Management:** Redux Toolkit / Zustand for efficient state handling.
- **Web3 Integration:** Ethers.js and Wagmi.sh for blockchain interactions.
- **UI Enhancements:** react-chartjs-2 for vote visualization, react-hot-toast for instant notifications.
- **Cryptographic Security:** zkFHE ensures secure computation over encrypted data.

## 📂 Project Structure

```bash
frontend/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ WalletConnector.tsx    # Connect wallet button
│  │  ├─ ProposalCard.tsx       # Proposal display and voting
│  │  ├─ CreateProposalModal.tsx # Proposal creation modal
│  │  ├─ VoteModal.tsx         # Vote casting modal
│  ├─ hooks/
│  │  ├─ useVoting.ts          # Voting logic and encryption
│  │  ├─ useRollup.ts          # ZK Rollup interactions
│  ├─ pages/
│  │  ├─ Dashboard.tsx         # Main voting dashboard
│  │  ├─ Vote.tsx              # Individual vote interface
│  ├─ styles/
│  │  ├─ globals.css           # Tailwind styling
```

## 🎮 User Flows

### 🔗 Connect Wallet

1. Click **"Connect Wallet"**.
2. Select a wallet provider (MetaMask, WalletConnect, or Coinbase Wallet).
3. Upon successful authentication, the user is redirected to the **voting dashboard**.
4. Displays active proposals available for voting.

### 📝 Create a Proposal *(Admins Only)*

1. Click **"Create Proposal"**.
2. Enter **proposal title, description, and duration**.
3. Submit (Requires wallet connection and admin rights).
4. Proposal appears in the **dashboard**, available for voting.

### 🗳 Cast a Vote

1. Click **"Vote Now"** on an active proposal.
2. Choose from **"Yes, No, Abstain"** options.
3. Vote is **encrypted and submitted** securely using zkFHE.
4. Live tally updates dynamically while maintaining vote privacy.
5. Users receive a confirmation that their vote has been successfully cast.

## 🏗 Setup & Installation

### Prerequisites

- **Node.js** (v16+ required)
- **NPM or Yarn**
- **MetaMask or another Web3-enabled wallet**

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/your-username/zkVoteDAO.git
cd zkVoteDAO/frontend

# Install dependencies
npm install  # or yarn install

# Start development server
npm run dev  # or yarn dev
```

## 🚀 Deployment

To deploy zkVoteDAO on **Netlify**, use the following commands:

```bash
# Build the project
npm run build

# Deploy to Netlify
npx netlify deploy --prod
```

### 🌍 Live Demo

You can access the live deployment here:
[https://charming-tapioca-f36a57.netlify.app/](https://charming-tapioca-f36a57.netlify.app/)

## 📜 License

This project is licensed under the **MIT License**, allowing open-source contributions and modifications.

## 🙌 Contributing

Contributions are highly encouraged! Developers and blockchain enthusiasts are welcome to:

- Fork the repository.
- Create feature branches for enhancements.
- Submit pull requests (PRs) for review.
- Open issues to discuss bugs, improvements, or new features.

For major changes, please open an issue first to discuss what you would like to modify.

---

