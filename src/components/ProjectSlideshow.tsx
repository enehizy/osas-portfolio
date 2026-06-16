import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Globe } from "lucide-react";
import { type Project } from "@/pages/Home";

interface ProjectSlideProps {
  projects: Project[];
  title: string;
  sectionId: string;
  isMobile?: boolean;
}

function ProjectSlideshow({
  projects,
  title,
  sectionId,
  isMobile = false,
}: ProjectSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section id={sectionId} className="py-20 md:py-32">
      <div className="container">
        <h2 className="heading-section mb-16 text-center">{title}</h2>

        <div className="max-w-6xl mx-auto">
          {/* Slideshow Container */}
          <div className="bg-white dark:bg-slate-900 border border-foreground">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image/Video — fixed size, content never shifts layout */}
              <div className="relative w-full h-80 lg:h-125 bg-black flex items-center justify-center group overflow-hidden flex-shrink-0">
                {playingVideo === currentProject.id && currentProject.video ? (
                  <video
                    src={currentProject.video}
                    controls
                    autoPlay
                    className="absolute inset-0 w-full h-full object-fit"
                  />
                ) : (
                  <>
                    <img
                      src={currentProject.image}
                      alt={currentProject.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {currentProject.video && (
                      <button
                        onClick={() => setPlayingVideo(currentProject.id)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-all duration-300 group-hover:bg-black/60"
                      >
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-black fill-black ml-1" />
                        </div>
                      </button>
                    )}
                  </>
                )}
              </div>

              {/* Project Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center border-l border-foreground dark:border-slate-700">
                <p className="text-xs font-bold uppercase tracking-widest mb-4 text-muted-foreground">
                  {isMobile ? "Mobile Application" : "Web Application"}
                </p>

                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  {currentProject.name}
                </h3>
                <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                  {currentProject.description}
                </p>

                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest mb-4">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-semibold border border-foreground dark:border-slate-600 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <p className="text-sm text-muted-foreground font-semibold">
                    Project {currentIndex + 1} of {projects.length}
                  </p>

                  {currentProject.visitUrl && (
                    <a
                      href={currentProject.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" border border-foreground dark:border-slate-600 p-2 rounded-full hover:bg-foreground dark:hover:bg-slate-700 hover:text-background dark:hover:text-white transition-all duration-300"
                    >
                      <Globe />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={goToPrevious}
              className="p-3 border border-foreground dark:border-slate-600 hover:bg-foreground dark:hover:bg-slate-700 hover:text-background dark:hover:text-white transition-all duration-300"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 border border-foreground dark:border-slate-600 transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-foreground dark:bg-slate-400"
                      : "bg-background dark:bg-slate-800"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 border border-foreground dark:border-slate-600 hover:bg-foreground dark:hover:bg-slate-700 hover:text-background dark:hover:text-white transition-all duration-300"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSlideshow;
