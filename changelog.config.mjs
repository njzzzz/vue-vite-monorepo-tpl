export default {
  // 解析提交信息
  parserOpts: {
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
  },
  // 生成变更日志的配置
  writerOpts: {
    // 过滤掉不需要的提交类型
    transform: (commit) => {
      // changelog 忽略特定类型的提交
      const ignoreTypes = ['chore', 'docs']
      if (ignoreTypes.includes(commit.type)) {
        return
      }

      //   // 将提交中的issue信息处理
      //   if (commit.scope === '*') {
      //     commit.scope = ''
      //   }

      //   if (typeof commit.hash === 'string') {
      //     commit.shortHash = commit.hash.substring(0, 7)
      //   }

      //   if (typeof commit.subject === 'string') {
      //     // 匹配issue引用
      //     commit.subject = commit.subject.replace(/#(\d+)/g, (_, issue) => {
      //       issues.push(issue)
      //       return `[#${issue}](${context.host}/${context.owner}/${context.repository}/issues/${issue})`
      //     })
      //   }

      return commit
    },
  },
}
