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

### Playground
Play around with the in-place editing on
https://stackblitz.com/github/versiobit/better-i18n-for-svelte

### Production example
The website of https://versiobit.com was built using this library. Switch from english to german in the footer.
If you inspect the source HTML you see all i18n messages are embedded as raw strings and SEO friendly meta and link tags are present.

### Feedback
Feedback is very welcome! Create an issue or comment on [Reddit]( https://www.reddit.com/r/sveltejs/comments/16lxqe1/better_i18n_for_svelte_with_seo_support/).


## Documentaton

### Setup for new projects

* npm install better-i18n-for-svelte
* copy the files in src/routes into your project as a starting point, replacing '$lib/..' in the imports with 'better-i18n-for-svelte'.


## `<I18n>` component

This is the core component. Place it into a svelte component and it will insert the given I18n message, e.g.

    <I18n name="intro"/>

When running in dev mode, you can set the message by clicking on the text in the web browser.

Notes:
* the language information is taken from the page path (e.g. /en/simple).
* if you have many pages you can use SvelteKits route parameter feature, e.g. create a folder like src/routes/[lang]/simple/

## Options

You can pass defaults in the call to initI18nContext.
For example, to change the default language do:

    initI18nContext(serverI18nData, {defaultLanguage: 'de'});	


## Development

### Local
```bash
npm install
npm run dev
```

### Publishing
To build/publish use:

```bash
npm run package
npm publish
```
