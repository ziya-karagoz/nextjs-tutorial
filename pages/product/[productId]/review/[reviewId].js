import React from "react";
import { useRouter } from "next/router";
function Review() {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <div>
      <h1>
        Review <span style={{ color: "red" }}>{reviewId}</span> for product{" "}
        <span style={{ color: "red" }}>{productId}</span>
      </h1>
    </div>
  );
}

export default Review;
