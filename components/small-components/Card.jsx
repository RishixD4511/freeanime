import React from "react";
import Link from "next/link";

function Card({ data }) {
  return (
    <Link href={"/anime/" + data.animeId}>
      <div className="p-3 sm:p-3">
        <img
          className="hover:scale-105 transition-all w-full aspect-[5/7] object-cover rounded-lg border border-white"
          src={data.animeImg}
          alt={data.animeTitle}
        />
        <div>
          <h4 className="mt-3 font-bold line-clamp-2">{data.animeTitle}</h4>
          <p>Released: {data.releasedDate}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
