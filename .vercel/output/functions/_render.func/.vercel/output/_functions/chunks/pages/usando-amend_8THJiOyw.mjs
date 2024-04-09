/* empty css                         */
import { d as createComponent, r as renderTemplate, g as renderComponent, u as unescapeHTML } from '../astro_BFJM5mxp.mjs';
import { $ as $$MarkdownPostLayout } from './css-o-stylesheet-react-native_mTQk4LCy.mjs';

const html = "<p>Cuando empecé en el mundo de la programación era normal ir a mi github, filtrar por los Pr’s y ver cosas como:</p>\n<p><img src=\"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ntrq1x9alenqmw4zu9e9.png\" alt=\"Image description\"></p>\n<p>Y ufffff 47 commits 🙈 pues no es que se vea muy bonito ¿verdad? gracias a que he tenido buenos compañeros mas seniors que uno me enseñaron a usar <strong><em>—amend</em></strong> y hoy quiero enseñarte a usarlo y decirte porqué es bueno usarlo y como me ha ayudado 🔥.</p>\n<h2 id=\"porque-usarlo\">¿Porque usarlo?</h2>\n<p>Bueno la respuesta es simple, porque nos ayuda a tener un mejor control ✌🏽, dicen que buenas practicas es tener commits funcionales y que no supere cierto numero de commits, ¿Porqué? porque si queremos hacer por ejemplo un botón:</p>\n<p><img src=\"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swsfn8ng2c9ae8uosoef.png\" alt=\"Image description\"></p>\n<p>¿Te imaginas tener <em>n</em> commits con: text, rounded, icon, background, color o quizás enviaste un commit con algo dañado nos tocaría hacer otro commit que diga algo como <strong><em>update o adjustment</em></strong> ? 🤔</p>\n<p>Noooo!!! no es optimo la idea es que tengamos commits funcionales y por bloques y es ahi done <strong><em>—amend</em></strong> nos ayuda un montón.</p>\n<h2 id=\"como-usarlo\">¿Como usarlo?</h2>\n<p>Es muy fácil si por ejemplo enviamos nuestro primer commit normalmente como lo hacemos hoy en día.</p>\n<p><strong><em>git commit -m”Component button disable”</em></strong></p>\n<p>Pero luego te diste cuenta que aun no sirve el disable, tu harías algo como:</p>\n<p><strong><em>git commit -m”Component button disable true”</em></strong></p>\n<p>Pero con ammend podemos hacer lo siguiente:</p>\n<p><strong><em>git commit —amend -m”Component button disable”`</em></strong></p>\n<p>y eso reemplaza el antiguo commit y solo tendríamos un commit y nadie se daría cuenta que la embarramos, ¿no te parece genial?</p>\n<h2 id=\"tener-en-cuenta-al-hacer-push\">Tener en cuenta al hacer push</h2>\n<p>Cuando hacemos push con ammend hay que hacerlo de la siguiente manera:</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span> git push -force</span></span></code></pre>\n<h2 id=\"conclusión\">Conclusión</h2>\n<p>Pero ojo 👀 solo ammend funciona si no has realizado merge de alguna rama, si hiciste merge tienes que hacer commit de la forma tradicional pero si no dale candela al ammend 🔥.</p>\n<p>A mí me ha ayudado mucho y siento que es más organizado mi trabajo y más limpio.</p>\n<p>Bueno hasta aquí un pequeño relato de lo que he aprendido sobre Git estaré dando más consejos que me han ayudado 🚀 cuéntame si lo usas y si no, cuéntame que te parece ¿vas a usarlo?</p>";

				const frontmatter = {"layout":"../../components/layouts/MarkdownPostLayout.astro","title":"Como usar --amend en git","pubDate":"2024-01-01T00:00:00.000Z","description":"Cuando empecé en el mundo del desarrollo me tope con esto...","author":"Daniel Suarez Dev","image":{"url":"/images/amend-hero.webp","alt":"The Astro logo with the word One."},"tags":["git"]};
				const file = "/home/danielsuarezdev/Documents/projects/frontend/my-portfolio/src/pages/posts/usando-amend.md";
				const url = "/posts/usando-amend";
				function rawContent() {
					return "\nCuando empecé en el mundo de la programación era normal ir a mi github, filtrar por los Pr's y ver cosas como:\n\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ntrq1x9alenqmw4zu9e9.png)\n\nY ufffff 47 commits 🙈 pues no es que se vea muy bonito ¿verdad? gracias a que he tenido buenos compañeros mas seniors que uno me enseñaron a usar **_--amend_** y hoy quiero enseñarte a usarlo y decirte porqué es bueno usarlo y como me ha ayudado 🔥.\n\n## ¿Porque usarlo?\n\nBueno la respuesta es simple, porque nos ayuda a tener un mejor control ✌🏽, dicen que buenas practicas es tener commits funcionales y que no supere cierto numero de commits, ¿Porqué? porque si queremos hacer por ejemplo un botón:\n\n\n![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swsfn8ng2c9ae8uosoef.png)\n\n\n¿Te imaginas tener _n_ commits con: text, rounded, icon, background, color o quizás enviaste un commit con algo dañado nos tocaría hacer otro commit que diga algo como **_update o adjustment_** ? 🤔\n\nNoooo!!! no es optimo la idea es que tengamos commits funcionales y por bloques y es ahi done **_--amend_** nos ayuda un montón.\n\n## ¿Como usarlo?\n\nEs muy fácil si por ejemplo enviamos nuestro primer commit normalmente como lo hacemos hoy en día.\n\n**_git commit -m\"Component button disable\"_**\n\nPero luego te diste cuenta que aun no sirve el disable, tu harías algo como:\n\n**_git commit -m\"Component button disable true\"_**\n\nPero con ammend podemos hacer lo siguiente:\n\n**_git commit --amend -m\"Component button disable\"`_**\n\ny eso reemplaza el antiguo commit y solo tendríamos un commit y nadie se daría cuenta que la embarramos, ¿no te parece genial?\n\n\n## Tener en cuenta al hacer push\n\nCuando hacemos push con ammend hay que hacerlo de la siguiente manera:\n\n```git\n git push -force\n```\n\n## Conclusión\n\nPero ojo 👀 solo ammend funciona si no has realizado merge de alguna rama, si hiciste merge tienes que hacer commit de la forma tradicional pero si no dale candela al ammend 🔥.\n\nA mí me ha ayudado mucho y siento que es más organizado mi trabajo y más limpio.\n\nBueno hasta aquí un pequeño relato de lo que he aprendido sobre Git estaré dando más consejos que me han ayudado 🚀 cuéntame si lo usas y si no, cuéntame que te parece ¿vas a usarlo?\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"porque-usarlo","text":"¿Porque usarlo?"},{"depth":2,"slug":"como-usarlo","text":"¿Como usarlo?"},{"depth":2,"slug":"tener-en-cuenta-al-hacer-push","text":"Tener en cuenta al hacer push"},{"depth":2,"slug":"conclusión","text":"Conclusión"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
