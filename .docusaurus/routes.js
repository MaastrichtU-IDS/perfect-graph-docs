
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','828'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','e9a'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','b61'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','ff5'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','ca9'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','23b'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','23a'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','424'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','322'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','13d'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','d56'),
  exact: true,
},
{
  path: '/docs/advanced-guides/plugins',
  component: ComponentCreator('/docs/advanced-guides/plugins','a69'),
  exact: true,
},
{
  path: '/docs/advanced-guides/themes',
  component: ComponentCreator('/docs/advanced-guides/themes','d55'),
  exact: true,
},
{
  path: '/docs/components/graph',
  component: ComponentCreator('/docs/components/graph','867'),
  exact: true,
},
{
  path: '/docs/components/graph-editor',
  component: ComponentCreator('/docs/components/graph-editor','816'),
  exact: true,
},
{
  path: '/docs/components/image',
  component: ComponentCreator('/docs/components/image','442'),
  exact: true,
},
{
  path: '/docs/components/pressable',
  component: ComponentCreator('/docs/components/pressable','731'),
  exact: true,
},
{
  path: '/docs/components/templates/profile',
  component: ComponentCreator('/docs/components/templates/profile','c42'),
  exact: true,
},
{
  path: '/docs/components/text',
  component: ComponentCreator('/docs/components/text','da4'),
  exact: true,
},
{
  path: '/docs/components/view',
  component: ComponentCreator('/docs/components/view','8f1'),
  exact: true,
},
{
  path: '/docs/examples/create-a-blog-post',
  component: ComponentCreator('/docs/examples/create-a-blog-post','de0'),
  exact: true,
},
{
  path: '/docs/examples/create-a-document',
  component: ComponentCreator('/docs/examples/create-a-document','132'),
  exact: true,
},
{
  path: '/docs/examples/create-a-page',
  component: ComponentCreator('/docs/examples/create-a-page','895'),
  exact: true,
},
{
  path: '/docs/examples/markdown-features',
  component: ComponentCreator('/docs/examples/markdown-features','8cd'),
  exact: true,
},
{
  path: '/docs/examples/thank-you',
  component: ComponentCreator('/docs/examples/thank-you','469'),
  exact: true,
},
{
  path: '/docs/getting-started/configuration',
  component: ComponentCreator('/docs/getting-started/configuration','a9d'),
  exact: true,
},
{
  path: '/docs/getting-started/installation',
  component: ComponentCreator('/docs/getting-started/installation','4af'),
  exact: true,
},
{
  path: '/docs/guides/layout/flex-layout',
  component: ComponentCreator('/docs/guides/layout/flex-layout','b88'),
  exact: true,
},
{
  path: '/docs/perfect-graph/contributing',
  component: ComponentCreator('/docs/perfect-graph/contributing','0e8'),
  exact: true,
},
{
  path: '/docs/perfect-graph/design-principles',
  component: ComponentCreator('/docs/perfect-graph/design-principles','4dc'),
  exact: true,
},
{
  path: '/docs/perfect-graph/introduction',
  component: ComponentCreator('/docs/perfect-graph/introduction','966'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
