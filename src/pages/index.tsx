import { useState, useEffect } from "react";

export default function Page() {
 const [typedText, setTypedText] = useState("");

 useEffect(() => {
 const handleKeyDown = (event) => {
   const key = event.key;
   setTypedText((prevText) => prevText + key);
   const keyElement = document.querySelector(`kbd[data-key="${key}"]`);
   if (keyElement) {
     keyElement.classList.add("bg-primary");
   }
 };

   const handleKeyUp = (event) => {
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
      <h1 className="max-w-lg text-center text-ellipsis overflow-hidden text-4xl font-bold">
        {typedText}
      </h1>
      <div className="">
        <div className="flex justify-center gap-2 my-1 w-full">
          <kbd className="kbd kbd-lg" data-key="q">
            q
          </kbd>
          <kbd className="kbd kbd-lg" data-key="w">
            w
          </kbd>
          <kbd className="kbd kbd-lg" data-key="e">
            e
          </kbd>
          <kbd className="kbd kbd-lg" data-key="r">
            r
          </kbd>
          <kbd className="kbd kbd-lg" data-key="t">
            t
          </kbd>
          <kbd className="kbd kbd-lg" data-key="y">
            y
          </kbd>
          <kbd className="kbd kbd-lg" data-key="u">
            u
          </kbd>
          <kbd className="kbd kbd-lg" data-key="i">
            i
          </kbd>
          <kbd className="kbd kbd-lg" data-key="o">
            o
          </kbd>
          <kbd className="kbd kbd-lg" data-key="p">
            p
          </kbd>
        </div>
        <div className="flex justify-center gap-2 my-1 w-full">
          <kbd className="kbd kbd-lg" data-key="a">
            a
          </kbd>
          <kbd className="kbd kbd-lg" data-key="s">
            s
          </kbd>
          <kbd className="kbd kbd-lg" data-key="d">
            d
          </kbd>
          <kbd className="kbd kbd-lg" data-key="f">
            f
          </kbd>
          <kbd className="kbd kbd-lg" data-key="g">
            g
          </kbd>
          <kbd className="kbd kbd-lg" data-key="h">
            h
          </kbd>
          <kbd className="kbd kbd-lg" data-key="j">
            j
          </kbd>
          <kbd className="kbd kbd-lg" data-key="k">
            k
          </kbd>
          <kbd className="kbd kbd-lg" data-key="l">
            l
          </kbd>
        </div>

        <div className="flex justify-center gap-2 my-1 w-full">
          <kbd className="kbd kbd-lg" data-key="z">
            z
          </kbd>
          <kbd className="kbd kbd-lg" data-key="x">
            x
          </kbd>
          <kbd className="kbd kbd-lg" data-key="c">
            c
          </kbd>
          <kbd className="kbd kbd-lg" data-key="v">
            v
          </kbd>
          <kbd className="kbd kbd-lg" data-key="b">
            b
          </kbd>
          <kbd className="kbd kbd-lg" data-key="n">
            n
          </kbd>
          <kbd className="kbd kbd-lg" data-key="m">
            m
          </kbd>
          <kbd className="kbd kbd-lg" data-key="/">
            /
          </kbd>
        </div>
      </div>
    </div>
  );
}
