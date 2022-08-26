import React from "react";
import { useRouter } from "next/router";
function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 0) {
    return <h1>Docs Home Page</h1>;
  } else if (params.length === 1) {
    return <h1>One param: {params[0]}</h1>;
  } else if (params.length === 2) {
    return (
      <h1>
        Two params: {params[0]} and {params[1]}
      </h1>
    );
  } else if (params.length === 3) {
    return (
      <h1>
        Three params: {params[0]} and {params[1]} and {params[2]}
      </h1>
    );
  }
}

export default Docs;
