// Íconos de tecnologías, compartidos entre Habilidades y la cinta del hero
import HTML from "@/icons/html.astro";
import CSS from "@/icons/css.astro";
import JavaScript from "@/icons/javascript.astro";
import TypeScript from "@/icons/type.astro";
import React from "@/icons/react.astro";
import MySQL from "@/icons/sql.astro";
import Git from "@/icons/git.astro";
import GitHub from "@/icons/GitHub.astro";
import Tailwind from "@/icons/tailwind.astro";
import Next from "@/icons/next.astro";
import Figma from "@/icons/Figma.astro";
import Wordpress from "@/icons/Wordpress.astro";
import Supabase from "@/icons/Supabase.astro";
import Postgres from "@/icons/Postgres.astro";
import type { Component } from "@/types";

export const SKILLS_ICONS: Record<string, Component> = {
	HTML,
	CSS,
	JavaScript,
	TypeScript,
	React,
	MySQL,
	Postgres,
	Git,
	GitHub,
	Next,
	Tailwind,
	Figma,
	Wordpress,
	Supabase,
};

export const getSkillIcon = (name: string) => SKILLS_ICONS[name === "Next.js" ? "Next" : name];
