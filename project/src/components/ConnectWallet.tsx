import React from 'react';
import { Wallet } from 'lucide-react';

interface ConnectWalletProps {
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ isConnected, setIsConnected }) => {
  const mockAddress = "0x1234...5678";

  return (
    <button
      onClick={() => setIsConnected(!isConnected)}
      className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
        isConnected
          ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:shadow-gray-700/25 backdrop-blur-sm'
          : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-blue-500/25'
      }`}
    >
      <Wallet className="h-5 w-5 mr-2" />
      {isConnected ? mockAddress : 'Connect Wallet'}
    </button>
  );
};

export default ConnectWallet;