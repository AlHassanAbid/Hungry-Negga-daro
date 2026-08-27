import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiMongoose,
  SiGithub,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Workflow, LayoutPanelTop, Database } from "lucide-react";
import type { ComponentType } from "react";

type IconEntry = { Icon: ComponentType<{ className?: string }>; color?: string };

export const skillIcons: Record<string, IconEntry> = {
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss, color: "#1572B6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  php: { Icon: SiPhp, color: "#777BB4" },
  java: { Icon: FaJava, color: "#EA2D2E" },
  python: { Icon: SiPython, color: "#3776AB" },
  react: { Icon: SiReact, color: "#61DAFB" },
  node: { Icon: SiNodedotjs, color: "#5FA04E" },
  next: { Icon: SiNextdotjs },
  firebase: { Icon: SiFirebase, color: "#FFCA28" },
  mongodb: { Icon: SiMongodb, color: "#47A248" },
  mongoose: { Icon: SiMongoose, color: "#880000" },
  github: { Icon: SiGithub },
  git: { Icon: SiGit, color: "#F05032" },
  automation: { Icon: Workflow },
  panels: { Icon: LayoutPanelTop },
  database: { Icon: Database },
};

export function SkillIcon({ name, className = "size-8" }: { name: string; className?: string }) {
  const entry = skillIcons[name];
  if (!entry) return null;
  const { Icon, color } = entry;
  return (
    <span style={color ? { color } : undefined} className={color ? undefined : "text-foreground"}>
      <Icon className={className} />
    </span>
  );
}
