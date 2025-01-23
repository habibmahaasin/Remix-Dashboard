import { useLoaderData } from "@remix-run/react";
import { loader } from "~/loaders/postLoader";
import { AppLayout } from "~/ui/layouts/app-layout";
export { loader };

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();

  // console.log(posts);

  return (
    <AppLayout>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"></div>
      </div>
    </AppLayout>
  );
}
