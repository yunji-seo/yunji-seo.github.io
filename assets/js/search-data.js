// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Highlights of my projects and research throughout my undergraduate journey.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-han-river-evergreen-city-reimagining-seobinggo-as-a-green-landmark",
          title: 'Han River Evergreen City: Reimagining Seobinggo as a Green Landmark',
          description: "Fall 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-critique-on-residential-livability-of-apartments-near-industrial-complexes",
          title: 'Critique on Residential Livability of Apartments Near Industrial Complexes',
          description: "Fall 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-evaluation-of-public-housing-policy-for-the-elderly-focusing-on-the-right-to-move",
          title: 'Evaluation of Public Housing Policy for the Elderly: Focusing on the Right to...',
          description: "Fall 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-mobility-solutions-for-the-elderly-integrating-ride-sharing-amp-car-sharing",
          title: 'Mobility Solutions for the Elderly: Integrating Ride-sharing &amp;amp; Car-sharing',
          description: "Fall 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-autonomous-drt-shuttle-service-a-mobility-solution-for-commuting-yonsei-students",
          title: 'Autonomous DRT Shuttle Service: A Mobility Solution for Commuting Yonsei Students',
          description: "Fall 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project/";
            },},{id: "projects-mobility-data-mining-trajectory-segmentation-and-trip-purpose-inference",
          title: 'Mobility Data Mining: Trajectory Segmentation and Trip Purpose Inference',
          description: "Spring 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_project/";
            },},{id: "projects-it-takes-a-village-39-a-critique-of-exclusionary-playgrounds-through-agamben-39-s-lens",
          title: 'It Takes a Village&amp;#39;: A Critique of Exclusionary Playgrounds through Agamben&amp;#39;s Lens',
          description: "Fall 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_project/";
            },},{id: "projects-enhancing-elderly-mobility-drt-suitability-analysis-using-ipa-matrix",
          title: 'Enhancing Elderly Mobility: DRT Suitability Analysis using IPA Matrix',
          description: "Fall 2024",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_project/";
            },},{id: "projects-analysis-and-revitalization-proposal-for-underutilized-sites-on-the-yonsei-university-international-campus",
          title: 'Analysis and Revitalization Proposal for Underutilized Sites on the Yonsei University International Campus...',
          description: "Fall 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-a-proposal-for-new-late-night-bus-routes-in-seoul-based-on-taxi-o-d-and-service-shadow-area-analysis",
          title: 'A Proposal for New Late-Night Bus Routes in Seoul Based on Taxi O/D...',
          description: "Fall 2022",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-reflections-on-what-s-wrong-with-apartments-rethinking-better-urban-environments",
          title: 'Reflections on “What’s Wrong with Apartments?”: Rethinking Better Urban Environments',
          description: "Spring 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-understanding-the-dunchon-jugong-construction-conflict",
          title: 'Understanding the Dunchon Jugong Construction Conflict',
          description: "Spring 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-proposal-for-new-campus-shuttle-routes-based-on-o-d-analysis-a-case-study-of-yonsei-university",
          title: 'Proposal for New Campus Shuttle Routes Based on O/D Analysis: A Case Study...',
          description: "Spring 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-environmental-pollution-from-mine-tailings-in-abandoned-mines-a-korea-centered-assessment",
          title: 'Environmental Pollution from Mine Tailings in Abandoned Mines: A Korea-Centered Assessment',
          description: "Spring 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-bad-place-vlog-evaluating-the-sewoon-elevated-walkway",
          title: 'Bad Place Vlog: Evaluating the Sewoon Elevated Walkway',
          description: "Fall 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-tactical-urbanism-revitalizing-underused-campus-spaces",
          title: 'Tactical Urbanism: Revitalizing Underused Campus Spaces',
          description: "Fall 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-housing-complex-case-study-amp-model-making",
          title: 'Housing Complex Case Study &amp;amp; Model Making',
          description: "Fall 2023",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%65%61%72%30%39%30%34@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/yunji-seo", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yunji-seo-33844534b", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
