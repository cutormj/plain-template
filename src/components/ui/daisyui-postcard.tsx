'use client'
import Image from 'next/image';

export default function PostCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <figure>
        <Image
          src="https://scontent.fcrk1-5.fna.fbcdn.net/v/t39.30808-1/450977701_8191885827509677_2952436266472735862_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=50d2ac&_nc_ohc=3yPPoaljlVAQ7kNvgHkh9Yw&_nc_ht=scontent.fcrk1-5.fna&oh=00_AYAjIGtXISwBaRs4lTb231Uxla40uEqLbIVlRO1pEIHGDw&oe=66A16234"
          alt="Shoes"
          width={24}
          height={24}
        />
      </figure>
    </div>
  );
}
