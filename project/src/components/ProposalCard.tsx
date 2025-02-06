import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';

interface Proposal {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  votesFor: number;
  votesAgainst: number;
  status: string;
}

interface ProposalCardProps {
  proposal: Proposal;
  onVoteClick: () => void;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal, onVoteClick }) => {
  const totalVotes = proposal.votesFor + proposal.votesAgainst;
  const forPercentage = totalVotes === 0 ? 0 : (proposal.votesFor / totalVotes) * 100;
  const againstPercentage = totalVotes === 0 ? 0 : (proposal.votesAgainst / totalVotes) * 100;

  const timeLeft = () => {
    const now = new Date();
    const diff = proposal.deadline.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="glass rounded-lg p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-[1.02] card-hover">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-3">{proposal.title}</h3>
          <p className="text-gray-300">{proposal.description}</p>
        </div>
        <div className="flex items-center text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full">
          <Clock className="h-4 w-4 mr-2" />
          <span>{timeLeft()} left</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex h-4 rounded-full overflow-hidden bg-gray-700/50 backdrop-blur-sm">
          <div
            className="bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500"
            style={{ width: `${forPercentage}%` }}
          />
          <div
            className="bg-gradient-to-r from-red-500 to-red-400 transition-all duration-500"
            style={{ width: `${againstPercentage}%` }}
          />
        </div>
        <div className="flex justify-between mt-3 text-sm font-medium">
          <span className="text-green-400">{proposal.votesFor} For ({forPercentage.toFixed(1)}%)</span>
          <span className="text-red-400">{proposal.votesAgainst} Against ({againstPercentage.toFixed(1)}%)</span>
        </div>
      </div>

      <button 
        onClick={onVoteClick}
        className="w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
      >
        Cast Vote
        <ChevronRight className="h-4 w-4 ml-2" />
      </button>
    </div>
  );
};

export default ProposalCard;