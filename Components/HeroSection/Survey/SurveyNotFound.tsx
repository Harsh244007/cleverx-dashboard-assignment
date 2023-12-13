import Image from "next/image";
import React, { memo } from "react";
import NotFoundImage from "@/public/assets/hero/notFound.png"
import { useRouter } from "next/router";
const SurveyNotFound = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center mt-16 mb-16">
      <Image src={NotFoundImage} alt="No Result Found" width={56} height={56}/>
      <p className="text-lg font-bold mb-4 mt-4">No Results Found</p>
      <p className="text-gray-500 mb-8">Try a different search</p>
      <button onClick={()=>router.push("/")} className="bg-black text-white py-4 px-6 rounded text-md hover:bg-white hover:text-black duration-300 hover:border border-black">
        View all opportunities
      </button>
    </div>
  );
};

export default memo(SurveyNotFound);