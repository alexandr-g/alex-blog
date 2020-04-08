module.exports = (plop) => {
  // blog post boilerplate
  plop.setGenerator('blogpost', {
    description:
      'generates a new blogpost with respective file structure and meta data',
    prompts: [
      {
        type: 'directory',
        name: 'blogPostDirectoryName',
        message: 'blog post date in <year-month-day> format',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'content/posts/{{blogPostDirectoryName}}/index.md',
        templateFile: 'plop-templates/types/empty-blogpost.md',
      },
    ],
  })
}
