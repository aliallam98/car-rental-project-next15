import SectionWithContainer from "@/components/SectionWithContainer";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "../../_components/PageHeader";

const BrandEditionPage = () => {
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

export default BrandEditionPage;
