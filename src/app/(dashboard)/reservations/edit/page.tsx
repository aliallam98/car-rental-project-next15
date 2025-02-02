import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";

const page = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="reservations"
        buttonTitle="Go Back"
        linkHref="/reservations"
        icon={ArrowLeft}
      />
    </SectionWithContainer>
  );
};

export default page;
