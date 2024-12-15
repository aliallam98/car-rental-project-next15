import SectionWithContainer from "@/components/SectionWithContainer";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../_components/PageHeader";

const ReservationsMainPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Reservations"
        buttonTitle="Add Reservation"
        linkHref="/reservations/create"
        icon={ArrowRight}
      />
    </SectionWithContainer>
  );
};

export default ReservationsMainPage;
