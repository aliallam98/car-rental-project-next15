import SectionWithContainer from "@/components/SectionWithContainer";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../_components/PageHeader";


export default function CategoriesMainPage() {
  return ( <SectionWithContainer>
    <PageHeader
    headerTitle="Categories"
    buttonTitle="Add Category"
    linkHref="categories/create"
    icon={ArrowRight}
    
    />
  </SectionWithContainer>
  )
}

