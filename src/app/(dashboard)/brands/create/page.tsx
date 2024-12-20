import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";
import BrandForm from "../_components/BrandForm";

const BrandCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Create Brand"
        buttonTitle="Go Back"
        linkHref="/categories"
        icon={ArrowLeft}
      />
      <BrandForm/>
    </SectionWithContainer>
  );
};

export default BrandCreationPage;
