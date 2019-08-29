import { EventEmitter } from 'events';
const eventEmitter = new EventEmitter();
class OpenExtension {
  static registerEventAll() {
    Object.keys(global.openExtension).forEach(extension =>
      Object.keys(global.openExtension[extension]).forEach(trigger =>
        eventEmitter.on(
          `${extension}_${trigger}`,
          global.openExtension[extension][trigger]
        )
      )
    );
  }
  static Runner(extensionPointID: string) {
    const id = extensionPointID.split('_');
    return global.openExtension[id[0]][id[1]]();
  }
}
export { eventEmitter, OpenExtension };
