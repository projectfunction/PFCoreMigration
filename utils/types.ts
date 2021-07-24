
export type NDEvent = {
	group: string,
	group_photo: string,
	group_description: string,
	next_event: Array<string>,
	subject: string,
	description: string,
	date_time: string,
	location: string,
	event_url: string,
	iso_date: string
}

export type CertificateApiResponse = {
	certificateFound: boolean,
	data: {
		owner?: {
			firstName: string,
			lastName: string
		},
		grantedOn?: string,
		expiry?: string,
		certUrl?: string,
		isValid?: boolean,
		previewUrl?: string,
		hasPreview?: boolean
	}
}