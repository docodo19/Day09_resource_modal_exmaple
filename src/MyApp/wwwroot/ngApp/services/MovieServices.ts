namespace MyApp.Services {

    export class MovieServices {
        // Private field that will contain the resource object that points to /api/movies
        private movieResource;

        constructor($resource:ng.resource.IResourceService) {
            this.movieResource = $resource('/api/movies/:id');
        }

        //CRUD - Create
        createMovie(movieData) {
            return this.movieResource.save(movieData).$promise;
        }

        //CRUD - Read
        getMovies() {  // Get all movies
            return this.movieResource.query();
        }
        getMovie(movieId) {  // Get a single movie
            return this.movieResource.get({ id: movieId });
        }

        //CRUD - Update
            // re-use createMovie() method

        //CRUD - Delete
        deleteMovie(movieId) {
            return this.movieResource.delete({ id: movieId }).$promise;
        }

    }
    angular.module('MyApp').service('movieServices', MovieServices);
}