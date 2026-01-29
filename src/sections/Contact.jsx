import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { contactInfo } from "../constants";
import ContactVisual from "../components/ContactVisual";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
    const BREVO_SENDER_EMAIL = import.meta.env.VITE_BREVO_SENDER_EMAIL;
    const BREVO_TO_EMAIL = import.meta.env.VITE_BREVO_TO_EMAIL;

    if (!BREVO_API_KEY || !BREVO_SENDER_EMAIL || !BREVO_TO_EMAIL) {
      setIsLoading(false);
      showAlertMessage("danger", "Email service is not configured correctly!");
      console.error("Missing Brevo environment variables");
      return;
    }

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "accept": "application/json",
          "api-key": BREVO_API_KEY,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: { email: BREVO_SENDER_EMAIL, name: "Portfolio Contact" },
          to: [{ email: BREVO_TO_EMAIL, name: "Spoorthi" }],
          subject: `New Contact Form Submission from ${formData.name}`,
          htmlContent: `
            <h3>New Message from Portfolio</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `,
          replyTo: { email: formData.email, name: formData.name }
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };
  return (
    <section id="contact" className="relative c-space section-spacing overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
        ease={80}
        color={"#60a5fa"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Left Side: Contact Form */}
        <div className="flex-1 w-full max-w-xl p-8 border border-white/10 rounded-3xl bg-midnight/50 backdrop-blur-md shadow-2xl relative">
          <div className="flex flex-col items-start w-full gap-4 mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Let's Talk</h2>
            <p className="font-medium text-neutral-400 leading-relaxed md:text-lg">
              Whether you're looking to build a new website, improve your existing
              platform, or bring a unique project to life, I'm here to help.
            </p>
          </div>

          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold tracking-wider uppercase text-neutral-400 ml-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-white placeholder-neutral-500"
                placeholder="John Doe"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold tracking-wider uppercase text-neutral-400 ml-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-white placeholder-neutral-500"
                placeholder="john@example.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold tracking-wider uppercase text-neutral-400 ml-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-white placeholder-neutral-500 resize-none"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <img src="assets/arrow-right.svg" className="w-5 transition-transform group-hover:translate-x-1" alt="arrow" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info & 3D Visual */}
        <div className="flex-1 w-full flex flex-col gap-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4 w-full">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group overflow-hidden"
              >
                <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors shrink-0">
                  <img src={info.icon} alt={info.name} className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">{info.name}</span>
                  <span className="text-xs sm:text-sm font-medium text-white truncate font-mono break-all">{info.value}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="w-full lg:h-[400px] h-[300px] relative">
            <ContactVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
