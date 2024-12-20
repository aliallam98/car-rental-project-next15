import {
  LayoutDashboard,
  Car,
  CalendarDays,
  Users,
  Tag,
  Folder,
  BarChart,
  Settings,
  Activity,
} from "lucide-react";

export const sidebarItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Categories", href: "/categories", icon: Folder },
  { name: "Brands", href: "/brands", icon: Tag },
  { name: "Vehicles", href: "/vehicles", icon: Car },
  { name: "Reservations", href: "/reservations", icon: CalendarDays },
  { name: "Reports", href: "/reports", icon: BarChart },
  { name: "Activities", href: "/Activities", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
];
