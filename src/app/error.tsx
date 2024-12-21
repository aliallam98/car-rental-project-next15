"use client";

import { Button } from "@/components/ui/button"
import { AlertTriangle } from 'lucide-react'

interface IProps {
  error: Error;
  reset: () => void;
}

/*
* this ErrorBoundary only catches error that happens in client component
* which means whenever error happens in server component its not gonna catch it
* and need to handle scenarios it might to cause error ex. fetching data ..etc 
*/ 
const ErrorBoundary = ({ error, reset }: IProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-yellow-400" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Oops! Something went wrong</h2>
          <p className="mt-2 text-sm text-gray-600">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
        </div>
        <div className="mt-8 bg-white p-4 shadow sm:rounded-lg">
          <div className="text-sm text-gray-700">
            <p className="font-medium">Error details:</p>
            <p className="mt-2">{error.message}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button 
            onClick={reset}
            size="lg"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try again
          </Button>
        </div>
        <p className="mt-2 text-center text-sm text-gray-600">
          If the problem persists, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default ErrorBoundary;