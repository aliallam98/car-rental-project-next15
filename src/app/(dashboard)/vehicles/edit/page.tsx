import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../../_components/PageHeader";
import { ArrowLeft } from "lucide-react";
import VehicleForm from "../_components/VehicleForm";

const VehicleEditionPage = () => {
    //Fetch category here
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
      <VehicleForm />  
    </SectionWithContainer>
  )
};

export default VehicleEditionPage
