define(["app/routing/router"],function(router){return{errorRedirection:function(jqXHR,urlFor404){urlFor404&&404===jqXHR.status?router.navigate(urlFor404,{trigger:!0,replace:!0}):router.navigate("error",{trigger:!0,replace:!0})},errorUserRedirection:function(jqXHR){this.errorRedirection(jqXHR,"users/notfound")}}});