import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";

const CategoryCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Create Category"
        buttonTitle="Go Back"
        linkHref="/categories"
        icon={ArrowLeft}
      />
    </SectionWithContainer>
  );
};

export default CategoryCreationPage;
