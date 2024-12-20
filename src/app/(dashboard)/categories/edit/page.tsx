import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";
import CategoryForm from "../_components/CategoryForm";

const CategoryEditionPage = () => {
  //Fetch category here
  const x = {
    id: 1,
    name: "John Doe",
    description: "john@example.com",
  };

  //handle notFound
  //handle error
  //handle loading

  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Categories"
        buttonTitle="Go Back"
        linkHref="/categories"
        icon={ArrowLeft}
      />
      <CategoryForm category={x} />
    </SectionWithContainer>
  );
};

export default CategoryEditionPage;
