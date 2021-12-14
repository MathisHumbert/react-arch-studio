import mobilePortfolioImages from '../assets/portfolio/mobile';
import tabletPortfolioImages from '../assets/portfolio/tablet';
import desktopPortfolioImages from '../assets/portfolio/desktop';
import aboutImages from '../assets/about';
import contactImages from '../assets/contact';
import desktopImages from '../assets/home/desktop';

export const portfolioData = [
  {
    img: {
      mobile: mobilePortfolioImages.seraph,
      tablet: tabletPortfolioImages.seraph,
      desktop: desktopPortfolioImages.seraph,
    },
    title: 'Seraph Station',
    date: 'September 2019',
  },
  {
    img: {
      mobile: mobilePortfolioImages.eebox,
      tablet: tabletPortfolioImages.eebox,
      desktop: desktopPortfolioImages.eebox,
    },
    title: 'Eebox Building',
    date: 'August 2017',
  },
  {
    img: {
      mobile: mobilePortfolioImages.federal,
      tablet: tabletPortfolioImages.federal,
      desktop: desktopPortfolioImages.federal,
    },
    title: 'Federal II Tower',
    date: 'March 2017',
  },
  {
    img: {
      mobile: mobilePortfolioImages.delSol,
      tablet: tabletPortfolioImages.delSol,
      desktop: desktopPortfolioImages.delSol,
    },
    title: 'Project Del Sol',
    date: 'January 2016',
  },
  {
    img: {
      mobile: mobilePortfolioImages.prot,
      tablet: tabletPortfolioImages.prot,
      desktop: desktopPortfolioImages.prot,
    },
    title: 'Le Prototype',
    date: 'October 2015',
  },
  {
    img: {
      mobile: mobilePortfolioImages.image228b,
      tablet: tabletPortfolioImages.image228b,
      desktop: desktopPortfolioImages.image228b,
    },
    title: '228B Tower',
    date: 'April 2015',
  },
  {
    img: {
      mobile: mobilePortfolioImages.edelweiss,
      tablet: tabletPortfolioImages.edelweiss,
      desktop: desktopPortfolioImages.edelweiss,
    },
    title: 'Grand Edelweiss Hotel',
    date: 'Decamber 2013',
  },
  {
    img: {
      mobile: mobilePortfolioImages.netcry,
      tablet: tabletPortfolioImages.netcry,
      desktop: desktopPortfolioImages.netcry,
    },
    title: 'Netcry Tower',
    date: 'August 2012',
  },
  {
    img: {
      mobile: mobilePortfolioImages.hypers,
      tablet: tabletPortfolioImages.hypers,
      desktop: desktopPortfolioImages.hypers,
    },
    title: 'Hypers',
    date: 'January 2012',
  },
  {
    img: {
      mobile: mobilePortfolioImages.sxiv,
      tablet: tabletPortfolioImages.sxiv,
      desktop: desktopPortfolioImages.sxiv,
    },
    title: 'SXIV Tower',
    date: 'March 2010',
  },
  {
    img: {
      mobile: mobilePortfolioImages.trinity,
      tablet: tabletPortfolioImages.trinity,
      desktop: desktopPortfolioImages.trinity,
    },
    title: 'Trinity Bank Tower',
    date: 'September 2010',
  },
  {
    img: {
      mobile: mobilePortfolioImages.paramour,
      tablet: tabletPortfolioImages.paramour,
      desktop: desktopPortfolioImages.paramour,
    },
    title: 'Project Paramour',
    date: 'February 2008',
  },
];

export const featuredData = [
  {
    img: {
      mobile: mobilePortfolioImages.delSol,
      tablet: tabletPortfolioImages.delSol,
      desktop: desktopPortfolioImages.seraph,
    },
    title: 'Project Del Sol',
    link: true,
  },
  {
    img: {
      mobile: mobilePortfolioImages.federal,
      tablet: tabletPortfolioImages.federal,
      desktop: desktopPortfolioImages.federal,
    },
    title: 'Federal II Tower',
    link: true,
  },
  {
    img: {
      mobile: mobilePortfolioImages.prot,
      tablet: tabletPortfolioImages.prot,
      desktop: desktopPortfolioImages.prot,
    },
    title: 'Le Prototype',
    link: true,
  },
];

export const aboutHeaderData = {
  img: {
    mobile: aboutImages.mobile,
    tablet: aboutImages.tablet,
    desktop: aboutImages.desktop,
  },
  bigTitle: 'About',
  title: 'Your team of professionals',
  text: 'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.',
};

export const aboutLeaderData = [
  {
    img: aboutImages.jake,
    name: 'Jake Richards',
    job: 'Chief Architect',
  },
  {
    img: aboutImages.thompson,
    name: 'Thompson Smith',
    job: 'Head of Finance',
  },
  {
    img: aboutImages.jackson,
    name: 'Jackson Rourke',
    job: 'Lead Designer',
  },
  {
    img: aboutImages.maria,
    name: 'Maria Simpson',
    job: 'Senior Architect',
  },
];

export const contactHeaderData = {
  img: {
    mobile: contactImages.mobileHeader,
    tablet: contactImages.tabletHeader,
    desktop: contactImages.desktopHeader,
  },
  bigTitle: 'Contact',
  title: 'Tell us about your project',
  text: 'We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!',
};

export const sliderData = [
  {
    id: 0,
    title: 'Project Paramour',
    text: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
    img: desktopImages.paramour,
  },
  {
    id: 1,
    title: 'Seraph Station',
    text: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
    img: desktopImages.seraph,
  },
  {
    id: 2,
    title: 'Federal II Tower',
    text: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
    img: desktopImages.federal,
  },
  {
    id: 3,
    title: 'Trinity Bank Tower',
    text: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
    img: desktopImages.trinity,
  },
];
