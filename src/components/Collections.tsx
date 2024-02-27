"use client";

import CollectionItem from "./items/CollectionItem";

import { useGetCollections } from "@/services/queries";

function Collections() {
  const collectionQuery = useGetCollections();

  const filterByViewType = collectionQuery.data?.filter(
    (collection) =>
      collection.viewType === "TILE" && collection.type === "SINGLE"
  );

  if (collectionQuery.isLoading) return <p>Loading...</p>;

  if (collectionQuery.isError) return <p>{collectionQuery?.error?.message}</p>;

  if (collectionQuery.data?.length === 0) return <p>No item available</p>;

  return (
    <div>
      <div className="mb-4 xl:mb-12">
        {filterByViewType?.length! > 0 && (
          <CollectionItem collection={filterByViewType?.shift()!} />
        )}
      </div>
      <div className="flex flex-col gap-4 xl:gap-12">
        {
          filterByViewType?.map((collection, index) => (
            <CollectionItem key={index} collection={collection} />
          ))!
        }
      </div>
    </div>
  );
}

export default Collections;
