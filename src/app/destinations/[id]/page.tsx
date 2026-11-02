
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import EditDetailsDestinations from "@/components/EditDetailsDestinations";

type Destination = {
  _id: string;
  name: string;
  location?: string;
  price?: number;
  rating?: number;
  duration?: string;
  image?: string | null;
  description?: string;
  departureDate?: string;
  highlights?: string[];
  reviews?: number;
};

const DEFAULT_HIGHLIGHTS = [
  "Luxury accommodation included",
  "Guided tours & experiences",
  "Daily breakfast provided",
  "Airport pickup & drop-off",
  "Local cultural activities",
  "Free time to explore",
];

const BOOKING_INCLUDES = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

async function DestinationsDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);

  if (!res.ok) notFound();

  const destination: Destination = await res.json();

  const highlights = destination.highlights ?? DEFAULT_HIGHLIGHTS;

  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto max-w-5xl px-4 pb-12 md:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            Back to Destinations
          </Link>

          <div className="flex items-center gap-2">
            <EditDetailsDestinations  destination={destination}/>

            <Button
              size="sm"
              className="border-destructive/40 bg-white text-destructive hover:bg-destructive/5 hover:text-destructive"
            >
              Cancel
            </Button>
          </div>
        </div>

        {destination.image && (
          <div className="relative mt-4 aspect-[21/9] overflow-hidden rounded-lg bg-muted">
            <Image
              src={destination.image}
              alt={destination.name || "Destination"}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3.5" />
              {destination.location || "—"}
            </p>

            <h1 className="mt-1 font-serif text-4xl text-foreground">
              {destination.name}
            </h1>

            <div className="mt-2 flex items-center gap-2 text-xs">
              <Star className="size-3.5 fill-yellow-400 text-yellow-400" />

              <span className="font-semibold text-foreground">
                {destination.rating ?? "4.5"}
              </span>

              {destination.reviews !== undefined && (
                <span className="text-muted-foreground">
                  ({destination.reviews} reviews)
                </span>
              )}

              <Separator orientation="vertical" className="h-3.5!" />

              <CalendarDays className="ml-1 size-3.5" />
              {destination.duration || "7 Days / 6 Nights"}
            </div>

            <h2 className="mt-6 font-serif text-2xl text-foreground">
              Overview
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {destination.description || "No description available yet."}
            </p>

            <h2 className="mt-6 font-serif text-2xl text-foreground">
              Highlights
            </h2>

            <ul className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <Check className="size-3 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <Card className="h-fit rounded-lg border border-border shadow-sm">
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground">Starting from</p>

                <p className="mt-1 text-3xl font-semibold text-cyan-600">
                  ${destination.price}
                </p>

                <p className="mt-0.5 text-xs text-muted-foreground">
                  per person
                </p>
              </div>

              <Input
                type="date"
                defaultValue={destination.departureDate}
                className="rounded-lg bg-muted"
                aria-label="Departure date"
              />

              <Button className="w-full bg-cyan-600 text-white hover:bg-cyan-700">
                Book Now
                <ArrowRight data-icon="inline-end" />
              </Button>

              <ul className="space-y-2 text-xs text-muted-foreground">
                {BOOKING_INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default DestinationsDetailsPage;
