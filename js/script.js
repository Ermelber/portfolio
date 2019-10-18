// Settings
var menuItems = 
[
    { 
        text : "Home",
        url : "index.htm",
        children : null
    },
    { 
        text : "Projects",
        url : "#",
        children : 
        [
            { 
                text : "Ermii Kart DS",
                url : "#"
            },
            { 
                text : "NeoDori",
                url : "#"
            },
            { 
                text : "Mario Kart Toolbox",
                url : "#"
            }
        ]
    },
    { 
        text : "Contact",
        url : "contact.htm",
        children : null
    }
]

// Base Page Elements
function initMenuItems()
{
    var activeUrl = window.location.pathname;

    menuItems.forEach(function(e)
    {
        var isActive = activeUrl.toLowerCase().endsWith(e.url.toLowerCase()) ? "active" : "";
        var hasChildren = e.children != null;
        var item = 
        `<li class="nav-item ${isActive} ${hasChildren ? 'dropdown' : ''}">
            <a class="nav-link ${hasChildren ? 'dropdown-toggle' : ''}" ${hasChildren ? 'data-toggle="dropdown"' : ''} href="${e.url}">
                ${e.text}
            </a>`;
        if (hasChildren)
        {
            item += `<div class="dropdown-menu">`;
            e.children.forEach(function(c)
            {
                item += `<a class="dropdown-item" href="${c.url}">${c.text}</a>`
            });
            item += "</div>";
        }
        item += "</li>";
        $("#navbarItems").append(item);
    });
}

$(document).ready(function()
{
    initMenuItems();
});