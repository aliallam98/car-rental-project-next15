import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";

const CustomerEditionPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Customers"
        buttonTitle="Go Back"
        linkHref="/customers"
        icon={ArrowLeft}
      />
    </SectionWithContainer>
  );
};

export default CustomerEditionPage;
