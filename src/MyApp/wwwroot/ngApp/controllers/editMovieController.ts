namespace MyApp.Controllers {

    export class EditMovieController {
        public movieToEdit;
        private movieId;

        constructor(
            private movieServices: MyApp.Services.MovieServices,
            $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.movieId = $stateParams['id'];
            this.movieToEdit = this.movieServices.getMovie(this.movieId);
        }

        saveMovie() {
            this.movieServices.createMovie(this.movieToEdit).then(() => {
                this.$state.go('movies');
            });
        }
        cancel() {
            this.$state.go('movies');
        }
    }
}