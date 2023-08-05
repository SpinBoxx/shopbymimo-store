"use client";

import React, { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

interface Props {
  value: string | number;
}

export default function Currency({ value }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
}
