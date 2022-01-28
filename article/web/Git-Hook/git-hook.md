

## 使用husky, commitizen,cz-customizable,commitlint,lint-staged, prettier 规范Git 提交

在我们平时使用git中，提交信息是通过以下方式提交的

![image-20220128104028055](C:\Users\93628\Desktop\rewrite\article\web\Git-Hook\images\image-20220128104028055.png)

有的还会这样写

![image-20220128103515896](C:\Users\93628\Desktop\rewrite\article\web\Git-Hook\images\image-20220128103515896.png)

这些不统一的git 提交信息，在后续项目代码的合并、版本发布和排查BUG都会带来麻烦，因为我们很难在短时间内清楚这次的提交包含了什么，是否应该合并发布等等。

为了解决这些问题，我们就需要对git的提交指定规范，例如下面这样的提交信息

![image-20220128104510458](C:\Users\93628\Desktop\rewrite\article\web\Git-Hook\images\image-20220128104510458.png)

ok，那么我们让团队成员都按照图片的提交规范提交Git 信息是否就好了呢

其实不是的，首先如果我们每次都这么写这些提交信息，无疑是很麻烦的，加上没有限制，那么我们是可以随意提交的，规范提交信息只能靠自觉，那肯定是不行的，那么我们就需要借助工具来帮助我们来填写规范的信息了。

本次用到的工具及其功能如下，使用这些工具，我们就能规范好Git 提交信息了

- **husky** 

  husky 是给Git 提交过程中添加钩子，例如git commit 前和coomit 后去执行判断和回调等，在commit 阶段我们就可以检查commit 信息等是否符合规范，如果不符合规范就直接中止提交报错等

- ***commitizen*** 

  commitizen 是帮助我们填写提交规范的工具，使用它之后，我们提交代码就使用 ***git cz***就好，commitizen会引导我们填写必要的信息

- ***cz-customizable***

​		配置 commit 时候的步骤和提交类型等

* ***commitlint***

​		校验commit信息是否符合规范，在git 的钩子 ***commit-msg*** 中使用

* ***lint-staged***

  检查修改要提交的代码是否符合代码格式要求和触发执行格式化插件 ***prettier***,也是在git 钩子 ***pre-commit*** 中使用

* ***prettier***

  格式化代码

  ---

  

  ### 安装过程

  那么接下来，我们就开始安装了

  首先我们用Vue-cli 创建一个工称项目(用别的工程项目也行)

  ----

  ###### 1.安装commitizen

  推荐使用 管理员权限 来安装

  ![image-20220128112959624](C:\Users\93628\Desktop\rewrite\article\web\Git-Hook\images\image-20220128112959624.png)

  ```javascript
  npm install -g commitizen
  ```

  

  ###### 2. 安装cz-customizable
  
  ```javascript
   yarn add cz-customizable -D
  ```

  然后在***package.json***添加如下配置
  
  ```javascript
   "config": {
      "commitizen": {
        "path": "node_modules/cz-customizable"
      }
    }
  ```

  ![image-20220128113408900](C:\Users\93628\Desktop\rewrite\article\web\Git-Hook\images\image-20220128113408900.png)

  

  在项目根目录下创建 ***.cz-config.js*** 的自定义提示文件

  ![image-20220128113551724](C:\Users\93628\Desktop\rewrite\article\web\Git-Hook\images\image-20220128113551724.png)
  
  ```javas
  module.exports = {
    types: [
      { value: 'init', name: 'init:     初始提交' },
      { value: 'feat', name: 'feat:     增加新功能' },
      { value: 'fix', name: 'fix:      修复bug' },
      { value: 'ui', name: 'ui:       更新UI' },
      { value: 'refactor', name: 'refactor: 代码重构' },
      { value: 'release', name: 'release:  发布' },
      { value: 'deploy', name: 'deploy:   部署' },
      { value: 'docs', name: 'docs:     修改文档' },
      { value: 'test', name: 'test:     增删测试' },
      { value: 'chore', name: 'chore:    更改配置文件' },
      { value: 'style', name: 'style:    样式修改不影响逻辑' },
      { value: 'revert', name: 'revert:   版本回退' },
      { value: 'add', name: 'add:      添加依赖' },
      { value: 'minus', name: 'minus:    版本回退' },
      { value: 'del', name: 'del:      删除代码/文件' }
    ],
    scopes: [
      { name: 'components' },
      { name: 'utils' },
      { name: 'styles' },
      { name: 'deps' },
      { name: 'other' }
    ],
    messages: {
      type: '选择更改类型:\n',
      // 如果allowcustomscopes为true，则使用
      scope: '选择一个 scope（可选）：\n',
      customScope: '请输入自定义的 scope：',
      subject: '简短描述:\n',
      body: '详细描述. 使用"|"换行:\n',
      breaking: 'Breaking Changes列表:\n',
      footer: '关闭的issues列表. E.g.: #31, #34:\n',
      confirmCommit: '确认提交?'
    },
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix']
  }
  
  ```
  
  因为使用了commitizen，所以我们能用***git cz*** 这个命令提交代码，然后我们在 ***package.json*** 文件中配置的 ***config***
  
  ```javascript
   "config": {
      "commitizen": {
        "path": "node_modules/cz-customizable"
      }
    }
  ```
  
  通过这个配置，我们就能使用cz-customizable，然后调用 ***.cz-config.js*** 文件中的自定义配置来提交代码了
  
  接下来我们在命令行 输入 git cz 就会出现提交信息的提交提示
  
  ![image-20220128114153227](C:\Users\93628\Desktop\rewrite\article\web\Git-Hook\images\image-20220128114153227.png)
  
  ![image-20220128114225192](C:\Users\93628\Desktop\rewrite\article\web\Git-Hook\images\image-20220128114225192.png)
  
  到这里我们的工作是不是已经完成了呢，其实不是，我们仍然是可以通过git commit 来提交代码的，并没有强制规范commit的提交格式，代码提交时候的格式校验也是没有
  
  接下来我们就需要加上这些

