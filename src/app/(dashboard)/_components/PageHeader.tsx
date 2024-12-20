import Link from "next/link";
import {  LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IProps {
  headerTitle: string;
  buttonTitle: string;
  linkHref: string;
  icon: LucideIcon;
}

export function PageHeader({ headerTitle,buttonTitle, linkHref, icon: Icon }: IProps) {
  return (
    <div className="sticky top-0 flex items-center justify-between p-1 mb-6 border-b bg-background shadow-sm ">
      <h1 className="text-2xl font-bold">{headerTitle}</h1>
      <Button variant="ghost" size="sm" asChild>
        <Link href={linkHref} className="flex items-center">
          <Icon className="mr-2 h-4 w-4" />
          {buttonTitle}
        </Link>
      </Button>
    </div>
  );
}
