import { rmSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const cacheDirs = [".next", ".turbo"].map((dir) => path.join(root, dir));

for (const dir of cacheDirs) {
  if (!existsSync(dir)) continue;

  let removed = false;
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 300 });
      removed = true;
      console.log(`[clean-next] Removed ${path.basename(dir)}`);
      break;
    } catch (error) {
      if (attempt === 5) {
        console.warn(`[clean-next] Could not fully remove ${path.basename(dir)}:`, error);
      }
    }
  }

  if (!removed && existsSync(dir)) {
    console.warn(
      `[clean-next] ${path.basename(dir)} may still be locked — stop all dev servers (Ctrl+C) and run: npm run clean`
    );
  }
}
