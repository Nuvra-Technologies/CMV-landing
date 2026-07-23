export default function Home() {
  return (
    <main className="bg-background text-foreground grid min-h-screen place-items-center px-6">
      <section className="text-center">
        <p className="text-primary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
          Proyecto configurado
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Landing page</h1>

        <p className="text-muted mx-auto mt-5 max-w-xl text-lg">
          Next.js 16, TypeScript, App Router, Tailwind CSS, ESLint y Prettier funcionando.
        </p>

        <button
          type="button"
          className="bg-primary text-primary-foreground mt-8 rounded-xl px-6 py-3 font-semibold transition-opacity hover:opacity-90"
        >
          Comenzar
        </button>
      </section>
    </main>
  );
}
