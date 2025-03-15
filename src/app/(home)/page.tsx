import { HomeView } from "@/modules/home/ui/views/home-view";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic"

interface PageProps {
  searchParams: Promise<{
    categoryId?: string
}>
}

export default async function Home({ searchParams } : PageProps) {
  const { categoryId } = await searchParams;

  void trpc.categories.getmany.prefetch();

  return (
    <HydrateClient>
      <HomeView />
    </HydrateClient>
  );
}