###### 3.配置`husky`

* 安装

  ```javas
   yarn add husky -D
  ```

* 执行完下面命令后，根目录会出现一个`.husky`的目录。

  ```javas
   yarn husky install
  ```

* 为了保证其他人下载项目代码以后，自动启用`hook`，所以需要在`package.json`的`scripts`中加入`"postinstall": "husky install"`，例如：

```js
    {
      "scripts": {
        "postinstall": "husky install"
      }
    }
```



###### 4.配置`commitlint`

* 安装

  ```javas
  yarn add @commitlint/cli @commitlint/config-conventional -D
  ```

* 创建配置文件夹

  ```javas
  echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
  ```

* 增加commit-msg 钩子

  ```javas
  yarn husky add .husky/commit-msg 'yarn commitlint --edit "$1"'
  ```

* 然后在对应的勾子文件 ***.husky/commit-msg*** 中，增加一行 `. "$(dirname "$0")/common.sh"` 代码

  ```javas
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"
  . "$(dirname "$0")/common.sh"
  
  yarn …
  ```



###### 5.`lint-staged`

* 安装

  ```javas
   yarn add lint-staged -D
  ```

* 根目录创建 `.lintstagedrc` 配置文件

  ```javascript
   {
        "./src/**/*.{js,jsx,ts,tsx,vue,less,sass,scss,css.json}": ["prettier --write"],
  }
  ```



###### 6.配置`prettier`

*  安装

  ```javas
   yarn add prettier -D
  ```

* 根目录创建`.prettierrc.js`文件

```javascript
// 详见https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 80, // 每行的长度
  tabWidth: 2, // 缩进的空格数
  useTabs: false, // 用tabs而不是空格缩进
  semi: true, // 每个语句末尾是否加分号，false只有在编译报错时才加
  singleQuote: false, // 使用单引号代替双引号，jsx引号规则将会忽略此配置。
  quoteProps: "as-needed", //
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  trailingComma: "es5", // 是否有末尾的逗号，例如数组或对象的最后一项。/es5/none/all
  bracketSpacing: false, // 在对象字面量{}的语法中打印空格
  jsxBracketSameLine: false, // 开始标签的>是否和之前内容在同一行
  arrowParens: "always", // 箭头函数的参数是否加括号 /always/avoid
  rangeStart: 0, // 需要格式化的开始位置
  rangeEnd: Infinity, // 需要格式化的结束位置
};
```



###### 7. 配置`pre commit`钩子

* 执行下面命令，会在`.husky`目录下面有个文件`pre-commit`

```javas
yran prettier "./src/**/*.{js,jsx,ts,tsx,vue,less,sass,scss,css.json}" --write && yarn lint
```



参照

[vue项目集成husky, commitlint, lint-staged, prettier总结](https://juejin.cn/post/6979515308143263751#heading-1)
