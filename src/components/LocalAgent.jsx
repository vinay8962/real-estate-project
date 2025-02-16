import React from "react";
import { IoSearch } from "react-icons/io5";
import AgentCard from "./AgentCard";
import Agent1 from "../assets/section/agent-item-1.jpg";
import Agent2 from "../assets/section/agent-item-2.jpg";
import Agent3 from "../assets/section/agent-item-3.jpg";
import Agent4 from "../assets/section/agent-item-4.jpg";

const agents = [
  { id: 1, name: "Leslie Alexander", role: "Sales Agent", image: Agent1 },
  { id: 2, name: "Wade Warren", role: "Property Consultant", image: Agent2 },
  { id: 3, name: "Esther Howard", role: "Real Estate Agent", image: Agent3 },
  { id: 4, name: "Annette Black", role: "Senior Advisor", image: Agent4 },
];

const LocalAgent = () => {
  return (
    <div className="w-full bg-white py-16">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold mb-4">Choose Your Local Agent</h1>
        <p className="text-gray-500">
          Our experienced agents are here to help you find your dream home.
        </p>
      </div>

      {/* Agent Cards Section */}
      <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-auto w-10/12">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-8">
        <p className="text-gray-600 font-semibold w-8/12 mx-auto mb-6">
          Explore Property agents are here to help with all your buying,
          renting, and selling goals. Let’s chat!
        </p>
        <button className="bg-primary w-72 text-white justify-center font-bold py-3 px-6 rounded-xl flex items-center mx-auto hover:bg-primary-dark transition">
          Find your local agent <IoSearch className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LocalAgent;
