import Head from "next/head";
import { useState } from "react";

import toolsData from "../data/tools.json";

type IAITool = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export default function Home() {
  const [tools] = useState<IAITool[]>(toolsData);

  return (
    <>
      <Head>
        <title>AI Tools and Technologies: Discover, Learn, and Innovate</title>
        <meta
          name="description"
          content="Unlock the power of AI with our comprehensive collection of cutting-edge tools and technologies. Discover new ways to innovate and grow your business with our expert resources and guidance. Explore our platform today and experience the future of AI."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col items-center py-12 px-4 bg-zinc-800">
        <div className="max-w-screen-xl flex flex-col items-center space-y-12 p-4">
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-yellow-500 inline-block text-transparent bg-clip-text">
              AI Assistants
            </h1>
            <h2 className="text-2xl font-semibold text-gray-200">
              Discover the Latest AI Tools and Technologies for Your Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-lg border-4 border-yellow-500 p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col space-y-4 justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                  <p className="text-gray-700 mb-2">{tool.description}</p>
                </div>
                <a
                  href={tool.url}
                  className="text-blue-600 hover:text-blue-800 font-bold"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
