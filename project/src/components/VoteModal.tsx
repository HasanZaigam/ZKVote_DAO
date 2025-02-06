import React from 'react';
import { X, ThumbsUp, ThumbsDown } from 'lucide-react';

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVote: (vote: 'for' | 'against') => void;
  proposal: {
    title: string;
    description: string;
  };
}

const VoteModal: React.FC<VoteModalProps> = ({
  isOpen,
  onClose,
  onVote,
  proposal,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-8 w-full max-w-lg border border-gray-800 shadow-2xl animate-slide-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Cast Your Vote</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">{proposal.title}</h3>
          <p className="text-gray-300">{proposal.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => {
              onVote('for');
              onClose();
            }}
            className="flex items-center justify-center px-6 py-4 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-105 group"
          >
            <ThumbsUp className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Vote For
          </button>
          <button
            onClick={() => {
              onVote('against');
              onClose();
            }}
            className="flex items-center justify-center px-6 py-4 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 group"
          >
            <ThumbsDown className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            Vote Against
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteModal;