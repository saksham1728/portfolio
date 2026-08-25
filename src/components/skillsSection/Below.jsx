import React from "react";

export default function BearconnectLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F4F1FF] to-white flex flex-col items-center px-4 py-10">
      {/* Heading Section */}
      <h3 className="text-blue-600 font-semibold text-lg">The Bearconnect Way</h3>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
        Automate outreach and <br className="hidden md:block" /> close more deals.
      </h1>
      <p className="text-gray-600 max-w-2xl mt-4 text-center">
        Connect with your ideal customers on LinkedIn—even while you sleep. When they show
        interest, step in and close the sale.
      </p>

      {/* Steps Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
        <Step
          number={1}
          title="Connection requests"
          description="Automate personalized connection requests to expand your network and fill your pipeline with the right prospects."
        />
        <Arrow />
        <Step
          number={2}
          title="Follow-ups"
          description="Stay top of mind, spark conversations, and see who’s interested. The fortune is in the follow-up."
        />
        <Arrow />
        <Step
          number={3}
          title="Positive replies"
          description="Get a steady flow of positive replies, signups, and appointments—on autopilot."
        />
      </div>
    </main>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex flex-col items-center max-w-xs text-center">
      <span className="text-4xl text-gray-500 font-bold">{number}</span>
      <h2 className="text-xl font-semibold text-gray-900 mt-2">{title}</h2>
      <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
    </div>
  );
}

function Arrow() {
  return <span className="text-3xl text-gray-400">➜</span>;
}
