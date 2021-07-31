/*
 * @Author: GZH
 * @Date: 2021-07-31 09:45:53
 * @LastEditors: GZH
 * @LastEditTime: 2021-07-31 10:06:09
 * @FilePath: \rewrite\MiddleWare\axios.js
 * @Description: https://juejin.cn/post/6844904039608500237
 * 模拟实现 axios 的拦截器
 */

const axios = config => {
  if (config.error) {
    return Promise.reject({
      error: 'error in axios',
    });
  } else {
    return Promise.resolve({
      ...config,
      result: config.result,
    });
  }
};

// 先构造一个对象，存放拦截器
axios.interceptors = {
  request: [],
  Response: [],
};

// 注册请求拦截器
axios.useRequestInterceptor = (resolved, rejected) => {
  axios.interceptors.request.push({ resolved, rejected });
};

// 注册响应拦截器
axios.useResponseInterceptor = (resolved, rejected) => {
  axios.interceptors.response.push({ resolved, rejected });
};

// 运行拦截器
axios.run = config => {
  const chain = [
    {
      resolved: axios,
      rejected: undefined,
    },
  ];

  // 把请求拦截器 往数组头部推
  axios.interceptors.request.forEach(interceptor => {
    chain.unshift(interceptor);
  });

  // 把响应拦截器 往数组尾部推
  axios.interceptors.response.forEach(interceptor => {
    chain.push(interceptor);
  });

  // 把config 也包装成一个promise
  let promise = Promise.resolved(config);

  while (chain.length) {
    const { resolved, rejected } = chain.shift();
    promise = promise.then(resolved, rejected);
  }

  // 最后暴露给用户的就是响应拦截器处理过后的promise
  return promise;
};
