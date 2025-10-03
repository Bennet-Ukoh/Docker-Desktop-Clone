"use client";

const execRows = [
  ["drwxr-xr-x", "1 root root", "4096", "May 25", "12:34", "."],
  ["drwxr-xr-x", "1 root root", "4096", "May 25", "12:34", ".."],
  ["-rwxr-xr-x", "1 root root", "4096", "Sep 28", "2023", "bin"],
  ["drwxr-xr-x", "1 root root", "4096", "Oct 25", "2023", "etc"],
  ["-rwxr-xr-x", "1 root root", "4096", "Sep 28", "2023", "usr"],
];

export default function ContainerDetail({ active }: { active: string }) {
  switch (active) {
    case "Logs":
      return (
        <div className="mt-4 bg-black text-green-400 font-mono rounded p-4 overflow-x-auto">
          <p>[INFO] Starting container...</p>
          <p>[INFO] Running entrypoint script</p>
          <p>[INFO] Container initialized successfully</p>
        </div>
      );

    case "Inspect":
      return (
        <div className="mt-4 bg-gray-900 text-gray-200 font-mono rounded p-4 overflow-x-auto text-sm">
          <pre>
            {JSON.stringify(
              {
                Id: "1f49d3b8ec98",
                Image: "docker/welcome-to-docker",
                Created: "2023-09-28T12:34:00Z",
                State: { Status: "running", Running: true },
                Ports: ["8080:80"],
              },
              null,
              2
            )}
          </pre>
        </div>
      );

    case "Bind mounts":
      return (
        <div className="mt-4 p-4 border border-gray-800 rounded">
          <p className="text-sm text-gray-600">No bind mounts configured.</p>
        </div>
      );

    case "Exec":
      return (
        <div className="mt-4 bg-black text-green-400 font-mono rounded p-4 overflow-x-auto">
          <p className="mb-2">/# ls -la</p>
          <table className="w-full text-sm">
            <tbody>
              {execRows.map((row, idx) => (
                <tr key={idx} className="whitespace-pre">
                  {row.map((col, cIdx) => (
                    <td key={cIdx} className="px-2">
                      {col}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-2">/#</p>
        </div>
      );

    case "Files":
      return (
        <div className="mt-4 p-4 border border-gray-800 rounded">
          <ul className="list-disc list-inside text-sm text-gray-400">
            <li>/app/docker-entrypoint.sh</li>
            <li>/var/log/app.log</li>
            <li>/usr/local/bin/start.sh</li>
          </ul>
        </div>
      );

    case "Stats":
      return (
        <div className="mt-4 p-4 border border-gray-800 text-gray-400 rounded text-sm">
          <p>RAM: 6.6 GB</p>
          <p>CPU: 0.12%</p>
          <p>Disk: 36.03 GB / 62.67 GB</p>
          <p>Status: Connected</p>
        </div>
      );

    default:
      return (
        <div className="mt-4 p-4 border border-gray-800 rounded">
          <p className="text-gray-400">Select a tab to view details.</p>
        </div>
      );
  }
}
