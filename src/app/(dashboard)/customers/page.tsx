import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../_components/PageHeader";
import { ArrowRight } from "lucide-react";

const CustomerMainPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Customers"
        buttonTitle="Add Customer"
        linkHref="/customers/create"
        icon={ArrowRight}
      />
    </SectionWithContainer>
  );
};

export default CustomerMainPage;
