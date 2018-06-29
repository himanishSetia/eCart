eCart.controller('loginController', function ($scope, $location,Notification) {
    console.log("Login")

    $scope.isValid = function () {
        var noError = true
        if ($scope.username == '' || $scope.username == undefined || $scope.username == null) {
            noError = false;
        }

        if ($scope.password == '' || $scope.password == undefined || $scope.password == null) {
            noError = false;
        }

        return noError
    }

    $scope.loginECart = function () {
        if ($scope.isValid()) {
            var check = false
            var regData = JSON.parse(window.localStorage.getItem('registeredUsers'))
            angular.forEach(regData,function(obj){
                console.log("ENtered")
                if($scope.username == obj.username && $scope.password == obj.password){
                    console.log("MATCHED")
                    check = true
                }
            })


            if(check){
                $location.path('/dashboard')
            }else{
                Notification.error({
                    message: "Invalid credentials. Please register first", 
                    delay: 5000
                });
            }
        }
    }

    $scope.register = function () {
        $location.path('/register')
    }
})


eCart.controller('registerController', function ($scope, $location,Notification) {
    // window.localStorage.setItem('registeredUsers',[])
    $scope.genderList = [{ "name": "Male", "value": "male" }, { "name": "Female", "value": "female" }]
    var userData = []
    $scope.back = function () {
        $location.path('/login');
    }
        $scope.isValid = function () {
            console.log("IS VALID")
            var noError = true

            if ($scope.name == undefined || $scope.name == '' || $scope.name == null) {
                Notification.error({
                    message: "Please enter name.", 
                    delay: 3000
                });
                noError = false
            }

            if ($scope.username == undefined || $scope.username == '' || $scope.username == null) {
                Notification.error({
                    message: "Please enter username.", 
                    delay: 3000
                });
                noError = false
            }

            if ($scope.dob == undefined || $scope.dob == '' || $scope.dob == null) {
                Notification.error({
                    message: "Please enter Date of Birth.", 
                    delay: 3000
                });
                noError = false
            }

            if ($scope.password == undefined || $scope.password == '' || $scope.password == null) {
                Notification.error({
                    message: "Please enter password.", 
                    delay: 3000
                });
                noError = false
            }

            if ($scope.rePassword == undefined || $scope.rePassword == '' || $scope.rePassword == null) {
                Notification.error({
                    message: "Please re-enter password for verification.", 
                    delay: 3000
                });
                noError = false
            }

            if ($scope.address == undefined || $scope.address == '' || $scope.address == null) {
                Notification.error({
                    message: "Please enter address.", 
                    delay: 3000
                });
                noError = false
            }

            if ($scope.gender == undefined || $scope.gender == '' || $scope.gender == null) {
                Notification.error({
                    message: "Please select gender.", 
                    delay: 3000
                });
                noError = false
            }

            if ($scope.age == undefined || $scope.age == '' || $scope.age == null) {
                Notification.error({
                    message: "Please enter age.", 
                    delay: 3000
                });
                noError = false
            }

            if($scope.password != $scope.rePassword){
                Notification.error({
                    message: "Your password not match. Please re-enter.", 
                    delay: 3000
                });
                noError = false 
            }

            return noError
        }

        $scope.registerUser = function () {
            console.log("----")
            if ($scope.isValid()) {
                var user = {
                    "name" : $scope.name,
                    "username" : $scope.username,
                    "DOB" : $scope.dob,
                    "password" : $scope.password,
                    "address" : $scope.address,
                    "gender" : $scope.gender.value,
                    "age" : $scope.age
                }
                var data = window.localStorage.getItem('registeredUsers')
                if(data == '' || data == undefined || data == null){
                    userData = []
                }else{
                    userData = JSON.parse(data)
                }
                userData.push(user)
                window.localStorage.setItem('registeredUsers',JSON.stringify(userData))
                $location.path('/login')
            }
        }

})