import { teachingData } from '@/data/portfolioData';
import { GraduationCap, Users, BookOpen, Calendar } from 'lucide-react';

export const TeachingSection = () => {
  return (
    <section className="mt-12 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-mono font-bold text-foreground">
          Teaching & Mentoring
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* TA Experience */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-compiler/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-compiler/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-compiler" />
              <h3 className="font-mono font-semibold text-foreground">Teaching Assistant</h3>
            </div>
            <div className="space-y-4">
              {teachingData.taExperience.map((ta, index) => (
                <div 
                  key={index}
                  className="border-l-2 border-compiler/30 pl-4 hover:border-compiler transition-colors duration-200"
                >
                  <h4 className="font-medium text-foreground text-sm">{ta.course}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>{ta.institution}</span>
                    <span className="text-compiler">•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {ta.period}
                    </div>
                  </div>
                  {ta.description && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {ta.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Supervision */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-architecture/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-architecture/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-architecture" />
              <h3 className="font-mono font-semibold text-foreground">Student Supervision</h3>
            </div>
            <div className="space-y-4">
              {teachingData.studentSupervision.map((student, index) => (
                <div 
                  key={index}
                  className="border-l-2 border-architecture/30 pl-4 hover:border-architecture transition-colors duration-200"
                >
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-foreground text-sm">{student.name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-architecture/20 text-architecture font-mono">
                      {student.level}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{student.topic}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {student.period}
                    </div>
                    {student.outcome && (
                      <span className="text-xs text-architecture/80 italic">
                        {student.outcome}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
