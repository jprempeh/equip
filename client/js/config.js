function config($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');

	$stateProvider

		.state('login', {
			url:'/login',
			templateUrl: '/login.html',
			controller: 'LoginCtrl as userLogin',
			data: { pageTitle: 'login' }
		})
		.state('register', {
			url:'/register',
			templateUrl: '/register.html',
			controller: 'RegisterCtrl as userRegister',
			data: { pageTitle: 'register' }
		})
		.state('index', {
			abstract: true,
			url: '/index',
			templateUrl: 'components/common/content.html',
			authenticate: true
		})
		.state('index.home', {
			url: '',
			templateUrl: 'components/home/home.html',
			controller: 'HomeCtrl as home',
			data: { pageTitle: 'Home' },
			authenticate: true
		})
		.state('index.calendar', {
			url: '/calendar',
			templateUrl: 'components/calendar/calendar.html',
			controller: 'CalendarCtrl as calendar',
			data: { pageTitle: 'Calendar' },
			authenticate: true
		})
		.state('index.chat', {
			url: '/chat',
			templateUrl: 'components/chat/chat.html',
			controller: "ChatCtrl as chat",
			data: { pageTitle: 'Chat' },
			authenticate: true
		})
		.state('index.projects', {
			url: '/projects',
			templateUrl: 'components/projects/projects.html',
			controller: "ProjectController as projectCtrl",
			data: { pageTitle: 'Projects' },
			authenticate: true
		})
		.state('index.team', {
			url: '/team',
			templateUrl: 'components/team/team.html',
			data: { pageTitle: 'Team Directory' },
			authenticate: true
		})
		.state('index.documents', {
			url: '/documents',
			templateUrl: 'components/documents/documents.html',
			data: { pageTitle: 'Documents' },
			authenticate: true
		})
		.state('index.texteditor', {
			url: '/texteditor',
			templateUrl: 'components/texteditor/texteditor.html',
			data: { pageTitle: 'Text Editor' },
			authenticate: true
		})
		.state('index.settings', {
			url: '/settings',
			controller: 'SettingsCtrl as settings',
			templateUrl: 'components/settings/settings.html',
			data: { pageTitle: 'Settings'},
			authenticate: true
		})
}
angular
	.module('equip')
	// constant variables are available throughout app
  .constant('refUrl', 'https://mksequip.firebaseIO.com')
	.config(config)
	.run(function($rootScope, $state, $location, User) {
		$rootScope.$state = $state;
 		$rootScope.$on('$stateChangeStart', function (evt, next, current) {
   		if (next && next.authenticate && !User.isAuth()) {
 				evt.preventDefault();
 				$rootScope.$evalAsync(function() {
 				  $location.path('/login');
 				});
   		}
 		});
	});


