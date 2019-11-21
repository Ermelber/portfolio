function MediaList(mediaListId, titleId, jsonPath, callback){
    function render(){
        $("#" + self.titleId).text(self.model.title);

        var list = $("#" + self.mediaListId);
        list.empty();

        self.model.items.forEach(function(e){
            var item = 
                "<li class=\"media\">" + 
                    //"<div class=\"mr-3\" style=\"height: 200px; width: 200px; background-color: black;\"></div>"+
                    "<img class=\"mr-3\" src=\"" + e.image + "\" height=\"200px\" width=\"200px\"/>"+
                    "<div class=\"media-body\">"+
                        "<h5 class=\"mt-0 mb-1\">" + e.title + "</h5>"+
                        "<small>" + e.subtitle + "</small><br/><br/>"+
                        e.content +
                        "<br/><br/>"+
                        "<small>" + e.bottomText + "</small>"+
                    "</div>"+
                "</li><hr/>"
            list.append(item);
        });
    }

    var self = this;
    
    self.mediaListId = mediaListId;
    self.titleId = titleId;
    self.model = {};

    fetchJSONFile(jsonPath, function(data)
    {
        self.model = data;
        render();

        if (callback) callback();
    })
}


function DownloadList(mediaListId, jsonPath, callback){
    function render(){
        var list = $("#" + self.mediaListId);
        list.empty();

        self.model.items.forEach(function(e){
            var item = 
                "<li class=\"media\"><div class=\"media-body\">" + 
                    //"<div class=\"mr-3\" style=\"height: 200px; width: 200px; background-color: black;\"></div>"+
                    "<div class=\"row w-100\">"+
                        "<div class=\"col-lg-6 col-sm-12\"><img class=\"mr-3 w-100\" src=\"" + e.image + "\"/></div>"+
                        "<div class=\"col-lg-6 col-sm-12 justify-content-center align-self-center\">"+
                            "<a class=\"btn btn-block btn-dark btn-download my-auto mb-1\" href=\"" + e.link + "\">DOWNLOAD</a>"+
                            "<br/><h4 class=\"w-100 text-center\">" + e.bottomText + "</h4>"+
                        "</div>"+
                    "</div></div>"+
                "</li><hr/>"
            list.append(item);
        });
    }

    var self = this;
    
    self.mediaListId = mediaListId;
    self.model = {};

    fetchJSONFile(jsonPath, function(data)
    {
        self.model = data;
        render();

        if (callback) callback();
    })
}