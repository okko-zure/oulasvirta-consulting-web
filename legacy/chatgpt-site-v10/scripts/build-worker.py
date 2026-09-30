"""Package the three-language site into a static Cloudflare Worker."""
import base64
import json
import mimetypes
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
assets = {}
for path in sorted(DIST.rglob('*')):
    if not path.is_file() or any(part.startswith('.') for part in path.relative_to(DIST).parts):
        continue
    if path.relative_to(DIST).parts[0] == 'server':
        continue
    mime = mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    if path.suffix in ('.html', '.css', '.js', '.json', '.svg'):
        mime += '; charset=utf-8'
    assets['/' + path.relative_to(DIST).as_posix()] = {
        'body': base64.b64encode(path.read_bytes()).decode(), 'type': mime
    }
worker = (ROOT / 'server/worker.mjs').read_text()
worker = worker.replace('/*__ASSETS__*/ {}', json.dumps(assets, separators=(',', ':')))
(DIST / 'server').mkdir(exist_ok=True)
(DIST / 'server/index.js').write_text(worker)
print(json.dumps({'worker': 'dist/server/index.js', 'public_files': len(assets), 'bytes': len(worker.encode())}))
