import type {Plugin} from 'vite';
import {CORE_SCHEMA, load} from 'js-yaml';

// Local replacement for @modyfi/vite-plugin-yaml: imports `.yml`/`.yaml` files
// as ES modules whose default export is the parsed document. The upstream plugin
// hard-imports js-yaml's `DEFAULT_SCHEMA`, removed in js-yaml 5 — a tiny local
// copy lets us depend on js-yaml directly and track its major versions.
//
// Schema: we pin js-yaml 5's `CORE_SCHEMA` (YAML 1.2 core). The `.yml` files
// here are plain string/number/bool/null config; CORE keeps date-like scalars
// (e.g. `2023-12`) as plain strings rather than coercing them to Date and
// timezone-shifting them. The result is plain JSON-serialisable data, so
// `JSON.stringify` suffices to emit the module.
const YAML_RE = /\.ya?ml$/;

export function yaml(): Plugin {
  return {
    name: 'vite:yaml',
    transform(code, id) {
      if (!YAML_RE.test(id)) {
        return null;
      }
      // js-yaml 5's `load` throws on empty input; treat an empty file as null.
      const data = code.trim() === '' ? null : load(code, {schema: CORE_SCHEMA});
      return {
        code: `export default ${JSON.stringify(data)};`,
        map: {mappings: ''},
      };
    },
  };
}
