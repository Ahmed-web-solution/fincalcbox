import SEOHelmet from "@/components/SEOHelmet";

export default function NotFound() {
  return (
    <>
      <SEOHelmet
        title="404 - Page Not Found | FinCalcBox"
        description="The page you are looking for could not be found. Return to FinCalcBox homepage to explore our financial calculators and tools."
        openGraph={{
          type: "website",
          title: "404 - Page Not Found",
          description: "This page could not be found.",
        }}
      />
      <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground text-center px-4">
        <img
          src="/icons/robot.png"
          alt="404 Error - Robot indicating page not found"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-80 lg:h-80 mb-6 opacity-90 transition-transform duration-300 hover:scale-105"
          loading="eager"
        />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">404 - Page Not Found</h1>

        <p className="text-base sm:text-lg text-muted-foreground mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="rounded-lg bg-primary px-6 py-3 text-white font-medium shadow-md hover:bg-primary/90 transition"
        >
          Return to Home
        </a>
      </main>
    </>
  );
}
