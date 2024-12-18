import SectionWithContainer from "@/components/SectionWithContainer";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../_components/PageHeader";
import DataTable from "../_components/data-table";
import Link from "next/link";

type Employee = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function CategoriesMainPage() {
  const columns: Array<{
    key: keyof Employee;
    header: string;
    render?: (value: Employee[keyof Employee]) => React.ReactNode;
  }> = [
    { key: "id", header: "ID" },
    { key: "name", header: "Name" },
    {
      key: "email",
      header: "Email",
      render: (value) => (
        <Link href={`#`} className="text-blue-600 hover:underline">
          {value}
        </Link>
      ),
    },
    {
      key: "role",
      header: "Role",
      render: (value) => (
        <span className="rounded-full bg-gray-100 px-2 py-1 text-sm">
          {value}
        </span>
      ),
    },
  ];

  const dummyData: Employee[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Developer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Designer",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Manager",
    },
  ];
  
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Categories"
        buttonTitle="Add Category"
        linkHref="categories/create"
        icon={ArrowRight}
      />
      <DataTable<Employee> data={dummyData} columns={columns} />
    </SectionWithContainer>
  );
}
