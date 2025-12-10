// app/contact-venuse-overseas/page.tsx
export default function Page() {
  const theme = {
    pageBg: "bg-gradient-to-b from-[#f5f1ff] via-[#ffffff] to-[#f6f7fb]",
    headerBg: "bg-white/85",

    text: "text-slate-900",
    mutedText: "text-slate-600",
    subtleText: "text-slate-500",

    accentText: "text-[#6d28d9]",
    accentBorder: "border-[#8b5cf6]/45",
    button: "bg-[#7c3aed] text-white hover:bg-[#8b5cf6]",
    card: "bg-white border-slate-200",

    brandGrad: "bg-gradient-to-r from-[#8b5cf6] via-[#6d28d9] to-[#a78bfa]",
    brandGradSoft: "bg-gradient-to-r from-[#ece6ff] via-[#ddd6fe] to-[#fff]",
  };

  return (
    <main className={`min-h-screen ${theme.pageBg}`}>
      <div className="mx-auto max-w-2xl px-4 py-12">
        {/* Header */}
        <div
          className={`rounded-2xl border ${theme.card} ${theme.headerBg} p-6 shadow-sm backdrop-blur`}
        >
          <div className={`h-1.5 w-24 rounded-full ${theme.brandGrad}`} />
          <h1 className={`mt-4 text-2xl font-semibold ${theme.text}`}>
            Contact Venus Overseas
          </h1>
          <p className={`mt-2 text-sm ${theme.mutedText}`}>
            Send us a message and we’ll get back to you.
          </p>
        </div>

        {/* Content */}
        <div className="mt-6 grid gap-6 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            <div className={`rounded-2xl border ${theme.card} p-6 shadow-sm`}>
              <h2 className={`text-base font-semibold ${theme.text}`}>
                Send a message
              </h2>
              <p className={`mt-1 text-sm ${theme.mutedText}`}>
                Fill in the form and submit.
              </p>

              <form className="mt-5 space-y-4">
                <div>
                  <label
                    className={`block text-sm font-medium ${theme.text}`}
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className={`mt-1 w-full rounded-md border ${theme.accentBorder} bg-white px-3 py-2 text-sm ${theme.text} placeholder:${theme.subtleText} focus:outline-none focus:ring-4 focus:ring-[#8b5cf6]/15`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${theme.text}`}
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`mt-1 w-full rounded-md border ${theme.accentBorder} bg-white px-3 py-2 text-sm ${theme.text} placeholder:${theme.subtleText} focus:outline-none focus:ring-4 focus:ring-[#8b5cf6]/15`}
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium ${theme.text}`}
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`mt-1 w-full rounded-md border ${theme.accentBorder} bg-white px-3 py-2 text-sm ${theme.text} placeholder:${theme.subtleText} focus:outline-none focus:ring-4 focus:ring-[#8b5cf6]/15`}
                    placeholder="Write your message..."
                  />
                </div>

                <button
                  type="button"
                  className={`w-full rounded-md px-4 py-2 text-sm font-semibold transition ${theme.button} focus:outline-none focus:ring-4 focus:ring-[#8b5cf6]/25`}
                >
                  Send
                </button>

                <div className={`rounded-xl ${theme.brandGradSoft} p-4`}>
                  <p className={`text-xs ${theme.subtleText}`}>
                    Or email us directly at{" "}
                    <a
                      className={`font-medium ${theme.accentText} underline underline-offset-4`}
                      href="mailto:Venusoverseasdubai@hotmail.com"
                    >
                      Venusoverseasdubai@hotmail.com
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Details */}
          <aside className="md:col-span-2 space-y-6">
            <div className={`rounded-2xl border ${theme.card} p-6 shadow-sm`}>
              <h2 className={`text-base font-semibold ${theme.text}`}>
                📞 Contact Information
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className={`text-xs ${theme.subtleText}`}>Mobile</p>
                  <a
                    className={`font-medium ${theme.accentText} underline underline-offset-4`}
                    href="tel:+971502403684"
                  >
                    +971 50 240 3684
                  </a>
                </div>

                <a
                  className={`font-medium ${theme.accentText} underline underline-offset-4 break-words`}
                  href="mailto:Venusoverseasdubai@hotmail.com"
                >
                  Venusoverseasdubai@hotmail.com
                </a>
              </div>
            </div>

            <div className={`rounded-2xl border ${theme.card} p-6 shadow-sm`}>
              <h2 className={`text-base font-semibold ${theme.text}`}>
                🏢 Office Address
              </h2>

              <div className={`mt-4 text-sm ${theme.text} space-y-1`}>
                <p className="font-medium">AL BUDOOR BUILDING</p>
                <p>Office No. 102, 1st Floor</p>
                <p>Baniyas Square, Deira</p>
                <p>Dubai, United Arab Emirates</p>
              </div>
            </div>
          </aside>
        </div>

        <p className={`mt-10 text-center text-xs ${theme.subtleText}`}>
          © {new Date().getFullYear()} Venus Overseas. All rights reserved.
        </p>
      </div>
    </main>
  );
}
