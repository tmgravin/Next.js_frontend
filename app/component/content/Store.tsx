import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TiArrowSortedDown } from "react-icons/ti";

const getRandomImage = () => {
  // Placeholder image service URL (for demo purposes)
  return `https://via.placeholder.com/600x400.png?text=Product${Math.floor(
    Math.random() * 100
  )}`;
};

export function Store() {
  return (
    <Carousel className="w-full shadow-none gap-0 mt-8">
      <CarouselContent className="w-full -ml-1 shadow-none gap-0 ">
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-1/4 md:basis-1/12 lg:basis-1/16"
          >
            <div className="p-1 h-full">
              <Card className="bg-transparent border-none bg-green-300 ">
                <CardContent className="flex aspect-square items-center justify-center p-0 shadow-none">
                  <img
                    src={getRandomImage()}
                    alt={`Product ${index + 1}`}
                    className="h-20 w-20 rounded-full"
                  />
                </CardContent>
                <div className="flex items-center text-center justify-end">
                  <p className="text-center text-sm mx-auto">wine Shop</p>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
