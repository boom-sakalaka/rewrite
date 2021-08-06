/*
 * @Author: GZH
 * @Date: 2021-06-04 13:48:23
 * @LastEditors: GZH
 * @LastEditTime: 2021-08-06 09:44:34
 * @FilePath: \rewrite\index.ts
 * @Description:
 */
type stt<T> = T[];

const a: stt<Number> = [1, 3];

//使 T 的所有属性变为为可选的
type Partial<T> = { [P in keyof T]?: T[P] };

// 使类型 T 的所有属性变为必需的
type Required<T> = { [P in keyof T]-?: T[P] };

// 试类型T 的所有属性变为 只读
type Readonly<T> = { readonly [P in keyof T]: T[P] };

// 从类型 T 中挑出所有属性名出现在类型 K 中的属性
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 构造一个 key-value 类型，其 key 是类型 K， value 是类型 T
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

// 从类型 T 中剔除类型 U
type Exclude<T, U> = T extends U ? never : T;

// 从类型 T 中挑出类型 U
type Extract<T, U> = T extends U ? T : never;
