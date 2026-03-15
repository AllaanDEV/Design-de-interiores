import { useMemo } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Generate dot grid pattern
  const dots = useMemo(() => {
    const rows = 8;
    const cols = 24;
    const result = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        result.push({ r, c });
      }
    }
    return result;
  }, []);

  return (
    <footer id="contact" className="bg-card px-6 md:px-12 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Dot grid pattern */}
        <div className="mb-16 flex justify-center">
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: `repeat(24, 6px)` }}
          >
            {dots.map(({ r, c }) => (
              <div
                key={`${r}-${c}`}
                className="w-1.5 h-1.5 rounded-full bg-terracotta/40"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-2xl font-light text-foreground mb-4">
              Stephanie Thatenhorst
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creating timeless interiors that<br />
              celebrate the art of living well.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Studios
            </p>
            <div className="space-y-2 text-sm text-foreground">
              <p>Maximilianstraße 12, Munich</p>
              <p>Via Monte Napoleone 8, Milan</p>
              <p>45 Albemarle St, London</p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Connect
            </p>
            <div className="space-y-2">
              {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
              <a
                href="mailto:studio@thatenhorst.com"
                className="block text-sm text-foreground hover:text-muted-foreground transition-colors duration-300 mt-4"
              >
                studio@thatenhorst.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Stephanie Thatenhorst. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Imprint
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
