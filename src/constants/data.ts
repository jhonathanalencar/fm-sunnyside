import images from "./images";

const links = [
  {
    id: 'about',
    text: 'About',
    type: 'link',
  },
  {
    id: 'services',
    text: 'Services',
    type: 'link',
  },
  {
    id: 'projects',
    text: 'Projects',
    type: 'link',
  },
  {
    id: 'contact',
    text: 'Contact',
    type: 'button',
  }, 
];

const aboutSections = [
  {
    id: '1',
    title: 'Transform your brand',
    content: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    linkText: 'Learn more',
    linkTo: '#',
    color: 'yellow',
    alt: 'egg',
    width: 'small',
    startWithImage: false,
    smallScreenImage: images.smTransform,
    largeScreenImage: images.lgTransform,
  },
  {
    id: '2',
    title: 'Stand out to the right audience',
    content: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    linkText: 'Learn more',
    linkTo: '#',
    color: 'red',
    alt: 'glass',
    width: 'large',
    startWithImage: true,
    smallScreenImage: images.smStandOut,
    largeScreenImage: images.lgStandOut,
  },
];

const servicesSections = [
  {
    id: '1',
    title: 'Graphic Design',
    name: 'graphicDesign',
    content: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.',

  },
  {
    id: '2',
    title: 'Photography',
    name: 'photography',
    content: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',

  },
];

const testimonials = [
  {
    id: '1',
    name: 'Emily R.',
    avatar: images.emily,
    quote: 'We put our trust in Sunnyside and they delivered, making sure out needs were met and deadlines were always hit.',
    occupation: 'Marketing Director',
  },
  {
    id: '2',
    name: 'Thomas S.',
    avatar: images.thomas,
    quote: "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
    occupation: 'Chief Operating Officer',
  },
  {
    id: '3',
    name: 'Jennie F.',
    avatar: images.jennie,
    quote: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    occupation: 'Business Owner',
  },
];

export { links, aboutSections, servicesSections, testimonials };