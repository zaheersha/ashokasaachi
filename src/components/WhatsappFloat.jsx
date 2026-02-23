import { useState } from "react";
import { X } from "lucide-react";
import whatsappIcon from "../assets/events/whatsapp.png"; // 👈 your PNG path

function WhatsappFloat() {
  const [open, setOpen] = useState(true);

  // ✅ Prefilled message
  const message = encodeURIComponent(
    "Hi I'm interested to nominate myself...\nCould you please guide me!!"
  );

  const whatsappLink = `https://wa.me/917799999315?text=${message}`;
  if (!open) return null;

  return (
    <div
      className="
        fixed z-50
        right-4 bottom-20   /* 👈 sits above ScrollToTop */
        flex items-end gap-3
      "
    >
      {/* MESSAGE BUBBLE */}
      <div className="hidden sm:flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-ink shadow-lg border border-stone/20">
        <span>Need Help? Chat with us</span>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="text-ink/50 hover:text-red-500 transition"
        >
          <X size={16} />
        </button>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex h-14 w-14 items-center justify-center
          rounded-full shadow-xl
          bg-white hover:scale-105 transition
        "
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp Chat"
          className="h-12 w-12 object-contain"
        />
      </a>
    </div>
  );
}

export default WhatsappFloat;


