import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";
import CategoryForm from "../_components/CategoryForm";

const CategoryCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Create Category"
        buttonTitle="Go Back"
        linkHref="/categories"
        icon={ArrowLeft}
      />
      <CategoryForm/>
    </SectionWithContainer>
  );
};

export default CategoryCreationPage;
