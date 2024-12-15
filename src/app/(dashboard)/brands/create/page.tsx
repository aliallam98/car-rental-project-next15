import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";

const BrandCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Create Brand"
        buttonTitle="Go Back"
        linkHref="/categories"
        icon={ArrowLeft}
      />
    </SectionWithContainer>
  );
};

export default BrandCreationPage;
