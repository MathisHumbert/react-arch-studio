import React from 'react';
import mobileImages from '../assets/portfolio/mobile';
import aboutImages from '../assets/about';
import contactImages from '../assets/contact';

export const portfolioData = [
  {
    img: {
      mobile: mobileImages.seraph,
      tablet: '',
      desktop: '',
    },
    title: 'Seraph Station',
    date: 'September 2019',
  },
  {
    img: {
      mobile: mobileImages.eebox,
      tablet: '',
      desktop: '',
    },
    title: 'Eebox Building',
    date: 'August 2017',
  },
  {
    img: {
      mobile: mobileImages.federal,
      tablet: '',
      desktop: '',
    },
    title: 'Federal II Tower',
    date: 'March 2017',
  },
  {
    img: {
      mobile: mobileImages.delSol,
      tablet: '',
      desktop: '',
    },
    title: 'Project Del Sol',
    date: 'January 2016',
  },
  {
    img: {
      mobile: mobileImages.prot,
      tablet: '',
      desktop: '',
    },
    title: 'Le Prototype',
    date: 'October 2015',
  },
  {
    img: {
      mobile: mobileImages.image228b,
      tablet: '',
      desktop: '',
    },
    title: '228B Tower',
    date: 'April 2015',
  },
  {
    img: {
      mobile: mobileImages.edelweiss,
      tablet: '',
      desktop: '',
    },
    title: 'Grand Edelweiss Hotel',
    date: 'Decamber 2013',
  },
  {
    img: {
      mobile: mobileImages.netcry,
      tablet: '',
      desktop: '',
    },
    title: 'Netcry Tower',
    date: 'August 2012',
  },
  {
    img: {
      mobile: mobileImages.hypers,
      tablet: '',
      desktop: '',
    },
    title: 'Hypers',
    date: 'January 2012',
  },
  {
    img: {
      mobile: mobileImages.sxiv,
      tablet: '',
      desktop: '',
    },
    title: 'SXIV Tower',
    date: 'March 2010',
  },
  {
    img: {
      mobile: mobileImages.trinity,
      tablet: '',
      desktop: '',
    },
    title: 'Trinity Bank Tower',
    date: 'September 2010',
  },
  {
    img: {
      mobile: mobileImages.paramour,
      tablet: '',
      desktop: '',
    },
    title: 'Project Paramour',
    date: 'February 2008',
  },
];

export const featuredData = [
  {
    img: {
      mobile: mobileImages.delSol,
      tablet: '',
      desktop: '',
    },
    title: 'Project Del Sol',
    link: true,
  },
  {
    img: {
      mobile: mobileImages.federal,
      tablet: '',
      desktop: '',
    },
    title: 'Federal II Tower',
    link: true,
  },
  {
    img: {
      mobile: mobileImages.prot,
      tablet: '',
      desktop: '',
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
  title: 'Tell us about your project',
  text: 'We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!',
};
