const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 text-center text-sm text-neutral-400 c-space">
      <div className="w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px]" />

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-medium">
        <p className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
        <span className="hidden md:block text-neutral-700">|</span>
        <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
      </div>

      <p className="text-neutral-500">© 2026 Madala Spoorthi. All rights reserved.</p>
    </section>
  );
};

export default Footer;
