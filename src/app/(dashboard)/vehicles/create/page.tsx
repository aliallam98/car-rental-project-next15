import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";
import VehicleForm from "../_components/VehicleForm";

const VehicleCreationPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Create Vehicle"
        buttonTitle="Go Back"
        linkHref="/vehicles"
        icon={ArrowLeft}
      />
      <VehicleForm />

    </SectionWithContainer>
  );
};

export default VehicleCreationPage;
