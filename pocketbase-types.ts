/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Certificates = "certificates",
	CloudflareDNSRecords = "cloudflareDNSRecords",
	CloudflarePages = "cloudflarePages",
	CloudflareZones = "cloudflareZones",
	ContactFormEmails = "contactFormEmails",
	ContactFormQueue = "contactFormQueue",
	ContactFormSettings = "contactFormSettings",
	ContactFormTextMessages = "contactFormTextMessages",
	EmailAddresses = "emailAddresses",
	Files = "files",
	GhostServers = "ghostServers",
	GhostThemes = "ghostThemes",
	Images = "images",
	Logos = "logos",
	MxRouteEmailAddresses = "mxRouteEmailAddresses",
	MxrouteDomains = "mxrouteDomains",
	PhoneNumbers = "phoneNumbers",
	PricingFeatures = "pricingFeatures",
	PricingLimits = "pricingLimits",
	PricingTiers = "pricingTiers",
	RecentCalls = "recentCalls",
	SmtpServers = "smtpServers",
	UptimeConfigs = "uptimeConfigs",
	UptimeWarnings = "uptimeWarnings",
	UserBrandingInformation = "userBrandingInformation",
	UserPageRequests = "userPageRequests",
	UserPageRequiredFileFields = "userPageRequiredFileFields",
	UserPageRequiredImageField = "userPageRequiredImageField",
	UserPageRequiredTextFields = "userPageRequiredTextFields",
	UserPageRequiredVideoField = "userPageRequiredVideoField",
	UserQuotes = "userQuotes",
	UserSubscriptionSettings = "userSubscriptionSettings",
	Users = "users",
	Videos = "videos",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type CertificatesRecord = {
	created?: IsoDateString
	daysRemaining?: number
	domain?: string
	expiresAt?: IsoDateString
	id: string
	updated?: IsoDateString
}

export type CloudflareDNSRecordsRecord = {
	content?: string
	created?: IsoDateString
	createdOn?: IsoDateString
	id: string
	name?: string
	priority?: number
	proxied?: boolean
	recordType?: string
	synced?: boolean
	ttl?: number
	updated?: IsoDateString
	zone?: RecordIdString
}

export type CloudflarePagesRecord = {
	created?: IsoDateString
	createdOn?: IsoDateString
	dnsRecords?: RecordIdString[]
	id: string
	name?: string
	synced?: boolean
	updated?: IsoDateString
	url?: string
}

export type CloudflareZonesRecord = {
	created?: IsoDateString
	createdOn?: IsoDateString
	id: string
	name?: string
	originalRegistrar?: string
	synced?: boolean
	updated?: IsoDateString
}

export type ContactFormEmailsRecord = {
	contactFormSettings?: RecordIdString
	content?: HTMLString
	created?: IsoDateString
	id: string
	rate?: number
	sent?: boolean
	sentDate?: IsoDateString
	updated?: IsoDateString
}

export type ContactFormQueueRecord<Tjson = unknown> = {
	completed?: boolean
	contactFormSettings: RecordIdString
	created?: IsoDateString
	emailError?: boolean
	id: string
	ip?: string
	json?: null | Tjson
	smsError?: boolean
	updated?: IsoDateString
}

export type ContactFormSettingsRecord = {
	created?: IsoDateString
	emailSendingEnabled?: boolean
	formEnabled?: boolean
	formSubmissionRecipientEmail?: string
	formSubmissionRecipientNumber?: string
	id: string
	maxEmailsPerHour?: number
	maxMessagesPerHour?: number
	mmsRate?: number
	name?: string
	phoneNumber?: RecordIdString
	smsRate?: number
	smsSendingEnabled?: boolean
	smtpRate?: number
	updated?: IsoDateString
}

export type ContactFormTextMessagesRecord = {
	contactFormSettings?: RecordIdString
	content?: string
	created?: IsoDateString
	id: string
	rate?: number
	sent?: boolean
	sentDate?: IsoDateString
	updated?: IsoDateString
}

export type EmailAddressesRecord = {
	created?: IsoDateString
	id: string
	name?: string
	provider?: string
	updated?: IsoDateString
}

export type FilesRecord = {
	created?: IsoDateString
	deleted?: boolean
	file?: string
	id: string
	sizeBytes?: number
	updated?: IsoDateString
	uploader?: RecordIdString
}

