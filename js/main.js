let generate_index_project_cell = function(href, description, sub_description, image_url){
    return  `
    <div class="pure-u-1 pure-u-md-1-2">
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
                'href': '/givemeasign.html',
                'descriptions':'Give Me A Sign',
                'sub_description': 'Hack the North 2021 - Research, Branding, Interface Design',
                'image_url': './assets/projects/GiveMeASign/Top-Frame.png'

            },
            {
                'href': '/diario.html',
                'descriptions':'Diary App UX Case Study ',
                'sub_description': 'Personal Project - Research, Analysis',
                'image_url': './assets/projects/diario/diario-p-page-2X.png'
            },

        ];
        let middle_row_projects =
        [
            {
                'href': '/the_welcome_wagon.html',
                'descriptions':'Self-build housing solution for Canadian Immigrant Communities',
                'sub_description': 'Academic - Research, Concept, Design',
                'image_url': './assets/projects/the_welcome_wagon/cover35ppi.png'
            },
            {
                'href': '/plug_and_play.html',
                'descriptions':'Child-First Design for Portable School Classrooms',
                'sub_description': 'Academic - Research, Concept, Design',
                'image_url': './assets/projects/plug_and_play/ccover0.25x.png'
            },

        ];
        let middle_row_projects_2 =
        [

            {
                'href': '/hok.html',
                'descriptions':'Conceptual Design Pearson Airport Terminal 3 Extensive Rennovation',
                'sub_description': 'HOK Architects - Research, Concept, Design, Development Coordination',
                'image_url': './assets/projects/hok/HOK_diagram_wide_150ppi.png'
            },
            {
                'href': '/parkin_architects.html',
                'descriptions':'Strategic Planning, Cancer Centre Design, and Hospital Design' ,
                'sub_description': 'Parkin Architects - Research, Concept, Design, Testing, Analysis',
                'image_url': './assets/projects/parkin/Grand_River_Siteplan.jpg'
            },

        ];/*
    let bottom_row_projects =
        [

            {
                'href': '/walterfedy.html',
                'descriptions':'School and Office Building Design <br><br>',
                'sub_description': 'WalterFedy - Research, Concept, Design',
                'image_url': './assets/projects/walterfedy/WF-image.PNG'
            },
            {
                'href': '/index.html',
                'descriptions':'Website Design - Coming Soon <br><br>',
                'sub_description': 'Stay tuned for more!',
                'image_url': './assets/construction.svg'
            }
        ];*/

    let top_row_element = document.getElementById('project_display_top_row');
        top_row_projects.forEach(project_details => {
            top_row_element.insertAdjacentHTML('beforeend',
                            generate_index_project_cell(project_details.href,
                                                        project_details.descriptions,
                                                        project_details.sub_description,
                                                        project_details.image_url));
            });
    let middle_row_element = document.getElementById('project_display_middle_row');
        middle_row_projects.forEach(project_details => {
            middle_row_element.insertAdjacentHTML('beforeend',
                            generate_index_project_cell(project_details.href,
                                                        project_details.descriptions,
                                                        project_details.sub_description,
                                                        project_details.image_url));
            });
    let middle_row_projects_2_element = document.getElementById('project_display_middle_row_2');
         middle_row_projects_2.forEach(project_details => {
            middle_row_projects_2_element.insertAdjacentHTML('beforeend',
                                generate_index_project_cell(project_details.href,
                                                            project_details.descriptions,
                                                            project_details.sub_description,
                                                            project_details.image_url));
            });/*
    let bottom_row_element = document.getElementById('project_display_bottom_row');
        bottom_row_projects.forEach(project_details => {
            bottom_row_element.insertAdjacentHTML('beforeend',
                            generate_index_project_cell(project_details.href,
                                                        project_details.descriptions,
                                                        project_details.sub_description,
                                                        project_details.image_url));
            });*/
}

let generate_navigation_link = function(href, text, selected=false, target=''){
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
    <li class="${_class} nav_link_item"><a href="${href}" ${target} class="pure-menu-link">${text} </a></li> 
    `
};

let set_navigation_links = function(bolded_text_text) {
    let navigation_links = [
        {
            'href':'/',
            'text':'Work',
            'selected':false,
            'target': ""
        },
        {
            'href':'/about',
            'text':'About',
            'selected':false,
            'target': ""
        },
        {

            'href':'./assets/MariaMunir-Resume.pdf',
            'text':'Resume',
            'selected':false,
            'target': "target='_blank'"
        },
        {
            'href':'mailto:maria.munir@uwaterloo.ca',
            'text':'Contact',
            'selected':false,
            'target': ''
        }
    ]

    let navigation_element = document.getElementById('navigation_links');
    navigation_links.forEach(x => {
        let isBolded = false
        if (bolded_text_text == x.text){isBolded=true}
        navigation_element.insertAdjacentHTML('beforeend',
        generate_navigation_link(x.href, x.text, isBolded, x.target))
    });

};
let set_footer_decal = function () {
    let footer_decal_html =  `
    <!-- background swirl -->
    <div class="pure-u-1 pure-u-md-1-1">
        <div class="pricing-table fit-screen" style="padding: 0px;">
            <img src="./assets/foot-decal_4x.png" alt="" class="pure-img" id = "my-swirl">
        </div>
    </div>
    `
    let page_footer_element = document.getElementById("page-footer-decal");
    page_footer_element.insertAdjacentHTML('beforeend', footer_decal_html);
}

let set_footer = function () {
    let footer_html =  `
    
    <div class="pricing-tables pure-g footer-content">
        <div class="pure-u-1 pure-u-md-1-3" >
        <p class="footer-left"><span class="footer-highlight">Let's connect!</span> </p>
 
            <p class="footer-left">
                <div class="pure-g">
                    <div class="pure-u-1 pure-u-md-1-2">
                            <a href="mailto:maria.munir.uwaterloo.ca">
                            <img src="./assets/footer/mail.svg" alt=" mail link" class="footer-link-image" style="padding-right: 25px;">
                            </a>
                            <a href="https://www.linkedin.com/in/maria-munir" target="_blank">
                            <img src="./assets/footer/linkedin_logo.svg" alt="go to linkedIn profile" class="footer-link-image">
                            </a>
                    </div>         
                </div>
            </p>
        </div>
        
        <div class="pure-u-1 pure-u-md-1-4 footer-empty-content"></div>

        <div class="pure-u-1 pure-u-md-1-3" >
            <p class="footer-left" style="opacity: 0%;">Let's connect!</p>
            <p class="footer-left">
                <div class="">
                    <p class="footer-right" style="margin: 0px;">
                        <a id="resume-download-link" class="footer-hyperlinks" href="./assets/Maria_Munir-Resume-2022.pdf" target="_blank">View my resume here!</a>
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
    case "/the_welcome_wagon":
    case "/the_welcome_wagon.html":
    case "/give_me_a_sign":
    case "/givemeasign.html":   
    case "/diario":
    case "/diario.html":
    case "/parkin_architects":
    case "/parkin_architects.html":
    case "/plug_and_play":
    case "/plug_and_play.html":
    case "/hok":
    case "/hok.html":
    case "/about":
    case "/about.html":
    case "/shared_space":
    case "/shared_space.html":
    case "/walterfedy":
    case "/walterfedy.html":
        set_navigation_links();
        break;
    default:
      console.log("where are you?");
  }

set_footer_decal();

set_footer();
