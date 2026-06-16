// import { ChevronLeft, ChevronRight, Play, Github, Twitter, Linkedin, Mail, Moon, Sun } from "lucide-react";
import {
  // lowercase 'h'
  // lowercase 'd' and 'i'
  Mail,
  Sun,
  Moon,
  X as Twitter,
  Globe,
  Smartphone,
  Zap,
  Plug,
} from "lucide-react";

import { useTheme } from "@/contexts/ThemeContext";
import { Github, Linkedin } from "@/components/ui/brandIcons";
import ProjectSlideshow from "@/components/ProjectSlideshow";

/**
 * Home Page - Portfolio
 * Design Philosophy: Minimalist Bold Typography
 * - Light cream background (#f5f5f5) with black text / Dark theme option
 * - Large, bold Georgia serif headlines
 * - Dashed line separators
 * - Clean, spacious layout
 * - High contrast, professional aesthetic
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  video?: string;
  visitUrl?: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
}

// Web Projects Array
const webProjects: Project[] = [
  {
    id: "video-call",
    name: "Osas Video Call",
    description:
      "Real-time video calling application built with WebRTC and WebSockets for seamless peer-to-peer communication.",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "WebSockets",
      "Node.js",
      "WebRTC",
    ],
    image: "/video-call-app.png",
    visitUrl: "https://openc-signalling-server.onrender.com/",
  },

  {
    id: "paino-app",
    name: "Paino Web App",
    description: "Play the Paino omline",
    technologies: ["Reacte", "TypeScript", "CSS"],
    image: "/paino-app.png",
    visitUrl: "https://paino-xc29.vercel.app/",
  },
  {
    id: "music-player",
    name: "Sound Aura",
    description:
      "Modern music player application integrated with Spotify API for streaming and playlist management.",
    technologies: ["React", "Spotify API", "TypeScript", "CSS"],
    image: "/sound-aura.png",
    visitUrl: "https://enehizy-music-player.vercel.app/",
  },
  {
    id: "Jessica-s-Porfolio",
    name: "Jessica-s Porfolio",
    description: "Porfolio for a  Professional product Designer",
    technologies: ["Svelte", "TypeScript", "CSS"],
    image: "/jessica-porfolio.png",
    visitUrl: "https://jessicatepu-portfolio.vercel.app/",
  },
];
// Mobile Projects Array with Video Links
const mobileProjects: Project[] = [
  {
    id: "transact",
    name: "Transact",
    description:
      "Fintech mobile application for secure financial transactions and account management.",
    technologies: ["React Native", "Expo", "TypeScript"],
    image: "/transact.jpg",
    video: "/transact.mp4", // Replace with actual video URL
  },
  {
    id: "job-hunting",
    name: "Job Hunting App",
    description:
      "Comprehensive job search platform connecting candidates with opportunities in tech industry.",
    technologies: ["React Native", "Expo", "TypeScript"],
    image: "/job-hunting.png",
    video: "/job-hunting-app.mp4", // Replace with actual video URL
  },
];

const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications with React and TypeScript, seamlessly engineered to consume complex backend APIs, handle real-time state, and process dynamic data workflows.",
    icon: Globe,
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    description:
      "Creating production-ready iOS and Android apps using React Native and Expo, optimized for secure API authentication, offline-first data synchronization, and smooth client-to-server communication.",
    icon: Smartphone,
  },
  {
    id: "real-time",
    title: "Real-time Features",
    description:
      "Implementing low-latency WebSockets, WebRTC, and event-driven architectures to power live chat, real-time dashboards, and instant bidirectional API data streaming.",
    icon: Zap,
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Architecting seamless data layers to connect your app with custom REST/GraphQL endpoints, secure fintech payment gateways, Web3 smart contracts, and third-party ecosystems like Spotify.",
    icon: Plug,
  },
];

const skillLogos = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Expo",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
  },
  {
    name: "WebRTC",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webrtc/webrtc-original.svg",
  },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-slate-950 dark:text-white">
      {/* Navigation */}
      <nav className="border-b border-foreground dark:border-slate-700">
        <div className="container py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="nav-bullet"></span>
            <span className="text-sm font-bold uppercase tracking-widest">
              Osamudiame Enehizena
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/enehizy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-white hover:opacity-70 transition-opacity duration-300"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/osas_enehizy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-white hover:opacity-70 transition-opacity duration-300"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/osamudiame-enehizena"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-white hover:opacity-70 transition-opacity duration-300"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:osamudiameenehizena@gmail.com"
              className="text-foreground dark:text-white hover:opacity-70 transition-opacity duration-300"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <button
              onClick={toggleTheme}
              className="text-foreground dark:text-white hover:opacity-70 transition-opacity duration-300 ml-2"
              title="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12 md:mb-16">
              <img
                src="/osas-hero.jpg"
                alt="Hero"
                className="w-full h-64 md:h-80 object-cover border  rounded-4xl  dark:border-slate-700"
              />
            </div>

            {/* Dashed Divider */}
            <div className="dashed-divider mb-12"></div>

            {/* Hero Content */}
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold mb-6 text-muted-foreground">
                Frontend Engineer
              </p>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Hi, I am Osamudiame Enehizena
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                React and React Native Developer
              </p>
            </div>

            {/* About Intro */}
            <div className="mt-16 md:mt-20 text-center">
              <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                Osamudiame Enehizena is a React & React Native Engineer Building
                high-performance digital experiences for fintech and real-time
                platforms. 3 years of crafting clean, scalable code and
                user-centered infrastructure from the client to the server.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 border-t border-b border-foreground dark:border-slate-700">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Header Row */}
            <div className="flex items-end justify-between mb-0 pb-6 border-b border-foreground dark:border-slate-700">
              <h2 className="heading-section">Services</h2>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {services.length} Offerings
              </p>
            </div>

            {/* Service Rows */}
            <div className="divide-y divide-foreground dark:divide-slate-700">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group grid grid-cols-[64px_1fr_auto] md:grid-cols-[80px_1fr_auto] items-start gap-6 md:gap-10 py-10 md:py-12 hover:bg-foreground dark:hover:bg-slate-800 hover:text-background dark:hover:text-white transition-colors duration-300 -mx-4 px-4"
                >
                  {/* Big Index Number */}
                  <span className="text-5xl md:text-7xl font-black leading-none text-muted-foreground group-hover:text-background/40 dark:group-hover:text-white/30 transition-colors duration-300 select-none tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title + Description */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-background dark:group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-background/70 dark:group-hover:text-white/70 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="mt-1 p-3 border border-foreground dark:border-slate-600 group-hover:border-background dark:group-hover:border-white group-hover:bg-background/10 transition-all duration-300">
                    {service.icon && (
                      <service.icon className="w-6 h-6 group-hover:text-background dark:group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Web Applications Section */}
      <ProjectSlideshow
        projects={webProjects}
        title="Web Applications"
        sectionId="web-projects"
        isMobile={false}
      />

      {/* Mobile Applications Section */}
      <ProjectSlideshow
        projects={mobileProjects}
        title="Mobile Applications"
        sectionId="mobile-projects"
        isMobile={true}
      />

      {/* Skills Section with Marquee */}
      <section
        id="skills"
        className="py-20 md:py-32 bg-white dark:bg-slate-900 border-t border-b border-foreground dark:border-slate-700"
      >
        <div className="container">
          <h2 className="heading-section mb-16 text-center">
            Technical Skills
          </h2>

          {/* Marquee Skills */}
          <div className="marquee-container">
            <div className="marquee">
              {[...skillLogos, ...skillLogos].map((skill, index) => (
                <div key={index} className="marquee-item">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="skill-logo"
                  />
                  <span className="font-semibold text-sm whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-900 border-t border-b border-foreground dark:border-slate-700">
        <div className="container">
          <h2 className="heading-section mb-12 text-center">About Me</h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-xl leading-relaxed">
              With 3 years of professional experience, I've developed a deep
              passion for creating beautiful, functional digital experiences. My
              journey in tech has been driven by a commitment to clean code,
              user-centered design, and continuous learning.
            </p>
            <p className="text-xl leading-relaxed">
              I specialize in React and React Native, leveraging these
              technologies to build everything from real-time communication
              platforms to fintech applications. My technical toolkit includes
              TypeScript, WebRTC, WebSockets, and various APIs, allowing me to
              tackle complex challenges with elegant solutions.
            </p>
            <p className="text-xl leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing
              to open-source projects, or mentoring aspiring developers. I
              believe in the power of collaboration and love working with teams
              that share a passion for excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-black dark:bg-slate-950 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Let's Work Together
            </h2>
            <p className="text-xl mb-12 text-gray-300">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:osamudiameenehizena@gmail.com"
                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:opacity-90 transition-opacity duration-300"
              >
                Send Email
              </a>
              <a
                href="https://github.com/enehizy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12">
              <a
                href="https://github.com/enehizy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com/osas_enehizy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/osamudiame-enehizena"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-foreground dark:border-slate-700 text-center text-muted-foreground">
        <p className="text-sm">
          © 2025 Osamudiame Enehizena. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
