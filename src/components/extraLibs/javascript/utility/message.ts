declare class Message {
  /**
   * 订阅事件
   * @function
   * @public
   * @param {String} name 事件名称
   * @param {Function} fn 事件的响应函数
   * @example
   * // 引入模块
   * var utility = require('utility');
   * var ns = {
   *   __pageReady:function(){
   *       var appGrid = mapcontrol.get('appGrid');
   *       // 订阅刷新列表事件
   *       utility.messageOn('reloadData',function(e){
   *           appGrid.doQuery();
   *           appGrid.gotoRow(e.oid);
   *       });
   *   }
   * };
   * @see [更多使用场景请查阅使用示例]{@link http://mpdoc.mingyuanyun.com/#!md/modeling/工具类库/utility_message.md}
   */
  static messageOn (name:string, fn:Function):void
  /**
   * 取消订阅事件
   * @function
   * @public
   * @param {String} name 事件名称
   * @example
   * // 引入模块
   * var utility = require('utility');
   * // 取消订阅事件，再次触发事件将不再生效
   * utility.messageOff('reloadData');
   */
  static messageOff (name:string):void
  /**
   * 触发事件
   * @function
   * @public
   * @param {String} name 要触发的事件名称
   * @param {Object|String|Number|Array} data 触发需要传递的数据对象，可以为任意类型
   * @example
   * // 引入模块
   * var utility = require('utility');
   * // 保存方法
   * var saveFormData = function(){
   *   appForm.save();
   *   // 保存数据后，将当前表单的主键ID传递并触发父窗口订阅的刷新事件。
   *   utility.messageTrigger('reloadData',{oid:appForm.getKeyValue()});
   * }
   * @see [更多使用场景请查阅使用示例]{@link http://mpdoc.mingyuanyun.com/#!md/modeling/工具类库/utility_message.md}
   */
  static messageTrigger (name:string, data:Object|string|number):void
}
