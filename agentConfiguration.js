import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const questions = [
    {
        id: 1,
        question: "What's your agent's primary fighting style?",
        options: [
            "Aggressive Rusher - Always closing the distance",
            "Technical Counter - Waiting for openings",
            "Strategic Zoner - Controlling space",
            "Balanced Fighter - Adaptable approach"
        ]
    },
    {
        id: 2,
        question: "How should your agent react under pressure?",
        options: [
            "Increase aggression and risk-taking",
            "Focus on defensive maneuvers",
            "Analyze and adapt tactics",
            "Maintain current strategy"
        ]
    },
    {
        id: 3,
        question: "What's your agent's preferred range?",
        options: [
            "Close-quarters combat",
            "Mid-range tactical",
            "Long-range specialist",
            "Dynamic range switching"
        ]
    },
    {
        id: 4,
        question: "How should your agent manage energy?",
        options: [
            "All-out assault until depleted",
            "Conservative energy management",
            "Burst-based approach",
            "Adaptive based on opponent"
        ]
    },
    {
        id: 5,
        question: "What's your agent's learning priority?",
        options: [
            "Opponent pattern recognition",
            "Combo optimization",
            "Resource management",
            "Position control"
        ]
    },
    {
        id: 6,
        question: "How should your agent handle disadvantage?",
        options: [
            "Aggressive reversal attempts",
            "Patient defensive play",
            "Technical escape options",
            "Mixed defensive/offensive"
        ]
    },
    {
        id: 7,
        question: "What's your agent's combo preference?",
        options: [
            "Long, risky combinations",
            "Short, safe combinations",
            "Mix-up heavy approach",
            "Situational adaptation"
        ]
    },
    {
        id: 8,
        question: "How should your agent approach neutral game?",
        options: [
            "Aggressive space control",
            "Defensive positioning",
            "Bait and punish",
            "Dynamic positioning"
        ]
    },
    {
        id: 9,
        question: "What's your agent's recovery strategy?",
        options: [
            "High-risk, fast recovery",
            "Safe, predictable recovery",
            "Mix-up based recovery",
            "Adaptive recovery paths"
        ]
    },
    {
        id: 10,
        question: "How should your agent handle projectiles?",
        options: [
            "Aggressive approach through",
            "Patient blocking",
            "Strategic dodging",
            "Mixed defensive options"
        ]
    },
    {
        id: 11,
        question: "What's your agent's counter-attack priority?",
        options: [
            "Maximum damage punishes",
            "Safe poke pressure",
            "Position advantage",
            "Resource gain"
        ]
    },
    {
        id: 12,
        question: "How should your agent approach okizeme?",
        options: [
            "High-pressure mix-ups",
            "Safe meaty attacks",
            "Baited responses",
            "Situation reading"
        ]
    },
    {
        id: 13,
        question: "What's your agent's combo breaker style?",
        options: [
            "Early aggressive breaks",
            "Late defensive breaks",
            "Mixed timing breaks",
            "Resource-based breaks"
        ]
    },
    {
        id: 14,
        question: "How should your agent handle corner pressure?",
        options: [
            "Aggressive escape attempts",
            "Patient blocking",
            "Technical reversals",
            "Mixed defensive options"
        ]
    },
    {
        id: 15,
        question: "What's your agent's meter usage priority?",
        options: [
            "Offensive extensions",
            "Defensive mechanics",
            "Mix-up potential",
            "Resource efficiency"
        ]
    },
    {
        id: 16,
        question: "How should your agent approach mind games?",
        options: [
            "Aggressive conditioning",
            "Passive adaptation",
            "Pattern recognition",
            "Dynamic mind games"
        ]
    },
    {
        id: 17,
        question: "What's your agent's priority in neutral?",
        options: [
            "Space control",
            "Resource gathering",
            "Position advantage",
            "Damage opportunity"
        ]
    },
    {
        id: 18,
        question: "How should your agent handle wake-up?",
        options: [
            "Aggressive reversals",
            "Safe defensive options",
            "Technical roll",
            "Mixed wake-up game"
        ]
    },
    {
        id: 19,
        question: "What's your agent's frame trap approach?",
        options: [
            "Tight frame traps",
            "Delayed frame traps",
            "Mix-up based traps",
            "Adaptive pressure"
        ]
    },
    {
        id: 20,
        question: "How should your agent finish matches?",
        options: [
            "High-risk closer",
            "Safe chip damage",
            "Mix-up based finish",
            "Adaptive approach"
        ]
    }
];

