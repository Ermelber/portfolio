// Settings
var menuItems = 
[
    { 
        text : "Home",
        url : "index.htm",
        alias: "portfolio/",
        children : null
    },
    { 
        text : "Projects",
        url : "#",
        alias: null,
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
        url : "contact/index.htm",
        alias: "contact/",
        children : null
    }
]

// Base Page Elements
function initMenuItems()
{
    var activeUrl = window.location.pathname;

    menuItems.forEach(function(e)
    {
        var isActive = activeUrl.toLowerCase().endsWith(e.url.toLowerCase()) || (e.isIndex ? activeUrl.toLowerCase().endsWith("portfolio/") : false);
        var hasChildren = e.children != null;
        var children = "";

        if (hasChildren)
        {
            children += `<div class="dropdown-menu">`;
            e.children.forEach(function(c)
            {
                var isChildrenActive = activeUrl.toLowerCase().endsWith(c.url.toLowerCase());
                children += `<a class="dropdown-item ${isChildrenActive ? 'active' : ''}" href="${c.url}">${c.text}</a>`

                if (isChildrenActive) isActive = true;
            });
            children += "</div>";
        }

        var item = 
        `<li class="nav-item ${isActive ? 'active' : ''} ${hasChildren ? 'dropdown' : ''}">
            <a class="nav-link ${hasChildren ? 'dropdown-toggle' : ''}" ${hasChildren ? 'data-toggle="dropdown"' : ''} href="${e.url}">
                ${e.text}
            </a>
            ${children}
        </li>`;
        $("#navbarItems").append(item);
    });
}

$(document).ready(function()
{
    initMenuItems();
});