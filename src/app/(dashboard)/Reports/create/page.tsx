import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";

const CustomersCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Reports"
        buttonTitle="Go Back"
        linkHref="/reports"
        icon={ArrowLeft}
      />
    </SectionWithContainer>
  );
};

export default CustomersCreationPage;
