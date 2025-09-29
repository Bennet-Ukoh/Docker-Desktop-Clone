import {
  AppWindow,
  CirclePlus,
  Cloudy,
  FolderSearch,
  GraduationCap,
  Keyboard,
  Package,
  Wrench,
} from "lucide-react";

export const sidebarNavItems = [
  { name: "Containers", href: "/container", icon: Package },
  { name: "Images", href: "/images", icon: Cloudy },
  {
    name: "Volumes",
    href: "/volumes",
    icon: AppWindow,
  },
  { name: "Dev Environments", icon: Keyboard, href: "/dev-environments" },
  { name: "Learning Center", href: "/learning-center", icon: GraduationCap },
  { name: "Builds", href: "/builds", icon: Wrench },
  {
    name: "Registries Explorer",
    href: "/registries-explorer",
    icon: FolderSearch,
  },
  { name: "Add Extension", href: "/add-extension", icon: CirclePlus },
];
