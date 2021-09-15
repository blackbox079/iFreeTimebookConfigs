module.exports = {
    types: [
        { value: 'feat', name: 'feat:     新增书源' },
        { value: 'update', name: 'update:     更新规则' },
        { value: 'del', name: 'del:     移除书源' },
        { value: 'name', name: 'name:     文件名更新' },
        { value: 'docs', name: 'docs:     文档更新' },
        { value: 'other', name: 'other:     其他变动' }
    ],

    // scopes: [
    //     { name: 'accounts' },
    //     { name: 'admin' },
    //     { name: 'exampleScope' },
    //     { name: 'changeMe' }
    // ],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',

    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
        type: '选择你要提交的类型：',
        scope: '\n选择变动范围(可选):',
        // used if allowCustomScopes is true
        customScope: '请说明变动范围：',
        subject: '请填写概括：\n',
        body: '添加一个更加详细的描述（可选）\n',
        breaking: '列举重大的变更 (可选):\n',
        footer: '列出本次关闭的ISSUES，例如：#31, #34:\n',
        confirmCommit: '确认提交？'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'update', 'del'],
    // skip any questions you want
    // skipQuestions: ['body'],

    // limit subject length
    subjectLimit: 100
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
};
