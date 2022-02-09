(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    //var api="wimr-staff-roster";
    //-------------------------------------------------------------------------------------
    m[p+"rat-data"]      ={url:H+"/business/rat/data.html",       Table:"flow-rat",  form_module:"rat-form", router:1},
    m[p+"rat-form"]      ={url:H+"/business/rat/form.html",       Table:"flow-rat"}
})();
