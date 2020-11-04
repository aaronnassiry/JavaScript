function AuthController(){
    var roles;
    function setRoles(role){
        roles = role;
    }
    function isAuthorized(neededRole){
        return roles.indexOf(neededRole) >= 0; 
    }
    return {isAuthorized, setRoles};
}
module.exports = AuthController();