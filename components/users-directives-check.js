angular.module('userGrid').directive('check', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            function validate(elem, pattern) {

                var res = elem.search(pattern);

                if (res == -1) {
                    $(element).removeClass('valid');
                    $(element).addClass('invalid');
                } else {
                    $(element).removeClass('invalid');
                    $(element).addClass('valid');
                }
            }

            function checkName(name) {
                var pattern = /\S/;
                validate(name, pattern);
            }

            function checkEmail(email) {
                var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
                validate(email, pattern);
            }

            function checkPhone(phone) {
                var pattern = /\(\d{3}\) \d{3}-\d{2}-\d{2}/;
                validate(phone, pattern);
            }

            function checkGender(gender) {
                if ( gender === "male" || gender === "female" ){
                    $(element).removeClass('invalid');
                    $(element).addClass('valid');
                } else {
                    $(element).removeClass('valid');
                    $(element).addClass('invalid');
                }
            }

            function checkAge(age) {
                if ( age > 18 && age < 100 ){
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

            } else if ( attrs.check === "email" ){

                element.on('blur', function(){
                    var email = $(element).val();
                    checkEmail(email);
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
}).directive('addUser', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            console.log(1);

        }
    }
});