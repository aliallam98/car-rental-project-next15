import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../_components/PageHeader";
import { ArrowRight } from "lucide-react";

const BrandsMainPage = () => {
  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Brands"
        buttonTitle="Add Brand"
        linkHref="/brands/create"
        icon={ArrowRight}
      />
    </SectionWithContainer>
  );
};

export default BrandsMainPage;
