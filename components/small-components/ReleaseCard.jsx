import React from "react";
import Link from "next/link";
function ReleaseCard({ data }) {
  return (
    <Link href={"/anime/" + data.animeId}>
      <div className="hover:underline sm:p-3">
        <img
          className=" hover:scale-105 transition-all w-full aspect-[5/7] object-cover rounded-lg"
          src={data.animeImg}
          alt=""
        />
      </div>
    </Link>
  );
}

export default ReleaseCard;
