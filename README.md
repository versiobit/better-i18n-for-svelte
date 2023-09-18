# Better I18N for Svelte

SEO focused library for multi-language SvelteKit sites.

Core features:

* In-place editing of i18n messages via web brower in development mode.
* I18n messages automatically stored in i18n.json files next to +page.svelte in your GIT repository.
* SSR optimized. Production build contains real messages in HTML (no JS required to render).

These features are provided by the `<I18n>` component.

Advanced SEO features:

* Localized URLs without having to duplicate the page structure.
* Support for HTML page title and meta description.
* Automatically generates `<link rel="alternate" hreflang="de" href="...">` tags to notify search engines about the localized versions.

These features are provided by the `<I18nPage>` component.

## Demo

The website of https://versiobit.com was built using this library. Switch from english to german in the footer.
If you inspect the source HTML you see all i18n messages are embedded as raw strings and SEO friendly meta and link tags are present.

## Usage

### Setup for new projects

* npm install better-i18n-for-svelte
* copy the files in src/routes into your project as a starting point, replacing '$lib/..' in the imports with 'better-i18n-for-svelte'.

## Development

### Local
```bash
npm install
npm run dev
```

### Publishing

To build your library:

```bash
npm run package
```

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
