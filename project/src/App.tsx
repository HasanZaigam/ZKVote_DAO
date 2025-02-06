import React from 'react';
import { Vote, ShieldCheck, Users, PlusCircle, Sparkles } from 'lucide-react';
import ProposalCard from './components/ProposalCard';
import ConnectWallet from './components/ConnectWallet';
import CreateProposalModal from './components/CreateProposalModal';
import VoteModal from './components/VoteModal';

interface Proposal {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  votesFor: number;
  votesAgainst: number;
  status: string;
}

function App() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [selectedProposal, setSelectedProposal] = React.useState<Proposal | null>(null);
  const [proposals, setProposals] = React.useState<Proposal[]>([
    {
      id: 1,
      title: "Treasury Allocation Q1 2024",
      description: "Proposal to allocate 500 ETH for Q1 2024 development initiatives",
      deadline: new Date(Date.now() + 172800000),
      votesFor: 156,
      votesAgainst: 43,
      status: "active"
    },
    {
      id: 2,
      title: "Protocol Upgrade Implementation",
      description: "Implement new security features in the smart contract",
      deadline: new Date(Date.now() + 86400000),
      votesFor: 230,
      votesAgainst: 12,
      status: "active"
    }
  ]);

  const handleCreateProposal = (proposalData: {
    title: string;
    description: string;
    duration: number;
  }) => {
    const newProposal = {
      id: proposals.length + 1,
      title: proposalData.title,
      description: proposalData.description,
      deadline: new Date(Date.now() + proposalData.duration * 60 * 60 * 1000),
      votesFor: 0,
      votesAgainst: 0,
      status: "active"
    };

    setProposals([...proposals, newProposal]);
  };

  const handleVote = (vote: 'for' | 'against') => {
    if (!selectedProposal) return;

    setProposals(proposals.map(proposal => {
      if (proposal.id === selectedProposal.id) {
        return {
          ...proposal,
          votesFor: vote === 'for' ? proposal.votesFor + 1 : proposal.votesFor,
          votesAgainst: vote === 'against' ? proposal.votesAgainst + 1 : proposal.votesAgainst,
        };
      }
      return proposal;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2940')] bg-cover opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-900"></div>
      </div>

      {/* Header */}
      <header className="relative border-b border-gray-800 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 animate-float">
              <Vote className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold text-white">zkVoteDAO</h1>
            </div>
            <ConnectWallet isConnected={isConnected} setIsConnected={setIsConnected} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8">
        {!isConnected ? (
          // Hero Section for non-connected users
          <div className="text-center py-20 animate-slide-in">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Decentralized Governance
                <span className="block text-blue-400">Made Simple & Secure</span>
              </h2>
              <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Participate in transparent and secure DAO voting. Connect your wallet to start voting on proposals and shape the future of the protocol.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-500/20 p-4 rounded-lg mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                    <ShieldCheck className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Secure Voting</h3>
                  <p className="text-gray-400">End-to-end encrypted votes with zero-knowledge proofs</p>
                </div>
                
                <div className="glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-500/20 p-4 rounded-lg mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Community Driven</h3>
                  <p className="text-gray-400">Equal voting power for all DAO members</p>
                </div>
                
                <div className="glass rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                  <div className="bg-blue-500/20 p-4 rounded-lg mb-4 w-16 h-16 flex items-center justify-center mx-auto">
                    <Sparkles className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Transparent</h3>
                  <p className="text-gray-400">Verifiable results with full auditability</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Dashboard for connected users
          <div className="animate-slide-in">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">Active Proposals</h2>
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Create Proposal
              </button>
            </div>
            <div className="grid gap-6">
              {proposals.map((proposal) => (
                <ProposalCard 
                  key={proposal.id} 
                  proposal={proposal}
                  onVoteClick={() => setSelectedProposal(proposal)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <CreateProposalModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreateProposal}
      />

      <VoteModal
        isOpen={!!selectedProposal}
        onClose={() => setSelectedProposal(null)}
        onVote={handleVote}
        proposal={selectedProposal || { title: '', description: '' }}
      />
    </div>
  );
}

export default App;