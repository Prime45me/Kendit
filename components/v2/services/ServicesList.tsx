"use client";

import React, { useState } from "react";
import { services } from "@/data/services";
import { ServiceRow } from "./ServiceRow";

export const ServicesList: React.FC = () => {
  // First row is open by default
  const [openIndex, setOpenIndex] = useState<string | null>(services[0]?.index || null);

  const handleToggle = (index: string) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="w-full border-t border-white/10 mt-12 md:mt-24">
      {services.map((service) => (
        <ServiceRow
          key={service.index}
          service={service}
          isOpen={openIndex === service.index}
          onToggle={() => handleToggle(service.index)}
        />
      ))}
    </div>
  );
};
