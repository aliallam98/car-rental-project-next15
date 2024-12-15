import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../_components/PageHeader";
import { ArrowRight } from "lucide-react";

const ReportsMainPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Reports"
        buttonTitle="Add Report"
        linkHref="/reports"
        icon={ArrowRight}
      />
    </SectionWithContainer>
  )
};

export default ReportsMainPage
