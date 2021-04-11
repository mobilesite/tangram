const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('monaco-editor-webpack-plugin')
      .use(new MonacoEditorWebpackPlugin({
        languages: [
          // 'typescript',
          'javascript',
          'css',
          // 'html',
          'json',
        ],
        features: [
          // 'accessibilityHelp',
          // 'anchorSelect',
          'bracketMatching', // 括号匹配
          // 'caretOperations',
          // 'clipboard',
          // 'codeAction',
          // 'codelens',
          // 'colorPicker',
          // 'comment',
          'contextmenu', // 右键菜单
          // 'coreCommands',
          // 'cursorUndo',
          // 'dnd',
          // 'documentSymbols',
          'find', // 查找代码
          'folding', // 折叠
          // 'fontZoom',
          'format', // 格式化
          // 'gotoError',
          // 'gotoLine',
          // 'gotoSymbol',
          'hover', // 折叠展开需要它配合
          // 'iPadShowKeyboard',
          // 'inPlaceReplace',
          // 'indentation',
          // 'inlineHints',
          // 'inspectTokens',
          // 'linesOperations',
          // 'linkedEditing',
          // 'links',
          'multicursor', // 多行游标
          // 'parameterHints',
          // 'quickCommand',
          // 'quickHelp',
          // 'quickOutline',
          // 'referenceSearch',
          // 'rename',
          // 'smartSelect',
          // 'snippets',
          'suggest', // 自动补全
          // 'toggleHighContrast',
          // 'toggleTabFocusMode',
          // 'transpose',
          // 'unusualLineTerminators',
          // 'viewportSemanticTokens',
          // 'wordHighlighter',
          // 'wordOperations',
          // 'wordPartOperations'
        ],
      }));
  },
}

