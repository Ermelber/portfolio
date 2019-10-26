// Settings
var menuItems = 
[
    { 
        text : "Home",
        url : "/portfolio/",
        alias: "/portfolio/index.htm",
        children : null
    },
    { 
        text : "Projects",
        url : "#",
        alias: "#",
        children : 
        [
            { 
                text : "Ermii Kart DS",
                url : "#",
                alias: "#"
            },
            { 
                text : "NeoDori",
                url : "#",
                alias: "#"
            },
            { 
                text : "Mario Kart Toolbox",
                url : "#",
                alias: "#"
            }
        ]
    },
    { 
        text : "Contact",
        url : "/portfolio/contact/",
        alias: "/portfolio/contact/index.htm",
        children : null
    }
]

// Base Page Elements
function initMenuItems()
{
    var activeUrl = window.location.pathname;

    menuItems.forEach(function(e)
    {
        var isActive = activeUrl.toLowerCase().endsWith(e.url.toLowerCase()) || activeUrl.toLowerCase().endsWith(e.alias.toLowerCase());
        var hasChildren = e.children != null;
        var children = "";

        if (hasChildren)
        {
            children += `<div class="dropdown-menu">`;
            e.children.forEach(function(c)
            {
                var isChildrenActive = activeUrl.toLowerCase().endsWith(c.url.toLowerCase()) || activeUrl.toLowerCase().endsWith(c.alias.toLowerCase());
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