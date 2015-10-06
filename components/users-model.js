angular.module('userGrid').factory('users', function($rootScope){

    var self = this;

    var users = [
        {
            firstName: 'Alex',
            secondName: 'Kuhtin',
            phone: '123-456',
            gender: 'male',
            age: 22
        },
        {
            firstName: 'Vad',
            secondName: 'Kuhtin',
            phone: '123-156',
            gender: 'male',
            age: 12
        },
        {
            firstName: 'Opra',
            secondName: 'Winfree',
            phone: '133-456',
            gender: 'female',
            age: 32
        },
        {
            firstName: 'Alexis',
            secondName: 'Kudalis',
            phone: '103-456',
            gender: 'male',
            age: 42
        },
        {
            firstName: 'Vlad',
            secondName: 'Kobal',
            phone: '173-456',
            gender: 'male',
            age: 25
        },
        {
            firstName: 'Olga',
            secondName: 'Pwerdy',
            phone: '128-446',
            gender: 'female',
            age: 16
        },
        {
            firstName: 'Alex',
            secondName: 'Videlis',
            phone: '123-123',
            gender: 'male',
            age: 29
        },
        {
            firstName: 'Vad',
            secondName: 'Winfree',
            phone: '733-456',
            gender: 'male',
            age: 31
        },
        {
            firstName: 'Opra',
            secondName: 'Kudalis',
            phone: '100-456',
            gender: 'female',
            age: 18
        },
        {
            firstName: 'Alexs',
            secondName: 'Kuhs',
            phone: '100-456',
            gender: 'male',
            age: 19
        },
        {
            firstName: 'Mokko',
            secondName: 'Kukhtin',
            phone: '123-006',
            gender: 'male',
            age: 26
        },
        {
            firstName: 'Gorro',
            secondName: 'Gortin',
            phone: '000-456',
            gender: 'male',
            age: 32
        },
        {
            firstName: 'Alex',
            secondName: 'Gortin',
            phone: '123-400',
            gender: 'male',
            age: 52
        },
        {
            firstName: 'Vadim',
            secondName: 'Kuhas',
            phone: '199-456',
            gender: 'male',
            age: 36
        },
        {
            firstName: 'Hogrtin',
            secondName: 'Msfan',
            phone: '155-456',
            gender: 'female',
            age: 42
        },
        {
            firstName: 'Alex',
            secondName: 'Kuhtin',
            phone: '123-456',
            gender: 'male',
            age: 16
        },
        {
            firstName: 'Alexander',
            secondName: 'Kurwin',
            phone: '123-456',
            gender: 'male',
            age: 52
        }
    ];

    self.getUsers = function(){
        return users;
    };

    self.addUser = function(user){
        $rootScope.$apply(function () {
            users.push(user);
        });
    };

    function sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];

            if (typeof x == "string")
            {
                x = x.toLowerCase();
                y = y.toLowerCase();
            }

            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

    Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
    };

    self.sorting = function(orderBy){
        if ( orderBy === 'firstName' ){
            sortByKey(users, 'firstName');
        } else if ( orderBy === 'secondName' ){
            sortByKey(users, 'secondName');
        } else if ( orderBy === 'phone' ){
            sortByKey(users, 'phone');
        } else if ( orderBy === 'gender' ){
            sortByKey(users, 'gender');
        } else if ( orderBy === 'age' ){
            sortByKey(users, 'age');
        }
    };

    self.delete = function(name){
        for ( var i=0; i < users.length; i++ ){
            if ( users[i]['firstName'] === name ){
                $rootScope.$apply(function () {
                    users.remove(i);
                });
            }
        }
    };

    return {
        getUsers: self.getUsers,
        addUser: self.addUser,
        sorting: self.sorting,
        delete: self.delete
    }

});