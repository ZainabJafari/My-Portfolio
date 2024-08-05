"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ link }: any) => {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-1 ${pathName === link.url && " text-white"}`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default Navlink;
