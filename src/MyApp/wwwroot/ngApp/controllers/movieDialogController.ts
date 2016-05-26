namespace MyApp.Controllers {

    export class MovieDialogController {
        public movie;

        constructor(
            private movieIdFrom,
            private movieServices: MyApp.Services.MovieServices,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance) {

            this.movie = this.movieServices.getMovie(this.movieIdFrom);
        }

        close() {
            this.$uibModalInstance.close();
        }

    }

}