//Выводит union тип всех значений T.
export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;