import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // loadEnv reads .env.local (no prefix filter) — works in local dev
  // process.env.* picks up Vercel env vars at build time
  const local = loadEnv(mode, process.cwd(), '');

  const clerkKey   = process.env.CLERK_PUBLISHABLE_KEY   || local.VITE_CLERK_PUBLISHABLE_KEY;
  const supabaseUrl = process.env.SUPABASE_URL            || local.VITE_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY       || local.VITE_SUPABASE_ANON_KEY;

  const define = {};
  if (clerkKey)    define['import.meta.env.VITE_CLERK_PUBLISHABLE_KEY'] = JSON.stringify(clerkKey);
  if (supabaseUrl) define['import.meta.env.VITE_SUPABASE_URL']          = JSON.stringify(supabaseUrl);
  if (supabaseKey) define['import.meta.env.VITE_SUPABASE_ANON_KEY']     = JSON.stringify(supabaseKey);

  return {
    plugins: [react()],
    define,
  };
});