export type GhostServersRecord = {
	apiKey?: string
	created?: IsoDateString
	id: string
	ipAddress?: string
	mysqlVersion?: string
	name?: string
	osVersion?: string
	storageLimit?: number
	storageUsed?: number
	updated?: IsoDateString
	uptimeConfig?: RecordIdString
	version?: string
}

export type GhostThemesRecord = {
	created?: IsoDateString
	id: string
	link?: string
	name?: string
	previewImage?: string
	price?: number
	updated?: IsoDateString
}

export type ImagesRecord = {
	created?: IsoDateString
	deleted?: boolean
	file?: string
	id: string
	sizeBytes?: number
	updated?: IsoDateString
	uploader?: RecordIdString
}

export type LogosRecord = {
	created?: IsoDateString
	id: string
	jpg?: RecordIdString
	png?: RecordIdString
	svg?: RecordIdString
	updated?: IsoDateString
	userBrandingInfo?: RecordIdString
}

export type MxRouteEmailAddressesRecord = {
	account?: string
	created?: IsoDateString
	domain?: RecordIdString
	id: string
	login?: string
	sendLimit?: number
	sentBytes?: number
	suspended?: boolean
	synced?: boolean
	updated?: IsoDateString
	usageBytes?: number
	usageQuota?: number
}

export type MxrouteDomainsRecord = {
	created?: IsoDateString
	domainName?: string
	id: string
	synced?: boolean
	updated?: IsoDateString
}

export type PhoneNumbersRecord = {
	callNotifyEmail?: string
	callNotifyEnabled?: boolean
	created?: IsoDateString
	description?: string
	did: string
	id: string
	note?: string
	smsAvailable?: boolean
	smsEnabled?: boolean
	synced?: boolean
	updated?: IsoDateString
}

export type PricingFeaturesRecord = {
	created?: IsoDateString
	id: string
	name?: string
	updated?: IsoDateString
}

export type PricingLimitsRecord = {
	created?: IsoDateString
	id: string
	maxFileUploadSizeMB?: number
	maxFileUploadStep?: number
	newsletterLimit?: number
	newsletterStep?: number
	paidTierLimit?: number
	paidTierStep?: number
	smtp?: number
	smtpStep?: number
	staffUsers?: number
	staffUsersStep?: number
	storageGB?: number
	storageGBStep?: number
	updated?: IsoDateString
}

export type PricingTiersRecord = {
	created?: IsoDateString
	customDomain?: boolean
	description?: string
	domainManagement?: boolean
	featured?: boolean
	id: string
	name?: string
	price?: number
	priceStepRate?: number
	pricingFeatures?: RecordIdString[]
	pricingLimits?: RecordIdString
	updated?: IsoDateString
}

export type RecentCallsRecord = {
	callLogs?: HTMLString
	callerId?: string
	created?: IsoDateString
	date?: IsoDateString
	description?: string
	disposition?: string
	duration?: string
	id: string
	phoneNumber?: RecordIdString
	updated?: IsoDateString
}

export type SmtpServersRecord = {
	created?: IsoDateString
	host?: string
	id: string
	port?: number
	provider?: string
	updated?: IsoDateString
	username?: string
}

export type UptimeConfigsRecord = {
	certDaysThreshold?: number
	certificate?: RecordIdString
	created?: IsoDateString
	disabled?: boolean
	failedAttempts?: number
	failureThreshold?: number
	id: string
	notifiedCertificate?: boolean
	notifiedUptime?: boolean
	ok?: boolean
	recipientEmail?: string
	sendEmail?: boolean
	sendSMS?: boolean
	senderNumber?: RecordIdString
	smsNumber?: number
	updated?: IsoDateString
	url?: string
}

export type UptimeWarningsRecord = {
	config?: RecordIdString
	created?: IsoDateString
	emailSent?: boolean
	id: string
	message?: string
	smsSent?: boolean
	status?: string
	updated?: IsoDateString
}

export type UserBrandingInformationRecord = {
	brandColor?: string
	brandSecondaryColor?: string
	businessDescription?: string
	businessName?: string
	businessTagLine?: string
	created?: IsoDateString
	facebook?: string
	files?: RecordIdString[]
	id: string
	images?: RecordIdString[]
	instagram?: string
	linkedin?: string
	logos?: RecordIdString[]
	tiktok?: string
	twitter?: string
	updated?: IsoDateString
	user?: RecordIdString
	videos?: RecordIdString[]
	youtube?: string
}

