import{_ as t,V as a,W as c,X as e,Y as o,$ as n,Z as s,F as d}from"./framework-44a66fc7.js";const i={},l=e("h1",{id:"dockerapi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dockerapi","aria-hidden":"true"},"#"),o(" DockerAPI")],-1),h={href:"https://docs.docker.com/engine/api/sdk/",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>DockerAPI是Docker的SDK，以编程的方式与Docker进行交互，例如拉取镜像，运行容器，这个教程只是简单的讲解如何去使用DockerAPI，在官方文档中对每一个API有着更详细的解释。官方API只有Go和Python版本，并且Docker本身也支持HTTP进行交互，如果是其他语言的话可以使用第三方社区开源的SDK，本教程将采用Go语言进行讲解。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>使用Go Get 安装Docker Client。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get github.com/docker/docker/client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function _(p,u){const r=d("ExternalLinkIcon");return a(),c("div",null,[l,e("p",null,[o("文档："),e("a",h,[o("Develop with Docker Engine SDKs | Docker Documentation"),n(r)])]),k])}const m=t(i,[["render",_],["__file","DockerAPI.html.vue"]]);export{m as default};