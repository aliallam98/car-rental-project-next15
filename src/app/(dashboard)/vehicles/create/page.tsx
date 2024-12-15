import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";

const VehicleCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Create Vehicle"
        buttonTitle="Go Back"
        linkHref="/vehicles"
        icon={ArrowLeft}
      />
    </SectionWithContainer>
  );
};

export default VehicleCreationPage;
