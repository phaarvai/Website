"use client";

import Link from "next/link";
import { manufacturers } from "@/projects/x-y/utils/data";
import { xyRoutes } from "@/projects/x-y/utils/routes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BrowseView() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Supplier Discovery</h1>
      {manufacturers.map((m) => (
        <Card key={m.id}>
          <CardContent className="pt-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-medium">{m.name}</p>
              <p className="text-sm text-muted-foreground">{m.location} · {m.price} · {m.rating} rating</p>
            </div>
            <Link href={xyRoutes.booking}>
              <Button size="sm">Book slot</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