export type UserPageRequestsRecord = {
	created?: IsoDateString
	description?: string
	id: string
	name?: string
	pageRequiredFileFields?: RecordIdString[]
	pageRequiredImageFields?: RecordIdString[]
	pageRequiredTextFields?: RecordIdString[]
	pageRequiredVideoFields?: RecordIdString[]
	updated?: IsoDateString
}

export type UserPageRequiredFileFieldsRecord = {
	created?: IsoDateString
	id: string
	label?: string
	updated?: IsoDateString
	value?: RecordIdString
}

export type UserPageRequiredImageFieldRecord = {
	created?: IsoDateString
	id: string
	label?: string
	updated?: IsoDateString
	value?: RecordIdString
}

export type UserPageRequiredTextFieldsRecord = {
	created?: IsoDateString
	id: string
	label?: string
	textArea?: boolean
	updated?: IsoDateString
	value?: string
}

export type UserPageRequiredVideoFieldRecord = {
	created?: IsoDateString
	id: string
	label?: string
	updated?: IsoDateString
	value?: RecordIdString
}

export type UserQuotesRecord = {
	created?: IsoDateString
	id: string
	name?: string
	tiersavailable?: RecordIdString[]
	updated?: IsoDateString
}

export type UserSubscriptionSettingsRecord = {
	administratorMode?: boolean
	created?: IsoDateString
	customDomain?: boolean
	customDomainName?: string
	finalized?: boolean
	id: string
	managedDomain?: boolean
	maxFileUploadSizeMBLimit?: number
	newsletterLimit?: number
	paidTierLimit?: number
	smtpLimit?: number
	staffLimit?: number
	storageGBLimit?: number
	stripeConnected?: boolean
	updated?: IsoDateString
}

export type UsersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	fullname?: string
	id: string
	mfaEnabled?: boolean
	password: string
	quote?: RecordIdString
	tokenKey: string
	updated?: IsoDateString
	userPageRequests?: RecordIdString
	userSubscriptionSettings?: RecordIdString
	verified?: boolean
}

