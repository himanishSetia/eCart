eCart.controller('dashboardController', function ($scope) {

    $scope.init = function () {
        console.log("INIT")
        $scope.cartCount = 0

        $scope.products = JSON.parse(window.localStorage.getItem('cartProducts'))
        console.log($scope.products)
        $scope.backUp = angular.copy($scope.products)
        if ($scope.products == '' || $scope.products == null || $scope.products == undefined) {
            var prod = [{ "image": "Images/sofa.png", "name": "Sofa", "Price": "25000", "cart": false, "Category": "Furniture" }, { "image": "Images/deodrant.png", "name": "Deodrant", "Price": "250", "cart": false, "Category": "Beauty" }, { "image": "Images/book.png", "name": "Book", "Price": "190", "cart": false, "Category": "Study Material" }, { "image": "Images/headphones.png", "name": "Headphones", "Price": "1500", "cart": false, "Category": "Electronics" },  { "image": "Images/mouse.png", "name": "Mouse", "Price": "625", "cart": false, "Category": "Electronics" }, { "image": "Images/powerbank.png", "name": "Powerbank", "Price": "999", "cart": false, "Category": "Mobile Accessories" }, { "image": "Images/shoe.png", "name": "Shoes", "Price": "2200", "cart": false, "Category": "Footwear" }, { "image": "Images/trimmer.png", "name": "Trimmer", "Price": "1736", "cart": false, "Category": "Grooming" }, { "image": "Images/wallet.png", "name": "Wallet", "Price": "725", "cart": false, "Category": "Accessories" }, { "image": "Images/watch.png", "name": "Watch", "Price": "23000", "cart": false, "Category": "Watches" }]
            $scope.products = prod
            $scope.backUp = angular.copy($scope.products)
            window.localStorage.setItem('cartProducts', JSON.stringify(prod))
        }
        angular.forEach($scope.products, function (obj) {
            if (obj.cart == true) {
                $scope.cartCount++
            }
        })


    }


    $scope.addToCart = function (name) {
        $scope.search = ""

        angular.forEach($scope.backUp, function (obj) {

            if (angular.lowercase(obj.name) == angular.lowercase(name)) {
                obj.cart = true
            }
        })

        window.localStorage.setItem('cartProducts', JSON.stringify($scope.backUp))
        $scope.init();

    }

    $scope.removeFromCart = function (name) {
        $scope.search = ""

        angular.forEach($scope.backUp, function (obj) {
            if (angular.lowercase(obj.name) == angular.lowercase(name)) {
                obj.cart = false
            }
        })
        window.localStorage.setItem('cartProducts', JSON.stringify($scope.backUp))
        $scope.init();
    }

    $scope.searchProducts = function () {
        // console.log("Searching")
        $scope.searchedProducts = []
        $scope.backUp.forEach(function (obj) {
            // console.log("--- ", angular.lowercase(obj.name).indexOf(angular.lowercase($scope.search)))
            if (angular.lowercase(obj.name).indexOf(angular.lowercase($scope.search)) >= 0) {
                $scope.searchedProducts.push(obj)
            }
        })


        if ($scope.search.length == 0) {
            $scope.products = $scope.backUp
        } else {
            $scope.products = $scope.searchedProducts
        }
        console.log($scope.products)
    }

    $scope.init();
})