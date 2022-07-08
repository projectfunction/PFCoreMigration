
export function getByShortcode(shortcode:string) {
	return LocalCourses.filter(course => course.shortCode === shortcode);
}

export const LocalCourses = [
	// {
	// 	"name": "Intro to Next.js",
	// 	"isOnline": false,
	// 	"sessionCount": 9,
	// 	"startDate": "2022-05-12T19:00:00.000Z",
	// 	"endDate": "2022-07-30T19:00:00.000Z",
	// 	"categories": [
	// 		"Web Dev",
	// 		"FrontEnd"
	// 	],
	// 	"instructors": [
	// 		{
	// 			"firstName": "Rizwana",
	// 			"lastName": "Khan",
	// 			"username": "rizbizkits",
	// 			"profilePic": "https://campus.projectfunction.io/public/res/profile/rizbizkits.jpeg"
	// 		}
	// 	],
	// 	"leadInstructors": [
	// 		{
	// 			"firstName": "Rizwana",
	// 			"lastName": "Khan",
	// 			"username": "rizbizkits",
	// 			"profilePic": "https://campus.projectfunction.io/public/res/profile/rizbizkits.jpeg"
	// 		}
	// 	],
	// 	"coverImage": "https://cdn.auth0.com/blog/logos/nextjs-logo.png",
	// 	"shortCode": "nx22jKL0le11",
	// 	"capacity": 20,
	// 	"isOpen": false,
	// 	"atCapacity": false,
	// 	"hasEnded": true
	// },
	{
		"name": "Intro to Web Dev",
		"isOnline": false,
		"sessionCount": 9,
		"startDate": "2022-04-12T19:00:00.000Z",
		"endDate": "2022-06-14T21:00:00.000Z",
		"categories": [
			"Web Dev",
			"FrontEnd",
			"Beginner"
		],
		"instructors": [
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Rizwana",
				"lastName": "Khan",
				"username": "rizbizkits",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/rizbizkits.jpeg"
			}
		],
		"coverImage": "//projectfunction.io/public/core/images/notes/pf-wave7-announce.png",
		"shortCode": "wdb22022ts40",
		"capacity": 15,
		"isOpen": false,
		"atCapacity": false,
		"hasEnded": false
	},
	{
		"name": "Intro into VueJS",
		"isOnline": true,
		"sessionCount": 5,
		"startDate": "2021-10-19T00:36:31.000Z",
		"endDate": "2021-12-14T21:30:00.000Z",
		"categories": [
			"Web Dev",
			"FrontEnd"
		],
		"instructors": [
			{
				"firstName": "Maryanne",
				"lastName": "Parkinson",
				"username": "MP97",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/mp97.jpeg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Maryanne",
				"lastName": "Parkinson",
				"username": "MP97",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/mp97.jpeg"
			}
		],
		"coverImage": "/public/core/images/pf_fallback.png",
		"shortCode": "jH56xi8AbUy2",
		"capacity": 12,
		"isOpen": false,
		"atCapacity": false,
		"hasEnded": true
	},
	{
		"name": "Intro to .NET with C#",
		"isOnline": true,
		"sessionCount": 9,
		"startDate": "2021-08-03T19:00:00.000Z",
		"endDate": "2021-09-28T21:00:00.000Z",
		"categories": [
			"Web Dev",
			" BackEnd",
			" .NET"
		],
		"instructors": [
			{
				"firstName": "Jamie",
				"lastName": "Saunders",
				"username": "JamieSaunders",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/JamieSaunders.jpeg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Jamie",
				"lastName": "Saunders",
				"username": "JamieSaunders",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/JamieSaunders.jpeg"
			}
		],
		"coverImage": "/public/core/images/pf_intro_to_dotnet.png",
		"shortCode": "wdN2021jmeW6",
		"capacity": 0,
		"isOpen": false,
		"atCapacity": true,
		"hasEnded": false
	},
	{
		"name": "Programming Fundamentals",
		"isOnline": true,
		"sessionCount": 1,
		"startDate": "2021-07-03T10:00:00.000Z",
		"endDate": "2021-07-03T17:00:00.000Z",
		"categories": [
			"Beginner",
			" Web Dev"
		],
		"instructors": [
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"coverImage": "/public/core/images/pf_programming_fundamentals.png",
		"shortCode": "wdjs2021ts40",
		"capacity": 25,
		"isOpen": false,
		"atCapacity": false,
		"hasEnded": true
	},
	{
		"name": "Front End Fundamentals",
		"isOnline": false,
		"sessionCount": 9,
		"startDate": "2021-06-01T00:36:31.000Z",
		"endDate": "2021-08-03T21:30:00.000Z",
		"categories": [
			"Web Dev",
			"FrontEnd"
		],
		"instructors": [
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"coverImage": "/public/core/images/pf_fallback.png",
		"shortCode": "k2D3c21UUzy6",
		"capacity": 25,
		"isOpen": false,
		"atCapacity": false,
		"hasEnded": true
	},
	{
		"name": "Intro to Game Dev with Unity",
		"isOnline": true,
		"sessionCount": 9,
		"startDate": "2021-03-02T00:00:00.000Z",
		"endDate": "2021-04-27T00:00:00.000Z",
		"categories": [
			"Game Dev"
		],
		"instructors": [
			{
				"firstName": "Jamie",
				"lastName": "Curran",
				"username": "themolian",
				"profilePic": "https://www.gravatar.com/avatar/2752eeb1bafbce3fd489c7f76fb66b0d?s=200&d=https://projectfunction.io/public/res/avatar/thumb/Avatar_Colored_112.jpg"
			},
			{
				"firstName": "Michael ",
				"lastName": "Carstairs ",
				"username": "Michael",
				"profilePic": "https://www.gravatar.com/avatar/c6ea064d58c36645af897c340500c88d?s=200&d=https://projectfunction.io/public/res/avatar/thumb/Avatar_Colored_116.jpg"
			},
			{
				"firstName": "Claire",
				"lastName": "Sherry",
				"username": "clairesherry",
				"profilePic": "https://www.gravatar.com/avatar/5d2f2c448c3067224e7ff3bceff8bb1f?s=200&d=https://projectfunction.io/public/res/avatar/thumb/Avatar_Colored_115.jpg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Jamie",
				"lastName": "Curran",
				"username": "themolian",
				"profilePic": "https://www.gravatar.com/avatar/2752eeb1bafbce3fd489c7f76fb66b0d?s=200&d=https://projectfunction.io/public/res/avatar/thumb/Avatar_Colored_112.jpg"
			}
		],
		"coverImage": "/public/core/images/game-dev-heading.png",
		"shortCode": "rrtGJAd2ae1e",
		"capacity": 25,
		"isOpen": false,
		"atCapacity": false,
		"hasEnded": true
	},
	{
		"name": "Intro to Web Dev",
		"isOnline": false,
		"sessionCount": 9,
		"startDate": "2019-11-05T12:36:31.000Z",
		"endDate": "2020-02-04T12:36:31.000Z",
		"categories": [
			"Web Dev"
		],
		"instructors": [
			{
				"firstName": "Rizwana",
				"lastName": "Khan",
				"username": "rizbizkits",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/rizbizkits.jpeg"
			},
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			},
			{
				"firstName": "Bal",
				"lastName": "Hayre",
				"username": "BalHayre",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_64.jpg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Rizwana",
				"lastName": "Khan",
				"username": "rizbizkits",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/rizbizkits.jpeg"
			},
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"coverImage": "/public/core/images/pic3.jpg",
		"shortCode": "BqAGbp2lEUzi",
		"capacity": 45,
		"isOpen": false,
		"atCapacity": true,
		"hasEnded": true
	},
	{
		"name": "Web Dev from Scratch",
		"isOnline": false,
		"sessionCount": 6,
		"startDate": "2019-06-10T19:35:45.000Z",
		"endDate": "2019-06-04T19:35:45.000Z",
		"categories": [
			"Web Dev"
		],
		"instructors": [
			{
				"firstName": "Rizwana",
				"lastName": "Khan",
				"username": "rizbizkits",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/rizbizkits.jpeg"
			},
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"coverImage": "/public/core/images/pf_fallback.png",
		"shortCode": "fJ3LSIfr7ii2",
		"capacity": 28,
		"isOpen": false,
		"atCapacity": false,
		"hasEnded": true
	},
	{
		"name": "Workings of the Web",
		"isOnline": false,
		"sessionCount": 6,
		"startDate": "2019-01-22T03:37:52.000Z",
		"endDate": "2019-03-26T03:31:58.000Z",
		"categories": [
			"Web Dev",
			"Full-stack"
		],
		"instructors": [
			{
				"firstName": "Rizwana",
				"lastName": "Khan",
				"username": "rizbizkits",
				"profilePic": "https://campus.projectfunction.io/public/res/profile/rizbizkits.jpeg"
			},
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"leadInstructors": [
			{
				"firstName": "Daryl",
				"lastName": "Cecile",
				"username": "dar",
				"profilePic": "/public/res/avatar/thumb/Avatar_Colored_101.jpg"
			}
		],
		"coverImage": "/public/core/images/pf_fallback.png",
		"shortCode": "Kvl0SMynsJtD",
		"capacity": 20,
		"isOpen": false,
		"atCapacity": false,
		"hasEnded": true
	}
];