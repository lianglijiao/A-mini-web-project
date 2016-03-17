/**
 * Created by LIANGLijiao on 15/03/16.
 */
app.controller("myShopController", function ($scope) {
    $scope.shopsList = shopsList;

});


app.controller("bookController", function ($scope, $routeParams) {
    $scope.booksList = booksList;
    $scope.shopId = $routeParams.shopId

});


app.controller("payController", function ($scope, $routeParams) {

    var books = [];
    $scope.shop = shopsList[$routeParams.shopId - 1];
    var total = 0;
    $.each(booksList, function (i, e) {
        total += parseFloat(e.prix) * e.quantity;
        if (e.quantity != 0) {
            books.push(e);
        }
    });
    $scope.total = total;
    $scope.books = books;
    console.log("total:"+$scope.total);


    $scope.euro = parseFloat("14,90");
    console.log("euro:"+ $scope.euro);
});