export type VideosRecord = {
	created?: IsoDateString
	deleted?: boolean
	file?: string
	id: string
	sizeBytes?: number
	updated?: IsoDateString
	uploader?: RecordIdString
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type CertificatesResponse<Texpand = unknown> = Required<CertificatesRecord> & BaseSystemFields<Texpand>
export type CloudflareDNSRecordsResponse<Texpand = unknown> = Required<CloudflareDNSRecordsRecord> & BaseSystemFields<Texpand>
export type CloudflarePagesResponse<Texpand = unknown> = Required<CloudflarePagesRecord> & BaseSystemFields<Texpand>
export type CloudflareZonesResponse<Texpand = unknown> = Required<CloudflareZonesRecord> & BaseSystemFields<Texpand>
export type ContactFormEmailsResponse<Texpand = unknown> = Required<ContactFormEmailsRecord> & BaseSystemFields<Texpand>
export type ContactFormQueueResponse<Tjson = unknown, Texpand = unknown> = Required<ContactFormQueueRecord<Tjson>> & BaseSystemFields<Texpand>
export type ContactFormSettingsResponse<Texpand = unknown> = Required<ContactFormSettingsRecord> & BaseSystemFields<Texpand>
export type ContactFormTextMessagesResponse<Texpand = unknown> = Required<ContactFormTextMessagesRecord> & BaseSystemFields<Texpand>
export type EmailAddressesResponse<Texpand = unknown> = Required<EmailAddressesRecord> & BaseSystemFields<Texpand>
export type FilesResponse<Texpand = unknown> = Required<FilesRecord> & BaseSystemFields<Texpand>
export type GhostServersResponse<Texpand = unknown> = Required<GhostServersRecord> & BaseSystemFields<Texpand>
export type GhostThemesResponse<Texpand = unknown> = Required<GhostThemesRecord> & BaseSystemFields<Texpand>
export type ImagesResponse<Texpand = unknown> = Required<ImagesRecord> & BaseSystemFields<Texpand>
export type LogosResponse<Texpand = unknown> = Required<LogosRecord> & BaseSystemFields<Texpand>
export type MxRouteEmailAddressesResponse<Texpand = unknown> = Required<MxRouteEmailAddressesRecord> & BaseSystemFields<Texpand>
export type MxrouteDomainsResponse<Texpand = unknown> = Required<MxrouteDomainsRecord> & BaseSystemFields<Texpand>
export type PhoneNumbersResponse<Texpand = unknown> = Required<PhoneNumbersRecord> & BaseSystemFields<Texpand>
export type PricingFeaturesResponse<Texpand = unknown> = Required<PricingFeaturesRecord> & BaseSystemFields<Texpand>
export type PricingLimitsResponse<Texpand = unknown> = Required<PricingLimitsRecord> & BaseSystemFields<Texpand>
export type PricingTiersResponse<Texpand = unknown> = Required<PricingTiersRecord> & BaseSystemFields<Texpand>
export type RecentCallsResponse<Texpand = unknown> = Required<RecentCallsRecord> & BaseSystemFields<Texpand>
export type SmtpServersResponse<Texpand = unknown> = Required<SmtpServersRecord> & BaseSystemFields<Texpand>
export type UptimeConfigsResponse<Texpand = unknown> = Required<UptimeConfigsRecord> & BaseSystemFields<Texpand>
export type UptimeWarningsResponse<Texpand = unknown> = Required<UptimeWarningsRecord> & BaseSystemFields<Texpand>
export type UserBrandingInformationResponse<Texpand = unknown> = Required<UserBrandingInformationRecord> & BaseSystemFields<Texpand>
export type UserPageRequestsResponse<Texpand = unknown> = Required<UserPageRequestsRecord> & BaseSystemFields<Texpand>
export type UserPageRequiredFileFieldsResponse<Texpand = unknown> = Required<UserPageRequiredFileFieldsRecord> & BaseSystemFields<Texpand>
export type UserPageRequiredImageFieldResponse<Texpand = unknown> = Required<UserPageRequiredImageFieldRecord> & BaseSystemFields<Texpand>
export type UserPageRequiredTextFieldsResponse<Texpand = unknown> = Required<UserPageRequiredTextFieldsRecord> & BaseSystemFields<Texpand>
export type UserPageRequiredVideoFieldResponse<Texpand = unknown> = Required<UserPageRequiredVideoFieldRecord> & BaseSystemFields<Texpand>
export type UserQuotesResponse<Texpand = unknown> = Required<UserQuotesRecord> & BaseSystemFields<Texpand>
export type UserSubscriptionSettingsResponse<Texpand = unknown> = Required<UserSubscriptionSettingsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type VideosResponse<Texpand = unknown> = Required<VideosRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	certificates: CertificatesRecord
	cloudflareDNSRecords: CloudflareDNSRecordsRecord
	cloudflarePages: CloudflarePagesRecord
	cloudflareZones: CloudflareZonesRecord
	contactFormEmails: ContactFormEmailsRecord
	contactFormQueue: ContactFormQueueRecord
	contactFormSettings: ContactFormSettingsRecord
	contactFormTextMessages: ContactFormTextMessagesRecord
	emailAddresses: EmailAddressesRecord
	files: FilesRecord
	ghostServers: GhostServersRecord
	ghostThemes: GhostThemesRecord
	images: ImagesRecord
	logos: LogosRecord
	mxRouteEmailAddresses: MxRouteEmailAddressesRecord
	mxrouteDomains: MxrouteDomainsRecord
	phoneNumbers: PhoneNumbersRecord
	pricingFeatures: PricingFeaturesRecord
	pricingLimits: PricingLimitsRecord
	pricingTiers: PricingTiersRecord
	recentCalls: RecentCallsRecord
	smtpServers: SmtpServersRecord
	uptimeConfigs: UptimeConfigsRecord
	uptimeWarnings: UptimeWarningsRecord
	userBrandingInformation: UserBrandingInformationRecord
	userPageRequests: UserPageRequestsRecord
	userPageRequiredFileFields: UserPageRequiredFileFieldsRecord
	userPageRequiredImageField: UserPageRequiredImageFieldRecord
	userPageRequiredTextFields: UserPageRequiredTextFieldsRecord
	userPageRequiredVideoField: UserPageRequiredVideoFieldRecord
	userQuotes: UserQuotesRecord
	userSubscriptionSettings: UserSubscriptionSettingsRecord
	users: UsersRecord
	videos: VideosRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	certificates: CertificatesResponse
	cloudflareDNSRecords: CloudflareDNSRecordsResponse
	cloudflarePages: CloudflarePagesResponse
	cloudflareZones: CloudflareZonesResponse
	contactFormEmails: ContactFormEmailsResponse
	contactFormQueue: ContactFormQueueResponse
	contactFormSettings: ContactFormSettingsResponse
	contactFormTextMessages: ContactFormTextMessagesResponse
	emailAddresses: EmailAddressesResponse
	files: FilesResponse
	ghostServers: GhostServersResponse
	ghostThemes: GhostThemesResponse
	images: ImagesResponse
	logos: LogosResponse
	mxRouteEmailAddresses: MxRouteEmailAddressesResponse
	mxrouteDomains: MxrouteDomainsResponse
	phoneNumbers: PhoneNumbersResponse
	pricingFeatures: PricingFeaturesResponse
	pricingLimits: PricingLimitsResponse
	pricingTiers: PricingTiersResponse
	recentCalls: RecentCallsResponse
	smtpServers: SmtpServersResponse
	uptimeConfigs: UptimeConfigsResponse
	uptimeWarnings: UptimeWarningsResponse
	userBrandingInformation: UserBrandingInformationResponse
	userPageRequests: UserPageRequestsResponse
	userPageRequiredFileFields: UserPageRequiredFileFieldsResponse
	userPageRequiredImageField: UserPageRequiredImageFieldResponse
	userPageRequiredTextFields: UserPageRequiredTextFieldsResponse
	userPageRequiredVideoField: UserPageRequiredVideoFieldResponse
	userQuotes: UserQuotesResponse
	userSubscriptionSettings: UserSubscriptionSettingsResponse
	users: UsersResponse
	videos: VideosResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'certificates'): RecordService<CertificatesResponse>
	collection(idOrName: 'cloudflareDNSRecords'): RecordService<CloudflareDNSRecordsResponse>
	collection(idOrName: 'cloudflarePages'): RecordService<CloudflarePagesResponse>
	collection(idOrName: 'cloudflareZones'): RecordService<CloudflareZonesResponse>
	collection(idOrName: 'contactFormEmails'): RecordService<ContactFormEmailsResponse>
	collection(idOrName: 'contactFormQueue'): RecordService<ContactFormQueueResponse>
	collection(idOrName: 'contactFormSettings'): RecordService<ContactFormSettingsResponse>
	collection(idOrName: 'contactFormTextMessages'): RecordService<ContactFormTextMessagesResponse>
	collection(idOrName: 'emailAddresses'): RecordService<EmailAddressesResponse>
	collection(idOrName: 'files'): RecordService<FilesResponse>
	collection(idOrName: 'ghostServers'): RecordService<GhostServersResponse>
	collection(idOrName: 'ghostThemes'): RecordService<GhostThemesResponse>
	collection(idOrName: 'images'): RecordService<ImagesResponse>
	collection(idOrName: 'logos'): RecordService<LogosResponse>
	collection(idOrName: 'mxRouteEmailAddresses'): RecordService<MxRouteEmailAddressesResponse>
	collection(idOrName: 'mxrouteDomains'): RecordService<MxrouteDomainsResponse>
	collection(idOrName: 'phoneNumbers'): RecordService<PhoneNumbersResponse>
	collection(idOrName: 'pricingFeatures'): RecordService<PricingFeaturesResponse>
	collection(idOrName: 'pricingLimits'): RecordService<PricingLimitsResponse>
	collection(idOrName: 'pricingTiers'): RecordService<PricingTiersResponse>
	collection(idOrName: 'recentCalls'): RecordService<RecentCallsResponse>
	collection(idOrName: 'smtpServers'): RecordService<SmtpServersResponse>
	collection(idOrName: 'uptimeConfigs'): RecordService<UptimeConfigsResponse>
	collection(idOrName: 'uptimeWarnings'): RecordService<UptimeWarningsResponse>
	collection(idOrName: 'userBrandingInformation'): RecordService<UserBrandingInformationResponse>
	collection(idOrName: 'userPageRequests'): RecordService<UserPageRequestsResponse>
	collection(idOrName: 'userPageRequiredFileFields'): RecordService<UserPageRequiredFileFieldsResponse>
	collection(idOrName: 'userPageRequiredImageField'): RecordService<UserPageRequiredImageFieldResponse>
	collection(idOrName: 'userPageRequiredTextFields'): RecordService<UserPageRequiredTextFieldsResponse>
	collection(idOrName: 'userPageRequiredVideoField'): RecordService<UserPageRequiredVideoFieldResponse>
	collection(idOrName: 'userQuotes'): RecordService<UserQuotesResponse>
	collection(idOrName: 'userSubscriptionSettings'): RecordService<UserSubscriptionSettingsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
	collection(idOrName: 'videos'): RecordService<VideosResponse>
}
