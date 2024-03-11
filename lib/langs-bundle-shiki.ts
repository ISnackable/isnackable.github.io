// Generated by scripts/prepare.ts
import type {
  BundledLanguageInfo,
  DynamicImportLanguageRegistration,
} from 'shiki/core';

export const bundledLanguagesInfo: BundledLanguageInfo[] = [
  {
    id: 'abap',
    name: 'ABAP',
    import: (() =>
      import('shiki/langs/abap.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'asm',
    name: 'Assembly',
    import: (() =>
      import('shiki/langs/asm.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'c',
    name: 'C',
    import: (() =>
      import('shiki/langs/c.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'clojure',
    name: 'Clojure',
    aliases: ['clj'],
    import: (() =>
      import('shiki/langs/clojure.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'coffee',
    name: 'CoffeeScript',
    aliases: ['coffeescript'],
    import: (() =>
      import('shiki/langs/coffee.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'cpp',
    name: 'C++',
    aliases: ['c++'],
    import: (() =>
      import('shiki/langs/cpp.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'csharp',
    name: 'C#',
    aliases: ['c#', 'cs'],
    import: (() =>
      import('shiki/langs/csharp.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'css',
    name: 'CSS',
    import: (() =>
      import('shiki/langs/css.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'dart',
    name: 'Dart',
    import: (() =>
      import('shiki/langs/dart.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'diff',
    name: 'Diff',
    import: (() =>
      import('shiki/langs/diff.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'docker',
    name: 'Dockerfile',
    aliases: ['dockerfile'],
    import: (() =>
      import('shiki/langs/docker.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'elixir',
    name: 'Elixir',
    import: (() =>
      import('shiki/langs/elixir.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'elm',
    name: 'Elm',
    import: (() =>
      import('shiki/langs/elm.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'erlang',
    name: 'Erlang',
    aliases: ['erl'],
    import: (() =>
      import('shiki/langs/erlang.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'fortran-fixed-form',
    name: 'Fortran (Fixed Form)',
    aliases: ['f', 'for', 'f77'],
    import: (() =>
      import(
        'shiki/langs/fortran-fixed-form.mjs'
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'fsharp',
    name: 'F#',
    aliases: ['f#', 'fs'],
    import: (() =>
      import('shiki/langs/fsharp.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'gherkin',
    name: 'Gherkin',
    import: (() =>
      import('shiki/langs/gherkin.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'glsl',
    name: 'GLSL',
    import: (() =>
      import('shiki/langs/glsl.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'go',
    name: 'Go',
    import: (() =>
      import('shiki/langs/go.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    aliases: ['gql'],
    import: (() =>
      import('shiki/langs/graphql.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'groovy',
    name: 'Groovy',
    import: (() =>
      import('shiki/langs/groovy.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'haskell',
    name: 'Haskell',
    aliases: ['hs'],
    import: (() =>
      import('shiki/langs/haskell.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'html',
    name: 'HTML',
    import: (() =>
      import('shiki/langs/html.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'java',
    name: 'Java',
    import: (() =>
      import('shiki/langs/java.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    aliases: ['js'],
    import: (() =>
      import(
        'shiki/langs/javascript.mjs'
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'jinja',
    name: 'Jinja',
    import: (() =>
      import('shiki/langs/jinja.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'json',
    name: 'JSON',
    import: (() =>
      import('shiki/langs/json.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    aliases: ['kt', 'kts'],
    import: (() =>
      import('shiki/langs/kotlin.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'latex',
    name: 'LaTeX',
    import: (() =>
      import('shiki/langs/latex.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'less',
    name: 'Less',
    import: (() =>
      import('shiki/langs/less.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'lisp',
    name: 'Lisp',
    import: (() =>
      import('shiki/langs/lisp.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'lua',
    name: 'Lua',
    import: (() =>
      import('shiki/langs/lua.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'make',
    name: 'Makefile',
    aliases: ['makefile'],
    import: (() =>
      import('shiki/langs/make.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'markdown',
    name: 'Markdown',
    aliases: ['md'],
    import: (() =>
      import('shiki/langs/markdown.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'matlab',
    name: 'MATLAB',
    import: (() =>
      import('shiki/langs/matlab.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'mermaid',
    name: 'Mermaid',
    // import: (() =>
    //   import('shiki/langs/mermaid.mjs')) as DynamicImportLanguageRegistration,
    import: (() =>
      import('@/assets/mermaid.json').then(
        (data) => data
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'nix',
    name: 'Nix',
    import: (() =>
      import('shiki/langs/nix.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'objective-c',
    name: 'Objective-C',
    aliases: ['objc'],
    import: (() =>
      import(
        'shiki/langs/objective-c.mjs'
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'objective-cpp',
    name: 'Objective-C++',
    import: (() =>
      import(
        'shiki/langs/objective-cpp.mjs'
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'ocaml',
    name: 'OCaml',
    import: (() =>
      import('shiki/langs/ocaml.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'pascal',
    name: 'Pascal',
    import: (() =>
      import('shiki/langs/pascal.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'perl',
    name: 'Perl',
    import: (() =>
      import('shiki/langs/perl.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'php',
    name: 'PHP',
    import: (() =>
      import('shiki/langs/php.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'powershell',
    name: 'PowerShell',
    aliases: ['ps', 'ps1'],
    import: (() =>
      import(
        'shiki/langs/powershell.mjs'
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'prolog',
    name: 'Prolog',
    import: (() =>
      import('shiki/langs/prolog.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'purescript',
    name: 'PureScript',
    import: (() =>
      import(
        'shiki/langs/purescript.mjs'
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'python',
    name: 'Python',
    aliases: ['py'],
    import: (() =>
      import('shiki/langs/python.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'r',
    name: 'R',
    import: (() =>
      import('shiki/langs/r.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'ruby',
    name: 'Ruby',
    aliases: ['rb'],
    import: (() =>
      import('shiki/langs/ruby.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'rust',
    name: 'Rust',
    aliases: ['rs'],
    import: (() =>
      import('shiki/langs/rust.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'sass',
    name: 'Sass',
    import: (() =>
      import('shiki/langs/sass.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'scala',
    name: 'Scala',
    import: (() =>
      import('shiki/langs/scala.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'scheme',
    name: 'Scheme',
    import: (() =>
      import('shiki/langs/scheme.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'scss',
    name: 'SCSS',
    import: (() =>
      import('shiki/langs/scss.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'shellscript',
    name: 'Shell',
    aliases: ['bash', 'sh', 'shell', 'zsh'],
    import: (() =>
      import(
        'shiki/langs/shellscript.mjs'
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'solidity',
    name: 'Solidity',
    import: (() =>
      import('shiki/langs/solidity.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'sql',
    name: 'SQL',
    import: (() =>
      import('shiki/langs/sql.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'swift',
    name: 'Swift',
    import: (() =>
      import('shiki/langs/swift.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'toml',
    name: 'TOML',
    import: (() =>
      import('shiki/langs/toml.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    aliases: ['ts'],
    import: (() =>
      import(
        'shiki/langs/typescript.mjs'
      )) as DynamicImportLanguageRegistration,
  },
  {
    id: 'vb',
    name: 'Visual Basic',
    aliases: ['cmd'],
    import: (() =>
      import('shiki/langs/vb.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'verilog',
    name: 'Verilog',
    import: (() =>
      import('shiki/langs/verilog.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'vhdl',
    name: 'VHDL',
    import: (() =>
      import('shiki/langs/vhdl.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'wasm',
    name: 'WebAssembly',
    import: (() =>
      import('shiki/langs/wasm.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'xml',
    name: 'XML',
    import: (() =>
      import('shiki/langs/xml.mjs')) as DynamicImportLanguageRegistration,
  },
  {
    id: 'yaml',
    name: 'YAML',
    aliases: ['yml'],
    import: (() =>
      import('shiki/langs/yaml.mjs')) as DynamicImportLanguageRegistration,
  },
];

export const bundledLanguagesBase = Object.fromEntries(
  bundledLanguagesInfo.map((i) => [i.id, i.import])
);

export const bundledLanguagesAlias = Object.fromEntries(
  bundledLanguagesInfo.flatMap(
    (i) => i.aliases?.map((a) => [a, i.import]) || []
  )
);

export type BundledLanguage =
  | 'abap'
  | 'asm'
  | 'c'
  | 'clojure'
  | 'coffee'
  | 'cpp'
  | 'csharp'
  | 'css'
  | 'dart'
  | 'diff'
  | 'docker'
  | 'elixir'
  | 'elm'
  | 'erlang'
  | 'fortran-fixed-form'
  | 'fsharp'
  | 'gherkin'
  | 'glsl'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'haskell'
  | 'html'
  | 'java'
  | 'javascript'
  | 'jinja'
  | 'json'
  | 'kotlin'
  | 'latex'
  | 'less'
  | 'lisp'
  | 'lua'
  | 'make'
  | 'markdown'
  | 'matlab'
  | 'mermaid'
  | 'nix'
  | 'objective-c'
  | 'objective-cpp'
  | 'ocaml'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'powershell'
  | 'prolog'
  | 'purescript'
  | 'python'
  | 'r'
  | 'ruby'
  | 'rust'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'shellscript'
  | 'solidity'
  | 'sql'
  | 'swift'
  | 'toml'
  | 'typescript'
  | 'vb'
  | 'verilog'
  | 'vhdl'
  | 'wasm'
  | 'xml'
  | 'yaml';

export const bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias,
} as Record<BundledLanguage, DynamicImportLanguageRegistration>;
