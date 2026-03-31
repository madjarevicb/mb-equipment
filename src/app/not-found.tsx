import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center bg-navy pt-20">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">404</p>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
          Wrong<br />
          <span className="italic font-normal">Turn.</span>
        </h1>
        <div className="w-16 h-px bg-gold/60 mb-6" />
        <p className="text-white/60 text-lg max-w-md mb-12 font-light">
          This page doesn&apos;t exist — but the kitchen you&apos;re planning probably should. Head back to familiar ground.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" href="/">
            Back to Homepage
          </Button>
          <Button variant="ghost-dark" href="/contact" arrow={false}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
