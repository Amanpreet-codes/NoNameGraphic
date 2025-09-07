'use client';

import React, { Suspense } from "react";
import PortfolioContent from "./PortfolioContent";

export default function PortfolioPage() {
  return (
    <Suspense fallback={<div className="text-center text-neutral-400 py-20">Loading...</div>}>
      <PortfolioContent />
    </Suspense>
  );
}
