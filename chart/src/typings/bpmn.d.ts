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

  interface BpmnOptions {
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
    propertiesPanel: any;
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
    /** https://github.com/bpmn-io/bpmn-js/blob/c3e0d6d16477bc2e9e37109a9ff1254b6695c7cc/lib/features/editor-actions/BpmnEditorActions.js#L42 */
    get(name: string, strict?: boolean): void;
    get(name: 'canvas', strict?: boolean): Canvas;
    get(name: 'selection', strict?: boolean): any;
    /** 空间工具 */
    get(name: 'spaceTool', strict?: boolean): any;
    /** 套索工具 */
    get(name: 'lassoTool', strict?: boolean): any;
    instantiate(type: any): void;
    invoke(fn: any, context: any, locals: any): void;
  }

  interface CanvasSize {
    height: number;
    width: number;
  }

  class EventBus {

  }

  /** 套索工具 */

  class Selection {

  }

  class Canvas {
    addConnection: (connection: any, parent: HTMLElement, parentIndex: number) => void;
    addMarker(element: HTMLElement, marker: any): void;
    addShape(shape: any, parent: HTMLElement, parentIndex: number): void;
    getAbsoluteBBox(element: Element): void;
    /** 获取容器 */
    getContainer(): Element;
    getDefaultLayer(): any;
    getGraphics(element: any, secondary: any): any;
    getLayer(name: string, index: number): any;
    /** 根节点 */
    getRootElement(): Element;
    /** 获取 canvas 大小 */
    getSize(): CanvasSize;
    hasMarker(element: Element, marker: any): boolean
    removeConnection(connection: any): any;
    removeMarker(element: any, marker: any): any;
    removeShape(shape: any): any;
    resized(): any;
    scroll(delta: any): any;
    scrollToElement(element: Element, padding: any): any;
    setRootElement(element: Element, override: any): any;
    toggleMarker(element: Element, marker: any): any;
    viewbox(box: any): any;
    /** fit-viewport */
    zoom(newScale: string, center: any): any;
    _addElement(type: string, element: Element, parent: Element, parentIndex: number): any;

  }

  class BaseViewer extends Injector {
    constructor(options: BpmnOptions);


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
    // https://github.com/bpmn-io/bpmn-io-callbacks-to-promises#saveXML-bpmn-js
    /** 返回: bpmnDiagramOrId */
    open(bpmnDiagram?: string): string;

    /** 保存为 svg */
    saveSVG(): { svg: string };
    /** 保存为 xml */
    saveXML(saveXMLOptions: SaveXMLOptions): Promise<SaveXMLResult>;

    /****************************/
    _emit(type: string, event: any): void;
    _init(container: any, moddle: any, options: BpmnOptions): void;
    _modules: any[];
  }

  export default class BpmnJS extends BaseViewer {
    constructor(options: BpmnOptions);
  }
}