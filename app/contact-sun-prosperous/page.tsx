// app/contact-sun-prosperous/page.tsx
export default function Page() {
  const theme = {
    pageBg: "bg-gradient-to-b from-[#fff3eb] via-[#ffffff] to-[#f6f7fb]",
    text: "text-slate-900",
    mutedText: "text-slate-600",
    subtleText: "text-slate-500",
    accentText: "text-[#ff6a00]",
    accentBorder: "border-[#ff8a2b]/55",
    button: "bg-[#ff8a2b] text-white hover:bg-[#ff9c4d]",
    card: "bg-white border-slate-200",
    brandGrad: "bg-gradient-to-r from-[#ff8a2b] via-[#ff6a00] to-[#ffb26b]",
    brandGradSoft: "bg-gradient-to-r from-[#ffe4d2] via-[#ffd1b0] to-[#fff]",
  };

  return (
    <main className={`min-h-screen ${theme.pageBg}`}>
      <div className="mx-auto max-w-2xl px-4 py-12">
        {/* Header */}
        <div className={`rounded-2xl border ${theme.card} p-6 shadow-sm`}>
          <div className={`h-1.5 w-24 rounded-full ${theme.brandGrad}`} />
          <h1 className={`mt-4 text-2xl font-semibold ${theme.text}`}>
            SUN PROSPEROUS GOODS WHOLESALERS CO. L.L.C
          </h1>
          <p className={`mt-2 text-sm ${theme.mutedText}`}>
            Contact us for inquiries — we’ll get back to you as soon as
            possible.
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
                    className={`mt-1 w-full rounded-md border ${theme.accentBorder} bg-white px-3 py-2 text-sm ${theme.text} placeholder:${theme.subtleText} focus:outline-none focus:ring-4 focus:ring-[#ff8a2b]/15`}
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
                    className={`mt-1 w-full rounded-md border ${theme.accentBorder} bg-white px-3 py-2 text-sm ${theme.text} placeholder:${theme.subtleText} focus:outline-none focus:ring-4 focus:ring-[#ff8a2b]/15`}
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
                    className={`mt-1 w-full rounded-md border ${theme.accentBorder} bg-white px-3 py-2 text-sm ${theme.text} placeholder:${theme.subtleText} focus:outline-none focus:ring-4 focus:ring-[#ff8a2b]/15`}
                    placeholder="Write your message..."
                  />
                </div>

                <button
                  type="button"
                  className={`w-full rounded-md px-4 py-2 text-sm font-semibold transition ${theme.button} focus:outline-none focus:ring-4 focus:ring-[#ff8a2b]/25`}
                >
                  Send
                </button>

                <div className={`rounded-xl ${theme.brandGradSoft} p-4`}>
                  <p className={`text-xs ${theme.subtleText}`}>
                    Or email us directly at{" "}
                    <a
                      className={`font-medium ${theme.accentText} underline underline-offset-4`}
                      href="mailto:ishant@suntradingdubai.com"
                    >
                      ishant@suntradingdubai.com
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
                📞 Contact
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className={`text-xs ${theme.subtleText}`}>Office</p>
                  <a
                    className={`font-medium ${theme.accentText} underline underline-offset-4`}
                    href="tel:+97143937367"
                  >
                    +971 4 393 7367
                  </a>
                </div>

                <div>
                  <p className={`text-xs ${theme.subtleText}`}>Mobile</p>
                  <a
                    className={`font-medium ${theme.accentText} underline underline-offset-4`}
                    href="tel:0507537771"
                  >
                    050 7537771
                  </a>
                </div>

                <div>
                  <p className={`text-xs ${theme.subtleText}`}>Email</p>
                  <a
                    className={`font-medium ${theme.accentText} underline underline-offset-4`}
                    href="mailto:ishant@suntradingdubai.com"
                  >
                    ishant@suntradingdubai.com
                  </a>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl border ${theme.card} p-6 shadow-sm`}>
              <h2 className={`text-base font-semibold ${theme.text}`}>
                🏢 Office
              </h2>
              <p className={`mt-4 text-sm ${theme.text}`}>
                Al Budoor building, office number 102
                <br />
                Baniyas, Dubai, United Arab Emirates
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
