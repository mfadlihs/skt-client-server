import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [text, setText] = useState();

  return (
    <main className="bg-[#1e293b] flex items-center justify-center min-h-screen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (text == "") {
            return;
          }
          toast.success(text);
        }}
      >
        <input
          type="text"
          placeholder="Type here"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          class="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary mt-4 w-full" type="submit">
          SUBMIT
        </button>
      </form>
    </main>
  );
}
