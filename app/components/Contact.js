import { MdEmail } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendMessage(e) {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setLoading(false);
      toast.success(data.message);
    } else {
      setLoading(false);
      toast.error(data.error);
    }
  }

  return (
    <section
      id="contacts"
      className=" flex flex-col items-center gap-9 w-full py-5"
    >
      <p className="text-5xl text-secondary underline text-center">
        Me contate!
      </p>
      <div className="flex flex-col gap-9 text-primary font-roboto w-full">
        <div className="flex flex-col items-center gap-3 rounded bg-secondary px-9 py-5">
          <div className="flex flex-col items-center gap-1">
            <MdEmail />
            Email
            <small>allan.landin25@gmail.com</small>
          </div>
          <a
            href="mailto:allan.landin25@gmail.com"
            className="underline text-emphasis hover:text-active transition"
          >
            Me envie um email
          </a>
        </div>
        <form className="flex flex-col gap-6 ">
          <p className="text-5xl text-secondary underline text-center">
            Me envie uma mensagem!
          </p>
          <div className="flex flex-col gap-5">
            <div className="md:flex justify-between gap-3">
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="name" className="text-secondary ">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  className="border border-secondary bg-primary w-full rounded p-2 text-secondary"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <div className="flex flex-col gap-2 flex-grow">
                <label htmlFor="email" className="text-secondary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border border-secondary bg-primary w-full rounded p-2 text-secondary"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-secondary">
                Mensagem
              </label>
              <textarea
                id="message"
                type="text"
                className="resize-y min-h-80 border border-secondary bg-primary w-full rounded p-2 text-secondary "
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-emphasis rounded-full shadow hover:bg-active box-border w-40 h-10 self-center text-primary text-lg transition flex items-center justify-center"
            onClick={sendMessage}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              <span>Enviar email</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
