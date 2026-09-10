import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('rants');
	const feedUrl = new URL('rss.xml', context.site);
	return rss({
		title: BLOG_TITLE,
		description: BLOG_DESCRIPTION,
		site: context.site,
		xmlns: { atom: 'http://www.w3.org/2005/Atom' },
		customData: `<language>en-us</language><atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>`,
		items: posts.map((post) => ({
			...post.data,
			link: `/rants/${post.id}/`,
		})),
	});
}
