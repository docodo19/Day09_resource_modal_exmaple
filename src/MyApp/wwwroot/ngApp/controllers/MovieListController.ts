namespace MyApp.Controllers {

    export class MovieListController {
        // place that will hold a list of movies that will be exposed to the view
        public movies
        
        constructor(
            private movieServices: MyApp.Services.MovieServices,
            private $uibModal: ng.ui.bootstrap.IModalService) {
            //this.movies = this.movieServices.getMovies();
            this.getMovies();
        }

        getMovies() {
            this.movies = this.movieServices.getMovies();
        }

        showDetails(movieId) {
            this.$uibModal.open({
                templateUrl: '/ngApp/views/movieDialog.html',
                controller: MyApp.Controllers.MovieDialogController,
                controllerAs: 'controller',
                resolve: {
                    movieIdFrom: ()=> movieId
                },
                size: 'sm'
            });
        }
    }

}