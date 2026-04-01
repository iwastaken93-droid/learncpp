import { curriculum } from "@/data/curriculum";

export function generateStaticParams() {
  const paths: { planetSlug: string }[] = [];

  curriculum.forEach((planet) => {
    if (planet.quiz) {
      paths.push({
        planetSlug: planet.slug,
      });
    }
  });

  return paths;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
