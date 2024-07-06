import { notFound } from 'next/navigation'
import { SliceZone } from '@prismicio/react'

import { createClient } from '@/prismicio'
import { components } from '@/slices'

const client = createClient()
const page = await client.getByUID('page', 'home').catch(() => notFound())

/**
 * @returns {Promise<import("next").Metadata>}
 */
export async function generateMetadata() {
	return {
		title: page.data.meta_title,
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

export default async function Page() {
	return (
		<main>
			<SliceZone slices={page.data.slices} components={components} />
		</main>
	)
}

