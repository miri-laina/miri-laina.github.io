export interface Project {
	slug: string;
	iconImage?: string;
	isSideProject: boolean;
	title: string;
	description: string;
	intro?: string;
	dateRange?: string;
	industry?: string;
	services?: string;
	link?: {text: string, url: string};
	coverImage?: string;
	heroImage?: string;
	contentImages?: string[];
	learnings?: string;
	learningsImage?: string;
	overview?: string;
	role?: string;
	challenge?: string;
	solution?: string;
	dataCards?: Array<{percentage: string, label: string}>;
	galleryImages?: string[];
	galleryTitle?: string;
	tags?: string[];
	type?: string;
}

export const projects: Project[] = [
	{
		slug: 'movistar-prosegur-alarms',
		iconImage: '/projects/prosegur/prosegur-icon.svg',
		isSideProject: false,
		title: 'Movistar Prosegur Alarms',
		description: 'In Movistar Prosegur Alarms I colaborate on the **evolution of the company\'s digital ecosystem**, working on the continuous improvement of the customer experience across key touchpoints.\n\nMy work focused on **designing scalable solutions, aligned with business goals** and aimed at increasing user autonomy, improving product understanding, and driving overall user satisfaction.\n\n**+350K B2C and B2B customers**',
		intro: 'Designs end to end products, turning user insights and data into seamless experiences with long term impact.',
		dateRange: '2023 - Present',
		industry: 'Security',
		services: 'UX/UI · Communication strategy · Data driven',
		link: {text: 'App in market', url: 'https://play.google.com/store/apps/details?id=com.prosegur.alarmas'},
		coverImage: '/projects/prosegur/mpa-cover.svg',
		heroImage: '/projects/prosegur/mpa.svg',
		contentImages: ['/projects/prosegur/mpa-content-1.svg', '/projects/prosegur/mpa-content-2.svg'],
		learningsImage: '/projects/prosegur/mpa-learnings.svg',
		overview: 'The existing experience made it difficult to access the most relevant features, increasing dependency on the call center and limiting user autonomy. This had a direct impact on satisfaction, app usage, and the operational load of customer support.\n\nThe goal of this project was to **redefine the experience to enable self management, improve the visibility of key features**, and deliver a clearer, more accessible, and scalable navigation.',
		role: 'Responsible for user research processes, definition of flows and information architecture, and presenting proposals to stakeholders. Worked closely with Product Owners, development, and business teams to ensure a focused, consistent, and scalable implementation.',
		challenge: 'Reduce product complexity and the learning curve, **improving the understanding of functionalities and increasing user autonomy**, while maintaining consistency, accessibility, and minimal cognitive load.',
		solution: 'Through analysis of app usage data and insights gathered from user research, we redefined the information architecture and navigation model.\n\nWe designed a **clearer and more structured experience, focused on surfacing the product\'s key functionalities**, providing access to information, and reducing friction in the most frequent tasks ultimately decreasing dependency on the call center.',
		learnings: 'This project reinforced **the importance of designing scalable architectures from early stages**, especially in products with growth and integration plans.\n\nContinuous user research proved essential to prioritize strategic decisions, reduce cognitive load, and encourage recurrent app usage.\n\nIt also **highlighted the value of close cross disciplinary collaboration to deliver consistent, high impact experiences.**',
		dataCards: [
			{ percentage: '10%', label: 'Call reduction' },
			{ percentage: '+3pts', label: 'NPS' },
			{ percentage: '20%', label: 'Load reduction' },
			{ percentage: '-5%', label: 'Time per session' }
		],
		tags: ['UX/UI', 'Performance analysis', 'Product strategy', 'Team management', 'Benchmarking', 'Communication strategy', 'Mentoring', 'Data driven', 'Design System'],
		type: 'App'
	},
	{
		slug: 'selectra',
		iconImage: '/projects/selectra/selectra-icon.svg',
		isSideProject: false,
		title: 'Selectra',
		description: 'Selectra is an international company specialized in the comparison and contracting of essential services such as energy, telecommunications, and insurance.\n\nDuring my time at the company, **I worked across different verticals, from optimizing lead acquisition funnels in telco to designing My Selectra**, a web app focused on customer retention in the energy sector.\n\n**+500K B2C/B2B customers**',
		intro: 'Collaboration throughout the entire product design cycle across multiple verticals, from lead acquisition to customer retention.',
		dateRange: '2023',
		industry: 'Energy & Telco',
		services: 'UX/UI · Performance analysis · Data driven',
		link: {text: 'Selectra', url: 'https://selectra.es'},
		coverImage: '/projects/selectra/selectra-cover.svg',
		heroImage: '/projects/selectra/selectra.svg',
		contentImages: ['/projects/selectra/selectra-content-1.svg', '/projects/selectra/selectra-content-2.svg'],
		learningsImage: '/projects/selectra/selectra-learnings.svg',
		overview: 'Selectra operates as an intermediary between users and utility providers in a market characterized by high churn, where customers frequently switch providers in search of better deals.\n\nMy Selectra was conceived as a loyalty platform that centralizes users\' energy information, providing visibility into consumption, costs, historical comparisons, and energy saving recommendations, positioning Selectra as a long term energy advisor.',
		role: 'As a Product Designer, I contributed to **defining the end to end product experience**, working closely with PM\'s, developers, and business stakeholders.\n\nFocused on designing key user flows, information architecture, and UI for a data heavy web app, **translating business goals such** as retention and churn reduction **into user centered, scalable solutions.**',
		challenge: '**Design a platform that delivered real value in a high churn environment**, where energy information is complex, opaque, and difficult for most users to understand.  Simplify this complexity, build trust, and turn Selectra into a recurring point of reference rather than a one off intermediary.',
		solution: 'The solution was to **conceive My Selectra as a centralized energy management hub**, offering a clear, educational, and decision-oriented experience.\n\nUnified dashboard provided visibility into active contracts, monthly spend, and consumption trends, supported by simplified data visualizations and personalized savings tips. The modular design approach ensured scalability and prepared the product for future growth.',
		learnings: 'This project reinforced the idea that loyalty is driven by real utility. I learned **how to simplify complex information without losing meaning** and to operate at the intersection of business, technology, and user needs, making design decisions aligned with a long-term product vision.',
		dataCards: [
			{ percentage: '78%', label: 'Loyalty' },
			{ percentage: '+6k', label: 'Daily users' },
			{ percentage: '+180k', label: 'Monthly users' }
		],
		tags: ['UX/UI','Performance analysis','Communication strategy','Testing','Design System'],
		type: 'Webapp'
	},
	{
		slug: 'cupra-seat',
		iconImage: '/projects/cupra/cupra-icon.svg',
		isSideProject: false,
		title: 'Cupra & SEAT',
		description: 'CUPRA and SEAT are part of the Volkswagen Group, developing embedded digital products for vehicles where hardware, software, and user experience converge within a highly regulated environment.\n\nI worked on the **design of in car infotainment radios for models launching from 2024 onwards, contributing to production ready interfaces** with direct impact on vehicles shipped to market.\n\n**~439,500 vehicles sold anually**',
		intro: 'Designed systems for next generation radios, creating scalable design foundations and visual languages.',
		dateRange: '2022',
		industry: 'Automative',
		services: 'UI · Design system',
		link: {text: 'Cupra · SEAT', url: 'https://www.cupra.com'},
		coverImage: '/projects/cupra/cupra-cover.svg',
		heroImage: '/projects/cupra/cupra.svg',
		contentImages: ['/projects/cupra/cupra-content-1.svg', '/projects/cupra/cupra-content-2.svg'],
		learningsImage: '/projects/cupra/cupra-learnings.gif',
		overview: 'This project **focused on the design and scalability of an automotive infotainment design system**. The system needed to support multiple car models, screen sizes, and interaction patterns while ensuring consistency, usability, and efficient collaboration across teams.\n\nThe work **required building a system capable of scaling within a large enterprise organization and under real world product constraints**, including embedded performance limitations and safety regulations.',
		role: 'I acted as a **Product Designer focused on interface design and design system evolution, collaborating closely with UX, engineering, and hardware teams**.\n\n• Designing scalable UI solutions for in-car infotainment systems\n• Defining reusable components, layouts, and interaction patterns\n• Ensuring consistency, usability, and implementation readiness across products\n• Aligning design decisions with technical and regulatory constraints',
		challenge: 'Designing an in car infotainment system at an advanced product stage required balancing scalability across multiple vehicle models and screen configurations with strict consistency, performance, and safety constraints, while making decisions that directly impacted vehicles shipped to market.',
		solution: 'We approached the problem with a system first mindset, prioritizing scalability and reuse over isolated, one off solutions.\n\nI contributed to the evolution of a dedicated in car design system, defining reusable components, layouts, and interaction patterns optimized for automotive contexts. This enabled teams to design and implement screens more efficiently while maintaining consistency across products, brands, and vehicle lines.',
		learnings: 'Collaborating at scale in a large organization taught me the importance of clear communication, thorough documentation, and shared frameworks.\n\nI learned that a design system is not just a visual toolkit but a strategic asset that ensures scalability and consistency across products. Balancing brand identity, technical feasibility, and user experience is essential, and early alignment with cross functional teams helps prevent downstream redesigns and accelerates the delivery of high quality interfaces.',
		dataCards: [
			{ percentage: '+15', label: 'Reusable components' },
			{ percentage: '100%', label: 'Screens standardized' },
			{ percentage: '', label: 'High visual & UX consistency' }
		],
		tags: ['UX/UI','Team management','Mentoring','Design System'],
		type: 'Radio'
	},
	{
		slug: 'imagins-ai',
		iconImage: '/projects/imagins/imagins-icon.svg',
		isSideProject: true,
		title: 'Imagins',
		description: 'Imagins is an AI-powered platform that generates personalized children\'s stories with illustrations. Its mission is to foster co creation and quality time between parents and children, teachers and students and peers.\n\nI co-founded the project as CPO, leading product strategy, design, and testing the coherence of AI generated stories during the early refinement phase.',
		intro: 'AI story generator, create highly customizable illustrated books with an image and text model.',
		dateRange: '2025',
		industry: 'Artificial intelligence',
		services: 'UX/UI · Product strategy · CPO',
		link: {text: 'Imagins AI', url: 'https://imagins.ai'},
		coverImage: '/projects/imagins/imagins-cover.svg',
		heroImage: '/projects/imagins/imagins.svg',
		contentImages: ['/projects/imagins/imagins-content-1.svg', '/projects/imagins/imagins-content-2.svg'],
		learningsImage: '/projects/imagins/imagins-learnings.svg',
		overview: 'Imagins allows users to create stories from a brief prompt, customize characters, edit illustrations and text, and design covers. The project combines AI technology with creative freedom, offering a blank canvas for users to co create narratives.\n\nMy work focused on product design, strategy, and ensuring a seamless, intuitive experience in a rapidly evolving AI landscape.',
		role: 'As CPO and product designer of Imagins, **I led the product\'s vision and strategy**, shaping intuitive user flows and designing interfaces for story creation, character customization, and illustration editing.\n\nI collaborated closely with the founding team to r**efine the MVP, ensuring that AI generated content was coherent, engaging, and aligned with our user centric goals**. My work blended product strategy with hands on design, focusing on delivering a seamless and delightful experience for co-creative storytelling.',
		challenge: '**The main challenge of Imagins was building a startup from scratch in a fast moving AI landscape, with no fixed capital and limited time.**\n\nI had to navigate the uncertainties of emerging technology while balancing creative vision with technical feasibility. Additionally, collaborating with friends and family added a personal layer of complexity, making it essential to align expectations, iterate rapidly, and maintain focus on creating a product that was both usable and meaningful for children, parents, and educators.',
		solution: 'I designed a flexible and modular interface that allowed users to generate, customize, and refine both stories and illustrations seamlessly. **Providing clear workflows that guided users from a simple prompt to fully personalized stories**, ensuring an intuitive experience despite the complexity of AI generated content.\n\nBy iterating closely with the founding team, I refined the MVP to balance creativity, usability, and technical feasibility, turning a blank canvas into a scalable product that encourages collaboration and imaginative storytelling.',
		learnings: 'Building Imagins taught me **how to navigate entrepreneurship in an emerging AI market**, balancing technical possibilities with user needs.\n\n**I learned to iterate rapidly with minimal resources, align creative vision with technical constraints**, and manage product development in a collaborative, family and friends startup. It reinforced the value of strategy, user centric design, and adaptability when creating a product from a blank canvas.',
		dataCards: [
			{ percentage: '+210', label: 'Views per month' },
			{ percentage: '+23', label: 'Countries' },
			{ percentage: '+2k', label: 'Stories generated' },
			{ percentage: '+620', label: 'Sign ups' }
		],
		galleryImages: ['/placeholder-gallery-1.jpg', '/placeholder-gallery-2.jpg', '/placeholder-gallery-3.jpg', '/placeholder-gallery-4.jpg'],
		galleryTitle: 'Interiorism',
		type: 'Webapp'
	},
	{
		slug: 'roam-rider',
		iconImage: '/projects/roamrider/roamrider-icon.svg',
		isSideProject: true,
		title: 'Roamrider',
		description: 'Is a conceptual travel planning platform **designed to centralize all aspects of trip organization in a single app**. Unlike existing fragmented tools for booking flights, accommodations, vehicle rentals, and itinerary planning, Roamrider aims to provide a seamless experience where users can set preferences, manage a budget, compare options, and organize their entire trip from one place.\n\nI conceived and designed the project independently, **focusing on identifying sector gaps and opportunities** and developing the first design concepts.',
		intro: 'Designed to give riders complete visibility and control over their journey  in one seamless experience.',
		dateRange: '2024',
		industry: 'Security',
		services: 'UX/UI · Communication strategy · Data driven',
		coverImage: '/projects/roamrider/roamrider-cover.svg',
		heroImage: '/projects/roamrider/roamrider.svg',
		contentImages: ['/projects/roamrider/roamrider-content-1.svg', '/projects/roamrider/roamrider-content-2.svg'],
		learningsImage: '/projects/roamrider/roamrider-learnings.svg',
		overview: 'Was born **from the need to simplify travel planning by consolidating multiple tools into a single, user friendly platform**. My work focused on research and discovery to understand the pain points of travelers, defining user flows and a basic UI kit, designing key screens, and creating a pitch deck to communicate the vision.\n\nAlthough the project is currently conceptual, it establishes a foundation for future development and testing.',
		role: '**I led the entire project from ideation to visual concept.** I conducted market and user research to identify gaps in existing travel tools, designed a basic UI kit and core screens. This role combined product strategy, UX/UI design, and market analysis, allowing me to independently **shape the vision of a centralized travel planning solution.**',
		challenge: 'Approaching a fragmented travel sector as a solo founder presented unique challenges: **identifying meaningful gaps, conceptualizing a seamless user experience, and creating tangible designs** without a technical team or resources. The goal was to validate ideas and communicate a clear vision through design and storytelling rather than a working product.',
		solution: 'I developed a scalable UI kit, wireframes, and key screens demonstrating the main functionalities: **personalized onboarding, budget management, flight and accommodation comparison, itinerary planning, vehicle rentals, and dining recommendations**. A pitch deck complemented the designs, clearly presenting the concept, business opportunity, and user experience.',
		learnings: 'This project reinforced the power of independent discovery and conceptual design. **I honed skills in identifying user needs, prioritizing features, and translating abstract ideas into tangible** visual concepts. It highlighted how thoughtful product strategy and UX design can communicate a vision effectively, even before development.',
		dataCards: [
			{ percentage: 'Centralized', label: 'platform' },
			{ percentage: 'Gap', label: 'Identification' },
			{ percentage: 'Automation', label: 'Potential' }
		],
		type: 'App'
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find(project => project.slug === slug);
}

