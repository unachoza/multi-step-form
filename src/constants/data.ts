export const formData = [
	{
		stepNumber: 1,
		title: "Your Info",
		heading: "Personal info",
		subHeading: "Please proivde your name, email address,k and phone number",
		form: [
			{
				type: "input",
				label: "Name",
				placeholder: "e.g. Stephen King",
			},
			{
				type: "input",
				label: "Email Address",
				placeholder: "e.g. stephenking@lorem.com",
			},
			{
				type: "input",
				label: "Phone Number ",
				placeholder: "e.g. +1 234 567 890",
			},
		],
	},
	{
		stepNumber: 2,
		title: "Select plan",
		heading: "Select Your Plan",
		subHeading: "You have the option of monthly or yearly billing",
		form: [
			{
				type: "select card",
				label: "Arcade",
				details: "$9/mo",
			},
			{
				type: "select card",
				label: "Advanced",
				placeholder: "$12/mo",
			},
			{
				type: "select card",
				label: "Pro",
				placeholder: "$15/mo",
			},
		],
	},
	{
		stepNumber: 3,
		title: "Add-ons",
		heading: "Pick add-ons",
		subHeading: "You have the option of monthly or yearly billing",
		form: [],
	},
	{
		stepNumber: 4,
		title: "Summary",
		heading: "Finishing up",
		subHeading: "Double-check everything looks OK before confirming",
		form: [],
	},
];
