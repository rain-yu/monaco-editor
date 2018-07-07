declare class Utility {
  /**
   * 判断对象是否为null或者undefined
   * @private
   * @param  {undefined|null}  input 需要判断的对象
   * @return {Boolean}
   */
  static isNullOrUndefined (input:undefined|null):boolean
  /**
   * 判断是否为jQuery对象
   * @private
   * @param  {jQuery} obj 需要判断的对象
   * @return {Boolean}
   */
  static isJquery (obj:object):boolean
  /**
   * 判断是否为空的字符串
   * @private
   * @param  {String}  input 需要判断的字符串
   * @return {Boolean}
   */
  static isEmptyString (input:string):boolean
  /**
   * 判断是否为guid
   * @param  {GUID}  str 需要判断的对象
   * @return {Boolean}
   */
  static isGuid (str:string):boolean
  /**
   * 解析Json
   * @private
   * @param  {String} data json文本
   * @return {Object}      json对象
   */
  static parseJSON (data:string):object
  /**
   * 扩展(继承)类,复制超类的成员并与extension合并
   * @private
   * @static
   * @param  {Object} subClass   子类
   * @param  {Object} superClass 超类
   * @return {Object}            合并后的对象
   */
  static extend (subClass:object, superClass:object):object
  /**
   * 解析布尔值
   * @param {Object} value
   * @returns {Boolean}
   */
  static parseBoolean (value:any):boolean
  /**
   * Ajax请求
   * @param  {Object} options 选项
   * @return {jqXHR}
   */
  static ajax (options:object):object
  /**
   * 创建Url
   * @param  {String} sUrl        url字符串
   * @param  {Object} oParameters 附加参数
   * @return {String}             附件参数后的url字符串
   */
  static buildUrl (sUrl:string, oParameters:object):string
  /**
   * 深拷贝对象
   * @static
   * @param  {Object} input  对象
   * @summary 请注意，如果拷贝的对象中有undefined的值，将会被剔除掉
   * @return {Object} 深拷贝对象
   */
  static clone (input:object):object
  /**
   * 将日期转化成字符串
   * @param  {Date}   value  需要转换的日期对象
   * @param  {String} format 格式,例如:"yyyy-MM-dd hh:mm:ss"
   * @return {String}        转换后的字符串
   */
  static formatDate (value:Date|string, format:string)
  /**
   * 格式化数字
   * @param {Number} val    要格式化的数字
   * @param {String} format 格式字符串,`#,###.000`:保留三位小数,`#,###`:没有小位数
   * @return {String}       转换后的字符串
   */
  static formatNumber (val:string, format:string):string
  /**
   * 获取所有url参数
   * @param {String} url 要解析的url地址，不指定默认为当前页面的url
   * @return {Object} 获取的参数对象
   * @example
   * //eg: http://www.xxx.com/index?key1=value1&key2=value2
   * var params = utility.getUrlParams();
   * var value1 = params['key1'];
   * var value2 = params['key2'];
   * var value2 = params['key2'];
   */
  static getUrlParams (url: string):object
  /**
   * 转换JSON对象
   * @param  {String} data json字符串
   * @return {Object}      json对象
   */
  static parseJSON (data:string):object
}
