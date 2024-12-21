"use client";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * Pagination Component
 *
 * A flexible pagination component that allows navigation through pages,
 * showing a dynamic list of page numbers with previous/next buttons.
 *
 * @param page - The current page number (used as the initial page).
 * @param totalPages - The total number of pages available.
 * @param buttonClassName - Optional CSS class for the pagination buttons (previous/next).
 * @param activePageClassName - Optional CSS class for the active page number button.
 * @param containerClassName - Optional CSS class for the container wrapping the pagination buttons.
 */
interface IProps {
  page: number; // The current page number.
  totalPages: number; // The total number of pages available for pagination.
  buttonClassName?: string; // Optional class name for pagination buttons.
  activePageClassName?: string; // Optional class name for the active page number button.
  containerClassName?: string; // Optional class name for the pagination container.
}

/**
 * Pagination component for displaying and navigating through a set of pages.
 * Displays previous and next buttons along with a list of page numbers.
 */
const Pagination = ({
  page,
  totalPages,
  buttonClassName,
  activePageClassName,
  containerClassName,
}: IProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the current page from the searchParams, falling back to the passed 'page' prop.
  const currentPage = Number(searchParams.get("page") || page);

  /**
   * Navigates to a specific page.
   * Updates the page query parameter in the URL and triggers a re-render.
   *
   * @param pageValue - The page number to navigate to.
   */
  const navigateToPage = (pageValue: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageValue.toString());
    router.push(`?${params.toString()}`);
  };

  /**
   * Handles click events for the previous and next buttons.
   * Moves to the previous or next page if the action is within valid bounds.
   *
   * @param value - The direction to navigate, either "prev" or "next".
   */
  const onClickHandler = (value: "prev" | "next") => {
    const pageValue = value === "prev" ? currentPage - 1 : currentPage + 1;
    if (pageValue >= 1 && pageValue <= totalPages) {
      navigateToPage(pageValue);
    }
  };

  /**
   * Generates the page numbers to display based on the current page and total pages.
   * It calculates the page numbers with a range around the current page and includes "..." for skipped ranges.
   *
   * @param currentPage - The current active page number.
   * @param totalPages - The total number of pages available.
   * @param range - The range of pages to show around the current page (default is 1).
   *
   * @returns An array of page numbers and/or ellipsis.
   */
  const getPageNumbers = (
    currentPage: number,
    totalPages: number,
    range = 1
  ) => {
    const pages: (number | string)[] = [];
    for (let i = 1; i <= totalPages; i++) {
      // Show first and last pages, and pages within the range around the current page
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - range && i <= currentPage + range)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div
      className={cn(
        "flex justify-center items-center gap-x-10 mt-10",
        containerClassName
      )}
    >
      {/* Previous button */}
      <Button
        className={cn("rounded-full", buttonClassName)}
        variant="outline"
        size="sm"
        onClick={() => onClickHandler("prev")}
        disabled={currentPage <= 1}
      >
        <MoveLeft aria-hidden="true" />
      </Button>

      {/* Page numbers */}
      <div className="flex gap-2">
        {getPageNumbers(currentPage, totalPages).map((pageNumber, i) =>
          pageNumber === "..." ? (
            <span key={i}>...</span> // Display ellipsis when there are skipped page ranges
          ) : (
            <span
              key={i}
              onClick={() =>
                typeof pageNumber === "number" && navigateToPage(pageNumber)
              } // Navigate to selected page
              className={cn(
                "size-10 border-2 border-[#e5e3da] flex justify-center items-center rounded-full cursor-pointer",
                currentPage === pageNumber && activePageClassName // Highlight active page number
              )}
            >
              {pageNumber}
            </span>
          )
        )}
      </div>

      {/* Next button */}
      <Button
        className={cn("rounded-full", buttonClassName)}
        variant="outline"
        size="sm"
        onClick={() => onClickHandler("next")}
        disabled={currentPage >= totalPages}
      >
        <MoveRight aria-hidden="true" />
      </Button>
    </div>
  );
};

export default Pagination;
