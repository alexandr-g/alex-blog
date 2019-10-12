webpackJsonp([0x7f97f65f96c9],{414:function(e,a){e.exports={data:{markdownRemark:{html:'<p>Circular or cyclic dependencies could easily cause bugs in your application. When your modules reference each other you create circular dependency.</p>\n<h3 id="introducing-madge"><a href="#introducing-madge" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introducing Madge</h3>\n<p><a href="https://www.npmjs.com/package/madge">Madge</a> is a great npm package to check for circular dependencies</p>\n<blockquote>\n<p>Madge is a developer tool for generating a visual graph of your module dependencies, finding circular dependencies, and give you other useful info. Joel Kemp\'s awesome dependency-tree is used for extracting the dependency tree.</p>\n</blockquote>\n<blockquote>\n<ul>\n<li>Works for JavaScript (AMD, CommonJS, and ES6 modules)</li>\n<li>Also works for CSS preprocessors (Sass, Stylus, and Less)</li>\n<li>NPM installed dependencies are excluded by default (can be enabled)</li>\n<li>All core Node.js modules (assert, path, fs, etc) are excluded</li>\n<li>ill traverse child dependencies automatically</li>\n</ul>\n</blockquote>\n<h4 id="global-installation"><a href="#global-installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Global installation</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> -g i madge\n\nor\n\n<span class="token function">yarn</span> global <span class="token function">add</span> madge</code></pre>\n      </div>\n<h4 id="check-for-circular-dependencies-locally"><a href="#check-for-circular-dependencies-locally" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Check for circular dependencies locally</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">madge <span class="token builtin class-name">.</span> -c --no-spinner</code></pre>\n      </div>\n<img width="344" alt="Screen Shot 2019-06-26 at 12 14 52" src="https://user-images.githubusercontent.com/9251327/60172085-3bb11000-980c-11e9-820f-21c0bd368a52.png">\n<h3 id="automate-circular-dependency-check-with-ci-pipeline"><a href="#automate-circular-dependency-check-with-ci-pipeline" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Automate circular dependency check with CI pipeline</h3>\n<p>I would recommend to include circular dependency check as a part of your CI pipeline and make it required so you can be sure that with new changes to the codebase you do not introduce circular dependencies.</p>\n<p>Just add the madge command to your <code class="language-text">package.json</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"find-circular-dependencies"</span><span class="token operator">:</span>\n      <span class="token string">"madge --webpackConfig=./packages/main webpack.config.js --circular --warning --no-spinner src packages"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Include <code class="language-text">madge</code> in your dev dependencies</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> i --only<span class="token operator">=</span>dev madge\n\nor\n\n<span class="token function">yarn</span> <span class="token function">add</span> -D madge</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"madge"</span><span class="token operator">:</span> <span class="token string">"3.4.4"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><img src="https://user-images.githubusercontent.com/9251327/60172092-3fdd2d80-980c-11e9-8faf-cdeaef51d4a1.png" alt="Screen Shot 2019-06-25 at 17 33 56"></p>',timeToRead:1,excerpt:"Circular or cyclic dependencies could easily cause bugs in your application. When your modules reference each other you create circular…",frontmatter:{title:"How to avoid circular dependencies in your JavaScript monorepo",cover:"https://images.unsplash.com/photo-1478754117940-f5bc84311001?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80%20750w",date:"2019-06-26",category:"tech",tags:["javascript","IT","tech","code","programming"],author:"alex"},fields:{slug:"/how-to-avoid-circular-dependencies-in-your-java-script-monorepo"}},prev:{excerpt:" is a handy high-order component from   package which gives you access to   and   props which you can use for…",frontmatter:{title:"How to test React component wrapped in withRouter HOC",cover:"https://images.unsplash.com/photo-1561736778-92e52a7769ef",date:"2019-07-25"},fields:{slug:"/how-to-test-react-component-wrapped-in-with-router-hoc"}},next:{excerpt:"Back in the September this year, I visited for the first time San Francisco. It was my first visit to the USA…",frontmatter:{title:"Reactathon 2018 React Conference in San Francisco",cover:"https://images.unsplash.com/photo-1449034446853-66c86144b0ad",date:"2018-11-12"},fields:{slug:"/reactathon-2018-react-conference-in-san-francisco"}},authors:{edges:[{node:{id:"alex",name:"Alexander Grischuk",image:"https://www.dropbox.com/s/ifvhc39k53udz1e/profile-pic-size.jpg?raw=1",url:"https://www.linkedin.com/in/alxgi/",bio:"Frontend Engineer at Signavio. I like to build apps with React while keeping good UX in mind."}}]}},pathContext:{slug:"/how-to-avoid-circular-dependencies-in-your-java-script-monorepo",total:9,prev:"/how-to-test-react-component-wrapped-in-with-router-hoc",next:"/reactathon-2018-react-conference-in-san-francisco"}}}});
//# sourceMappingURL=path---how-to-avoid-circular-dependencies-in-your-java-script-monorepo-7b300b0ecee21a8cd3b3.js.map