import { faGift, faSnowflake, faSleigh, faHollyBerry } from '@fortawesome/free-solid-svg-icons';

export const _copy = {
	home: {
		title: 'logo',
		subText: [
			'Tis the season of giving, and that is what we aim to do! Hard times have fallen on so many and we want to do everything we can to bring hope to those who need it.',
			'If you know of a family who is in need, please take a moment to tell us a little more about them by nominating them below.',
			'It is because of your generous giving that this is even possible. If you are in a position to help, please take a look at the different ways we could use your support! These include sponsoring a family, monetary donations of any size, and wrapping or delivering gifts.',
			'If you have any questions, please feel free to reach out at help@hopeandhalos.org',
		],
	},
	donate: {
		title: 'Donate',
		subText: ['Venmo: @Jordon-Sargent', 'Cash App: $JordonSargent', 'PayPal: @Jssargent'],
	},
	whoWeAre: {
		title: 'Who We Are',
		subText: [
			'We’re just a group of friends and family members from Northern Utah who are trying to make a difference in our communities.',
			'We have been extremely blessed throughout our lives. Because of all that we’ve been given, we feel it’s our duty to give back to society!',
			'We know we are not alone in this, and have been overwhelmed with the amount of people who also want to help – especially at this time of year. The challenge is that most people don’t know where or how to help – so we set out on a mission; Find a place to connect people who want to give with people in need.',
			'We appreciate people like you who are willing to help, in any way! So please, reach out and help us further the cause!',
		],
	},
	googleForms: {
		help: 'https://docs.google.com/forms/d/e/1FAIpQLSeQry2trA1EXBoVUtleTTL78YPaFDxh_BuZvd2hlWmbwQD52A/viewform?embedded=true',
		nominate:
			'https://docs.google.com/forms/d/e/1FAIpQLSc070wKpCukk4b0SBcwDHUC9JklTmIJ_H8i5h7BjxZRInKLeA/viewform?embedded=true',
	},
	buttons: [
		{
			text: 'Nominate a Family',
			meta: 'nominate',
			icon: faGift,
		},
		{
			text: 'Donate',
			meta: 'donate',
			icon: faSnowflake,
		},
		{
			text: 'Ways to Help',
			meta: 'help',
			icon: faSleigh,
		},
		{
			text: 'Who We Are',
			meta: 'who-we-are',
			icon: faHollyBerry,
		},
	],
};
