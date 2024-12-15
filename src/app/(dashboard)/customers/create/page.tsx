import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";

const CustomersCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Create Customer"
        buttonTitle="Go Back"
        linkHref="/customers"
        icon={ArrowLeft}
      />
    </SectionWithContainer>
  );
};

export default CustomersCreationPage;
