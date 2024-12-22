import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../_components/PageHeader";
import { ArrowRight } from "lucide-react";
import ReportForm from "./_components/ReportForm";

const ReportsMainPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Reports"
        buttonTitle="Add Report"
        linkHref="/reports"
        icon={ArrowRight}
      />
      <ReportForm/>
    </SectionWithContainer>
  );
};

export default ReportsMainPage;
