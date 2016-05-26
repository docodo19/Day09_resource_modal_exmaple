namespace MyApp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor(movieService:MyApp.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }



    export class AboutController {
        public slides = [
            { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test1", id: 0 },
            { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test2", id: 1 },
            { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test3", id: 2 }];
        public myInterval = 1000;
        public noWrapSlides = false;
        public active = 0;
        constructor() {
            //$scope.slides = [
            //    { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test1", id: 1 },
            //    { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test2", id: 2 },
            //    { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test3", id: 3 }];
            //$scope.myInterval = 5000;
            //$scope.noWrapSlides = false;
            //$scope.active = 0;
            //var slides = $scope.slides = [
            //    { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test1", id: 0 },
            //    { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test2", id: 1 },
            //    { image: "http://admin.utep.edu/Portals/1697/images/wide1.jpg", text: "test3", id: 2 }];
            //var currIndex = 3;

            //$scope.addSlide = function () {
            //    var newWidth = 600 + slides.length + 1;
            //    slides.push({
            //        image: 'http://lorempixel.com/' + newWidth + '/300',
            //        text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
            //        id: currIndex++
            //    });
            //};

            //$scope.randomize = function () {
            //    var indexes = generateIndexesArray();
            //    assignNewIndexesToSlides(indexes);
            //};

            //for (var i = 0; i < 4; i++) {
            //    $scope.addSlide();
            //}

            // Randomize logic below

            //function assignNewIndexesToSlides(indexes) {
            //    for (var i = 0, l = slides.length; i < l; i++) {
            //        slides[i].id = indexes.pop();
            //    }
            //}

            //function generateIndexesArray() {
            //    var indexes = [];
            //    for (var i = 0; i < currIndex; ++i) {
            //        indexes[i] = i;
            //    }
            //    return shuffle(indexes);
            //}

            // http://stackoverflow.com/questions/962802#962890
            //function shuffle(array) {
            //    var tmp, current, top = array.length;

            //    if (top) {
            //        while (--top) {
            //            current = Math.floor(Math.random() * (top + 1));
            //            tmp = array[current];
            //            array[current] = array[top];
            //            array[top] = tmp;
            //        }
            //    }

            //    return array;
            //}
        }
    }

}
