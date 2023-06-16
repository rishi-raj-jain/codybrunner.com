import { component$ } from '@builder.io/qwik'

import { cx } from '~/utils/cx'

interface IconProps {
	class?: string
}

export const ArrowDown = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx(
				'h-4 w-4 fill-none transition stroke-primary-400 group-active:stroke-primary-600 dark:group-hover:stroke-primary-50 dark:group-active:stroke-primary-50',
				cls
			)}
			view-box='0 0 16 16'
		>
			<path
				d='M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='1.5'
			/>
		</svg>
	)
})

export const BriefCaseIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx('h-6 w-6 fill-none flex-none', cls)}
			stroke-linecap='round'
			stroke-linejoin='round'
			stroke-width='1.5'
			view-box='0 0 24 24'
		>
			<path
				class='fill-primary-100 stroke-primary-400 dark:fill-primary-100/10 dark:stroke-primary-500'
				d='M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
			/>
			<path
				class='stroke-primary-400 dark:stroke-primary-500'
				d='M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5'
			/>
		</svg>
	)
})

export const ChevronDownIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg aria-hidden='true' class={cx('h-2 w-2', cls)} view-box='0 0 8 6'>
			<path
				class='fill-none'
				d='M1.75 1.75 4 4.25l2.25-2.5'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='1.5'
			/>
		</svg>
	)
})

export const ChevronRightIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx('ml-1 fill-none h-4 w-4 stroke-current', cls)}
			view-box='0 0 16 16'
		>
			<path
				d='M6.75 5.75 9.25 8l-2.5 2.25'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='1.5'
			/>
		</svg>
	)
})

export const CloseIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg aria-hidden='true' class={cx('', cls)} view-box='0 0 24 24'>
			<path
				class='stroke-current fill-none'
				d='m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='1.5'
			/>
		</svg>
	)
})

export const GitHubIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx(
				'h-6 w-6 fill-primary-500 duration-100 ease-in-out transition-all lg:group-hover:scale-125 lg:group-hover:animate-wiggle group-hover:fill-accent-500 dark:fill-primary-400 dark:group-hover:fill-accent-400',
				cls
			)}
			view-box='0 0 24 24'
		>
			<path
				clip-rule='evenodd'
				d='M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z'
				fill-rule='evenodd'
			/>
		</svg>
	)
})

export const InstagramIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx(
				'h-6 w-6 fill-primary-500 duration-100 ease-in-out transition-all lg:group-hover:scale-125 lg:group-hover:animate-wiggle group-hover:fill-accent-500 dark:fill-primary-400 dark:group-hover:fill-accent-400',
				cls
			)}
			view-box='0 0 24 24'
		>
			<path d='M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z' />
			<path d='M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z' />
		</svg>
	)
})

export const LinkIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx('h-6 w-6 flex-none', cls)}
			view-box='0 0 24 24'
		>
			<path
				class='fill-current'
				d='M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z'
			/>
		</svg>
	)
})

export const LinkedInIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx(
				'h-6 w-6 fill-primary-500 duration-100 ease-in-out transition-all lg:group-hover:scale-125 lg:group-hover:animate-wiggle group-hover:fill-accent-500 dark:fill-primary-400 dark:group-hover:fill-accent-400',
				cls
			)}
			view-box='0 0 24 24'
		>
			<path d='M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z' />
		</svg>
	)
})

export const MailIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx('h-6 w-6 fill-none flex-none', cls)}
			stroke-linecap='round'
			stroke-linejoin='round'
			stroke-width='1.5'
			view-box='0 0 24 24'
		>
			<path
				class={cx(
					'fill-primary-100 stroke-primary-400 dark:fill-primary-100/10 dark:stroke-primary-500',
					cls
				)}
				d='M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
			/>
			<path
				class={cx('stroke-primary-400 dark:stroke-primary-500', cls)}
				d='m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6'
			/>
		</svg>
	)
})

export const MoonIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx(
				'hidden h-6 w-6 fill-primary-700 stroke-primary-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-400 [@media_not_(prefers-color-scheme:dark)]:fill-accent-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-accent-500',
				cls
			)}
			view-box='0 0 24 24'
		>
			<path
				d='M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='1.5'
			/>
		</svg>
	)
})

export const SunIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx(
				'h-6 w-6 fill-primary-100 stroke-primary-500 transition group-hover:fill-primary-200 group-hover:stroke-primary-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-accent-50 [@media(prefers-color-scheme:dark)]:stroke-accent-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-accent-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-accent-600',
				cls
			)}
			stroke-linecap='round'
			stroke-linejoin='round'
			stroke-width='1.5'
			view-box='0 0 24 24'
		>
			<path d='M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z' />
			<path
				class='fill-none'
				d='M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061'
			/>
		</svg>
	)
})

export const TelegramIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			class={cx(
				'h-6 w-6 fill-primary-500 duration-100 ease-in-out transition-all lg:group-hover:scale-125 lg:group-hover:animate-wiggle group-hover:fill-accent-500 dark:fill-primary-400 dark:group-hover:fill-accent-400',
				cls
			)}
			view-box='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g stroke-width='0' />
			<g stroke-linecap='round' stroke-linejoin='round' />
			<g>
				{' '}
				<path
					clip-rule='evenodd'
					d='M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.3583 9.38244C11.3857 9.787 9.44177 10.6243 6.52657 11.8944C6.05318 12.0827 5.8052 12.2669 5.78263 12.4469C5.74448 12.7513 6.12559 12.8711 6.64455 13.0343C6.71515 13.0565 6.78829 13.0795 6.86327 13.1038C7.37385 13.2698 8.06068 13.464 8.41773 13.4717C8.74161 13.4787 9.1031 13.3452 9.50219 13.0711C12.226 11.2325 13.632 10.3032 13.7202 10.2831C13.7825 10.269 13.8688 10.2512 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9738 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4246 12.9759 11.2534 13.135 11.2184 13.1714C11.14 13.2528 11.0601 13.3298 10.9833 13.4038C10.509 13.8611 10.1532 14.204 11.003 14.764C11.4114 15.0331 11.7381 15.2556 12.0641 15.4776C12.4201 15.7201 12.7752 15.9619 13.2347 16.2631C13.3517 16.3398 13.4635 16.4195 13.5724 16.4971C13.9867 16.7925 14.3589 17.0579 14.8188 17.0155C15.086 16.991 15.362 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.382 16.6352 8.80081C16.6484 8.66228 16.6318 8.48498 16.6185 8.40715C16.6051 8.32932 16.5773 8.21842 16.4761 8.13633C16.3563 8.03911 16.1714 8.01861 16.0886 8.02C15.7125 8.0267 15.1354 8.22735 12.3583 9.38244Z'
					fill-rule='evenodd'
				/>
			</g>
		</svg>
	)
})

export const TwitterIcon = component$<IconProps>(({ class: cls }) => {
	return (
		<svg
			aria-hidden='true'
			class={cx(
				'h-6 w-6 fill-primary-500 duration-100 ease-in-out transition-all lg:group-hover:scale-125 lg:group-hover:animate-wiggle group-hover:fill-accent-500 dark:fill-primary-400 dark:group-hover:fill-accent-400',
				cls
			)}
			view-box='0 0 24 24'
		>
			<path d='M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z' />
		</svg>
	)
})