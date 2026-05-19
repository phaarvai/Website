"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageSEO } from "@/components/PageSEO";

export default function NotFound() {
  return (
    <>
      <PageSEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
      />

      <div className="min-h-[70vh] flex items-center justify-center px-6 pt-28">
        <div className="text-center max-w-md">
          <p className="label-mono mb-3">404</p>

          <h1 className="text-3xl font-bold text-foreground mb-3">
            Page not found
          </h1>

          <p className="text-muted-foreground mb-8">
            This page may have moved. Explore our themes, projects,
            or partner with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button>Go home</Button>
            </Link>

            <Link href="/projects">
              <Button variant="outline">
                View projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}