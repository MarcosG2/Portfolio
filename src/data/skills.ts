import type { IconType } from 'react-icons';

import {
    HiOutlineComputerDesktop,
    HiOutlineServerStack,
    HiOutlineCircleStack,
    HiOutlineCommandLine
} from 'react-icons/hi2';


import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaDocker,
    FaGitAlt
} from 'react-icons/fa';


import {
    SiTypescript,
    SiTailwindcss,
    SiExpress,
    SiSocketdotio,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiSupabase,
    SiDebian,
    SiVuedotjs,
    SiRender,
} from 'react-icons/si';


export interface SkillItem {
    name: string;
    icon: IconType;
}

export interface SkillCategory {
    category: string;
    icon: IconType;
    items: SkillItem[];
}

export const mySkills: SkillCategory[] = [
    {
        category: "Frontend",
        icon: HiOutlineComputerDesktop,
        items: [
            { name: "React", icon: FaReact },
            { name: "TypeScript", icon: SiTypescript },
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "Tailwind CSS", icon: SiTailwindcss }
        ]
    },
    {
        category: "Backend",
        icon: HiOutlineServerStack,
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express", icon: SiExpress },
            { name: "Socket.IO", icon: SiSocketdotio }
        ]
    },
    {
        category: "Bases de Datos",
        icon: HiOutlineCircleStack,
        items: [
            { name: "MySQL", icon: SiMysql },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Supabase", icon: SiSupabase }
        ]
    },
    {
        category: "Herramientas y Entorno",
        icon: HiOutlineCommandLine,
        items: [
            { name: "Docker", icon: FaDocker },
            { name: "Git", icon: FaGitAlt },
            { name: "WSL (Debian)", icon: SiDebian }
        ]
    }
];

export const skillIcons: Record<string, IconType> = {
    React: FaReact,
    TypeScript: SiTypescript,
    HTML5: FaHtml5,
    CSS3: FaCss3Alt,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": FaNodeJs,
    Express: SiExpress,
    "Socket.IO": SiSocketdotio,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    MongoDB: SiMongodb,
    Supabase: SiSupabase,
    Docker: FaDocker,
    Git: FaGitAlt,
    "WSL (Debian)": SiDebian,
    Remotion: FaReact,
    'Vue 3': SiVuedotjs,
    Render: SiRender,
};