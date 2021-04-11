import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export default function initEditor(props: any, container: any) {
  const editor: any = monaco.editor.create(container.value as HTMLElement, {
    value: props.code,
    language: props.language,
    theme: props.theme,
    tabSize: props.tabSize,
    fontSize: props.fontSize,
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    automaticLayout: true,
    glyphMargin: true, // 字形边缘
    showUnused: true,
    showFoldingControls: 'always',
    formatOnPaste: true,
    formatOnType: true,
    folding: true,
  });

  // 获取编辑器输入后的代码内容
  editor.onDidChangeModelContent(() => {
    const newCode = editor.getValue();
    console.log(newCode);
    // Code改变
    props.onCodeChanged(newCode);
  });

  // 自动触发一下格式化代码
  setTimeout(() => {
    editor.getAction('editor.action.formatDocument').run();
  }, 100);

  // 挂在window上便于调试用
  window.monacoEditor = editor;

  return editor;
}
