import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFoundComponent({
  title = "Page Not Found",
  description = "Oops! The page you are looking for doesn't exist or has been moved.",
  imageUrl = "/placeholder.svg?height=400&width=400",
  backUrl = "/",
  backText = "Go Back Home",
}: {
  title: string;
  description?: string;
  imageUrl?: string;
  backUrl?: string;
  backText?: string;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <Image
          src={imageUrl}
          alt="404 Illustration"
          width={400}
          height={400}
          className="mx-auto"
        />
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">{description}</p>
        <div className="mt-6">
          <Link href={backUrl}>
            <Button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {backText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
