declare module NodeJS {
    interface Global {
        document?: any;
        navigator?: any;
        window?: any;
    }
}