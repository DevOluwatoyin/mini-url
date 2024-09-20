"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { db } from "../../firebase";
const Scissor = ({ params }) => {
 const router = useRouter();
  useEffect(() => {
    db
      .collection("urls")
      .doc(params.scissor)
      .get()
      .then((doc) => {
        if (doc.exists) {
          window.location.href = doc.data().originalUrl;
        } else {
         return router.push("/");
        }
      }),
      [];
  });
  return <div></div>;
};

export default Scissor;
