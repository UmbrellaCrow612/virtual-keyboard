import { useState, useEffect } from "react";

const keyboard = [
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift"],
  ["Ctrl", "Alt", " ", "Alt", "Ctrl"],
];

export default function Page() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const handleKeyDown = (event:any) => {
      const key = event.key;

      // Handle special keys
      switch (key) {
        case "Backspace":
          setTypedText((prevText) => prevText.slice(0, -1));
          break;
        case "Enter":
          setTypedText((prevText) => prevText + "\n");
          break;
        default:
          setTypedText((prevText) => prevText + key);
          break;
      }

      const keyElement = document.querySelector(`kbd[data-key="${key}"]`);
      if (keyElement) {
        keyElement.classList.add("bg-primary");
      }
    };

    const handleKeyUp = (event:any) => {
      const key = event.key;
      const keyElement = document.querySelector(`kbd[data-key="${key}"]`);
      if (keyElement) {
        keyElement.classList.remove("bg-primary");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col gap-10 items-center justify-center">
      <h1 className="max-w-lg text-center text-4xl font-bold">
        {typedText}
      </h1>
      <div className="">
        {keyboard.map((row, rowIndex) => (
          <div className="flex justify-center gap-2 my-1 w-full" key={rowIndex}>
            {row.map((key, keyIndex) => (
              <kbd className="kbd kbd-lg" data-key={key} key={keyIndex}>
                {key === " " ? "Space" : key}
              </kbd>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
