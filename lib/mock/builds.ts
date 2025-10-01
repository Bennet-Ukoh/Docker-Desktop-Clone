export type ActiveBuild = {
  id: string;
  name: string;
  platform: string;
  builder: string;
  progress: string; // e.g. "18/22"
  percent: number; // numeric percent for progress bar
  timer: string;
};

export type CompletedBuild = {
  id: string;
  name: string;
  platform: string;
  builder: string;
  completed: string; // e.g. "4 minutes"
  cache: string; // e.g. "7/20"
  status: "success" | "error";
  duration: string;
};

export const activeBuilds: ActiveBuild[] = [
  {
    id: "KLUZTI",
    name: "binaries",
    platform: "ARM64",
    builder: "default",
    progress: "18/22",
    percent: 82, // (18/22 * 100)
    timer: "3m12.7s",
  },
];

export const completedBuilds: CompletedBuild[] = [
  {
    id: "5KDY42",
    name: "dlnd",
    platform: "ARM64",
    builder: "default",
    completed: "4 minutes",
    cache: "7/20",
    status: "success",
    duration: "11.5s",
  },
  {
    id: "5KDY43",
    name: "dlnd",
    platform: "ARM64",
    builder: "default",
    completed: "4 minutes",
    cache: "7/20",
    status: "success",
    duration: "11.5s",
  },
  {
    id: "5KDY44",
    name: "dlnd",
    platform: "ARM64",
    builder: "default",
    completed: "4 minutes",
    cache: "7/20",
    status: "success",
    duration: "11.5s",
  },
  {
    id: "5KDY45",
    name: "dlnd",
    platform: "ARM64",
    builder: "default",
    completed: "4 minutes",
    cache: "7/20",
    status: "success",
    duration: "11.5s",
  },
  {
    id: "5KDY46",
    name: "dlnd",
    platform: "ARM64",
    builder: "default",
    completed: "4 minutes",
    cache: "7/20",
    status: "success",
    duration: "11.5s",
  },
];