const AgentConfiguration = () => {
    const [connected, setConnected] = useState(false);
    const [agentName, setAgentName] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const [answers, setAnswers] = useState({});
    const [loading, setLoading] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const connectWallet = () => {
        setLoading(true);
        setTimeout(() => {
            setConnected(true);
            setLoading(false);
        }, 1500);
    };

    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (agentName.trim()) {
            setCurrentQuestion(0);
        }
    };

    const handleOptionSelect = (optionIndex) => {
        setAnswers({ ...answers, [currentQuestion]: optionIndex });
        
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setLoading(true);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-20">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-3xl mx-auto">
                    {!connected ? (
                        <Card className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-purple-500/20">
                            <CardContent className="p-8 text-center">
                                <h2 className="text-3xl font-bold mb-6 font-['Syncopate']">Connect Your Wallet</h2>
                                <p className="text-gray-400 mb-8">Connect your Phantom wallet to start configuring your AI agent.</p>
                                <button 
                                    onClick={connectWallet}
                                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        'Connect Phantom Wallet'
                                    )}
                                </button>
                            </CardContent>
                        </Card>
                    ) : currentQuestion === -1 ? (
                        <Card className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-purple-500/20">
                            <CardContent className="p-8">
                                <h2 className="text-3xl font-bold mb-6 font-['Syncopate']">Name Your Agent</h2>
                                <form onSubmit={handleNameSubmit}>
                                    <input
                                        type="text"
                                        value={agentName}
                                        onChange={(e) => setAgentName(e.target.value)}
                                        className="w-full bg-black/50 border border-purple-500/20 rounded-md px-4 py-3 mb-6 focus:outline-none focus:border-purple-500/50"
                                        placeholder="Enter agent name..."
                                    />
                                    <button 
                                        type="submit"
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-300 w-full"
                                    >
                                        Continue
                                    </button>
                                </form>
                            </CardContent>
                        </Card>
                    ) : !loading ? (
                        <Card className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-purple-500/20">
                            <CardContent className="p-8">
                                <div className="mb-8">
                                    <div className="w-full bg-black/50 h-2 rounded-full mb-4">
                                        <div 
                                            className="bg-gradient-to-r from-purple-600 to-blue-600 h-full rounded-full transition-all duration-300"
                                            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                                        />
                                    </div>
                                    <span className="text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
                                </div>
                                
                                <h2 className="text-2xl font-bold mb-8 font-['Syncopate']">{questions[currentQuestion].question}</h2>
                                
                                <div className="space-y-4">
                                    {questions[currentQuestion].options.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleOptionSelect(index)}
                                            className={`w-full p-4 rounded-md border transition-all duration-300 text-left hover:border-purple-500/50 
                                                ${answers[currentQuestion] === index 
                                                    ? 'bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/50' 
                                                    : 'bg-black/50 border-purple-500/20'}`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className="bg-gradient-to-r from-purple-900/10 to-blue-900/10 border border-purple-500/20">
                            <CardContent className="p-12 text-center">
                                <div className="mb-8">
                                    <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto"/>
                                </div>
                                <h2 className="text-2xl font-bold mb-4 font-['Syncopate']">Creating Your Agent</h2>
                                <p className="text-gray-400">Please wait while we configure your custom AI agent...</p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AgentConfiguration;