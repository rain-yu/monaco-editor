declare class dialog {
  /**
     * 弹出窗口
     * @public
     * @param {DialogOptions} options 弹出层属性参数
     * @example
     * dialog.open({
     *     url: "/std/0000210202/3911cea6-2ae1-45b7-95f7-e49f0b137430.aspx?mode=2",
     *     title: "这是一个弹出层实例",
     *     height: 200,
     *     width: 800,
     *     buttons: [
     *         {
     *             name: 'change',
     *             primary: true,
     *             text: '确认',
     *             callback: function (e) {}
     *         },
     *         {
     *             text: '取消',
     *             name: 'cancel',
     *         }
     *     ]
     * });
     * @return {Common.OpenWin} 返回窗口对象
     */
    static open (options:object) : object
    /**
     * 打开确认窗口
     * @public
     * @param {String} message 确认窗口主要信息
     * @param {String} content 可选参数，确认窗口补充信息
     * @param {Function} callback 可选参数，回调函数，在用户对确认框做出选择操作后执行
     * @example
     */
    static confirm (message: string, content: string, callback: Function): void
}
