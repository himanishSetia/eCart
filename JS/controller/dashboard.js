eCart.controller('dashboardController',function($scope){
$scope.cartCount = 0
$scope.products = [{"image":"Images/sofa.png","name":"Sofa","Price":"25000"},{"image":"Images/deodrant.png","name":"Deodrant","Price":"250"},{"image":"Images/book.png","name":"Book","Price":"190"},{"image":"Images/headphones.png","name":"Headphones","Price":"1500"},{"image":"Images/laptop.png","name":"Laptop","Price":"65000"},{"image":"Images/mouse.png","name":"Mouse","Price":"625"},{"image":"Images/powerbank.png","name":"Powerbank","Price":"999"},{"image":"Images/shoe.png","name":"Shoes","Price":"2200"},{"image":"Images/trimmer.png","name":"Trimmer","Price":"1736"},{"image":"Images/wallet.png","name":"Wallet","Price":"725"},{"image":"Images/watch.png","name":"Watch","Price":"23000"}]
$scope.backUp = angular.copy($scope.products)
$scope.addToCart = function(){
    $scope.cartCount++;
}

$scope.searchProducts = function(){
    console.log("Searching")
    $scope.searchedProducts = []
    $scope.products.forEach(function(obj){
        console.log("--- ",angular.lowercase(obj.name).indexOf(angular.lowercase($scope.search)))
        if(angular.lowercase(obj.name).indexOf(angular.lowercase($scope.search)) >= 0){
            $scope.searchedProducts.push(obj)
        }
    })


    if($scope.search.length == 0){
        $scope.products = $scope.backUp
    }else{
        $scope.products = $scope.searchedProducts
    }
}
})