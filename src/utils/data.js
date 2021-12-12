import React from 'react';
import mobilePortfolioImages from '../assets/portfolio/mobile';
import tabletPortfolioImages from '../assets/portfolio/tablet';
import aboutImages from '../assets/about';
import contactImages from '../assets/contact';

export const portfolioData = [
  {
    img: {
      mobile: mobilePortfolioImages.seraph,
      tablet: tabletPortfolioImages.seraph,
      desktop: '',
    },
    title: 'Seraph Station',
    date: 'September 2019',
  },
  {
    img: {
      mobile: mobilePortfolioImages.eebox,
      tablet: tabletPortfolioImages.eebox,
      desktop: '',
    },
    title: 'Eebox Building',
    date: 'August 2017',
  },
  {
    img: {
      mobile: mobilePortfolioImages.federal,
      tablet: tabletPortfolioImages.federal,
      desktop: '',
    },
    title: 'Federal II Tower',
    date: 'March 2017',
  },
  {
    img: {
      mobile: mobilePortfolioImages.delSol,
      tablet: tabletPortfolioImages.delSol,
      desktop: '',
    },
    title: 'Project Del Sol',
    date: 'January 2016',
  },
  {
    img: {
      mobile: mobilePortfolioImages.prot,
      tablet: tabletPortfolioImages.prot,
      desktop: '',
    },
    title: 'Le Prototype',
    date: 'October 2015',
  },
  {
    img: {
      mobile: mobilePortfolioImages.image228b,
      tablet: tabletPortfolioImages.image228b,
      desktop: '',
    },
    title: '228B Tower',
    date: 'April 2015',
  },
  {
    img: {
      mobile: mobilePortfolioImages.edelweiss,
      tablet: tabletPortfolioImages.edelweiss,
      desktop: '',
    },
    title: 'Grand Edelweiss Hotel',
    date: 'Decamber 2013',
  },
  {
    img: {
      mobile: mobilePortfolioImages.netcry,
      tablet: tabletPortfolioImages.netcry,
      desktop: '',
    },
    title: 'Netcry Tower',
    date: 'August 2012',
  },
  {
    img: {
      mobile: mobilePortfolioImages.hypers,
      tablet: tabletPortfolioImages.hypers,
      desktop: '',
    },
    title: 'Hypers',
    date: 'January 2012',
  },
  {
    img: {
      mobile: mobilePortfolioImages.sxiv,
      tablet: tabletPortfolioImages.sxiv,
      desktop: '',
    },
    title: 'SXIV Tower',
    date: 'March 2010',
  },
  {
    img: {
      mobile: mobilePortfolioImages.trinity,
      tablet: tabletPortfolioImages.trinity,
      desktop: '',
    },
    title: 'Trinity Bank Tower',
    date: 'September 2010',
  },
  {
    img: {
      mobile: mobilePortfolioImages.paramour,
      tablet: tabletPortfolioImages.paramour,
      desktop: '',
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
      desktop: '',
    },
    title: 'Project Del Sol',
    link: true,
  },
  {
    img: {
      mobile: mobilePortfolioImages.federal,
      tablet: tabletPortfolioImages.federal,
      desktop: '',
    },
    title: 'Federal II Tower',
    link: true,
  },
  {
    img: {
      mobile: mobilePortfolioImages.prot,
      tablet: tabletPortfolioImages.prot,
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
