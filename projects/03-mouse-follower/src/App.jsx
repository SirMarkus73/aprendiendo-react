import { useEffect, useState } from "react";

export function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const hiddenBallClass = enabled ? "" : "hidden";
  useEffect(() => {
    console.log("efecto ", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
      document.body.classList.add("no-cursor");
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.body.classList.remove("no-cursor");
      setPosition({ x: 0, y: 0 });
    };
  }, [enabled]);

  return (
    <main className={"grid place-content-center h-screen text-center"}>
      <div
        className={
          "absolute bg-orange-400 rounded-full opacity-75 pointer-events-none left-[-25px] top-[-25px] w-[50px] h-[50px] " +
          hiddenBallClass
        }
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <h1>Proyecto 3</h1>
      <button
        className={
          "bg-neutral-600 border border-neutral-800 rounded-xl p-3 hover:bg-neutral-700 transition-colors"
        }
        onClick={() => {
          setEnabled(!enabled);
        }}
      >
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
}
