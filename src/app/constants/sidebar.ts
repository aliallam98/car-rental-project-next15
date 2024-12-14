import {
  LayoutDashboard,
  Car,
  CalendarDays,
  Users,
  Tag,
  Folder,
  BarChart,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Vehicles", href: "/vehicles", icon: Car },
  { name: "Brands", href: "/brands", icon: Tag },
  { name: "Categories", href: "/categories", icon: Folder },
  { name: "Reservations", href: "/reservations", icon: CalendarDays },
  { name: "Reports", href: "/reports", icon: BarChart },
  { name: "Settings", href: "/settings", icon: Settings },
];
