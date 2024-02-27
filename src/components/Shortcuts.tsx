"use client";

import Image from "next/image";

import { IShortcut } from "@/types/product";

import { useGetShortcuts } from "@/services/queries";

function Shortcuts() {
  const shortcutQuery = useGetShortcuts();

  if (shortcutQuery.isLoading) return <p>Loading...</p>;

  if (shortcutQuery.isError) return <p>{shortcutQuery?.error?.message}</p>;

  if (shortcutQuery.data?.length === 0) return <p>No item available</p>;

  return (
    <div className="grid grid-cols-5 gap-3 lg:flex xl:gap-12">
      {shortcutQuery.data?.map((shortcut, index) => (
        <ShortcutItem key={index} shortcut={shortcut} />
      ))}
    </div>
  );
}

const ShortcutItem = ({ shortcut }: { shortcut: IShortcut }) => (
  <div className="flex flex-1 flex-col gap-2 items-center">
    <Image
      alt=""
      src={`${shortcut?.imageUrl!}`}
      // onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')}
      width={100}
      height={100}
    />
    <p className="text-gray-600 text-sm">{shortcut?.title}</p>
  </div>
);

export default Shortcuts;
