import { useState, useEffect, useRef } from 'react';
import { ThemeData, ThemeType } from '@/data/portfolioData';
import { ExternalLink, Code, Wrench, BookOpen, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface ThemeCardProps {
  theme: ThemeData;
  index: number;
}

const themeStyles: Record<ThemeType, {
  card: string;
  text: string;
  glow: string;
  border: string;
  bg: string;
}> = {
  compiler: {
    card: 'theme-card-compiler',
    text: 'text-compiler',
    glow: 'glow-compiler',
    border: 'border-compiler',
    bg: 'bg-compiler',
  },
  architecture: {
    card: 'theme-card-architecture',
    text: 'text-architecture',
    glow: 'glow-architecture',
    border: 'border-architecture',
    bg: 'bg-architecture',
  },
  hpc: {
    card: 'theme-card-hpc',
    text: 'text-hpc',
    glow: 'glow-hpc',
    border: 'border-hpc',
    bg: 'bg-hpc',
  },
  fpga: {
    card: 'theme-card-fpga',
    text: 'text-fpga',
    glow: 'glow-fpga',
    border: 'border-fpga',
    bg: 'bg-fpga',
  },
};

export const ThemeCard = ({ theme, index }: ThemeCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const styles = themeStyles[theme.id];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        'theme-card group',
        styles.card,
        'min-h-[180px] md:min-h-[200px]',
        'animate-fade-in-up'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Scan line effect */}
      <div className={cn('scan-line transition-opacity duration-500', isVisible ? 'opacity-100' : 'opacity-0')} />
      
      {/* Corner decorations */}
      <div className={cn('absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 opacity-30', styles.border)} />
      <div className={cn('absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 opacity-30', styles.border)} />
      <div className={cn('absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 opacity-30', styles.border)} />
      <div className={cn('absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 opacity-30', styles.border)} />

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header - Always visible */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={cn('text-3xl md:text-4xl font-bold block mb-1', styles.text, styles.glow)}>
              {theme.icon}
            </span>
            <h3 className={cn('text-xl md:text-2xl font-bold', styles.text)}>
              {theme.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">
              {theme.subtitle}
            </p>
          </div>
          <div className={cn('pulse-dot', styles.bg)} />
        </div>

        {/* Collapsed State - Keywords preview */}
        <div className={cn(
          'flex flex-wrap gap-2 transition-all duration-300',
          isVisible ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
        )}>
          {theme.keywords.slice(0, 4).map((keyword) => (
            <span
              key={keyword}
              className={cn(
                'text-xs px-2 py-1 rounded border',
                'bg-background/50 border-border/50 text-muted-foreground'
              )}
            >
              {keyword}
            </span>
          ))}
          {theme.keywords.length > 4 && (
            <span className="text-xs text-muted-foreground">+{theme.keywords.length - 4} more</span>
          )}
        </div>

        {/* Expanded State - Full content */}
        <div className={cn(
          'flex-1 overflow-y-auto transition-all duration-500',
          isVisible ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
        )}>
          {/* Keywords */}
          <Section icon={<Lightbulb className="w-3 h-3" />} title="Keywords" styles={styles}>
            <div className="flex flex-wrap gap-1.5">
              {theme.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className={cn(
                    'text-xs px-2 py-0.5 rounded border',
                    styles.border,
                    'border-opacity-30 bg-background/30'
                  )}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </Section>

          {/* Skills */}
          <Section icon={<Code className="w-3 h-3" />} title="Skills" styles={styles}>
            <ul className="space-y-0.5">
              {theme.skills.map((skill) => (
                <li key={skill} className="text-xs text-foreground/80">
                  → {skill}
                </li>
              ))}
            </ul>
          </Section>

          {/* Tools */}
          <Section icon={<Wrench className="w-3 h-3" />} title="Tools" styles={styles}>
            <div className="flex flex-wrap gap-1.5">
              {theme.tools.map((tool) => (
                <span key={tool} className="text-xs text-muted-foreground">
                  {tool}
                  {tool !== theme.tools[theme.tools.length - 1] && ' •'}
                </span>
              ))}
            </div>
          </Section>

          {/* Projects */}
          {theme.projects.length > 0 && (
            <Section icon={<ExternalLink className="w-3 h-3" />} title="Projects" styles={styles}>
              <div className="space-y-1.5">
                {theme.projects.map((project) => (
                  <a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn('block group/link', styles.text, 'hover:underline text-xs')}
                  >
                    {project.title}
                    <span className="text-muted-foreground block text-[10px]">
                      {project.description}
                    </span>
                  </a>
                ))}
              </div>
            </Section>
          )}

          {/* Publications */}
          {theme.publications.length > 0 && (
            <Section icon={<BookOpen className="w-3 h-3" />} title="Publications" styles={styles} linkTo="/publications">
              <div className="space-y-1.5">
                {theme.publications.map((pub) => (
                  <a
                    key={pub.title}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline text-xs text-foreground/80"
                  >
                    [{pub.venue}] {pub.title.length > 50 ? pub.title.slice(0, 50) + '...' : pub.title}
                  </a>
                ))}
              </div>
            </Section>
          )}
        </div>

      </div>
    </div>
  );
};

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  styles: typeof themeStyles.compiler;
  linkTo?: string;
}

const Section = ({ icon, title, children, styles, linkTo }: SectionProps) => (
  <div className="mb-3">
    <div className={cn('flex items-center gap-1.5 mb-1.5', styles.text)}>
      {icon}
      {linkTo ? (
        <Link to={linkTo} className="text-xs font-semibold uppercase tracking-wider hover:underline">
          {title}
        </Link>
      ) : (
        <span className="text-xs font-semibold uppercase tracking-wider">{title}</span>
      )}
    </div>
    {children}
  </div>
);
