namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('movies', {
                url: '/movies',
                templateUrl: '/ngApp/views/movieList.html',
                controller: MyApp.Controllers.MovieListController,
                controllerAs: 'controller'
            })
            .state('add', {
                url: '/movies/add',
                templateUrl: '/ngApp/views/add.html',
                controller: MyApp.Controllers.AddMovieController,
                controllerAs: 'controller'
            })
            .state('delete', {
                url: '/movies/delete/:id',
                templateUrl: '/ngApp/views/delete.html',
                controller: MyApp.Controllers.DeleteMovieController,
                controllerAs: 'controller'
            })
            .state('edit', {
                url: '/movies/edit/:id',
                templateUrl: '/ngApp/views/edit.html',
                controller: MyApp.Controllers.EditMovieController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    

}
