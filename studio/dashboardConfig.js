export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624482d969e930213d2d658d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rdeq5huy',
                  apiId: '6d781267-ad12-45bf-a0ea-5f57edf8ae58'
                },
                {
                  buildHookId: '624482d91a84470ca3471cb1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vfweoby7',
                  apiId: 'f32c60b7-76e5-41fa-b86a-39bfe614e216'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/InsafInhaam/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vfweoby7.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
