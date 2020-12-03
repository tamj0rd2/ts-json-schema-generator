interface MyInterface {
    id: string
    aFunction(): string
    person: {
        name: string
        doSomething(): string
    }
}

export type DtoOfMyInterface = Dto<MyInterface>

export const dto: DtoOfMyInterface = {
    id: 'abcd-123',
    person: {
        name: 'some name'
    }
}

type Func = (...args: any[]) => any
type ExcludeBadness<T> = Omit<T, {[ K in keyof T ]: T[K] extends Func ? K : never}[keyof T]>

type Dto<T> = T extends Record<string, any> ? {[ K in keyof ExcludeBadness<T>]: Dto<T[K]>} : T
