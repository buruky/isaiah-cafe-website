import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental cache: every page is prerendered, so there is no ISR to store.
export default defineCloudflareConfig({});
