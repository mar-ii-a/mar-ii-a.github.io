let generate_index_project_cell = function(href, description, image_url){
    return  `
    <div class="pure-u-1 pure-u-md-1-3">
        <div class="pricing-table">
            <a href="${href}">
            <div class="project-image"  style="background-image: url('${image_url}');"></div>
            </a>
            <p class="project_description">${description}</p>
        </div>
    </div>
`
};

let set_project_rows = function() {
    // can modularize more, maybe add param for row's id
    let top_row_projects =
        [
            {
                'href': '/project_page.html',
                'descriptions':'Project: Welcome Wagon!',
                'image_url': './assets/projects/the_welcome_wagon/cover35ppi.png'
            },
            {
                'href': '/project_page-2.html',
                'descriptions':'Project: Shared Space!',
                'image_url': './assets/projects/human_centred_housing/bcover0.25x.png'
            },
            {
                'href': '/project_page.html',
                'descriptions':'Project: Welcome Wagon!',
                'image_url': './assets/projects/plug_and_play/ccover0.25x.png'
            }
        ];
    let bottom_row_projects =
        [
            {
                'href': '/project_page.html',
                'descriptions':'Lorem ipsum dolor <strong>sit</strong> amet consectetur adipisicing elit. Voluptas ex totam laboriosam debitis minima quia non consectetur deserunt, beatae aspernatur cumque odit voluptates facilis nam, dolores quo nobis itaque necessitatibus?' ,
                'image_url': './assets/projects/parkin/Grand-River Siteplan.jpg'
            },
            {
                'href': '/project_page.html',
                'descriptions':'Project: Welcome Wagon!',
                'image_url': './assets/projects/hok/HOK diagram wide 72ppi.png'
            },
            {
                'href': '/project_page.html',
                'descriptions':'Project: Welcome Wagon!',
                'image_url': './assets/projects/walterfedy/WF-image.PNG'
            }
        ];

    let top_row_element = document.getElementById('project_display_top_row');
        top_row_projects.forEach(project_details => {
            top_row_element.insertAdjacentHTML('beforeend',
                            generate_index_project_cell(project_details.href,
                                                        project_details.descriptions,
                                                        project_details.image_url));
            });

    let bottom_row_element = document.getElementById('project_display_bottom_row');
        bottom_row_projects.forEach(project_details => {
            bottom_row_element.insertAdjacentHTML('beforeend',
                            generate_index_project_cell(project_details.href,
                                                        project_details.descriptions,
                                                        project_details.image_url));
            });
}

let generate_navigation_link = function(href, text, selected=false){
    let _class;
    if (selected)
    {
        _class = "pure-menu-item pure-menu-selected";
        href = "#" // avoid refresh ?
    }
    else
    {
        _class = "pure-menu-item"
    }

    return `
    <li class="${_class}"><a href="${href}" class="pure-menu-link">${text}</a></li> 
    `
};

let set_navigation_links = function() {
    let navigation_links = [
        {
            'href':'/',
            'text':'Work',
            'selected':true
        },
        {
            'href':'/about',
            'text':'About',
            'selected':false
        },
        {
            'href':'mailto:maria@example.com',
            'text':'Contact',
            'selected':false
        }
    ]

    let navigation_element = document.getElementById('navigation_links');
    navigation_links.forEach(x => {
        navigation_element.insertAdjacentHTML('beforeend',
        generate_navigation_link(x.href, x.text, x.selected))
    });

};

(function () {

})();


const window_path = window.location.pathname
switch(window_path) {
    case "/index.html":
    case "/index":
    case "/":
      // code block
      set_project_rows();
      set_navigation_links();
      break;
    case "/project_page":
    case "/project_page.html":
        set_navigation_links();
        break;
    default:
      console.log("where are you?");
  }

console.log(window.location);