import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Item {
  id: string;
  subtitle: string;
  title: string;
  desc: string;
}

const items: Item[] = [
  {
    id: "gfgr",
    subtitle: "Strony Internetowe",
    title: "Lorem ipsum dolor sit amet consecteturil Lorem ipsum dolor sit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, doloremque! Nihil minima debitis inventore laudantium corrupti, non doloribus magni exercitationem maxime obcaecati quae necessitatibus expedita doloremque maiores illum repudiandae tempora.",
  },
  {
    id: "sdsd",
    subtitle: "Sklepy Internetowe",
    title: "Lorem ipsum dolor sit amet consecteturil",
    desc: "Consectetur, adipisicing elit. Iusto, doloremque! Nihil minima debitis inventore laudantium corrupti, non doloribus magni exercitationem maxime obcaecati quae necessitatibus expedita doloremque maiores illum repudiandae tempora.",
  },
  {
    id: "dfd",
    subtitle: "Optymalizacja SEO",
    title: "Lorem ipsum dolor sit amet consecte",
    desc: "Lorem ipsum dolor sit amet consecteturil minima debitis inventore laudantium corrupti, non doloribus magni exercitationem maxime obcaecati quae necessitatibus expedita doloremque maiores illum repudiandae tempora.",
  },
  {
    id: "xxw",
    subtitle: "Projekty Graficzne",
    title: "Lorem ipsum dolor sit amet consecteturilm dolor sit amet consecteturil",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, doloremque! Nihil minima debitis inventore laudantium corrupti, non doloribus magni exercitationem",
  },
];

export default function Test() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectedRef.current &&
        !selectedRef.current.contains(event.target as Node)
      ) {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex items-stretch justify-center p-12 mx-auto max-w-screen-2xl">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          className="relative mx-2 cursor-pointer border bg-gray-50 p-10 pb-12 shadow-2xl rounded-lg"
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5 className="font-medium mb-1">{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
          <motion.button className="absolute  bottom-2 right-2 rounded-lg bg-black p-1 px-2 text-xs text-white">
            Wiecej
          </motion.button>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="absolute mx-4 max-w-screen-sm border bg-gray-50 p-12 shadow-2xl"
            layoutId={selectedId}
            ref={selectedRef}
          >
            <motion.h5>
              {items.find((item) => item.id === selectedId)?.subtitle}
            </motion.h5>
            <motion.h2>
              {items.find((item) => item.id === selectedId)?.title}
            </motion.h2>
            <motion.p>
              {items.find((item) => item.id === selectedId)?.desc}
            </motion.p>
            <motion.button
              className="absolute right-2 top-2 rounded-lg bg-black p-1.5 text-white"
              onClick={() => setSelectedId(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
