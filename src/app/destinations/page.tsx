import AllDestinationsCard from "@/components/allDestinationsCard";

type Destination = {
  _id: string;
  name: string;
  location: string;
  price: number;
  image?: string | null;
  rating?: number;
  duration?: string;
};

async function AllDestinationsPage() {
  const res = await fetch("http://localhost:5000/destinations");
  const data: Destination[] = await res.json();

  return (
    <div className="container mx-auto">
      <h1>Explore All Destinations</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((destination) => (
          <AllDestinationsCard
            key={destination._id}
            destination={destination}
          />
        ))}
      </div>
    </div>
  );
}

export default AllDestinationsPage;