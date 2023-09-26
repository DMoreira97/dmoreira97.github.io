// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	"wine-ml-research":
	{
		ProjectHeader: {
			title: 'Wine Price and Quality Prediction using Machine Learning',
			publishDate: 'Sep 26, 2023',
			tags: 'Machine Learning / ML / Data Science / DS / Regression',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'Academic Research',
			CompanyInfo: [
				{
					id: 1,
					title: 'Developed with Master\'s Supervisors'
				},
				{
					id: 2,
					title: 'Data & Code: Undisclosed'
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'This project had three primary objectives aimed at assisting wine owners, whether they are consumers or producers, in obtaining reliable indicators for the price and quality of a specific wine.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Reverse Engineering',
						'Web Scraping',
						'Data Science',
						'Machine Learning',
						'Regression',
						'Pandas',
						'Numpy',
						'Sckit-Learn',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'The focal point of this project was the acquisition of a comprehensive wine dataset, a task achieved through an intricate process of web scraping from a prominent online wine platform using reverse engineering techniques and the platform\'s API. The dataset obtained was vast, comprising nearly half a million records and a staggering 250 separate features. Managing this extensive dataset required meticulous data preprocessing and cleansing to prepare it for further analysis.',
				},
				{
					id: 2,
					details:
						'Following data preprocessing, an in-depth exploratory data analysis (EDA) was conducted to gain valuable insights into the wine dataset. One of the critical steps involved determining the optimal number of neighbors (k) for K-Nearest Neighbors (KNN) imputation, a technique used to address missing data. Additionally, innovative data engineering techniques were employed to create new, comprehensive features that enhanced the dataset\'s richness.',
				},
				{
					id: 3,
					details:
						'To streamline the modeling process, rational feature selection was applied, resulting in the creation of six distinct datasets. These datasets served as the foundation for training and evaluating various machine learning models. Rigorous model evaluation and fine-tuning ensued, with a focus on regression techniques. This phase included a wide array of experiments, such as feature filtering and clustering, to optimize predictive performance.',
				},
				{
					id: 4,
					details:
						'Ultimately, the culmination of this extensive data science journey led to the presentation of the trained models to professionals within the wine industry to assess their practical utility. However, it\'s worth noting that, due to data ownership constraints, the project\'s code and dataset cannot be disclosed for business applications. Nevertheless, the project\'s outcomes and methodologies have contributed significantly to the field of wine analytics and data-driven decision-making in the wine industry.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Website',
					url: 'https://dmoreira97.github.io/',
				},
				{
					id: 2,
					name: 'GitHub',
					url: 'https://github.com/DMoreira97',
				},
				{
					id: 3,
					name: 'LinkedIn',
					url: 'https://www.linkedin.com/in/diogom-o-moreira/',
				}
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
					ref: "wine-ml-research"
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
					ref: "wine-ml-research2"
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
					ref: "wine-ml-research2"
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
					ref: "wine-ml-research2"
				},
			],
		},
	},
	"big-data-migration":
	{
		ProjectHeader: {
			title: 'Big Data - Hadoop Cluster Migration to Cloud (AWS)',
			publishDate: 'Sep 26, 2023',
			tags: 'Data Engineering / Big Data / Data Science / DS / AWS / Migration',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ClientHeading: 'Developed @ Deloitte',
			CompanyInfo: [
				{
					id: 1,
					title: 'Telecom Industry'
				}
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'This project had three primary objectives aimed at assisting wine owners, whether they are consumers or producers, in obtaining reliable indicators for the price and quality of a specific wine.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Reverse Engineering',
						'Web Scraping',
						'Data Science',
						'Machine Learning',
						'Regression',
						'Pandas',
						'Numpy',
						'Sckit-Learn',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: 1,
					details:
						'The focal point of this project was the acquisition of a comprehensive wine dataset, a task achieved through an intricate process of web scraping from a prominent online wine platform using reverse engineering techniques and the platform\'s API. The dataset obtained was vast, comprising nearly half a million records and a staggering 250 separate features. Managing this extensive dataset required meticulous data preprocessing and cleansing to prepare it for further analysis.',
				},
				{
					id: 2,
					details:
						'Following data preprocessing, an in-depth exploratory data analysis (EDA) was conducted to gain valuable insights into the wine dataset. One of the critical steps involved determining the optimal number of neighbors (k) for K-Nearest Neighbors (KNN) imputation, a technique used to address missing data. Additionally, innovative data engineering techniques were employed to create new, comprehensive features that enhanced the dataset\'s richness.',
				},
				{
					id: 3,
					details:
						'To streamline the modeling process, rational feature selection was applied, resulting in the creation of six distinct datasets. These datasets served as the foundation for training and evaluating various machine learning models. Rigorous model evaluation and fine-tuning ensued, with a focus on regression techniques. This phase included a wide array of experiments, such as feature filtering and clustering, to optimize predictive performance.',
				},
				{
					id: 4,
					details:
						'Ultimately, the culmination of this extensive data science journey led to the presentation of the trained models to professionals within the wine industry to assess their practical utility. However, it\'s worth noting that, due to data ownership constraints, the project\'s code and dataset cannot be disclosed for business applications. Nevertheless, the project\'s outcomes and methodologies have contributed significantly to the field of wine analytics and data-driven decision-making in the wine industry.',
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Website',
					url: 'https://dmoreira97.github.io/',
				},
				{
					id: 2,
					name: 'GitHub',
					url: 'https://github.com/DMoreira97',
				},
				{
					id: 3,
					name: 'LinkedIn',
					url: 'https://www.linkedin.com/in/diogom-o-moreira/',
				}
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: Image4,
					ref: "wine-ml-research"
				},
				{
					id: 2,
					title: 'Web Application',
					img: Image5,
					ref: "wine-ml-research2"
				},
				{
					id: 3,
					title: 'UI Design',
					img: Image6,
					ref: "wine-ml-research2"
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: Image3,
					ref: "wine-ml-research2"
				},
			],
		},
	}
};
