"use client";
import SectionWithContainer from "@/components/SectionWithContainer";
import { PageHeader } from "../_components/PageHeader";
import { ArrowRight } from "lucide-react";
import { Model } from "@/components/models/Model";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ReportsMainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const x = () => setIsOpen(true);

  return (
    <SectionWithContainer>
      <PageHeader
        headerTitle="Reports"
        buttonTitle="Add Report"
        linkHref="/reports"
        icon={ArrowRight}
      />
      <Button onClick={x}>Open Model</Button>
      <Model
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Delete"
        description="Are you sure you want to delete this report?"
        buttonLabel="Submit"
      />
    </SectionWithContainer>
  );
};

export default ReportsMainPage;
