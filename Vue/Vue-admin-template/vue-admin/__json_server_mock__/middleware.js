/* eslint-disable consistent-return */
/*
 * @Author: GZH
 * @Date: 2021-11-03 10:50:08
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-03 11:04:33
 * @FilePath: \vue-admin\__json_server_mock__\middleware.js
 * @Description:
 */
module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'jack' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    token: '123'
                }
            })
        }
        return res.status(400).json({
            message: '用户名或者密码错误'
        })
    }
    next()
}
