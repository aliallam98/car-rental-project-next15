import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";

const CategoryCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Categories"
        buttonTitle="Go Back"
        linkHref="/categories"
        icon={ArrowLeft}
      />
    </SectionWithContainer>
  );
};

export default CategoryCreationPage;
