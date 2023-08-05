import React from "react";

interface Props {
  params: {
    productId: string;
  };
}

export default function ProductPage({ params }: Props) {
  return <div>ProductPage {params.productId}</div>;
}
