"use client";

import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    isVisible && (
      <div className="fixed z-50 end-4 bottom-4">
        <Button onClick={scrollToTop} size="icon" className="bg-devPrimary text-white hover:bg-devPrimary/80">
          <ChevronUp />
        </Button>
      </div>
    )
  );
};