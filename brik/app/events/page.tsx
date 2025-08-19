import Image from "next/image";

export default function EventsPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <section className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <Image
            src="/placeholder-female.png"
            alt="Hello Brik Event"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Hello Brik</h2>
          <p className="mb-4 text-gray-700">
            "Hello Brik" was our inaugural event, bringing together innovators, creators, and tech enthusiasts to connect, collaborate, and build the future. The event featured inspiring talks, networking sessions, and hands-on activities designed to spark creativity and foster community.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><strong>Date:</strong> July 20, 2025</li>
            <li><strong>Location:</strong> Brik HQ, Bengaluru</li>
            <li><strong>Attendees:</strong> 120+</li>
            <li><strong>Highlights:</strong> Keynote by industry leaders, live demos, and interactive workshops.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
