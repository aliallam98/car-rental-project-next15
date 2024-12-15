import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../_components/PageHeader";
import { ArrowRight } from "lucide-react";

const VehiclesMainPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Vehicles"
        buttonTitle="Add Vehicle"
        linkHref="/vehicles/create"
        icon={ArrowRight}
      />
    </SectionWithContainer>
  );
};

export default VehiclesMainPage;
