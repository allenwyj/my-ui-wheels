// let .svg contains an default export (its content)
declare module '*.svg' {
    const content: any;
    export default content;
}