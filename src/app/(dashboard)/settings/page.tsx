
import SectionWithContainer from "@/components/SectionWithContainer"
import { PageHeader } from "../_components/PageHeader"
import { ArrowLeft, } from "lucide-react"

export default function Page() {
  return (
    <SectionWithContainer>
    <PageHeader
      headerTitle="Customers"
      buttonTitle="Go Back"
      linkHref="/dashboard"
      icon={ArrowLeft}
    />
  </SectionWithContainer>
  )
}

