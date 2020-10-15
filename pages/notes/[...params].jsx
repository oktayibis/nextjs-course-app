import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { params } = router.query;
  // for exapmple  notes / userId / noteId
  console.log(params);
  return (
    <React.Fragment>
      <h1>user id : {params[0]}</h1>
      <h1>note id : {params[1]}</h1>
    </React.Fragment>
  );
};

export default Index;
