module.exports = function(ngApp) {
    ngApp.filter('myDateFormat', function myDateFormat($filter){
        return function(text,format){
            var  tempdate= new Date(text.replace(/-/g,"/"));
            return $filter('date')(tempdate, format);
        }
    });

    ngApp.filter('myIndexOf',function(){
       return function(array,value,column){
           if(column == undefined){
               column = 'id';
           }
           var length = array.length;
           for (var i = length - 1; i>=0; i--){
               if(array[i][column] == value[column]){
                   return i;
               }
           }

           return -1;
       }
    });
};
