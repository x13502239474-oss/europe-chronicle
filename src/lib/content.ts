// 课程内容加载器：通过 Vite 的 import.meta.glob 一次性引入全部 Markdown 正文。
// 内容与界面完全分离——正文只存在于 content/ 目录的 .md 文件里。

// 以 eager 模式加载全部课程正文为原始字符串
const mdFiles = import.meta.glob('../content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

/**
 * 根据课程文件的相对路径获取 Markdown 正文。
 * @param file catalog 中声明的 file 字段，如 'part01/01-01.md'
 */
export function loadLessonContent(file: string): string {
  const key = `../content/${file}`;
  const raw = mdFiles[key];
  if (raw === undefined) {
    return `> 本节正文尚未编写。\n\n该课程的框架已就绪，正文内容将在后续阶段补齐。`;
  }
  return raw;
}

/** 判断某节课正文是否已编写 */
export function hasLessonContent(file: string): boolean {
  return mdFiles[`../content/${file}`] !== undefined;
}
