/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, f as addAttribute, g as renderComponent, s as spreadAttributes, u as unescapeHTML, h as renderHead } from '../astro_BFJM5mxp.mjs';
/* empty css                                                  */

const $$Astro$f = createAstro("https://porfolio.dev/");
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center "> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/Badge.astro", void 0);

const $$Astro$e = createAstro("https://porfolio.dev/");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { data, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm rounded overflow-hidden shadow-lg"> <div class="text-left align-left relative flex flex-col  col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-500 lg:hover:border-gray-100 lg:hover:bg-gray-100/50 dark:lg:hover:bg-gray-700/50"> <img alt="image" class="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy"${addAttribute(data.image.url, "src")}> <!-- <img class="w-full p-2" src={data.image.url} alt={data.image.alt} /> --> <div class="px-6 py-2"> <div class="font-bold text-xl mb-2">${data.title}</div> <p class="text-gray-700 text-base"> ${data.description} </p> <span>${data.pubDate.split("T")[0]}</span> <div class="flex gap-2 w-full mt-2"> ${data.tags.map((tag) => renderTemplate`${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`${tag}` })}`)} </div> </div> <div class="px-2 pb-2 ml-3 bg-purple-500 text-purple-950 w-28 h-10 mb-3 rounded-md "> <a${addAttribute(url, "href")} class="inline-block text-black dark:text-yellow-600 font-bold py-2 rounded align-left">
Leer más ${">"} </a> </div> </div> </div>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/BlogPost.astro", void 0);

const $$Astro$d = createAstro("https://porfolio.dev/");
const $$OpenGraphArticleTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro-seo@0.8.3_typescript@5.3.3/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$c = createAstro("https://porfolio.dev/");
const $$OpenGraphBasicTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro-seo@0.8.3_typescript@5.3.3/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$b = createAstro("https://porfolio.dev/");
const $$OpenGraphImageTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro-seo@0.8.3_typescript@5.3.3/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$a = createAstro("https://porfolio.dev/");
const $$OpenGraphOptionalTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro-seo@0.8.3_typescript@5.3.3/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$9 = createAstro("https://porfolio.dev/");
const $$ExtendedTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro-seo@0.8.3_typescript@5.3.3/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$8 = createAstro("https://porfolio.dev/");
const $$TwitterTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro-seo@0.8.3_typescript@5.3.3/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$7 = createAstro("https://porfolio.dev/");
const $$LanguageAlternatesTags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro-seo@0.8.3_typescript@5.3.3/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$6 = createAstro("https://porfolio.dev/");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || Astro2.url.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro-seo@0.8.3_typescript@5.3.3/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$5 = createAstro("https://porfolio.dev/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    {
      title: "Experiencia",
      label: "experiencia",
      url: "/#experiencia"
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos"
    },
    {
      title: "Sobre m\xED",
      label: "sobre-mi",
      url: "/#sobre-mi"
    },
    {
      title: "Blog",
      label: "blog",
      url: "/blog"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2" data-astro-cid-3ef6ksr2> <nav class="nav-links flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center" data-astro-cid-3ef6ksr2> ${navItems.map((link) => renderTemplate`<a class="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"${addAttribute(link.label, "aria-label")}${addAttribute(link.url, "href")} data-astro-cid-3ef6ksr2> ${link.title} </a>`)} <!-- <ThemeIcon /> --> </nav> </header>  `;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro("https://porfolio.dev/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="opacity-80 p-2 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center"> <div class="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4"> <span class="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">© ${currentYear} <a href="https://danielsuarez.dev/" class="hover:underline">danielsuarezdev</a>. Casi
      todos los derechos reservados design tomado de midudev
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"> <li> <a href="/#sobre-mi" class="hover:underline me-4 md:me-6">Sobre mí</a> </li> <li> <a id="contacto" href="mailto:danielsuarez3114@gmail.com" class="hover:underline">Contacto</a> </li> </ul> </div> </footer>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://porfolio.dev/");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/node_modules/.pnpm/astro@4.4.5_typescript@5.3.3/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$2 = createAstro("https://porfolio.dev/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title, image } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "openGraph": {
    basic: {
      title,
      type: "article",
      image: `https://www.danielsuarez.dev${image}`
      // Asegúrate de formatear correctamente la URL
    }
  }, "twitter": {
    creator: "@DanielSuarezDev",
    image: `https://www.danielsuarez.dev${image}`
  }, "extend": {
    link: [{ rel: "icon", href: "/favicon.ico" }],
    meta: [
      { name: "twitter:image", content: `https://www.danielsuarez.dev${image}` },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description }
    ]
  } })}<meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <!-- El resto de tu layout o página continúa aquí --> <body class="relative text-black dark:text-white"> <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro("https://porfolio.dev/");
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(id, "data-section")}${addAttribute(`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/components/SectionContainer.astro", void 0);

const $$Astro = createAstro("https://porfolio.dev/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/css-o-stylesheet-react-native.md": () => import('./css-o-stylesheet-react-native_LRzCLsiC.mjs').then(n => n.c),"./posts/diferencia-cli-expo.md": () => import('./diferencia-cli-expo_PkIvdKg-.mjs'),"./posts/husky-para-pre-commit.md": () => import('./husky-para-pre-commit_xe12BhEM.mjs'),"./posts/usando-amend.md": () => import('./usando-amend_gpLu0cdZ.mjs')}), () => "../pages/posts/*.md");
  console.log(allPosts[0].frontmatter);
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate);
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "blog", "description": "Aprende sobre desarrollo web y mobile en mi blog. Aqu\xED encontrar\xE1s tutoriales, tips y trucos para mejorar tus habilidades como desarrollador web.", "image": "/images/logo.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-16 md:py-36" }, { "default": ($$result3) => renderTemplate` <h2 class="text-2xl font-bold mb-8">
Aprende sobre desarrollo web en mi blog.
</h2> <div class="flex gap-2 flex-wrap"> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result3, "BlogPost", $$BlogPost, { "key": post.url, "url": post.url, "data": post.frontmatter })}`)} </div> ` })} </main> ` })}`;
}, "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/pages/blog.astro", void 0);

const $$file = "/home/danielsuarezdev/Documents/projects/frontend/porfolio.dev/src/pages/blog.astro";
const $$url = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SectionContainer as $, $$Badge as a, $$Layout as b, blog as c };
