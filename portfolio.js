import emoji from "react-easy-emoji";

export const greetings = {
	name: "Robel Misganew",
	title: "Hi all, I'm Robel",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Laravel / Java / C / C# / PHP / Golang / Bootstrap / Express Js / Oauth2 and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
	resumeLink: "#",
};

export const openSource = {
	githubUserName: "endeg-dev",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/endegmisganew/",
	instagram: "https://www.instagram.com/endegmisganew/",
	twitter: "https://twitter.com/yuideg",
	github: "https://github.com/endeg-dev",
	linkedin: "https://www.linkedin.com/in/endeg/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"PROFESSIONAL FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications  in normal and SPA Stacks"
		),
		emoji(
			"⚡ Develop restful api Back end Web Applications"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS "
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "Laravel",
			fontAwesomeClassname: "logos:laravel",
		},
		{
			skillName: "PHP",
			fontAwesomeClassname: "logos:php",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "95", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "97",
	},
	{
		Stack: "Mobile Application Development",
		progressPercentage: "94",
	},
	{
		Stack: "General Programming",
		progressPercentage: "93",
	},
];

export const educationInfo = [
	{
		schoolName: "Tagel General High Scool",
		subHeader: "High School Courses",
		duration: "September 2014 - June 2015",
		desc: "My high school life was memorable",
		descBullets: [
			"At high school I was an outstanding student",
			"I had very strong talent in mathematics and physics",
			"I graduated from the high school excellent grade in Ethiopian General Secondary Education Certificate Examination,EGSECE"
		],
	},
	{
		schoolName: "Tagel Senior and Secondary School ",
		subHeader: "Pre Univeristy Courses",
		duration: "September 2015 - June 2017",
		desc: "My Preparatory school was not forgetable ",
		descBullets: [
			"At preparatory school I was an outstanding student as high school",
			"I had very strong talent in mathematics,physics and Biology",
			"I graduated from the preparatory school with an excellent mark of excllent grae in Ethiopian University Entrance Exam,EUEE"		],
	},
	{
		schoolName: "Addis Ababa University",
		subHeader: "Bachelor of Science in Software Engineering",
		duration: "September 2017 - April 2022",
		desc: "Participated in the development document simailarty checker:",
		descBullets: [
			"The application concludes document similarity checker via ML algorsim",
			"Choosing the appriate ML algorism was the major challenging task and time consuming",
		],
	},

];

export const experience = [
	{
		role: "Back End Web Developer",
		company: "Twof Times Plc",
		companylogo: "/img/icons/common/twof.png",
		date: " July 2021 – Present",
		desc: "At twof times software development company i am very talented and exprienced back end developer",
		descBullets: [
			"I use golang with gin framework to develop qualified and maintaibable rest API",
			"I use different services "
		],
	},
	{
		role: "Front-End Developer",
		company: "Techno Software Solution",
		companylogo: "/img/icons/common/airbnbLogo.png",
		date: "May 2018 – March 2021",
		desc: "I was professional front end web developer with the help of reat framework in redux and react-query state management ",
		descBullets: [
			"I developed appllication in vue js ",
			"I had used graphql vuex vuetify  and other additional frameworks",
			"Apollo client with  hasura "
		],
	},
	{
		role: "Software Engineer Intern",
		company: "Twof Times Plc",
		companylogo: "/img/icons/common/twof.png",
		date: "April 2021 – July 2021",
		desc: " At this company in the internship progrma I have done my best nnd put my own effort.",
		descBullets: [
			"I was front end developer using react js in react query state management ",
			"I was back end web derveloper partialy at this internship program"
		]
	},
];

export const projects = [
	{
		name: "Inventory API",
		desc: "Inventory APi is A rest api developed in the fastest programmming language called Golang",
		github: "https://github.com/endeg-dev/inventory_api",
		link: "https://github.com/endeg-dev/inventory_api",
	},
	{
		name: "Chat App API",
		desc: "This an api for multi broad cast and end to end communication restful api developed by golang and websocket framework called melody ",
		github: "https://github.com/endeg-dev/chat-application_backend",
		link: "https://github.com/endeg-dev/chat-application_backend",
	},
	{
		name: "Football Managment System",
		desc: "Football managment system is an appliction for managing footballs it has admin ,coach,player,club and clubadmin.This sytem handles footbal information effectively.",
		github: "https://github.com/endeg-dev/football-management--system--php",
		link: "https://github.com/endeg-dev/football-management--system--php",
	},
	{
		name: "Chat Application ",
		desc: "Chat app is a front end responsive application developed  react js with antd library..",
		github: "https://github.com/endeg-dev/chat_app",
		link: "https://github.com/endeg-dev/chat_app",
	},
];

export const feedbacks = [
	{
		name: "Henock Mulugeta,Front End Developer",
		feedback:
			"I have seen this portifolio website! It looks professional and very easy to navigate developers information easily. Our experience with hiring software developer is very difficult  select which developer is best fit for the work that i have but if developers provide such a like brief description and easily accessible developer work and exprience description portifolio, Hiring managers work become very easy.",
	},
	{
		name: "Kirubel A ,Devops",
		feedback:
			"The website is very nice, everything was perfectly made as what a software developer should show for job bid need. It sounds good good work.",
	},
];
