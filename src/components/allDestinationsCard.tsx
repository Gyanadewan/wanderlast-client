
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  CalendarDays,
  ArrowUpRight,
  Star,
} from "lucide-react";
import Image from "next/image";

type Destination = {
  _id: string;
  name: string;
  location: string;
  price: number;
  rating?: number;
  duration?: string;
  image?: string | null;
};

type AllDestinationsCardProps = {
  destination: Destination;
};

function AllDestinationsCard({
  destination,
}: AllDestinationsCardProps) {
  return (
    <Card className="gap-0 overflow-hidden rounded-sm border-0 bg-transparent py-0 shadow-none">
      {destination.image && (
        <div className="relative aspect-[2/1] overflow-hidden rounded-sm bg-muted">
          <Image
            src={destination.image}
            alt={destination.name || "Destination"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />

          <Badge className="absolute right-2 top-2 gap-1 rounded-sm bg-white text-black hover:bg-white">
            {destination.rating ?? 4.5}
            <Star className="size-3 fill-yellow-400 text-yellow-400" />
          </Badge>
        </div>
      )}

      <CardContent className="px-0 pt-2 pb-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="mb-1 flex items-center gap-1 text-[10px] text-muted-foreground">
              <MapPin className="size-3" />
              {destination.location}
            </p>

            <h2 className="text-sm font-semibold text-gray-900">
              {destination.name}
            </h2>
          </div>

          <p className="shrink-0 text-sm font-semibold text-gray-900">
            ${destination.price}
            <span className="text-[9px] font-normal text-muted-foreground">
              /Person
            </span>
          </p>
        </div>

        <p className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
          <CalendarDays className="size-3" />
          {destination.duration || "7 Days/6 Nights"}
        </p>

        <Link
          href={`/destinations/${destination._id}`}
          className="mt-2 inline-flex items-center gap-1 text-[10px] font-medium text-cyan-600 transition-colors hover:text-cyan-800"
        >
          BOOK NOW
          <ArrowUpRight className="size-3" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default AllDestinationsCard;
