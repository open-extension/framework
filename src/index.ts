export default (openExtensionID: any, method: string) =>
  global.openExtension[openExtensionID][method];
