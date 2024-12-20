import SectionWithContainer from "@/components/SectionWithContainer";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "../../_components/PageHeader";
import BrandForm from "../_components/BrandForm";

const BrandEditionPage = () => {
  //Fetch category here
  const x = {
    id: 12,
    name: "John Doe",
    description: "john@example.com",
  };

  //handle notFound
  //handle error
  //handle loading

  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Categories"
        buttonTitle="Go Back"
        linkHref="/categories"
        icon={ArrowLeft}
      />
      <BrandForm brand={x} />
    </SectionWithContainer>
  );
};

export default BrandEditionPage;
