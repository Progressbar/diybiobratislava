/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const baseName = 'DIYbio Bratislava';

const siteConfig = {
  noIndex: true,
  title: baseName,
  tagline: baseName,
  url: 'https://diybiobratislava.netlify.com/',
  baseUrl: '/' /* base url for your project */,
  projectName: baseName,
  // useEnglishUrl: true,
  headerLinks: [
    {doc: 'doc1', label: 'Docs'},
    {languages: false},
    {search: false},
    {blog: false},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: new Date().getFullYear() + ' ' + baseName,
  organizationName: baseName,
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/Progressbar/diybiobratislava-web',
};

module.exports = siteConfig;
