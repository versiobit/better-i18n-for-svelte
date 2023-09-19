# Better I18N for Svelte

SEO focused library for multi-language SvelteKit sites.

Core features:

* In-place editing of i18n messages via web brower in development mode.
* I18n messages automatically stored in i18n.json files next to +page.svelte in your GIT repository.
* SSR optimized. Production build contains real messages in HTML (no JS required to render).

These features are provided by the `<I18n>` component.

Advanced SEO features:

* Localized URLs without having to duplicate the page's HTML structure.
* Sets the HTML page title and meta description.
* Adds `<link rel="alternate" hreflang="lang"...>` elements to pages to tell search engines about language variants.

These features are provided by the `<I18nPage>` component.


## Try it

Run locally with `npm run dev` or try it on [StackBlitz](https://stackblitz.com/github/versiobit/better-i18n-for-svelte).

First steps: Open http://localhost:5173/en/simple/ and modify the h1 element in the web browser. You'll notice that the content of src/routes/en/simple/i18n.json file got updated. This way you can manage and review your i18n easily.

![In-Place edit demo](https://raw.githubusercontent.com/versiobit/better-i18n-for-svelte/main/demo.gif)

The website of https://versiobit.com was built using this library. Switch from english to german in the footer.
If you inspect the source HTML you see all i18n messages are embedded as raw strings and SEO friendly meta and link-alternate tags are present.

## Roadmap
This library is in an early development stage and has some rough edges.
Feedback is very welcome! Create an issue or comment on [Reddit]( https://www.reddit.com/r/sveltejs/comments/16lxqe1/better_i18n_for_svelte_with_seo_support/).


## Documentaton

### Setup for new projects

* npm install better-i18n-for-svelte
* copy the files in src/routes into your project as a starting point, replacing '$lib/..' in the imports with 'better-i18n-for-svelte'.


## `<I18n>` component
This is the core component. Place it into a svelte component and it will insert the given I18n message, e.g.

    <h1><I18n name="title"/></h1>

When running in dev mode, you can modify the message by clicking on the element in the web browser.

Notes:
* the language information is taken from the page path (e.g. /en/simple).
* if you have many pages you can use SvelteKits route parameter feature, e.g. create a folder like src/routes/[lang]/simple/

## `<I18nPage>` component
This component provides a more opinionated way of how to build a multi language site.

If a page should exist in multi languages, create the folders and +page.svelte files as you normally would, e.g. /en/about-us for the English variant and /de/ueber-uns for the German variant.

Create a shared about.svelte component (e.g. in src/routes/en/about-us/about.svelte) that can be re-used by each variant like this:
```
<I18nPage id="/en/about-us">
	<h1><I18n name="title" /></h1>
	<p><I18n name="description" /></p>
</I18nPage>
```
The `id` should be the directory path of this component within 'src/routes'. Thus, the id stays the same for each language variant of the page.


## Customization

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
