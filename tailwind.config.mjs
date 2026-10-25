function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: withOpacity("--paper"),
        surface: withOpacity("--surface"),
        ink: withOpacity("--ink"),
        muted: withOpacity("--muted"),
        line: withOpacity("--line"),
        accent: withOpacity("--accent"),
        "accent-ink": withOpacity("--accent-ink"),
        wine: withOpacity("--wine"),
        amber: withOpacity("--amber"),
      },
      fontFamily: {
        sans: ["'Schibsted Grotesk'", "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
