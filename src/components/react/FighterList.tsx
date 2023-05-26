import type { CollectionEntry } from "astro:content";
import { useState } from "react";

const FighterList = ({
  fighterEntries,
}: {
  fighterEntries: CollectionEntry<"fighters">[];
}) => {
  const [query, setQuery] = useState("");

  const f: { [key: string]: CollectionEntry<"fighters">[] } = {};

  fighterEntries.map((item) => {
    let first_letter = item.data.filepath.charAt(0).toUpperCase();

    if (!f[first_letter]) {
      f[first_letter] = [item];
    } else {
      f[first_letter].push(item);
    }
  });

  const fighters_num = fighterEntries.length;

  let result = Object.keys(f).map((key: string) => ({ [key]: f[key] }));

  return (
    <>
      <input
        value={query}
        type="search"
        placeholder="検索"
        className="my-4 w-full bg-white/75 p-2 text-black placeholder:text-black/75 focus:outline-none"
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="text-right">出場者 計{fighters_num}名</p>
      <section className="flex">
        <div className="flex-1">
          {result.map((obj) => {
            const key = Object.keys(obj)[0];
            const value = obj[key];

            const showLetter = value.some(
              (item) =>
                item.data.name.includes(query) ||
                item.data.filepath.includes(query.toLowerCase())
            );

            if (!showLetter) {
              return null;
            }

            return (
              <ul key={key}>
                <strong id={key} className="text-3xl text-primary-red">
                  {key}
                </strong>
                {value.map((item) => {
                  return (
                    <li
                      key={item.slug}
                      className={`w-max gap-2 rounded-sm p-2 hover:bg-primary-red ${
                        query.length == 0
                          ? "block"
                          : item.data.name.includes(query) ||
                            item.data.filepath.includes(query.toLowerCase())
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      <a
                        className="text-white"
                        href={`/fighters/${item.data.filepath}`}
                      >
                        {item.data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <aside className="sticky top-0 h-screen pt-8">
          <ul>
            {result.map((obj) => {
              const key = Object.keys(obj)[0];
              const value = obj[key];

              const showLetter = value.some(
                (item) =>
                  item.data.name.includes(query) ||
                  item.data.filepath.includes(query.toLowerCase())
              );

              if (!showLetter) {
                return null;
              }

              return (
                <li key={key}>
                  <a href={`/fighters#${key}`}>{key}</a>
                </li>
              );
            })}
          </ul>
        </aside>
      </section>
    </>
  );
};

export default FighterList;
