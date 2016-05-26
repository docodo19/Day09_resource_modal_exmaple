namespace MyApp.Controllers {

    export class AddMovieController {
        // this will contain the new movie info that will be created
        public movieToCreate;

        constructor(
            private movieServices: MyApp.Services.MovieServices,
            private $state: ng.ui.IStateService) {
        }

        createMovie() {
            this.movieServices.createMovie(this.movieToCreate)
                .then(() => { // execute this block of code after movie has been saved
                    // navigate to movie state
                    this.$state.go('movies');
                })
                .catch(() => { // execute this block of code if create fails
                    console.error("something went wrong....")
                });
        }

        cancel() {
            this.$state.go('movies');
        }

    }

}