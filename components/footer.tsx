import Image from "next/image";

type FooterProps = {
  baseTextColor: string;
};

export function Footer({ baseTextColor: _baseTextColor }: FooterProps) {
  return (
    <footer className="relative z-10 mt-auto bg-black text-white">
      {/* Powered-by Arrived (Happily attribution) */}
      <div className="border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-9 py-6">
          <a
            href="https://app.happily.events/signup?utm_source=event-page&utm_medium=footer&utm_campaign=signup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Powered by Happily Arrived"
            className="opacity-90 transition-opacity hover:opacity-100"
          >
            <Image
              src="/powered-by-happily-arrived-alt.svg"
              width={292}
              height={55}
              className="h-16 w-auto object-contain"
              alt="Powered by Happily Arrived"
              draggable={false}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
