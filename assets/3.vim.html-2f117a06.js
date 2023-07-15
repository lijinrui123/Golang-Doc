import{_ as e,V as d,W as c,Z as o}from"./framework-44a66fc7.js";const p={},a=o('<h1 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> Vim</h1><p>Vim主要分为三种模式，编辑模式，命令模式，一般模式</p><h2 id="一般模式" tabindex="-1"><a class="header-anchor" href="#一般模式" aria-hidden="true">#</a> 一般模式</h2><p>进入到一般模式需要按<code>ECS</code>键</p><p><code>yy</code>拷贝一行</p><p><code>[n]yy</code>，n为数字，即拷贝n行</p><p><code>p</code>即粘贴，将上一次拷贝的结果粘贴</p><p><code>[n]p</code>，n为数字，将上一次拷贝的结果粘贴n次</p><p><code>dd</code>删除一行</p><p><code>[n]dd</code>删除n行</p><p><code>gg</code>，将光标跳动文件第一行</p><p><code>G</code>，将光标跳到文件最后一行</p><p><code>n+shift+g</code>，将文件定位到第n行</p><p><code>u</code>，撤回上一次操作</p><p><code>[n]u</code>，n为数字，撤回前n次操作</p><h2 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h2><p><code>:q</code>退出</p><p><code>:q!</code>强制退出</p><p><code>:wq</code>保存并退出</p><p><code>:wq!</code>强制保存并退出</p><p><code>:set nu</code>打开行号</p><p><code>:set nonu</code>关闭行号</p><h2 id="编辑模式" tabindex="-1"><a class="header-anchor" href="#编辑模式" aria-hidden="true">#</a> 编辑模式</h2><p>进入到编辑模式需要在一般模式下按<code>a</code>或者<code>i</code>键</p>',24),n=[a];function i(r,t){return d(),c("div",null,n)}const s=e(p,[["render",i],["__file","3.vim.html.vue"]]);export{s as default};