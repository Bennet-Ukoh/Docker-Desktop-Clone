"use client";

import {
  ActiveBuild,
  activeBuilds,
  CompletedBuild,
  completedBuilds,
} from "@/lib/mock/builds";
import BuildRow from "./BuildRow";

export default function BuildTable() {
  return (
    <div className="px-4 py-6 space-y-8">
      {/* Active Builds Table */}
      <section>
        <h2 className="text-base text-gray-200 mb-3">Active Builds</h2>
        <table className="min-w-full border-b-2 mb-10 border-gray-800  ">
          <thead className=" text-sm text-left text-gray-300 border-b-2 border-gray-800 ">
            <tr>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Platform</th>
              <th className="px-3 py-2">Builder</th>
              <th className="px-3 py-2">Progress</th>
              <th className="px-3 py-2">Timer</th>
            </tr>
          </thead>
          <tbody>
            {activeBuilds.map((build: ActiveBuild) => (
              <BuildRow key={build.id} type="active" build={build} />
            ))}
          </tbody>
        </table>
      </section>

      {/* Completed Builds Table */}
      <section>
        {/* Header row with search input */}
        <div className="flex justify-between items-center mb-3 px-2">
          <h2 className="text-base  text-gray-200">Completed Builds</h2>
          <input
            type="text"
            placeholder="Search"
            className="w-52 border border-gray-400 rounded px-3 py-1 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        <table className="min-w-full">
          <thead className=" text-sm text-left text-gray-300 border-b border-gray-800">
            <tr>
              <th className="px-3 py-2">ID</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Platform</th>
              <th className="px-3 py-2">Builder</th>
              <th className="px-3 py-2">Completed</th>
              <th className="px-3 py-2">Cache</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {completedBuilds.map((build: CompletedBuild) => (
              <BuildRow key={build.id} type="completed" build={build} />
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
