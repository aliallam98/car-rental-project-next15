import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";
import ReservationFrom from "../_components/ReservationFrom";

const page = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Create reservation"
        buttonTitle="Go Back"
        linkHref="/reservations"
        icon={ArrowLeft}
      />
      <ReservationFrom/>
    </SectionWithContainer>
  );
};

export default page;
