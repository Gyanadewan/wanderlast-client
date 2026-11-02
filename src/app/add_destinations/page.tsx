"use client"

import { LuggageIcon, Trash2Icon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const categories = [
  "Beach",
  "Mountain",
  "Adventure",
  "Cultural",
  "City Break",
  "Honeymoon",
]

function AddDestinationsPage() {
  const [category, setCategory] = useState<string | null>("Beach")
   const handleSubmit = async (event) => {
     event.preventDefault()
   const formData = new FormData(event.currentTarget)
  const data = Object.fromEntries(formData.entries())

  data.category = category
   const res = await fetch ("http://localhost:5000/add-destination",{
     method: "POST",
     headers: {
        "Content-Type": "application/json",
     },
     body: JSON.stringify(data)
   })
   const result = await res.json()
   console.log("Backend response:", result);
  }

  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto max-w-3xl px-4 pb-12 md:px-8">
        <h1 className="font-serif text-4xl text-foreground">
          Add New Travel Package
        </h1>

        <form
          className="mx-auto mt-10 max-w-xl rounded-lg border border-border bg-white p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="destination-name">Destination Name</Label>
              <Input
                id="destination-name"
                name="destinationName"
                placeholder="Bali Paradise"
                className="rounded-lg bg-[#f9fafb] h-9"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="Indonesia"
                  className="rounded-lg bg-[#f9fafb] h-9"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger
                    id="category"
                    className="w-full rounded-lg bg-[#f9fafb] h-9"
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
                  placeholder="e.g., 1299"
                  className="rounded-lg bg-[#f9fafb] h-9"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  name="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                  className="rounded-lg bg-[#f9fafb] h-9"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="departure-date">Departure Date</Label>
              <Input
                id="departure-date"
                name="departureDate"
                type="date"
                className="rounded-lg bg-[#f9fafb] h-9"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                id="image-url"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="rounded-lg bg-[#f9fafb] h-9"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the travel experience..."
                className="min-h-24 rounded-lg bg-[#f9fafb]"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3">
            <Button
              type="reset"
              variant="outline"
              size="lg"
              className="h-10 border-destructive/40 bg-white px-5 text-destructive hover:bg-destructive/5 hover:text-destructive"
            >
              <Trash2Icon data-icon="inline-start" />
              Cancel
            </Button>
            <Button type="submit" size="lg" className="h-10 bg-cyan-600 px-5 text-white hover:bg-cyan-700">
              <LuggageIcon data-icon="inline-start" />
              Add Travel Package
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddDestinationsPage
