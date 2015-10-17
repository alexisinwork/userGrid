angular.module('userGrid').directive('check', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var user = scope.user.user;

            function validate(elem, pattern) {

                var res = elem.search(pattern);

                if (res == -1) {
                    $(element).removeClass('valid').addClass('invalid');
                    return false;
                } else {
                    $(element).removeClass('invalid').addClass('valid');
                    return true;
                }
            }

            function checkName(name) {
                var pattern = /\S/;
                var answer = validate(name, pattern);
                if (answer){
                    user.firstName = name;
                }
            }

            function checkSurname(name){
                var pattern = /\S/;
                var answer = validate(name, pattern);
                if (answer){
                    user.secondName = name;
                }
            }

            function checkPhone(phone) {
                var pattern = /\(\d{3}\) \d{3}-\d{2}-\d{2}/;
                var answer = validate(phone, pattern);
                if (answer){
                    user.phone = phone;
                }
            }

            function checkGender(gender) {
                if ( gender === "male" || gender === "female" ){
                    user.gender = gender;
                    $(element).removeClass('invalid');
                    $(element).addClass('valid');
                } else {
                    $(element).removeClass('valid');
                    $(element).addClass('invalid');
                }
            }

            function checkAge(age) {
                if ( age > 18 && age < 100 ){
                    user.age = age;
                    $(element).removeClass('invalid');
                    $(element).addClass('valid');
                } else {
                    $(element).removeClass('valid');
                    $(element).addClass('invalid');
                }
            }

            if ( attrs.check === "name" ){

                element.on('blur', function(){
                    var name = $(element).val();
                    checkName(name);
                });

            } else if ( attrs.check === "surname" ){

                element.on('blur', function(){
                    var surname = $(element).val();
                    checkSurname(surname);
                });

            } else if ( attrs.check === "phone" ){

                element.on('blur', function(){
                    var phone = $(element).val();
                    checkPhone(phone);
                });

            } else if ( attrs.check === "gender" ){

                element.on('blur', function(){
                    var gender = $(element).val().toLowerCase();
                    checkGender(gender);
                });

            } else if ( attrs.check === "age" ){

                element.on('blur', function(){
                    var age = $(element).val();
                    checkAge(age);
                });

            }

        }
    }
});

angular.module('userGrid').directive('checkUser', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var inputs = $('input');

            element.bind('click', function(){
                var valid = $('.valid').length;
                if ( valid === inputs.length-1 ){

                    for (var i=0; i<inputs.length; i++){
                        $(inputs[i]).val('').addClass('default');
                    }

                    scope.user.checkAdd();

                } else {
                    alert('Some fields invalid');
                }
            });

        }
    }
});

angular.module('userGrid').directive('deleteUser', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function(){
                var name = $(element).next().val();
                scope.user.delete(name);
            });
        }
    }
});