

const id = prompt('enter your id');
const password = prompt('enter your password');

let UserStorage = {

    loginUser: function(id, password){
       return new Promise( (resolve, reject) => {
            if(id === 'ellie' && password === 'dream'){
                resolve(id);
            }else{
                reject(new Error('not found'));
            }
        });
    },
    getRoles: function(user) {
        return new Promise( (resolve, reject) => {
            if(user === 'ellie'){
                resolve({name: 'ellie', role: 'admin'});
            }else{
                reject(new Error('not found'));
            }
        });

    }
};

UserStorage.loginUser(id, password)
    .then(UserStorage.getRoles)
    .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
