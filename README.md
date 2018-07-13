# template-vue-ui

Vue 组件库脚手架

## 初始化组件库

```bash
npm i sao -g

sao kaola-fed/template-vue-ui [folderName] -u
```

按照提示进行输入：

输入 scope 定义组件库的 npm 域，如 kaolaui，项目组件会放到 kaolaui 的域下。

输入 prefix 定义组件明年前缀，如 kl，新建组件时会自动命名为 kl-button、kl-modal 等。

### 组件开发

在组件库项目跟目录下

```bash
npm run create:comp
```

按照提示进行输入组件名称，自动在 packages 目录下创建组件目录 xxxx，生成的组件会自动命名为 `kl-xxxx`。

开发时请执行 dev npm 脚本，启动 [storybook](https://github.com/storybooks/storybook)，可以在浏览器打开 storybook 页面，在 .sotries.js 文件写 demo，进行调试，可以为组件的各种特性写指定的 story，直接在 storybook 进行展示。组件完成后，也可以直接利用 storybook 生成站点，而无需另外开发站点。

目前，组件库里面已经集成了几种常用插件，可以根据需要进行修改：

[@storybook/addon-knobs](https://github.com/storybooks/storybook/blob/master/addons/knobs/README.md)
[@storybook/addon-actions](https://github.com/storybooks/storybook/blob/master/addons/actions/README.md)
[storybook-readme](https://github.com/tuchk4/storybook-readme)
[@storybook/addon-storysource](https://github.com/storybooks/storybook/blob/master/addons/storysource/README.md)
[@storybook/addon-viewport](https://github.com/storybooks/storybook/blob/master/addons/viewport/README.md)
[@storybook/addon-links](https://github.com/storybooks/storybook/blob/master/addons/links/README.md)
[@storybook/addon-options](https://github.com/storybooks/storybook/blob/master/addons/options/README.md)

```bash
npm run dev
```

### 单元测试

组件完成后，一定要编写单元测试，目前已经把 [jest](https://jestjs.io) 和 [vue-test-utils](https://vue-test-utils.vuejs.org) 集成其中，以保证组件库质量。

```bash
npm run test
```

### 代码质量

组件库集成了 `commitlint` 和 `eslint`，代码提交前，不仅会进行代码风格检查，还会检查 commit message 的格式。

commitlint 配置了 [Angular](https://github.com/marionebl/commitlint/tree/master/@commitlint/config-angular) 风格。

eslint 配置了 [eslint-config-kaola/next](https://github.com/kaola-fed/eslint-config-kaola)。

在发布正式版时，会根据 commit 自动更新 CHANGELOG.md，所以一定要注意 commit message 的格式和内容。

### 持续集成

请自行配置

## 组件目录

```
├── README.md
├── commitlint.config.js // commitlint 配置
├── .gitignore
├── jest.config.js // jest 配置
├── lerna.json // lerna 配置
├── library.config.js // 组件库配置
├── package.json
├── .npmrc // npm 配置
├── .storybook // storybook 目录
│   ├── addons.js // storybook 插件
│   ├── config.js // storybook 配置
│   ├── helper.js
│   ├── index.js // storybook 首页
│   └── webpack.config.js
├── packages // 组件包目录
│   └── demo // 组件目录
│       ├── README.md // 组件文档，会被引入到 stories
│       ├── index.js // 组件入口，挂载 install 方法
│       ├── package.json
│       ├── src
│       │   └── index.vue // 组件，自动命名为 ${prefix}-demo
│       ├── stories // demo 目录，会生成 storybook 目录
│       │   └── index.stories.js
│       └── test // 测试
│           └── index.spec.js
└── scripts
    └── component-template // 单个组件模版，可以修改每次新增的组件模版，自动引入 mixin、style 等
        ├── helper.js
        ├── sao.js
        └── template
            └── packages
                └── <%=\ componentName\ %>
                    ├── README.md
                    ├── index.js
                    ├── package.json
                    ├── src
                    │   └── index.vue
                    ├── stories
                    │   └── index.stories.js
                    └── test
                        └── index.spec.js
```

## 发布

发布预发版，版本号 `x.x.x-beta.x`，npm `beta` 分支 。

```bash
npm run prerelease
```

发布正式版，版本号 `x.x.x`，同时会收集 commit 信息更新到 CHANGELOG.md 上。

```bash
npm run release
```
