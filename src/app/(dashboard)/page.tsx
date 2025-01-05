import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <Pagination page={1} totalPages={10} />
      <Button>xx</Button>
    </div>
  );
}
