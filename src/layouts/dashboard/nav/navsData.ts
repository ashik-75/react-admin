import {
  ArrowUpRightFromCircle,
  BadgeIcon,
  GitPullRequestDraft,
  LayoutDashboard,
  Pen,
  User,
} from "lucide-react";

export const navsData = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: LayoutDashboard,
  },
  {
    title: "user",
    path: "/dashboard/user",
    icon: User,
  },
  {
    title: "product",
    path: "/dashboard/products",
    icon: BadgeIcon,
  },
  {
    title: "blog",
    path: "/dashboard/blog",
    icon: Pen,
  },
  {
    title: "login",
    path: "/login",
    icon: ArrowUpRightFromCircle,
  },
  {
    title: "Not found",
    path: "/404",
    icon: GitPullRequestDraft,
  },
];
