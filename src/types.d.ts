// Definimos un tipo genérico para componentes (acepta props y devuelve cualquier cosa renderizable)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Component = (_props: any) => any;

export type SocialIcon = Record<string, string | Component>;
