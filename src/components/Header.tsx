import { Link } from 'react-router-dom';
import { personalInfo } from '@/data/portfolioData';
import { Mail, FileText, Linkedin, Github, ExternalLink, BookOpen, FolderGit2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Header = () => {
  const links = [
    { icon: Mail, href: `mailto:${personalInfo.links.email}`, label: 'Email' },
    { icon: FileText, href: personalInfo.links.resume, label: 'Resume' },
    { icon: Linkedin, href: personalInfo.links.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personalInfo.links.github, label: 'GitHub' },
  ];

  return (
    <header className="relative py-12 md:py-16 px-6">
      {/* Background grid */}
      <div className="absolute inset-0 circuit-pattern opacity-20" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Navigation */}
        <nav className="flex items-center justify-center gap-6 mb-8">
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            ~/home
          </Link>
          <Link 
            to="/publications" 
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            <BookOpen className="w-3.5 h-3.5" />
            publications
          </Link>
          <Link 
            to="/projects" 
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            projects
          </Link>
        </nav>

        {/* Terminal-style intro */}
        <div className="inline-block mb-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <span className="w-3 h-3 rounded-full bg-destructive/60" />
            <span className="w-3 h-3 rounded-full bg-hpc/60" />
            <span className="w-3 h-3 rounded-full bg-fpga/60" />
            <span className="ml-2 font-mono">~/portfolio</span>
          </div>
        </div>

        {/* Name with glow effect */}
        <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
          <span className="text-primary glow-compiler">{personalInfo.name}</span>
        </h1>

        {/* Title */}
        <p className="text-lg md:text-xl text-muted-foreground mb-2">
          {personalInfo.title}
        </p>
        <a
          href={personalInfo.links.lab}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm hover:underline link-hover"
        >
          {personalInfo.subtitle}
          <ExternalLink className="w-3 h-3" />
        </a>

        {/* Bio */}
        <p className="mt-6 text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.bio}
        </p>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          {personalInfo.openTo}
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-lg',
                'border border-border/50 bg-card/50 backdrop-blur-sm',
                'text-sm text-muted-foreground',
                'hover:border-primary/50 hover:text-primary',
                'transition-all duration-300'
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>

      </div>
    </header>
  );
};
