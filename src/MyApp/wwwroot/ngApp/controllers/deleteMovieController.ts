namespace MyApp.Controllers {

    export class DeleteMovieController {
        public movieToDelete;
        private movieId

        constructor(
            private movieServices: MyApp.Services.MovieServices,
            private $state: ng.ui.IStateService,
            $stateParams: ng.ui.IStateParamsService) {

            this.movieId = $stateParams['id'];
            this.movieToDelete = this.movieServices.getMovie(this.movieId);
        }

        deleteMovie() {
            this.movieServices.deleteMovie(this.movieId)
                .then(() => {
                    this.$state.go('movies');
                })
                .catch(() => {
                    console.error('was not able to perform delete movie');
                });
        }

        cancel() {
            this.$state.go('movies');
        }
    }


}