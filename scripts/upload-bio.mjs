/**
 * Uploads the SCOUT profile .md to Supabase bios bucket.
 * Run: node --env-file=.env scripts/upload-bio.mjs
 */
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const url = process.env.VITE_SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY;
if (!url || !key) { console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY'); process.exit(1); }

const supabase = createClient(url, key);
const userId   = 'user_3K5K5ZApJGejevV5AnLjwK98szh';
const bioPath  = `/Users/fran/projects/personal/nepot-ai/profiles/francisco-buitrago-profile.md`;
const storagePath = `${userId}.md`;

const content = readFileSync(bioPath, 'utf8');
const { error } = await supabase.storage
  .from('bios')
  .upload(storagePath, new Blob([content], { type: 'text/markdown' }), { upsert: true });

if (error) { console.error('Upload failed:', error.message); process.exit(1); }

const { data: { publicUrl } } = supabase.storage.from('bios').getPublicUrl(storagePath);
console.log('✓ Bio uploaded:', publicUrl);
