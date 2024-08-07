import { notFound } from 'next/navigation'
import { asText } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'

const client = createClient()

/**
 * @typedef {{ uid: string }} Params
 */

/**
 * @param {{ params: Params }}
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata({ params }) {
	const page = await client.getByUID('page', params.uid).catch(() => notFound())
	const settings = await client.getSingle('settings')

	return {
		title: `${asText(page.data.title)} | ${asText(settings.data.siteTitle)}`,
		description: page.data.meta_description,
		openGraph: {
			title: page.data.meta_title,
			images: [
				{
					url: page.data.meta_image.url,
				},
			],
		},
	}
}

/**
 * @param {{ params: Params }}
 */
export default async function Page({ params }) {
	const client = createClient()
	const page = await client.getByUID('page', params.uid).catch(() => notFound())

	return (
		<main>
			<SliceZone slices={page.data.slices} components={components} />
		</main>
	)
}

export async function generateStaticParams() {
	const client = createClient()

	const pages = await client.getAllByType('page')

	return pages.map(page => {
		return { uid: page.uid }
	})
}

