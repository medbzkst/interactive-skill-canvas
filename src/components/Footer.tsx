export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs text-muted-foreground font-mono">
          <span className="text-primary">const</span> year = {new Date().getFullYear()};
          <span className="text-muted-foreground/50"> // Mohamed Bouaziz</span>
        </p>
        <p className="text-xs text-muted-foreground/50 mt-2">
          Built with React • Dataflow-inspired design
        </p>
      </div>
    </footer>
  );
};
