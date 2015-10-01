angular.module('userGrid').factory('users', function(){

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
        users.push(user);
    };

    return {
        getUsers: self.getUsers,
        addUser: self.addUser
    }

});