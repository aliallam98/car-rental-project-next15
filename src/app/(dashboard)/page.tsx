import Pagination from "@/components/Pagination";

export default function Page() {
  return (
    <div>
      <Pagination page={1} totalPages={10} 
      />
    </div>
  );
}
