import request from '../utils/request.js'
import axios from 'axios'
/**
 *
 * @param {查询用户列表} params
 */
export function getAccountData(params) {
    return axios({
        url: '/system/user/login',
        method: 'post',
        params
    })
}