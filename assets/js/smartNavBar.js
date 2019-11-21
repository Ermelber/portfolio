function SmartNavBar(navBarId, relativePath, callback){
    function getItem(item, level){
        level = level ? level : 0;
        var childLevel = level + 1;

        var href = item.href != "#" ? self.relativePath + item.href : "#";

        var activeUrl = window.location.pathname;
        var isActive = activeUrl.toLowerCase().endsWith(item.href.toLowerCase());

        var children = "";

        if (item.items)
        {
            children += "<ul class=\"dropdown-menu\">";
            item.items.forEach(function(e){
                children += getItem(e, childLevel);
            });
            children += "</ul>";
        }

        var liClass = level == 0 ? "nav-item" + (item.items ? " dropdown" : "") : item.items ? "dropdown-submenu" : "";
        var aClass = (level == 0 ? "nav-link" : "dropdown-item") + (item.items ? " dropdown-toggle" : "");

        if (isActive)
            aClass += " active";
            
        var dataToggle = item.items ? "data-toggle=\"dropdown\"" : "";

        var item = 
                "<li class=\""+ liClass +"\">" + 
                    "<a class=\""+ aClass +"\" "+ dataToggle + " href=\"" + href + "\">"+
                        item.text +
                    "</a>" + 
                    children + 
                "</li>";

        return item;
    }

    function render(){
        var list = $("#" + self.navBarId);
        list.empty();

        self.model.items.forEach(function(e){
            list.append(getItem(e));
        });
    }
    
    var self = this;

    self.model = {};
    self.navBarId = navBarId;
    //Path to root
    self.relativePath = relativePath ? relativePath : "";

    fetchJSONFile(relativePath + "assets/json/navbar.json", function(data)
    {
        self.model = data;
        render();

        if (callback) callback();
    })
}