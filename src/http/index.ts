import { ValueType } from '@/types/common/index';
import ConfigService from './config'

type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

function requestType<T>(
	type: Method,
	url: string,
	resolve: (val: T) => void,
	reject: (val: any) => void,
	params?: Record<string, ValueType | Array<ValueType>>,
	header?: Record<string, ValueType>
) {
	uni.request({
		url: ConfigService.baseURL + url, 
		method: type,
		data: (params || {}),
		header: {
			...ConfigService.header,
			...(header || {})
		},
		success: function (res: any) {
			// @ts-ignore
			resolve(res.data)
		},
		fail: function (res) {
			reject(res)
		}
	});
}

const Http = {
	get<T, R = T>(url: string, params?: Record<string, ValueType | Array<ValueType>>, header?: Record<string, ValueType>) {
		return new Promise<R>((resolve, reject) => {
			requestType('GET', url, resolve, reject, params, header)
		})
	},
	post<T, R = T>(url: string, params?: Record<string, ValueType | Array<ValueType>>, header?: Record<string, ValueType>) {
		return new Promise<R>((resolve, reject) => {
			requestType('POST', url, resolve, reject, params, header)
		})
	},
	delete<T, R = T>(url: string, params?: Record<string, ValueType | Array<ValueType>>, header?: Record<string, ValueType>) {
		return new Promise<R>((resolve, reject) => {
			requestType('DELETE', url, resolve, reject, params, header)
		})
	},

	put<T, R = T>(url: string, params?: Record<string, ValueType | Array<ValueType>>, header?: Record<string, ValueType>) {
		return new Promise<R>((resolve, reject) => {
			requestType('PUT', url, resolve, reject, params, header)
		})
	},
}

export default Http
