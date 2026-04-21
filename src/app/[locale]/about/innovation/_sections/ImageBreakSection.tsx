import Image from "next/image";

export default function ImageBreakSection() {
  return (
    <div className="relative overflow-hidden" style={{ height: "40vh" }} aria-hidden="true">
      <Image
        src="/images/whatwedo/training-room.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
      />
      <div className="absolute inset-0 bg-navy/40" />
    </div>
  );
}
