
"use client";

import { useState, type FormEvent } from "react";
import { Pencil, LuggageIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

const categories = [
  "Beach",
  "Mountain",
  "City",
  "Adventure",
  "Cultural",
  "Wildlife",
];

interface Destination {
  _id: string;
  destinationName: string;
  country: string;
  category: string;
  price: number;
  duration: string;
  departureDate: string;
  imageUrl: string;
  description: string;
}

interface Props {
  destination: Destination;
  onUpdated?: () => void;
}

function EditDetailsDestinations({
  destination,
  onUpdated,
}: Props) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(
    destination.category || "Beach"
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const formValues = Object.fromEntries(
      formData.entries()
    );

    const updatedData: Record<string, string | number> = {};

    Object.entries(formValues).forEach(([key, value]) => {
      const oldValue = destination[key as keyof Destination];

      if (String(value) !== String(oldValue ?? "")) {
        updatedData[key] =
          key === "price" ? Number(value) : String(value);
      }
    });

    if (category !== destination.category) {
      updatedData.category = category;
    }

    if (Object.keys(updatedData).length === 0) {
      console.log("No changes found");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/destination/${destination._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
         body: JSON.stringify(updatedData),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(
          result.message || "Failed to update destination"
        );
      }

      console.log("Updated successfully:", result);

      onUpdated?.();
      setOpen(false);

    } catch (error) {
      console.error("Error updating destination:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);

    if (value) {
      setCategory(destination.category || "Beach");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger className="inline-flex h-8 items-center gap-2 rounded-md border px-3 text-sm">
        <Pencil size={16} />
        Edit
      </DialogTrigger>

      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Edit Destination</DialogTitle>

          <DialogDescription>
            Update the destination details using the form below.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-h-[75vh] w-full max-w-xl space-y-4 overflow-y-auto p-1"
        >
          <div className="space-y-1.5">
            <Label htmlFor="destination-name">
              Destination Name
            </Label>

            <Input
              id="destination-name"
              name="destinationName"
              defaultValue={destination.destinationName}
              placeholder="Bali Paradise"
              className="h-9 rounded-lg bg-[#f9fafb]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="country">Country</Label>

              <Input
                id="country"
                name="country"
                defaultValue={destination.country}
                placeholder="Indonesia"
                className="h-9 rounded-lg bg-[#f9fafb]"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="category">Category</Label>

              <Select
                value={category}
                onValueChange={setCategory}
              >
                <SelectTrigger
                  id="category"
                  className="h-9 w-full rounded-lg bg-[#f9fafb]"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  {categories.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="price">Price (USD)</Label>

              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                defaultValue={destination.price}
                placeholder="e.g., 1299"
                className="h-9 rounded-lg bg-[#f9fafb]"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="duration">Duration</Label>

              <Input
                id="duration"
                name="duration"
                defaultValue={destination.duration}
                placeholder="e.g., 7 Days/6 Nights"
                className="h-9 rounded-lg bg-[#f9fafb]"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="departure-date">
              Departure Date
            </Label>

            <Input
              id="departure-date"
              name="departureDate"
              type="date"
              defaultValue={destination.departureDate?.slice(0, 10)}
              className="h-9 rounded-lg bg-[#f9fafb]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="image-url">Image URL</Label>

            <Input
              id="image-url"
              name="imageUrl"
              type="url"
              defaultValue={destination.imageUrl}
              placeholder="https://example.com/image.jpg"
              className="h-9 rounded-lg bg-[#f9fafb]"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>

            <Textarea
              id="description"
              name="description"
              defaultValue={destination.description}
              placeholder="Describe the travel experience..."
              className="min-h-24 rounded-lg bg-[#f9fafb]"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              disabled={loading}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="bg-cyan-600 text-white hover:bg-cyan-700"
            >
              <LuggageIcon data-icon="inline-start" />

              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditDetailsDestinations;
