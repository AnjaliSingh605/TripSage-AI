"use client";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { theme } from "@/app/theme";
import { useState } from "react";

export function Popularcitylist() {
  const [show, setShow] = useState<string | null>(null);

  const setUrl = (card: any) => {
    const url =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(card.category);

    setShow(url);

    // Open in new tab
    window.open(url, "_blank");
  };

  const cards = data.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
      onClick={() => setUrl(card)}
    />
  ));

  return (
    <div
      className="w-full h-full py-20"
      style={{
        backgroundColor: theme.bgMain,
        color: theme.textPrimary,
        overflow: "hidden",
      }}
    >
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold font-sans"
        style={{ color: "white" }}
      >
        Popular Destination to visit
      </h2>

      <Carousel items={cards} />
    </div>
  );
}


const data = [
  {
    category: "Paris, France",
    title: "Explore the City of Lights - Eiffel Tower, Louvre & more",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2600&auto=format&fit=crop",
  },
  {
    category: "New York, USA",
    title: "Experience NYC - Times Square, Central Park, Broadway",
    src: "https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo - Shibuya, Cherry Blossoms, Temples",
    src: "https://images.unsplash.com/photo-1522547902298-51566e4fb383?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Rome, Italy",
    title: "Walk through History - Colosseum, Vatican, Roman Forum",
    src: "https://plus.unsplash.com/premium_photo-1675975678457-d70708bf77c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Dubai, UAE",
    title: "Luxury and Innovation - Burj Khalifa, Desert Safari",
    src: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "India",
    title: "Harbour Views - Opera House, Bondi Beach & Wildlife",
    src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

