import React from "react";
import { useRouter } from "next/router";
function Detail() {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
}

export default Detail;
