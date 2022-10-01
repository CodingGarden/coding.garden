import { redirect } from "@sveltejs/kit";

export async function load() {
  throw redirect(
    302,
    "https://www.redbubble.com/people/w3cj/collections/907384-coding-garden-with-cj"
  );
}
