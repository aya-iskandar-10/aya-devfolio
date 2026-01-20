import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Aya Iskandar. All rights reserved.
          </p>
          {/* <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-destructive" /> using React & Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  );
};
