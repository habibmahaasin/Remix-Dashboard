import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  FileText,
  LayoutDashboard,
} from "lucide-react";

export const SIDEBAR_DATA = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://www.mahaasin.my.id/logo.svg",
  },
  teams: [
    {
      name: "General Dashboard",
      logo: GalleryVerticalEnd,
      plan: "By Mahaasin",
    },
  ],
  navMain: [
    { title: "Dashboard", url: "/", icon: LayoutDashboard, isActive: true },
    { title: "Posts", url: "/posts", icon: FileText, isActive: true },
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      //   isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};
