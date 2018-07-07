declare class AppFormAjaxHandler {
  /**
   * 克隆表单控件
   *
   * @param id 克隆表单的唯一标识
   * @param metadataId 表单元数据ID
   * @param mode 表单编辑模式 1：新增，2：编辑，3：查看
   * @param pageId 页面ID
   * @returns 返回表单HTML片段
   */
  static Clone(id:string, metadataId:string, mode:number, pageId:string):string
}
