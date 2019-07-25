webpackJsonp([0xe73e72af2fef],{393:function(n,s){n.exports={data:{markdownRemark:{html:'<p><code>withRouter</code> is a handy high-order component from <code>react-router</code> package which gives you access to <code>match</code> and <code>history</code> props which you can use for performing navigation inside your React application. If you want to test React components wrapped in <code>withRouter</code> you\'ll need the following.</p>\n<p>Let\'s say you have some component:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// PollDetails.js</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> withRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">PollDetails</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> match<span class="token punctuation">,</span> history <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>Fragment<span class="token operator">></span>\n      <span class="token operator">&lt;</span>header<span class="token operator">></span>Question Detail<span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>\n      <span class="token operator">&lt;</span>div<span class="token operator">></span>No question found<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token string">`/`</span></span><span class="token punctuation">}</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>button<span class="token operator">></span>Go back<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>Fragment<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>PollDetails<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h3 id="trying-to-render-withrouter-component-with-the-enzyme-mount-will-result-in-an-error"><a href="#trying-to-render-withrouter-component-with-the-enzyme-mount-will-result-in-an-error" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Trying to render <code>withRouter</code> component with the enzyme <code>mount</code> will result in an error</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// PollDetails.spec.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span>\n\n<span class="token keyword">import</span> PollDetails <span class="token keyword">from</span> <span class="token string">\'./PollDetails\'</span>\n\n<span class="token keyword">let</span> component\n\n<span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  component <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>PollDetails <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render page heading.\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">\'Question Detail\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render "no question found" message if question is not present.\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">\'No question found\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>will lead to Invariant and a very common error that you might see working <code>withRouter</code> HOC</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>Invariant failed: You should not use <span class="token operator">&lt;</span>withRouter<span class="token punctuation">(</span>PollDetails<span class="token punctuation">)</span> /<span class="token operator">></span> outside a <span class="token operator">&lt;</span>Router<span class="token operator">></span>\n</code></pre>\n      </div>\n<img width="700" alt="Screen Shot 2019-07-25 at 18 32 34" src="https://user-images.githubusercontent.com/9251327/61891791-c586f280-af0a-11e9-9b51-344bd4a29fec.png">\n<h3 id="using-shallow-rendering"><a href="#using-shallow-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using <code>shallow</code> rendering</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// PollDetails.spec.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span>\n\n<span class="token keyword">import</span> PollDetails <span class="token keyword">from</span> <span class="token string">\'./PollDetails\'</span>\n\n<span class="token keyword">let</span> component\n\n<span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  component <span class="token operator">=</span> <span class="token function">shallow</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>PollDetails <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render page heading.\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">\'Question Detail\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render "no question found" message if question is not present.\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">\'No question found\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The error would to away but you asserting against the wrong component and all the assertions will fail:</p>\n<img width="700" alt="Screen Shot 2019-07-25 at 18 33 10" src="https://user-images.githubusercontent.com/9251327/61891795-c7e94c80-af0a-11e9-89a5-2a0ab3464d7c.png">\n<h3 id="fixing-the-error-by-accessing-wrappedcomponent"><a href="#fixing-the-error-by-accessing-wrappedcomponent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fixing the error by accessing <code>WrappedComponent</code></h3>\n<p>By using <code>PollDetails.WrappedComponent</code> we skip our <code>withRouter</code> HOC and access directly component that we want to be rendered so that we can run our assertions on it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// PollDetails.spec.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> shallow <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span>\n\n<span class="token keyword">import</span> PollDetails <span class="token keyword">from</span> <span class="token string">\'./PollDetails\'</span>\n\n<span class="token keyword">let</span> component\n\n<span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  component <span class="token operator">=</span> <span class="token function">shallow</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>PollDetails<span class="token punctuation">.</span>WrappedComponent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render page heading.\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">\'Question Detail\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render "no question found" message if question is not present.\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">\'No question found\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<img width="700" alt="Screen Shot 2019-07-25 at 18 30 58" src="https://user-images.githubusercontent.com/9251327/61891785-c3249880-af0a-11e9-8d6f-563a026d9cef.png">\n<h3 id="enzyme-full-component-rendering-using-mount-with-memoryrouter"><a href="#enzyme-full-component-rendering-using-mount-with-memoryrouter" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enzyme full component rendering using mount with MemoryRouter</h3>\n<p>What if you still want to use full rendering with enzyme <code>mount</code>?</p>\n<p>You still can do that by wrapping your component in <code>&#x3C;MemoryRouter>&#x3C;/MemoryRouter</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">// PollDetails.spec.js</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'enzyme\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MemoryRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span>\n\n<span class="token keyword">import</span> PollDetails <span class="token keyword">from</span> <span class="token string">\'./PollDetails\'</span>\n\n<span class="token keyword">let</span> component\n\n<span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  component <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>MemoryRouter<span class="token operator">></span>\n      <span class="token operator">&lt;</span>PollDetails <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>MemoryRouter<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render page heading.\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">\'Question Detail\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'should render "no question found" message if question is not present.\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token function">expect</span><span class="token punctuation">(</span>component<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">\'No question found\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>',timeToRead:3,excerpt:"withRouter  is a handy high-order component from  react-router  package which gives you access to  match  and  history  props which you can…",frontmatter:{title:"How to test React component wrapped in withRouter HOC",cover:"https://images.unsplash.com/photo-1561736778-92e52a7769ef",date:"2019-07-25",category:"tech",tags:["javascript","IT","tech","code","programming"],author:"alex"},fields:{slug:"/how-to-test-react-component-wrapped-in-with-router-hoc"}},prev:{excerpt:"How to invest in ETF? Hi there! Recently I've started to do some research on ETF topic and how I can invest in…",frontmatter:{title:"Three simple steps to invest in ETF",cover:"https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e537922f712f142b24cf9c897f0ab05&auto=format&fit=crop&w=2550&q=80",date:"2018-07-25"},fields:{slug:"/three-simple-steps-to-invest-in-etf"}},next:{excerpt:"Circular or cyclic dependencies could easily cause bugs in your application. When your modules reference each…",frontmatter:{title:"How to avoid circular dependencies in your JavaScript monorepo",cover:"https://images.unsplash.com/photo-1478754117940-f5bc84311001?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80%20750w",date:"2019-06-26"},fields:{slug:"/how-to-avoid-circular-dependencies-in-your-java-script-monorepo"}},authors:{edges:[{node:{id:"alex",name:"Alexander Grischuk",image:"https://www.dropbox.com/s/ifvhc39k53udz1e/profile-pic-size.jpg?raw=1",url:"https://www.linkedin.com/in/alxgi/",bio:"Frontend Engineer at Signavio. I like to build apps with React while keeping good UX in mind."}}]}},pathContext:{slug:"/how-to-test-react-component-wrapped-in-with-router-hoc",total:7,prev:"/three-simple-steps-to-invest-in-etf",next:"/how-to-avoid-circular-dependencies-in-your-java-script-monorepo"}}}});
//# sourceMappingURL=path---how-to-test-react-component-wrapped-in-with-router-hoc-bb6b54fdab35417a56d0.js.map