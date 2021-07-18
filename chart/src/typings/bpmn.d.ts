/** 默认配置 */
/**
 * width: 100%;
 * height: 100%;
 * position: 'relative'
 */

declare module 'bpmn-js' {
  /** 键盘事件 */
  /**
   * (CTRL|CMD) + Z: undo 撤销
   * CTRL + Y | CMD + SHIFT + Z: redo
   * CTRL/CMD + C: copy
   * CTRL/CMD + V: paste
   * CTRL/CMD + +: stepZoom 放大
   * CTRL + - : stepZoom 缩小
   * CTRL + 0: zoom 重置
   * DEL: removeSelection 删除节点
   */
  type KeyboardEvents = 'undo'
    | 'redo'
    | 'copy'
    | 'paste'
    | 'stepZoom'
    | 'zoom'
    | 'removeSelection';

  /**
   * BpmnKeyboardBindings
   * CTRL + A: selectElements 全选
   * CTRL + F: find search labels 搜索
   */
  type BpmnKeyboardEvents = 'selectElements' | 'find';

  /**
   * importXML加载后触发
   * 1. 加载 xml并开始读取 模型
   * 2. 模型已读取
   */
  type LifeCycleEvents = 'import.parse.start' | 'import.parse.complete' | 'import.render.start' | 'import.render.complete' | 'import.done';

  /** saveXML 生命周期: | 生成 | 结束 */
  type SaveXMLLifeCycle = 'start' | 'serialized' | 'done';

  /** saveSvg 生命周期  */
  type SaveSvgLifeCycle = 'start' | 'done';




  interface Options {
    /** 高度 */
    height?: number;
    /** 宽度 */
    width?: number;
    /** 渲染视图容器选择器, 默认: body */
    container: string | HTMLElement;
    /** 使用默认模块 */
    additionalModules?: any[];
    /** 自定义模块, 覆盖原有模块 */
    modules?: any[];
  }

  interface SaveXMLOptions {
    // export options
    /** 默认: false */
    format?: boolean;
    /** 默认: true */
    preamble?: boolean;
  }

  /** 返回结果 */
  type SaveXMLResult = string;
  /** save svg */
  type SaveSVGResult = string;

  class Injector {
    constructor();

    createChild(modules: any[]): void;
    get(): void;
    instantiate(type: any): void;
    invoke(fn: any, context: any, locals: any): void;
  }

  class BaseViewer {
    constructor(options: Options);

    get(name: string, strict?: boolean): void;
    get(name: 'canvas', strict?: boolean): void;
    /** 添加到指定父元素内 */
    attachTo(parentNode: Element): void;
    /** 清除 */
    clear(): void;

    /** 销毁: 基于 diagram-js */
    destroy(): void;

    detach(): void;

    /** 加载 xml 文件 */
    importXML(xml: any, bpmnDiagram?: any): void;

    /** 获取所有模块 */
    getModules(): void;


    importDefinitions(): void;
    getDefinitions(): void;

    /*** 事件处理 */
    /** 解除事件绑定 */
    off(event: string, callback: () => void): void;

    /** 事件绑定 */
    on(event: string, callback: () => void): void;

    /** 返回: bpmnDiagramOrId */
    open(bpmnDiagram?: string): string;

    /** 保存为 svg */
    saveSVG(): { svg: string };
    /** 保存为 xml */
    saveXML(saveXMLOptions: SaveXMLOptions): Promise<SaveXMLResult>;

    /****************************/
    _emit(type: string, event: any): void;
    _init(container: any, moddle: any, options: Options): void;
    _modules: any[];
  }

  export default class BpmnJS extends BaseViewer {
    constructor(options: Options);
  }
}