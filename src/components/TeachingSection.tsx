import { teachingData } from '@/data/portfolioData';
import { GraduationCap, Users, BookOpen, Calendar, Award, ExternalLink } from 'lucide-react';

export const TeachingSection = () => {
  return (
    <section className="mt-12 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-mono font-bold text-foreground">
          Teaching & Mentoring
        </h2>
      </div>

      <div className="space-y-6">
        {/* Teaching Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Official TA */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-compiler/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-compiler/50 transition-all duration-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-compiler" />
                <h3 className="font-mono font-semibold text-foreground">Teaching Assistant</h3>
              </div>
              <div className="space-y-4">
                {teachingData.officialTA.map((ta, index) => (
                  <div 
                    key={index}
                    className="border-l-2 border-compiler/30 pl-4 hover:border-compiler transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-foreground text-sm">{ta.course}</h4>
                      {ta.level && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-compiler/20 text-compiler font-mono shrink-0">
                          {ta.level}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Calendar className="w-3 h-3" />
                      {ta.period}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {ta.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Unofficial Teaching */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-hpc/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-hpc/50 transition-all duration-300 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-hpc" />
                <h3 className="font-mono font-semibold text-foreground">Workshops & Lectures</h3>
              </div>
              <div className="space-y-4">
                {teachingData.unofficialTeaching.map((workshop, index) => (
                  <div 
                    key={index}
                    className="border-l-2 border-hpc/30 pl-4 hover:border-hpc transition-colors duration-200"
                  >
                    <h4 className="font-medium text-foreground text-sm">{workshop.course}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Calendar className="w-3 h-3" />
                      {workshop.period}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {workshop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mentoring Row */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-architecture/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-architecture/50 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-architecture" />
              <h3 className="font-mono font-semibold text-foreground">Student Mentoring</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {teachingData.mentoring.map((mentor, index) => (
                <div 
                  key={index}
                  className="border-l-2 border-architecture/30 pl-4 hover:border-architecture transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-architecture/20 text-architecture font-mono">
                      {mentor.period}
                    </span>
                    {mentor.outcome && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-fpga/20 text-fpga font-mono">
                        🏆 {mentor.outcome}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-foreground mt-2">{mentor.students}</p>
                  <p className="text-xs text-muted-foreground mt-1">{mentor.program}</p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed italic">
                    {mentor.topic}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-6 pt-4 border-t border-border/30 italic">
              {teachingData.ongoing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
