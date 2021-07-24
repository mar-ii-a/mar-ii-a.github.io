let generate_index_project_cell = function(href, description, sub_description, image_url){
    return  `
    <div class="pure-u-1 pure-u-md-1-3">
        <div class="pricing-table">
            <a href="${href}">
            <div class="project-image"  style="background-image: url('${image_url}');"></div>
            </a>
            <p class="project_description">${description}
            <p class="project_description_subtitle">${sub_description}</p>
            </p>
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
                'descriptions':'Self-build housing solution for Canadian Immigrant Communities',
                'sub_description': 'ARCH 393 - University of Waterloo',
                'image_url': './assets/projects/the_welcome_wagon/cover35ppi.png'
            },
            {
                'href': '/project_page_2.html',
                'descriptions':'Human - Centred Affordable Housing Solution for Downtown Toronto',
                'sub_description': 'ARCH 392 - University of Waterloo',
                'image_url': './assets/projects/human_centred_housing/bcover0.25x.png'
            },
            {
                'href': '/project_page_3.html',
                'descriptions':'Child-First Design for Portable School Classrooms <br><br>',
                'sub_description': 'Buildings Workshop - University of Waterloo',
                'image_url': './assets/projects/plug_and_play/ccover0.25x.png'
            }
        ];
    let bottom_row_projects =
        [
            {
                'href': '/project_page_4.html',
                'descriptions':'Strategic Master Planning, Cancer Centre Design, and Hopsital Design' ,
                'sub_description': 'Parkin Architects - Toronto',
                'image_url': './assets/projects/parkin/Grand-River Siteplan.jpg'
            },
            {
                'href': '/project_page_5.html',
                'descriptions':'Conceptual Design Pearson Airport Terminal 3 Extensive Rennovation',
                'sub_description': 'HOK Architects - Toronto',
                'image_url': './assets/projects/hok/HOK diagram wide 72ppi.png'
            },
            {
                'href': '/project_page_6.html',
                'descriptions':'School and Office Building Design <br><br>',
                'sub_description': 'WalterFedy - Kitchener',
                'image_url': './assets/projects/walterfedy/WF-image.PNG'
            }
        ];

    let top_row_element = document.getElementById('project_display_top_row');
        top_row_projects.forEach(project_details => {
            top_row_element.insertAdjacentHTML('beforeend',
                            generate_index_project_cell(project_details.href,
                                                        project_details.descriptions,
                                                        project_details.sub_description,
                                                        project_details.image_url));
            });

    let bottom_row_element = document.getElementById('project_display_bottom_row');
        bottom_row_projects.forEach(project_details => {
            bottom_row_element.insertAdjacentHTML('beforeend',
                            generate_index_project_cell(project_details.href,
                                                        project_details.descriptions,
                                                        project_details.sub_description,
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
    <li class="${_class} nav_link_item"><a href="${href}" class="pure-menu-link">${text}</a></li> 
    `
};

let set_navigation_links = function(bolded_text_text) {
    let navigation_links = [
        {
            'href':'/',
            'text':'Work',
            'selected':false
        },
        {
            'href':'/about',
            'text':'About',
            'selected':false
        },
        {
            'href':'mailto:maria.munir@uwaterloo.ca',
            'text':'Contact',
            'selected':false
        }
    ]

    let navigation_element = document.getElementById('navigation_links');
    navigation_links.forEach(x => {
        let isBolded = false
        if (bolded_text_text == x.text){isBolded=true}
        navigation_element.insertAdjacentHTML('beforeend',
        generate_navigation_link(x.href, x.text, isBolded))
    });

};

let set_footer = function () {
    let footer_html =  `
    <div class="pricing-tables pure-g footer-content">
        <div class="pure-u-1 pure-u-md-1-3" >
            <p class="footer-left">Contact Me:</p>
            <p class="footer-left">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-1-2">
                            <img src="./assets/footer/mail.svg" alt="" class="footer-link-image" style="padding-right: 25px;">
                            <img src="./assets/footer/linkedin logo.svg" alt="" class="footer-link-image">
                    </div>         
                </div>
            </p>
        </div>
        
        <div class="pure-u-1 pure-u-md-1-4 footer-empty-content"></div>

        <div class="pure-u-1 pure-u-md-1-3" >
            <p class="footer-left" style="opacity: 0%;">Contact Me:</p>
            <p class="footer-left">
                <div class="">
                    <p class="footer-right" style="margin: 0px;">
                        <a id="resume-download-link" class="footer-hyperlinks" href="./assets/MariaMunir-Resume.pdf" target="_blank">View my resume here!</a>
                    </p>
                </div>
            </p>
        </div>
    </div>
`
    let page_footer_element = document.getElementById("page-footer");
    page_footer_element.insertAdjacentHTML('beforeend', footer_html);
}

// (function () {

// })();


const window_path = window.location.pathname
switch(window_path) {
    case "/index.html":
    case "/index":
    case "/":
      // code block
      set_project_rows();
      set_navigation_links('Work');
      break;
    case "/about.html":
    case "/about":
        set_navigation_links('About');
        break;
    case "/project_page":
    case "/project_page.html":
    case "/project_page_2":
    case "/project_page_2.html":
    case "/project_page_3":
    case "/project_page_3.html":
    case "/project_page_4":
    case "/project_page_4.html":
    case "/project_page_5":
    case "/project_page_5.html":
    case "/project_page_6":
    case "/project_page_6.html":
        set_navigation_links();
        break;
    default:
      console.log("where are you?");
  }

set_footer();